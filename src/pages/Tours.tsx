import { motion } from "framer-motion";
import { TourCard } from "@/components/ui/tour-card";
import { tours } from "@/data/mockData";

const Tours = () => {
  return (
    <div className="min-h-screen pt-20 pb-24 md:pb-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Roteiros Turísticos
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Descubra Buenos Aires com nossos tours exclusivos e motorista brasileiro que conhece cada cantinho da cidade
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <TourCard
              key={tour.id}
              image={tour.image}
              title={tour.title}
              description={tour.description}
              duration={tour.duration}
              price={tour.price}
              highlights={tour.highlights}
              delay={index * 0.2}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary to-primary/80 p-8 md:p-12 rounded-2xl shadow-elevated text-center"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            Quer um tour personalizado?
          </h2>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            Criamos roteiros sob medida para você! Entre em contato e conte seus interesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5491176268283"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-display font-semibold shadow-card hover:shadow-elevated transition-all hover:scale-105"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Tours;
