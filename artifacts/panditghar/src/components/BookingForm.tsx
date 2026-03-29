import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useBookingFlow } from '@/hooks/use-booking-flow';
import { Language, useTranslation, services, locations } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { CalendarIcon, Loader2, ChevronsUpDown, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Valid phone number required'),
  location: z.string().min(1, 'Please select a location'),
  service: z.string().min(1, 'Please select a service'),
  date: z.string().min(1, 'Date is required'),
  message: z.string().optional()
});

function SearchableCombobox({
  value,
  onChange,
  options,
  placeholder,
  searchPlaceholder,
  emptyText,
  lang,
}: {
  value: string;
  onChange: (val: string) => void;
  options: { value: string; label: string }[];
  placeholder: string;
  searchPlaceholder: string;
  emptyText: string;
  lang: Language;
}) {
  const [open, setOpen] = useState(false);
  const selected = options.find(o => o.value === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            'w-full justify-between bg-background font-normal h-10 border-input text-sm',
            !value && 'text-muted-foreground',
            lang === 'hi' && 'font-hindi'
          )}
        >
          <span className="truncate">{selected ? selected.label : placeholder}</span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[--radix-popover-trigger-width] p-0" align="start">
        <Command>
          <CommandInput placeholder={searchPlaceholder} className={lang === 'hi' ? 'font-hindi' : ''} />
          <CommandList>
            <CommandEmpty className={lang === 'hi' ? 'font-hindi' : ''}>{emptyText}</CommandEmpty>
            <CommandGroup>
              {options.map(opt => (
                <CommandItem
                  key={opt.value}
                  value={opt.label}
                  onSelect={() => {
                    onChange(opt.value === value ? '' : opt.value);
                    setOpen(false);
                  }}
                  className={cn('cursor-pointer', lang === 'hi' && 'font-hindi')}
                >
                  <Check
                    className={cn('mr-2 h-4 w-4', value === opt.value ? 'opacity-100' : 'opacity-0')}
                  />
                  {opt.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export function BookingForm({ lang, preselectedService }: { lang: Language, preselectedService?: string }) {
  const t = useTranslation(lang).booking;
  const { submit, isPending } = useBookingFlow();
  const isHi = lang === 'hi';

  const serviceOptions = services.map(s => ({
    value: isHi ? s.hiTitle : s.enTitle,
    label: isHi ? s.hiTitle : s.enTitle,
  }));

  const locationOptions = locations.map(loc => ({
    value: loc.name,
    label: loc.name,
  }));

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
        <h3 className={`text-2xl font-display font-bold text-secondary mb-2 ${isHi ? 'font-hindi' : ''}`}>{t.title}</h3>
        <p className={`text-muted-foreground ${isHi ? 'font-hindi' : ''}`}>{t.subtitle}</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-6 ${isHi ? 'font-hindi' : ''}`}>
          
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
                  <FormControl>
                    <SearchableCombobox
                      value={field.value}
                      onChange={field.onChange}
                      options={serviceOptions}
                      placeholder={isHi ? 'सेवा चुनें' : 'Select service'}
                      searchPlaceholder={isHi ? 'सेवा खोजें...' : 'Search service...'}
                      emptyText={isHi ? 'कोई सेवा नहीं मिली' : 'No service found'}
                      lang={lang}
                    />
                  </FormControl>
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
                  <FormControl>
                    <SearchableCombobox
                      value={field.value}
                      onChange={field.onChange}
                      options={locationOptions}
                      placeholder={isHi ? 'क्षेत्र चुनें' : 'Select area'}
                      searchPlaceholder={isHi ? 'क्षेत्र खोजें...' : 'Search area...'}
                      emptyText={isHi ? 'कोई क्षेत्र नहीं मिला' : 'No area found'}
                      lang={lang}
                    />
                  </FormControl>
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
                    placeholder={isHi ? 'कोई विशेष आवश्यकता...' : 'Any special requirements...'} 
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
