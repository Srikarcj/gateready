# GATE Ready with AI

A comprehensive GATE (Graduate Aptitude Test in Engineering) preparation platform with AI-powered features to help students excel in their GATE examination.

🔗 **Live Demo:** [https://gatereadywithai.netlify.app/](https://gatereadywithai.netlify.app/)


## 🚀 Features

- **AI-Powered Practice**: Practice with smart question banks and get instant feedback
- **Performance Analytics**: Track your progress with detailed analytics and insights
- **College Explorer**: Explore IITs, NITs, and other top engineering colleges in India
- **Transport Calculator**: Plan your journey to various engineering colleges with transport details
- **Personalized Study Plans**: Get customized study plans based on your strengths and weaknesses
- **Mock Tests**: Take full-length mock tests with real exam patterns

## 🛠️ Technologies Used

- **Frontend**: 
  - React 18 with TypeScript
  - Vite
  - shadcn/ui
  - Tailwind CSS
  - React Router
  - React Query
  - React Hook Form
  - Zod for validation

- **Authentication**:
  - Clerk Authentication

- **Maps & Visualization**:
  - Leaflet
  - React Leaflet
  - Google Maps API

- **State Management**:
  - React Context API
  - Zustand

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm (v9 or later) or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/gate-ready-with-ai.git
   cd gate-ready-with-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add the following:
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in browser**
   The application will be available at `http://localhost:5173`

## 📂 Project Structure

```
src/
├── components/       # Reusable UI components
├── features/         # Feature-based modules
│   ├── auth/        # Authentication related components
│   ├── dashboard/   # User dashboard
│   ├── practice/    # Practice questions and tests
│   ├── college-map/ # College explorer and transport calculator
│   └── ...
├── lib/             # Utility functions and configurations
├── pages/           # Page components
├── App.tsx          # Main application component
└── main.tsx         # Application entry point
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [GATE Official Website](https://gate.iitk.ac.in/)
- [shadcn/ui](https://ui.shadcn.com/)
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)

