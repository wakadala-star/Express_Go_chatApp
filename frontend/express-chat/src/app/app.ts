import { Component, signal, inject, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Subject, takeUntil } from 'rxjs';
import { Sidebar } from './components/sidebar/sidebar';
import { ConversationsList } from './components/conversations-list/conversations-list';
import { ChatArea } from './components/chat-area/chat-area';
import { ProfilePanel } from './components/profile-panel/profile-panel';
import { IconComponent } from './components/icons/icons';
import { ChatService } from './services/chat';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Sidebar, ConversationsList, ChatArea, ProfilePanel, IconComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit, OnDestroy {
  private breakpointObserver = inject(BreakpointObserver);
  private chatService = inject(ChatService);
  private destroy$ = new Subject<void>();

  sidebarCollapsed = signal(true);
  isTablet = signal(false);
  isMobile = signal(false);
  mobileView = this.chatService.mobileView;

  ngOnInit(): void {
    this.breakpointObserver
      .observe([
        '(max-width: 1024px)',
        '(max-width: 768px)',
      ])
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        const isMobile = result.breakpoints['(max-width: 768px)'];
        const isTablet = result.breakpoints['(max-width: 1024px)'] && !isMobile;

        this.isMobile.set(isMobile);
        this.isTablet.set(isTablet);

        if (isTablet) {
          this.sidebarCollapsed.set(true);
          this.chatService.closeProfile();
        }

        if (isMobile) {
          this.sidebarCollapsed.set(true);
          this.chatService.closeProfile();
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleSidebar(): void {
    if (this.isTablet()) {
      this.sidebarCollapsed.set(true);
      return;
    }
    this.sidebarCollapsed.update(v => !v);
  }

  onMobileBack(): void {
    this.chatService.showConversationsOnMobile();
  }
}
