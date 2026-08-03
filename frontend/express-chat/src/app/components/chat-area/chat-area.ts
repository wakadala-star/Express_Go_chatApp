import { Component, inject } from '@angular/core';
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
  messageText = '';

  toggleProfile(): void {
    this.chatService.toggleProfile();
  }

  goBack(): void {
    this.chatService.showConversationsOnMobile();
  }
}
