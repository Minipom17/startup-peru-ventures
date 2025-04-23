
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm RunAlpaca's running assistant. I can help with running tips and trail suggestions. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date(),
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = () => {
    if (!message.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: message,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(message);
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const getBotResponse = (userMessage: string) => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes('trail') || lowerCaseMessage.includes('route') || lowerCaseMessage.includes('where')) {
      return "For personalized trail recommendations, please use our Trail Finder tool. You can specify your location, difficulty preference, and available time for the best suggestions.";
    } else if (lowerCaseMessage.includes('beginner') || lowerCaseMessage.includes('start') || lowerCaseMessage.includes('new')) {
      return "For beginners, I recommend starting with short, easy runs (15-20 minutes) 3 times a week. Focus on consistency rather than speed. Our Trail Runner Pro socks provide excellent support for new runners.";
    } else if (lowerCaseMessage.includes('injury') || lowerCaseMessage.includes('pain')) {
      return "If you're experiencing pain, it's important to rest. For injury prevention, proper footwear and compression socks like our Alpaca Endurance line can help support your muscles and improve circulation.";
    } else if (lowerCaseMessage.includes('marathon') || lowerCaseMessage.includes('long distance')) {
      return "Marathon training typically takes 16-20 weeks. For long distances, our Merino Light socks are perfect for preventing blisters and keeping your feet comfortable.";
    } else {
      return "I'm here to help with running tips and product recommendations! You can ask about training, injury prevention, gear advice, or use our Trail Finder for route suggestions.";
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center ${
          isOpen ? 'bg-charcoal' : 'bg-terracotta'
        }`}
        aria-label="Chat with RunAlpaca Assistant"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="absolute bottom-16 right-0 w-[350px] sm:w-[400px] h-[500px] flex flex-col overflow-hidden shadow-xl animate-fade-in">
          <div className="bg-terracotta text-white p-4 flex justify-between items-center">
            <h3 className="font-bold">RunAlpaca Assistant</h3>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsOpen(false)} 
              className="text-white hover:bg-terracotta/90"
            >
              <X size={18} />
            </Button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-cream/30">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`mb-4 flex ${
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    msg.sender === 'user'
                      ? 'bg-terracotta text-white'
                      : 'bg-white shadow'
                  }`}
                >
                  <p>{msg.text}</p>
                  <div
                    className={`text-xs mt-1 ${
                      msg.sender === 'user' ? 'text-white/70' : 'text-gray-400'
                    }`}
                  >
                    {msg.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 border-t">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-terracotta"
              />
              <Button type="submit" className="bg-terracotta hover:bg-terracotta/90">
                <Send size={18} />
              </Button>
            </form>
          </div>
        </Card>
      )}
    </div>
  );
}
