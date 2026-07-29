# Express Go Chat App

A modern real-time chat application built with Angular and designed for future integration with an Express/Go backend.

**Live Demo:** [https://wakadala-star.github.io/Express_Go_chatApp/](https://wakadala-star.github.io/Express_Go_chatApp/)

---

## About

Express Go Chat App is a full-stack chat platform currently in active development. The frontend is built with Angular 22, featuring a clean, responsive UI with a WhatsApp/Telegram-inspired design. The backend will be powered by **Express.js** and **Go** for high-performance real-time messaging.

---

## Current Features

### Frontend (Implemented)

- **Sidebar Navigation** -- Collapsible sidebar with icon-only and expanded modes
- **Conversations List** -- Scrollable list of chat conversations with avatars, last message preview, timestamps, and unread badges
- **Chat Area** -- Real-time-style message display with sent/received message bubbles, timestamps, and a message input bar
- **Profile Panel** -- Contact detail panel with avatar, role, phone, email, location, and member info
- **Custom Icon System** -- 27 hand-crafted SVG icons (no external icon library)
- **Responsive Design** -- Adapts to desktop, tablet, and mobile viewports
- **Mock Data** -- 12 pre-built contacts and conversations for demo purposes

---

## Planned Features

### Backend (In Progress)

| Feature | Tech Stack | Status |
|---|---|---|
| REST API | Express.js | Planned |
| Real-time messaging | WebSockets (Socket.io) | Planned |
| High-perf services | Go (Golang) | Planned |
| User authentication | JWT + bcrypt | Planned |
| Database | PostgreSQL / MongoDB | Planned |
| File sharing & uploads | Multer + S3 | Planned |

### Frontend (Upcoming)

- [ ] User registration and login
- [ ] Real-time message sending and receiving
- [ ] Message search and filtering
- [ ] Read receipts and online status
- [ ] Typing indicators
- [ ] Push notifications
- [ ] Group chat support
- [ ] Voice and video calling
- [ ] File and image sharing
- [ ] Dark mode

---

## Tech Stack

### Frontend

- **Angular 22** -- Standalone component architecture
- **TypeScript 6** -- Strict typing throughout
- **SCSS** -- Modular styling with CSS variables
- **Angular CDK & Material** -- UI utilities (available)

### Backend (Planned)

- **Express.js** -- REST API and WebSocket server
- **Go** -- High-performance microservices
- **PostgreSQL** -- Persistent data storage
- **Socket.io** -- Real-time bidirectional communication

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v22+
- npm v11+

### Installation

```bash
# Clone the repository
git clone https://github.com/wakadala-star/Express_Go_chatApp.git
cd Express_Go_chatApp

# Install frontend dependencies
cd frontend/express-chat
npm install

# Start development server
npm start
```

The app will be available at `http://localhost:4200`.

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

---

## Project Structure

```
Express_Go_chatApp/
├── frontend/
│   └── express-chat/
│       └── src/
│           └── app/
│               ├── components/
│               │   ├── sidebar/           # Left navigation rail
│               │   ├── conversations-list/ # Chat list panel
│               │   ├── chat-area/         # Main message view
│               │   ├── profile-panel/     # Contact details
│               │   └── icons/             # Custom SVG icons
│               ├── models/
│               │   └── chat.ts            # TypeScript interfaces
│               ├── services/
│               │   └── chat.ts            # Data service (mock)
│               ├── app.ts                 # Root component
│               ├── app.html
│               └── app.scss
├── .github/
│   └── workflows/
│       └── deploy.yml                     # CI/CD pipeline
└── README.md
```

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Built by [Wakadala Mark](https://github.com/wakadala-star)**
