import { useCreateBooking } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { WHATSAPP_NUMBER } from "@/lib/data";

export function useBookingFlow() {
  const { toast } = useToast();
  const mutation = useCreateBooking();

  const handleBooking = async (data: any) => {
    try {
      await mutation.mutateAsync({ data });
      
      // Generate WhatsApp link
      const text = `Hello Pandit Ji, I want to book ${data.service} on ${data.date} in ${data.location}.\n\nName: ${data.name}\nPhone: ${data.phone}${data.message ? `\nMessage: ${data.message}` : ''}`;
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
      
      toast({
        title: "Success",
        description: "Redirecting to WhatsApp to confirm your booking...",
        className: "bg-green-50 border-green-200 text-green-800",
      });

      // Give toast time to show before redirect
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1500);

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit booking. Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  return {
    submit: handleBooking,
    isPending: mutation.isPending
  };
}
