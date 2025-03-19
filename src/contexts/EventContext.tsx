
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Event {
  id: string;
  title: string;
  date?: string;
  dateString?: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: string;
  organizer: string;
  website?: string;
  ticketPrice: string;
  attendees: number;
}

interface EventContextType {
  event: Event | null;
  setEvent: React.Dispatch<React.SetStateAction<Event | null>>;
  isSaved: boolean;
  setIsSaved: React.Dispatch<React.SetStateAction<boolean>>;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export const EventProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [event, setEvent] = useState<Event | null>(null);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <EventContext.Provider value={{ event, setEvent, isSaved, setIsSaved }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEventContext = () => {
  const context = useContext(EventContext);
  if (context === undefined) {
    throw new Error('useEventContext must be used within an EventProvider');
  }
  return context;
};
