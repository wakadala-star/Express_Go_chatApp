import { Component, inject, HostBinding } from '@angular/core';
import { IconComponent } from '../icons/icons';
import { ChatService } from '../../services/chat';

@Component({
  selector: 'app-profile-panel',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './profile-panel.html',
  styleUrl: './profile-panel.scss',
})
export class ProfilePanel {
  private chatService = inject(ChatService);

  activeContact = this.chatService.activeContact;
  showProfile = this.chatService.showProfile;

  @HostBinding('class.hidden')
  get isHidden(): boolean {
    return !this.showProfile();
  }

  closeProfile(): void {
    this.chatService.closeProfile();
  }
}
