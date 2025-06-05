# NetSathi – Voice Companion for Seniors

## Product Requirements Document (PRD)

**Purpose:**  
NetSathi is a voice-based mobile/web application designed to help seniors in India stay informed about fraudulent scams, misinformation, and fake videos. The app acts as a friendly companion, answering questions and providing guidance using natural voice interactions.

**Target Audience:**  
- Seniors (age 55+) in India  
- Users with limited technical skills  
- Users who prefer voice-based interaction over text  

**Key Features:**  
1. **Voice Interaction:**  
   - Voice-based Q&A in English, Hindi, and regional languages  
   - Text-to-speech and speech-to-text support  
2. **Scam & Misinformation Alerts:**  
   - Real-time updates about trending scams, fake news, and viral misinformation  
   - Simple explanations and actionable advice  
3. **Fake Video/Image Detection Guidance:**  
   - Users can describe or upload suspicious content for analysis  
   - The app provides guidance on authenticity and next steps  
4. **Friendly Conversational Experience:**  
   - Empathetic, patient responses  
   - Reminders, greetings, and check-ins  
5. **Accessibility:**  
   - Large buttons, clear fonts, high-contrast UI  
   - Minimal navigation steps  
6. **Privacy & Security:**  
   - No sensitive data stored without consent  
   - Clear privacy policy and permissions  

**Success Metrics:**  
- Number of active users  
- Number of scam/misinformation alerts delivered  
- User satisfaction  
- Reduction in scam incidents reported by users  

**Technical Requirements:**  
- Cross-platform (Android/iOS/web)  
- Speech-to-text and text-to-speech APIs  
- Backend for content updates and user queries  
- Multilingual support  

**Out of Scope (MVP):**  
- In-depth fact-checking of every user-uploaded video/image  
- Social media integration  

---

## Task Breakdown

1. **Project Setup**
   - Initialize project repository (Git)
   - Set up frontend framework (React with TypeScript + Tailwind CSS)
   - Set up backend (Node.js/Express or Firebase)
   - Configure ESLint, Prettier, and basic CI

2. **Voice Interaction**
   - Integrate speech-to-text (STT) API
   - Integrate text-to-speech (TTS) API
   - Build a simple voice input/output UI component

3. **Scam & Misinformation Alerts**
   - Design backend structure for scam alerts
   - Create frontend components to display alerts
   - Set up admin interface for content updates (optional for MVP)

4. **Fake Video/Image Detection Guidance**
   - Allow users to describe or upload suspicious content
   - Provide simple guidance or connect to a fact-checking API

5. **Conversational Experience**
   - Implement friendly chatbot logic
   - Add greetings, reminders, and empathetic responses

6. **Accessibility & UI**
   - Design large, clear, high-contrast UI components
   - Ensure minimal navigation and easy-to-use interface

7. **Multilingual Support**
   - Add support for Hindi and at least one regional language
   - Localize UI and voice responses

8. **Privacy & Security**
   - Draft and display a clear privacy policy
   - Ensure no sensitive data is stored without consent

9. **Testing & Feedback**
   - Write unit and integration tests
   - Conduct user testing with seniors
   - Collect and incorporate feedback

---

_Keep this section updated as the project evolves!_
