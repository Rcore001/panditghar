import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { WHATSAPP_NUMBER } from "@/lib/data";

export function useBookingFlow() {
  const { toast } = useToast();
  const [isPending, setIsPending] = useState(false);

  const handleBooking = async (data: any) => {
    setIsPending(true);
    try {
      const text = `Hello Pandit Ji, I want to book ${data.service} on ${data.date} in ${data.location}.\n\nName: ${data.name}\nPhone: ${data.phone}${data.message ? `\nMessage: ${data.message}` : ''}`;
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

      toast({
        title: "Success",
        description: "Redirecting to WhatsApp to confirm your booking...",
        className: "bg-green-50 border-green-200 text-green-800",
      });

      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        setIsPending(false);
      }, 1500);

    } catch (error) {
      setIsPending(false);
      toast({
        title: "Error",
        description: "Please contact us directly on WhatsApp or phone.",
        variant: "destructive",
      });
    }
  };

  return {
    submit: handleBooking,
    isPending
  };
}
