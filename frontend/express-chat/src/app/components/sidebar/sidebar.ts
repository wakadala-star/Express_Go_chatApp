import { Component, output, input } from '@angular/core';
import { IconComponent } from '../icons/icons';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  collapsed = input<boolean>(true);
  toggleSidebar = output<void>();

  navItems = [
    { icon: 'search', label: 'Search' },
    { icon: 'chat', label: 'Chats', active: true },
    { icon: 'people', label: 'Contacts' },
    { icon: 'calendar', label: 'Calendar' },
    { icon: 'folder', label: 'Files' },
  ];

  bottomItems = [
    { icon: 'settings', label: 'Settings' },
  ];

  onToggle(): void {
    this.toggleSidebar.emit();
  }
}
