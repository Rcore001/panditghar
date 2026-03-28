import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useBookingFlow } from '@/hooks/use-booking-flow';
import { Language, useTranslation, services, locations } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { CalendarIcon, Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Valid phone number required'),
  location: z.string().min(1, 'Please select a location'),
  service: z.string().min(1, 'Please select a service'),
  date: z.string().min(1, 'Date is required'),
  message: z.string().optional()
});

export function BookingForm({ lang, preselectedService }: { lang: Language, preselectedService?: string }) {
  const t = useTranslation(lang).booking;
  const { submit, isPending } = useBookingFlow();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      location: '',
      service: preselectedService || '',
      date: '',
      message: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    submit({ ...values, language: lang });
  };

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none"></div>
      
      <div className="mb-8 text-center">
        <h3 className={`text-2xl font-display font-bold text-secondary mb-2 ${lang === 'hi' ? 'font-hindi' : ''}`}>{t.title}</h3>
        <p className={`text-muted-foreground ${lang === 'hi' ? 'font-hindi' : ''}`}>{t.subtitle}</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-6 ${lang === 'hi' ? 'font-hindi' : ''}`}>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">{t.name}</FormLabel>
                  <FormControl>
                    <Input placeholder="Rajesh Kumar" className="bg-background focus:ring-primary/20" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">{t.phone}</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="+91 90000 00000" className="bg-background focus:ring-primary/20" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">{t.service}</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder={t.service} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {services.map(s => (
                        <SelectItem key={s.id} value={lang === 'hi' ? s.hiTitle : s.enTitle}>
                          {lang === 'hi' ? s.hiTitle : s.enTitle}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">{t.location}</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder={t.location} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {locations.map(loc => (
                        <SelectItem key={loc.id} value={loc.name}>
                          {loc.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">{t.date}</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input type="date" className="bg-background pl-10" {...field} />
                    <CalendarIcon className="absolute left-3 top-3 w-4 h-4 text-muted-foreground pointer-events-none" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">{t.message}</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder={lang === 'hi' ? 'कोई विशेष आवश्यकता...' : 'Any special requirements...'} 
                    className="resize-none bg-background focus:ring-primary/20 h-24" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full bg-gradient-saffron hover:shadow-glow-saffron text-white py-6 text-lg rounded-xl transition-all font-semibold border-none mt-4"
            disabled={isPending}
          >
            {isPending ? <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> {t.submitting}</> : t.submit}
          </Button>

        </form>
      </Form>
    </div>
  );
}
