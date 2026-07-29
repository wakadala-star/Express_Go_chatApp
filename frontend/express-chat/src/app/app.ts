import { Component, signal } from '@angular/core';
import { Sidebar } from './components/sidebar/sidebar';
import { ConversationsList } from './components/conversations-list/conversations-list';
import { ChatArea } from './components/chat-area/chat-area';
import { ProfilePanel } from './components/profile-panel/profile-panel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Sidebar, ConversationsList, ChatArea, ProfilePanel],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  sidebarCollapsed = signal(true);

  toggleSidebar(): void {
    this.sidebarCollapsed.update(v => !v);
  }
}
