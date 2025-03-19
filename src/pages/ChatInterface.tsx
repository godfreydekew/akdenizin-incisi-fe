import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { PlusCircle, Send, Trash2, MessageSquare, X, Menu, User, Bot, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import PageLayout from '@/components/PageLayout';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface Message {
  id: string;
  role: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

interface ChatSession {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: Date;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([{
    id: '1',
    role: 'ai',
    content: "Hello! I'm your AI travel guide for Northern Cyprus. How can I help you today?",
    timestamp: new Date()
  }]);
  const [isTyping, setIsTyping] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeChatId, setActiveChatId] = useState('current');
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([{
    id: 'current',
    title: 'New Chat',
    lastMessage: "Hello! I'm your AI travel guide for Northern Cyprus.",
    timestamp: new Date()
  }, {
    id: 'kyreniatrip',
    title: 'Kyrenia Trip',
    lastMessage: 'What about boat tours in Kyrenia?',
    timestamp: new Date(Date.now() - 86400000)
  }, {
    id: 'famagustavisit',
    title: 'Famagusta Visit',
    lastMessage: 'Tell me about the walled city of Famagusta',
    timestamp: new Date(Date.now() - 172800000)
  }]);

  const isMobile = useIsMobile();
  const {
    toast
  } = useToast();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const {
    register,
    handleSubmit,
    reset
  } = useForm<{
    message: string;
  }>();

  useEffect(() => {
    setSidebarOpen(!isMobile);
  }, [isMobile]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const onSubmit = handleSubmit(({
    message
  }) => {
    if (message.trim() === '') return;

    const newUserMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: message,
      timestamp: new Date()
    };
    setMessages([...messages, newUserMessage]);
    reset();

    setIsTyping(true);

    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        content: getAIResponse(message),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);

      setChatSessions(prev => prev.map(session => session.id === activeChatId ? {
        ...session,
        lastMessage: message,
        timestamp: new Date()
      } : session));
    }, 1500);
  });

  const getAIResponse = (message: string): string => {
    const lowerMsg = message.toLowerCase();
    if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey')) {
      return "Hello there! How can I help you plan your visit to Northern Cyprus?";
    } else if (lowerMsg.includes('kyrenia') || lowerMsg.includes('girne')) {
      return "Kyrenia (Girne) is a beautiful coastal town with a harbor and castle. Popular attractions include the Kyrenia Castle, Old Harbor, and nearby Bellapais Abbey.";
    } else if (lowerMsg.includes('famagusta') || lowerMsg.includes('gazimağusa')) {
      return "Famagusta (Gazimağusa) is famous for its medieval walled city and Gothic churches, influenced by various civilizations.";
    } else if (lowerMsg.includes('beach') || lowerMsg.includes('beaches')) {
      return "Northern Cyprus has beautiful beaches! Try Golden Beach near Karpaz, Alagadi Beach for turtle nesting, and Escape Beach near Kyrenia.";
    } else if (lowerMsg.includes('food') || lowerMsg.includes('eat') || lowerMsg.includes('restaurant')) {
      return "Northern Cyprus offers Mediterranean and Turkish cuisine. Try local specialties like 'şeftali kebab', 'hellim' cheese, and 'pilavuna'.";
    } else if (lowerMsg.includes('hotel') || lowerMsg.includes('stay') || lowerMsg.includes('accommodation')) {
      return "Accommodation options range from luxury beach resorts to boutique hotels in historic buildings. Many visitors prefer Kyrenia for its harbor and central location.";
    } else {
      return "That's an interesting question about Northern Cyprus! Would you like information about attractions, transportation, accommodation, or cultural experiences?";
    }
  };

  const startNewChat = () => {
    const newChatId = Date.now().toString();
    setChatSessions([{
      id: newChatId,
      title: 'New Chat',
      lastMessage: '',
      timestamp: new Date()
    }, ...chatSessions]);
    setActiveChatId(newChatId);
    setMessages([{
      id: '1',
      role: 'ai',
      content: "Hello! I'm your AI travel guide for Northern Cyprus. How can I help you today?",
      timestamp: new Date()
    }]);

    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  const deleteChat = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setChatSessions(prev => prev.filter(session => session.id !== id));
    if (id === activeChatId) {
      if (chatSessions.length > 1) {
        const remainingSessions = chatSessions.filter(session => session.id !== id);
        setActiveChatId(remainingSessions[0].id);
      } else {
        startNewChat();
      }
    }
    toast({
      title: "Chat deleted",
      description: "The chat has been removed from your history."
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatDate = (date: Date) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString();
    }
  };

  const selectChat = (chatId: string) => {
    setActiveChatId(chatId);
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  return <PageLayout>
      <div className="h-[calc(100vh-140px)] flex bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 py-[90px] px-0">
        {sidebarOpen && isMobile && <div className="fixed inset-0 bg-black/20 z-10 md:hidden backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />}
        
        <div className={cn("bg-white dark:bg-gray-900 h-full transition-all duration-300 border-r border-gray-100 dark:border-gray-800 flex flex-col", sidebarOpen ? "w-full md:w-80 absolute md:relative z-20" : "w-0 overflow-hidden")}>
          <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-gradient-to-r from-ocean/5 to-transparent">
            <h2 className="font-medium text-gray-800 dark:text-white">Chat History</h2>
            <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)} className="md:hidden text-gray-500">
              <X size={18} />
            </Button>
          </div>
          
          <div className="p-4">
            <Button onClick={startNewChat} className="w-full flex items-center gap-2 bg-gradient-to-r from-ocean to-ocean-light hover:from-ocean-dark hover:to-ocean text-white shadow-sm hover:shadow-md transition-all duration-300">
              <PlusCircle size={16} />
              New Chat
            </Button>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {chatSessions.map(chat => <div key={chat.id} className={cn("flex items-start gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer transition-colors group", activeChatId === chat.id ? "bg-ocean/10 dark:bg-ocean/20 border-l-2 border-ocean" : "")} onClick={() => selectChat(chat.id)}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center 
                  ${activeChatId === chat.id ? 'bg-gradient-to-br from-ocean to-ocean-dark text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'}`}>
                  <MessageSquare size={14} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between">
                    <h3 className={`font-medium text-sm truncate ${activeChatId === chat.id ? 'text-ocean dark:text-ocean-light' : 'text-gray-700 dark:text-gray-300'}`}>
                      {chat.title}
                    </h3>
                    <span className="text-xs text-gray-400 whitespace-nowrap ml-2">
                      {formatDate(chat.timestamp)}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{chat.lastMessage}</p>
                </div>
                <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 hover:bg-red-100 hover:text-red-500 dark:hover:bg-red-900/30 transition-opacity duration-200" onClick={e => deleteChat(chat.id, e)}>
                  <Trash2 size={14} />
                </Button>
              </div>)}
          </div>
        </div>
        
        <div className="flex-1 flex flex-col bg-gray-50 dark:bg-gray-900 relative">
          <div className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 p-4 flex items-center gap-2 sticky top-0 z-10 glassmorphism backdrop-blur-lg bg-white/80 dark:bg-gray-900/80">
            {!sidebarOpen && <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(true)} className="text-gray-500">
                <Menu size={18} />
              </Button>}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-ocean to-ocean-dark flex items-center justify-center shadow-sm">
                <Bot size={16} className="text-white" />
              </div>
              <div>
                <h2 className="font-medium text-gray-800 dark:text-white">AI Travel Guide</h2>
                <div className="flex items-center text-xs text-green-600 dark:text-green-400">
                  <span className="relative flex h-2 w-2 mr-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Online
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
            {messages.map(message => <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {message.role === 'ai' && <div className="w-8 h-8 mr-2 rounded-full bg-gradient-to-br from-ocean to-ocean-dark flex-shrink-0 flex items-center justify-center shadow-sm">
                    <Bot size={16} className="text-white" />
                  </div>}
                
                <div className={cn("max-w-[85%] md:max-w-[70%] rounded-2xl p-4 shadow-sm animate-fade-in", message.role === 'user' ? "chat-bubble-user" : "chat-bubble-ai")}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm" dangerouslySetInnerHTML={{
                    __html: message.content.replace(/\n/g, '<br>')
                  }} />
                      <div className={`text-xs mt-1 ${message.role === 'user' ? 'text-blue-100' : 'text-gray-400 dark:text-gray-500'}`}>
                        {formatTime(message.timestamp)}
                      </div>
                    </div>
                  </div>
                </div>
                
                {message.role === 'user' && <div className="w-8 h-8 ml-2 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0 flex items-center justify-center shadow-sm">
                    <User size={16} className="text-gray-600 dark:text-gray-300" />
                  </div>}
              </div>)}
            
            {isTyping && <div className="flex justify-start items-start">
                <div className="w-8 h-8 mr-2 rounded-full bg-gradient-to-br from-ocean to-ocean-dark flex-shrink-0 flex items-center justify-center shadow-sm">
                  <Bot size={16} className="text-white" />
                </div>
                <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl rounded-bl-none p-3 shadow-sm">
                  <div className="flex space-x-1 items-center h-6">
                    <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{
                  animationDelay: '0ms'
                }}></div>
                    <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{
                  animationDelay: '150ms'
                }}></div>
                    <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{
                  animationDelay: '300ms'
                }}></div>
                  </div>
                </div>
              </div>}
            
            <div ref={messagesEndRef} />
          </div>
          
          <div className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 p-4 sticky bottom-0 glassmorphism backdrop-blur-lg bg-white/80 dark:bg-gray-900/80">
            <form onSubmit={onSubmit} className="flex gap-2">
              <Input {...register('message')} placeholder="Type your message..." className="flex-1 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus-visible:ring-ocean" autoComplete="off" />
              <Button type="submit" className="bg-gradient-to-r from-ocean to-ocean-light hover:from-ocean-dark hover:to-ocean text-white flex items-center gap-2 shadow-sm hover:shadow-md transition-all duration-300">
                <Send size={16} />
                <span className="hidden sm:inline">Send</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>;
};

export default ChatInterface;
