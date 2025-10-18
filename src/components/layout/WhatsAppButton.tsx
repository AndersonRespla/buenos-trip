import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export const WhatsAppButton = () => {
  const phoneNumber = "5491176268283";
  const message = "Olá! Gostaria de mais informações sobre os serviços da Buenos Trip.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-elevated flex items-center justify-center hover:bg-[#20BA5A] transition-colors"
      aria-label="Contato WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <motion.span
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute -top-1 -right-1 w-4 h-4 bg-destructive rounded-full"
      />
    </motion.a>
  );
};
