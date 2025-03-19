import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CalendarIcon, Clock, MapPin } from 'lucide-react';
import { z } from "zod";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { useToast } from '@/hooks/use-toast';

const eventFormSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters."
  }),
  date: z.date({
    required_error: "Event date is required."
  }),
  time: z.string().min(1, {
    message: "Event time is required."
  }),
  location: z.string().min(3, {
    message: "Location must be at least 3 characters."
  }),
  description: z.string().min(20, {
    message: "Description must be at least 20 characters."
  }),
  category: z.string({
    required_error: "Please select a category."
  })
});

export type EventFormValues = z.infer<typeof eventFormSchema>;

interface EventEditFormProps {
  event: any;
  id: string;
}

const EventEditForm: React.FC<EventEditFormProps> = ({
  event,
  id
}) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [image, setImage] = useState<string | null>(null);

  const form = useForm<EventFormValues>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: {
      title: "",
      time: "",
      location: "",
      description: "",
      category: ""
    }
  });

  useEffect(() => {
    if (event) {
      if (event.image) {
        setImage(event.image);
      }
      const date = event.date ? new Date(event.date) : event.dateString ? new Date(event.dateString) : new Date();
      form.reset({
        title: event.title,
        date,
        time: event.time,
        location: event.location,
        description: event.description,
        category: event.category
      });
    }
  }, [event, form]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = event => {
        if (event.target?.result) {
          setImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: EventFormValues) => {
    const userEvents = JSON.parse(localStorage.getItem('userEvents') || '[]');
    const updatedUserEvents = userEvents.map((evt: any) => {
      if (evt.id === id) {
        return {
          ...evt,
          ...data,
          image,
          dateString: format(data.date, "yyyy-MM-dd")
        };
      }
      return evt;
    });
    localStorage.setItem('userEvents', JSON.stringify(updatedUserEvents));
    toast({
      title: "Event Updated",
      description: "Your event has been updated successfully!"
    });
    navigate(`/events/${id}`);
  };

  return <div className="container mx-auto px-6 max-w-3xl py-[81px]">
      <Button variant="outline" className="mb-6 group flex items-center transition-all hover:translate-x-[-2px]" onClick={() => navigate('/profile')}>
        <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
        <span className="group-hover:text-ocean">Back to Profile</span>
      </Button>
      
      <div className="bg-white rounded-xl shadow p-6 py-0">
        <h1 className="text-2xl font-bold mb-6">Edit Event</h1>
        
        <div className="mb-6">
          <div className="block mb-2 font-medium">Event Image</div>
          <div className="border-2 border-dashed border-gray-300 rounded-md p-6 mb-4">
            {image ? <div className="relative">
                <img src={image} alt="Event preview" className="mx-auto max-h-64 rounded-md" />
                <Button type="button" variant="secondary" size="sm" className="absolute top-2 right-2" onClick={() => setImage(null)}>
                  Change
                </Button>
              </div> : <div className="text-center">
                <div className="mt-4 flex justify-center">
                  <label htmlFor="image-upload" className="cursor-pointer rounded-md bg-white px-4 py-2 text-sm font-medium text-ocean shadow-sm hover:bg-gray-50">
                    Upload Image
                  </label>
                  <input id="image-upload" name="image-upload" type="file" className="sr-only" accept="image/*" onChange={handleImageChange} />
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  PNG, JPG, GIF up to 5MB
                </p>
              </div>}
          </div>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField control={form.control} name="title" render={({
            field
          }) => <FormItem>
                  <FormLabel>Event Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter the name of your event" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField control={form.control} name="date" render={({
              field
            }) => <FormItem className="flex flex-col">
                    <FormLabel>Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button variant={"outline"} className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}>
                            {field.value ? format(field.value, "PPP") : <span>Select date</span>}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent mode="single" selected={field.value} onSelect={field.onChange} initialFocus className={cn("p-3 pointer-events-auto")} />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>} />

              <FormField control={form.control} name="time" render={({
              field
            }) => <FormItem>
                    <FormLabel>Time</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input className="pl-10" placeholder="e.g., 19:00" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>} />
            </div>

            <FormField control={form.control} name="location" render={({
            field
          }) => <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input className="pl-10" placeholder="Event venue or address" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>} />

            <FormField control={form.control} name="category" render={({
            field
          }) => <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select event category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Music">Music</SelectItem>
                      <SelectItem value="Culture">Culture</SelectItem>
                      <SelectItem value="Food">Food</SelectItem>
                      <SelectItem value="Film">Film</SelectItem>
                      <SelectItem value="Tour">Tour</SelectItem>
                      <SelectItem value="Environment">Environment</SelectItem>
                      <SelectItem value="Workshop">Workshop</SelectItem>
                      <SelectItem value="Festival">Festival</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>} />

            <FormField control={form.control} name="description" render={({
            field
          }) => <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe your event in detail..." className="min-h-[120px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>} />

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button type="submit" className="flex items-center gap-2">
                Save Changes
              </Button>
              <Button type="button" variant="outline" onClick={() => navigate(`/events/${id}`)}>
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>;
};

export default EventEditForm;
