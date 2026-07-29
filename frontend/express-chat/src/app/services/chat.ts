import { Injectable, signal, computed } from '@angular/core';
import { Contact, Conversation, Message } from '../models/chat';

@Injectable({ providedIn: 'root' })
export class ChatService {
  private contacts: Contact[] = [
    {
      id: 1,
      name: 'Alfonso George',
      role: 'Project Manager',
      avatar: 'https://i.pravatar.cc/150?img=11',
      phone: '+001 433 2344',
      email: 'alfonsogeorge@gmail.com',
      location: 'Sydney, Australia',
      memberSince: 'Dec 5, 2020',
      website: 'alfonsogeorge.com',
    },
    {
      id: 2,
      name: 'Dwaldo Leoni',
      role: 'Designer',
      avatar: 'https://i.pravatar.cc/150?img=3',
      phone: '+001 555 1234',
      email: 'dwaldo.leoni@email.com',
      location: 'New York, USA',
      memberSince: 'Mar 12, 2021',
      website: 'dwaldo.design',
    },
    {
      id: 3,
      name: 'Duice George',
      role: 'Developer',
      avatar: 'https://i.pravatar.cc/150?img=5',
      phone: '+001 666 5678',
      email: 'duice.george@email.com',
      location: 'London, UK',
      memberSince: 'Jul 8, 2020',
      website: 'duice.dev',
    },
    {
      id: 4,
      name: 'Carter Vossoro',
      role: 'Marketing',
      avatar: 'https://i.pravatar.cc/150?img=8',
      phone: '+001 777 9012',
      email: 'carter.vossoro@email.com',
      location: 'Toronto, Canada',
      memberSince: 'Sep 1, 2022',
      website: 'cartermarketing.com',
    },
    {
      id: 5,
      name: 'Alvisa Santi',
      role: 'UX Researcher',
      avatar: 'https://i.pravatar.cc/150?img=9',
      phone: '+001 888 3456',
      email: 'alvisa.santi@email.com',
      location: 'Berlin, Germany',
      memberSince: 'Jan 20, 2021',
      website: 'alvisaUX.com',
    },
    {
      id: 6,
      name: 'Emmao Kalegaard',
      role: 'Data Analyst',
      avatar: 'https://i.pravatar.cc/150?img=16',
      phone: '+001 999 7890',
      email: 'emmao.k@email.com',
      location: 'Stockholm, Sweden',
      memberSince: 'Nov 5, 2020',
      website: 'emmaodata.com',
    },
    {
      id: 7,
      name: 'Carter Coose',
      role: 'DevOps Engineer',
      avatar: 'https://i.pravatar.cc/150?img=12',
      phone: '+001 222 4567',
      email: 'carter.coose@email.com',
      location: 'San Francisco, USA',
      memberSince: 'Feb 14, 2021',
      website: 'carterops.com',
    },
    {
      id: 8,
      name: 'Miroo Soft',
      role: 'Backend Developer',
      avatar: 'https://i.pravatar.cc/150?img=20',
      phone: '+001 333 8901',
      email: 'miroo.soft@email.com',
      location: 'Tokyo, Japan',
      memberSince: 'Aug 30, 2022',
      website: 'miroosoft.dev',
    },
    {
      id: 9,
      name: 'Asanoo Gouse',
      role: 'Frontend Developer',
      avatar: 'https://i.pravatar.cc/150?img=14',
      phone: '+001 444 2345',
      email: 'asanoo.g@email.com',
      location: 'Mumbai, India',
      memberSince: 'Jun 15, 2021',
      website: 'asanoo.dev',
    },
    {
      id: 10,
      name: 'Martin Escobar',
      role: 'QA Engineer',
      avatar: 'https://i.pravatar.cc/150?img=15',
      phone: '+001 111 6789',
      email: 'martin.escobar@email.com',
      location: 'Madrid, Spain',
      memberSince: 'Oct 22, 2020',
      website: 'martinqa.com',
    },
    {
      id: 11,
      name: 'Remedios Underwood',
      role: 'Scrum Master',
      avatar: 'https://i.pravatar.cc/150?img=23',
      phone: '+001 555 0123',
      email: 'remedios.u@email.com',
      location: 'Paris, France',
      memberSince: 'Apr 3, 2021',
      website: 'remediosagile.com',
    },
    {
      id: 12,
      name: 'Cash',
      role: 'Tech Lead',
      avatar: 'https://i.pravatar.cc/150?img=33',
      phone: '+001 666 4567',
      email: 'cash.tech@email.com',
      location: 'Singapore',
      memberSince: 'May 18, 2020',
      website: 'cashleads.tech',
    },
  ];

  private conversations: Conversation[] = [
    {
      id: 1,
      contact: this.contacts[0],
      lastMessage: 'Got it! Thanks for letting me know. I\'ll review the design...',
      lastMessageTime: '2:05 PM',
      unreadCount: 0,
      messages: [
        { id: 1, senderId: 1, text: 'Hey there!', time: '10:02 AM', isRead: true },
        { id: 2, senderId: 0, text: 'Hey, good morning! How are things going?', time: '10:05 AM', isRead: true },
        { id: 3, senderId: 1, text: 'Not all the details... but I\'ll give it another pass and let you know!', time: '2:03 PM', isRead: true },
        { id: 4, senderId: 0, text: 'Sure, take your time. Also, let\'s schedule a quick call later to discuss the timeline.', time: '2:04 PM', isRead: true },
        { id: 5, senderId: 1, text: 'Got it! Thanks for letting me know. I\'ll review the design docs again and prepare some questions.', time: '2:05 PM', isRead: true },
      ],
    },
    {
      id: 2,
      contact: this.contacts[1],
      lastMessage: 'The latest design files have been uploaded to the shared folder.',
      lastMessageTime: '1:30 PM',
      unreadCount: 2,
      messages: [
        { id: 1, senderId: 2, text: 'I wanted to discuss the UI design progress. Have you had a chance to look at the mockups?', time: '12:00 PM', isRead: false },
        { id: 2, senderId: 0, text: 'Yes, I have. Overall they look quite good. But I think we should simplify the navigation menu for better user experience.', time: '12:15 PM', isRead: false },
        { id: 3, senderId: 2, text: 'The latest design files have been uploaded to the shared folder.', time: '1:30 PM', isRead: false },
      ],
    },
    {
      id: 3,
      contact: this.contacts[2],
      lastMessage: 'I\'ll check with the team and get back to you.',
      lastMessageTime: '12:45 PM',
      unreadCount: 0,
      messages: [
        { id: 1, senderId: 3, text: 'The latest design files have been uploaded to the shared folder.', time: '12:45 PM', isRead: true },
      ],
    },
    {
      id: 4,
      contact: this.contacts[3],
      lastMessage: 'You got it. I\'ll reach out to them right away!',
      lastMessageTime: '11:20 AM',
      unreadCount: 1,
      messages: [
        { id: 1, senderId: 4, text: 'You got it. I\'ll reach out to them right away!', time: '11:20 AM', isRead: false },
      ],
    },
    {
      id: 5,
      contact: this.contacts[4],
      lastMessage: 'I finished the user research report.',
      lastMessageTime: '10:00 AM',
      unreadCount: 0,
      messages: [
        { id: 1, senderId: 5, text: 'I finished the user research report.', time: '10:00 AM', isRead: true },
      ],
    },
    {
      id: 6,
      contact: this.contacts[5],
      lastMessage: 'The analytics dashboard is ready for review.',
      lastMessageTime: 'Yesterday',
      unreadCount: 0,
      messages: [
        { id: 1, senderId: 6, text: 'The analytics dashboard is ready for review.', time: 'Yesterday', isRead: true },
      ],
    },
    {
      id: 7,
      contact: this.contacts[6],
      lastMessage: 'That\'s a good idea. Let me look into it...',
      lastMessageTime: 'Yesterday',
      unreadCount: 0,
      messages: [
        { id: 1, senderId: 7, text: 'That\'s a good idea. Let me look into it...', time: 'Yesterday', isRead: true },
      ],
    },
    {
      id: 8,
      contact: this.contacts[7],
      lastMessage: 'Absolutely! I just spoke with him.',
      lastMessageTime: 'Yesterday',
      unreadCount: 0,
      messages: [
        { id: 1, senderId: 8, text: 'Absolutely! I just spoke with him.', time: 'Yesterday', isRead: true },
      ],
    },
    {
      id: 9,
      contact: this.contacts[8],
      lastMessage: 'Thanks for the update!',
      lastMessageTime: '2 days ago',
      unreadCount: 0,
      messages: [
        { id: 1, senderId: 9, text: 'Thanks for the update!', time: '2 days ago', isRead: true },
      ],
    },
    {
      id: 10,
      contact: this.contacts[9],
      lastMessage: 'I\'ll run the tests and share the results.',
      lastMessageTime: '3 days ago',
      unreadCount: 0,
      messages: [
        { id: 1, senderId: 10, text: 'I\'ll run the tests and share the results.', time: '3 days ago', isRead: true },
      ],
    },
    {
      id: 11,
      contact: this.contacts[10],
      lastMessage: 'Sprint planning meeting at 3 PM tomorrow.',
      lastMessageTime: '3 days ago',
      unreadCount: 0,
      messages: [
        { id: 1, senderId: 11, text: 'Sprint planning meeting at 3 PM tomorrow.', time: '3 days ago', isRead: true },
      ],
    },
    {
      id: 12,
      contact: this.contacts[11],
      lastMessage: 'The deployment pipeline is set up.',
      lastMessageTime: '4 days ago',
      unreadCount: 0,
      messages: [
        { id: 1, senderId: 12, text: 'The deployment pipeline is set up.', time: '4 days ago', isRead: true },
      ],
    },
  ];

  readonly activeConversation = signal<Conversation | null>(this.conversations[1]);
  readonly showProfile = signal<boolean>(true);
  readonly conversationsList = signal<Conversation[]>(this.conversations);

  readonly activeContact = computed(() => this.activeConversation()?.contact ?? null);

  selectConversation(conversation: Conversation): void {
    this.activeConversation.set(conversation);
  }

  toggleProfile(): void {
    this.showProfile.update((v) => !v);
  }

  closeProfile(): void {
    this.showProfile.set(false);
  }

  openProfile(): void {
    this.showProfile.set(true);
  }
}
