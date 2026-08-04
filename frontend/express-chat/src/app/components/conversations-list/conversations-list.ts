import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../icons/icons';
import { ChatService } from '../../services/chat';
import { Conversation } from '../../models/chat';

@Component({
  selector: 'app-conversations-list',
  standalone: true,
  imports: [IconComponent, FormsModule],
  templateUrl: './conversations-list.html',
  styleUrl: './conversations-list.scss',
})
export class ConversationsList {
  private chatService = inject(ChatService);

  conversations = this.chatService.conversationsList;
  activeConversation = this.chatService.activeConversation;
  searchQuery = '';

  categories = [
    { label: 'Chats', icon: 'chat', active: true },
    { label: 'Groups', icon: 'people' },
    { label: 'Unread', icon: 'email' },
    { label: 'Completed', icon: 'check' },
  ];

  selectConversation(conversation: Conversation): void {
    this.chatService.showChatOnMobile(conversation);
  }
}
