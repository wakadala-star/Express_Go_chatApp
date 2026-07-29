export interface Contact {
  id: number;
  name: string;
  role: string;
  avatar: string;
  phone: string;
  email: string;
  location: string;
  memberSince: string;
  website: string;
}

export interface Message {
  id: number;
  senderId: number;
  text: string;
  time: string;
  isRead: boolean;
}

export interface Conversation {
  id: number;
  contact: Contact;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  messages: Message[];
}
