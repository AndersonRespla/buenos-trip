import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Wifi, Droplet, User } from "lucide-react";
import { Link } from "react-router-dom";
import { transfers } from "@/data/mockData";

const Transfers = () => {
  return (
    <div className="min-h-screen pt-20 pb-24 md:pb-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Transfer Aeroporto
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Chegue e saia de Buenos Aires com conforto e segurança. Motorista brasileiro te esperando!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {transfers.map((transfer, index) => (
            <motion.div
              key={transfer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all"
            >
              <div className="relative h-56">
                <img
                  src={transfer.image}
                  alt={transfer.airport}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-display font-bold text-lg shadow-soft">
                  {transfer.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                  {transfer.airport}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {transfer.description}
                </p>

                <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{transfer.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Buenos Aires</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {transfer.features.map((feature, idx) => {
                    const icons = [User, Wifi, Droplet, User];
                    const Icon = icons[idx] || User;
                    return (
                      <div key={idx} className="flex items-center gap-3 text-sm">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    );
                  })}
                </div>

                <Button variant="gold" className="w-full" size="lg" asChild>
                  <Link to="/contato">Solicitar Transfer</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 max-w-3xl mx-auto bg-card p-8 rounded-2xl shadow-card"
        >
          <h3 className="font-display font-bold text-2xl text-foreground mb-4 text-center">
            Por que escolher nosso transfer?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Motorista brasileiro experiente",
              "Veículos executivos e climatizados",
              "Acompanhamento do voo em tempo real",
              "Preço fixo sem taxas extras",
              "Pagamento facilitado (dólar ou peso)",
              "Atendimento 24 horas",
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Transfers;
