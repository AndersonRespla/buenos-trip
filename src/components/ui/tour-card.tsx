import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";
import { Button } from "./button";

interface TourCardProps {
  image: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  highlights: string[];
  delay?: number;
}

export const TourCard = ({
  image,
  title,
  description,
  duration,
  price,
  highlights,
  delay = 0,
}: TourCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-1.5 rounded-full font-display font-bold text-sm shadow-soft">
          {price}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-display font-bold text-xl text-foreground mb-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>Buenos Aires</span>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>

        <Button className="w-full">
          Reservar Agora
        </Button>
      </div>
    </motion.div>
  );
};
