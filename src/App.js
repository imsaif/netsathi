import React from 'react';
import { useState, useEffect, useRef } from 'react';
import VoiceService from './components/VoiceService';
import VoiceButton from './components/VoiceButton';

function App() {
  const knowledgeBase = {
    greetings: {
      welcome: `Hi there! 👋 I'm NetSathi, your friendly cyber security guide. 
      
I can help you stay safe online by explaining:
- How to protect yourself from identity theft
- Ways to keep your banking secure
- Tips for social media safety
- Steps to report cyber crime

What would you like to learn about?`,
      
      followUp: `Is there anything specific about that you'd like to know more about?`,
    },

    identity_theft: {
      explanation: `Let me explain identity theft in simple terms. It's when someone steals your personal information to pretend they're you. 

This could be things like:
- Your name and address
- Bank account details
- Aadhaar or PAN card numbers

The scary part is, they can use this information to:
- Access your bank accounts
- Take loans in your name
- Create fake documents
- Misuse your social media

Would you like to know how to protect yourself from identity theft?`,

      protection: `Here are some practical ways to protect yourself from identity theft:

1. Think of your personal documents like cash - never share them with strangers or suspicious websites

2. When giving photocopies of your ID:
   • Write the purpose across the copy
   • Mark it as a copy
   • Only give it to trusted organizations

3. For social media:
   • Keep your profiles private
   • Don't post personal details
   • Be careful with friend requests

Would you like me to explain any of these tips in more detail?`
    },

    banking: {
      safety: `Let me share some essential tips to keep your online banking secure:

First, the most important rule: Never share your:
- OTP (One-Time Passwords)
- PIN numbers
- CVV numbers
Anyone asking for these is likely trying to scam you!

Some other key safety habits:
1. Set transaction limits on your accounts
2. Enable notifications for all transactions
3. Avoid banking on public WiFi
4. Use strong, unique passwords

Would you like more specific tips about any of these points?`,

      public_wifi: `I should warn you about using public WiFi for banking - it's quite risky! 

Here's why and what to do instead:
1. Public WiFi is often unsecured
2. Hackers can easily intercept your data
3. Your banking details could be stolen

Instead:
- Use your mobile data for banking
- Wait until you have a secure connection
- If urgent, use a reliable VPN

Would you like to know more about safe banking practices?`
    },

    reporting: {
      steps: `I'm sorry you might be dealing with cyber crime. Here's how you can report it:

Immediate steps:
1. Visit your nearest police station, or
2. Call the cyber crime helpline: 1930
3. Visit cybercrime.gov.in

For specific cases:
- Lost/stolen phone? Call 14422
- Phishing attempt? Report at www.reportphishing.in

Important tip: Document everything! Save screenshots, messages, or any evidence you have.

Would you like me to explain any of these reporting methods in detail?`
    }
  };

  const [messages, setMessages] = useState([
    { role: 'assistant', content: knowledgeBase.greetings.welcome }
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const voiceService = useRef(new VoiceService());

  const getResponse = (input) => {
    const lowercaseInput = input.toLowerCase();
    
    // Identity Theft
    if (lowercaseInput.includes('identity') || lowercaseInput.includes('theft')) {
      if (lowercaseInput.includes('protect') || lowercaseInput.includes('prevent') || 
          lowercaseInput.includes('safe')) {
        return knowledgeBase.identity_theft.protection;
      }
      return knowledgeBase.identity_theft.explanation;
    }
    
    // Banking
    if (lowercaseInput.includes('bank') || lowercaseInput.includes('payment') || 
        lowercaseInput.includes('transaction')) {
      if (lowercaseInput.includes('wifi') || lowercaseInput.includes('public')) {
        return knowledgeBase.banking.public_wifi;
      }
      return knowledgeBase.banking.safety;
    }
    
    // Reporting
    if (lowercaseInput.includes('report') || lowercaseInput.includes('complaint') || 
        lowercaseInput.includes('crime') || lowercaseInput.includes('victim')) {
      return knowledgeBase.reporting.steps;
    }

    // Default response
    return `I notice you're asking about "${input}". I can best help you with:

- Understanding and preventing identity theft
- Keeping your online banking safe
- Reporting cyber crime

Could you let me know which of these you'd like to learn about?`;
  };

  const handleClick = () => {
    if (inputValue.trim()) {
      setMessages([
        ...messages,
        { role: 'user', content: inputValue },
        { role: 'assistant', content: getResponse(inputValue) }
      ]);
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  // Voice handling functions
  const handleVoiceInput = (transcript) => {
    setInputValue(transcript);
    // Automatically process the voice input
    const response = getResponse(transcript);
    const newMessages = [
      ...messages,
      { role: 'user', content: transcript },
      { role: 'assistant', content: response }
    ];
    setMessages(newMessages);
    
    // Speak the response
    setIsSpeaking(true);
    voiceService.current.speak(response, () => {
      setIsSpeaking(false);
    });
    
    setInputValue('');
  };

  const handleStartListening = () => {
    // Stop any ongoing speech
    voiceService.current.stopSpeaking();
    setIsSpeaking(false);
    
    setIsListening(true);
    voiceService.current.startListening(
      handleVoiceInput,
      (error) => {
        console.error('Voice recognition error:', error);
        setIsListening(false);
      }
    );
  };

  const handleStopListening = () => {
    voiceService.current.stopListening();
    setIsListening(false);
  };

  // Auto-speak the welcome message on first load
  useEffect(() => {
    const timer = setTimeout(() => {
      if (messages.length === 1 && !isSpeaking) {
        setIsSpeaking(true);
        voiceService.current.speak(knowledgeBase.greetings.welcome, () => {
          setIsSpeaking(false);
        });
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [messages.length, isSpeaking, knowledgeBase.greetings.welcome]);

  return (
    <div className="p-4 max-w-3xl mx-auto bg-gray-50 min-h-screen">
      <div className="bg-blue-600 text-white p-4 rounded-t-lg mb-4">
        <h1 className="text-xl font-bold">NetSathi</h1>
        <p className="text-sm">Your Cyber Security Guide</p>
      </div>

      <div className="border rounded-lg bg-white mb-4 h-[600px] overflow-y-auto">
        {messages.map((msg, idx) => (
          <div key={idx} 
               className={`m-2 p-3 rounded-lg ${
                 msg.role === 'user'
                   ? 'bg-gray-100 ml-12' 
                   : 'bg-blue-50 mr-12'
               }`}>
            <div className="whitespace-pre-wrap">{msg.content}</div>
          </div>
        ))}
      </div>
      
      {/* Voice Controls */}
      <div className="flex justify-center mb-4">
        <VoiceButton
          isListening={isListening}
          onStartListening={handleStartListening}
          onStopListening={handleStopListening}
        />
      </div>

      {/* Speaking Indicator */}
      {isSpeaking && (
        <div className="flex justify-center items-center gap-2 mb-4 p-2 bg-blue-100 rounded-lg">
          <div className="animate-pulse w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-blue-700 text-sm">NetSathi is speaking...</span>
          <button
            onClick={() => {
              voiceService.current.stopSpeaking();
              setIsSpeaking(false);
            }}
            className="text-blue-700 hover:text-blue-900 text-sm underline"
          >
            Stop
          </button>
        </div>
      )}

      <div className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type or use voice to ask about cyber security..."
        />
        <button 
          onClick={handleClick}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
