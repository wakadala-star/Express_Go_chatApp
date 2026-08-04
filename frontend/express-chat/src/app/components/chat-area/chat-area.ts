import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../icons/icons';
import { ChatService } from '../../services/chat';

@Component({
  selector: 'app-chat-area',
  standalone: true,
  imports: [IconComponent, FormsModule],
  templateUrl: './chat-area.html',
  styleUrl: './chat-area.scss',
})
export class ChatArea {
  private chatService = inject(ChatService);

  activeConversation = this.chatService.activeConversation;
  activeContact = this.chatService.activeContact;
  showProfile = this.chatService.showProfile;
  messageText = '';
  showMoreDropdown = signal(false);

  toggleProfile(): void {
    this.chatService.toggleProfile();
    this.showMoreDropdown.set(false);
  }

  goBack(): void {
    this.chatService.showConversationsOnMobile();
  }

  toggleMoreDropdown(): void {
    this.showMoreDropdown.update(v => !v);
  }

  closeDropdown(): void {
    this.showMoreDropdown.set(false);
  }
}
