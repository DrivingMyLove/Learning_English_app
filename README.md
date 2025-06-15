# 🧠 SpeakEasy - English Learning Assistant

An interactive English learning application that combines AI chatbot functionality with vocabulary management and speech recognition features.

## ✨ Features

### 🤖 AI-Powered Chat
- Real-time conversation with AI assistant
- Text-to-speech for pronunciation practice
- Support for both text input and voice recognition
- Conversation history tracking

### 📚 Vocabulary Management
- Click-to-translate any word in chat responses
- Automatic dictionary lookup with pronunciation
- Personal vocabulary list with search functionality
- Audio pronunciation for saved words
- Vietnamese translation support

### 🎙️ Speech Recognition
- Voice-to-text input using Web Speech API
- English speech recognition
- Recording status indicator

### 📜 Chat History
- Save and review past conversations
- Detailed conversation playback
- Audio replay for historical messages

## 🏗️ Project Structure

```
C:.
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
└── frontend/
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── vite.config.js
    ├── public/
    │   └── favicon.png
    └── src/
        ├── App.jsx
        ├── Main.js
        ├── main.jsx
        ├── chat/
        │   └── Chat.jsx
        ├── components/
        │   ├── Chat.js
        │   ├── ChatBody.jsx
        │   ├── ChatInput.jsx
        │   ├── Footer.jsx
        │   ├── History.js
        │   ├── Message.jsx
        │   ├── TypingIndicator.jsx
        │   └── Vocab.js
        └── css/
            ├── App.css
            ├── ChatBody.css
            ├── ChatInput.css
            ├── Footer.css
            ├── Message.css
            ├── style.css
            └── TypingIndicator.css
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Modern web browser with Web Speech API support

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd speakeasy
   ```

2. **Install root dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

### Development Setup

1. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```

2. **Configure AI Backend**
   
   The application currently uses Ollama for AI responses. Make sure you have:
   - Ollama installed and running on `http://localhost:11434`
   - The `phi` model downloaded: `ollama pull phi`

   **Alternative Backend Options:**
   - Modify the `sendToAI` function in `Chat.js` to use other AI services
   - Replace with OpenAI API, Anthropic Claude, or other LLM providers

### Production Build

```bash
cd frontend
npm run build
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the frontend directory:

```env
VITE_PORT=3000
VITE_API_BASE_URL=http://localhost:11434
```

### API Configuration

The application uses several external APIs:

1. **Dictionary API**: `https://api.dictionaryapi.dev` (Free, no key required)
2. **Translation API**: Google Translate (Free tier)
3. **AI Backend**: Configurable (currently Ollama)

## 🎯 Usage

### Basic Chat
1. Type your message in the input field or click the microphone for voice input
2. Press Enter or click Send to chat with the AI assistant
3. Click the speaker icon to hear responses

### Vocabulary Learning
1. Click any word in AI responses to see its definition
2. Words are automatically saved to your vocabulary list
3. Access saved words in the "Từ đã tra" (Vocabulary) tab
4. Search through your vocabulary and practice pronunciation

### Chat History
1. Switch to "Lịch sử" (History) tab to view past conversations
2. Click on any conversation to replay it
3. All messages maintain their audio playback functionality

## 🛠️ Technical Details

### Frontend Technologies
- **React**: UI framework for modern components
- **Vite**: Fast build tool and development server
- **Vanilla JavaScript**: Core functionality modules
- **Web Speech API**: Voice recognition and text-to-speech
- **Font Awesome**: Icons and UI elements

### Key Components

#### Chat System (`Chat.js`, `Chat.jsx`)
- Handles message sending/receiving
- Integrates with AI backend
- Manages speech synthesis

#### Vocabulary System (`Vocab.js`)
- Dictionary API integration
- Translation services
- Local storage management

#### History System (`History.js`)
- Conversation persistence
- Playback functionality

### Browser Compatibility

- **Chrome/Edge**: Full feature support
- **Firefox**: Limited speech recognition
- **Safari**: Partial Web Speech API support

## 🔄 API Integration

### Current AI Backend (Ollama)
```javascript
const response = await fetch("http://localhost:11434/api/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    model: "phi",
    messages: [{ role: "user", content: message }],
    stream: false,
  }),
});
```

### Dictionary API
```javascript
fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
```

## 🚧 Development Roadmap

### Planned Features
- [ ] User authentication and profiles
- [ ] Cloud vocabulary synchronization
- [ ] Advanced speech recognition with multiple accents
- [ ] Grammar checking and suggestions
- [ ] Pronunciation scoring
- [ ] Learning progress tracking
- [ ] Mobile app version

### Current Limitations
- Vocabulary stored locally (no cloud sync)
- Limited to English learning
- Requires internet for dictionary/translation APIs
- Speech recognition browser-dependent

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow ES6+ JavaScript standards
- Use semantic commit messages
- Test speech features across browsers
- Ensure responsive design compatibility

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Troubleshooting

### Common Issues

**Speech Recognition Not Working**
- Ensure you're using HTTPS or localhost
- Check browser compatibility
- Verify microphone permissions

**AI Responses Not Working**
- Verify Ollama is running: `ollama serve`
- Check if the `phi` model is installed: `ollama list`
- Confirm API endpoint in `Chat.js`

**Dictionary Lookup Failing**
- Check internet connection
- Verify API endpoint accessibility
- Some words may not be in the dictionary database

### Support

For technical support or feature requests, please open an issue in the GitHub repository.

---

Made with ❤️ for English language learners
