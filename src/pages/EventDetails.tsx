import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import EventEditForm from '@/components/events/EventEditForm';
import EventNotFound from '@/components/events/EventNotFound';
import EventDetailsView from '@/components/events/EventDetailsView';
import { useEventData } from '@/hooks/useEventData';
import EventHeader from '@/components/events/EventHeader';
const EventDetails = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const location = useLocation();
  const [isEditing, setIsEditing] = useState(false);
  const {
    event,
    isSaved,
    handleSaveEvent,
    handleShareEvent
  } = useEventData(id);
  useEffect(() => {
    if (location.pathname.includes('/edit')) {
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }
  }, [location.pathname]);
  if (!event) {
    return <PageLayout>
        <EventNotFound />
      </PageLayout>;
  }
  if (isEditing) {
    return <PageLayout>
        <EventEditForm event={event} id={id || ''} />
      </PageLayout>;
  }
  return <PageLayout>
      <div className="container mx-auto px-4 py-[40px]">
        <EventHeader onShare={handleShareEvent} />
        <EventDetailsView event={event} isSaved={isSaved} onSave={handleSaveEvent} onShare={handleShareEvent} />
      </div>
    </PageLayout>;
};
export default EventDetails;