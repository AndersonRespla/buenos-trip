import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Car, Map, Shield, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-buenos-aires.jpg";
import transferImage from "@/assets/transfer-service.jpg";
import tourLaboca from "@/assets/tour-laboca.jpg";
import tourRecoleta from "@/assets/tour-recoleta.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Buenos Aires"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6"
          >
            Seu Motorista Brasileiro em
            <span className="block text-accent mt-2">Buenos Aires 🇧🇷</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Transfer aeroporto e tours turísticos com conforto, segurança e aquele atendimento brasileiro que você merece
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/contato">
                <MessageCircle className="mr-2" />
                Reservar Agora
              </Link>
            </Button>
            <Button variant="gold" size="xl" asChild>
              <Link to="/tours">
                <Map className="mr-2" />
                Ver Tours
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Car,
                title: "Transfer Aeroporto",
                description: "Serviço de transfer executivo dos aeroportos Ezeiza e Aeroparque",
                delay: 0,
              },
              {
                icon: Map,
                title: "Tours Personalizados",
                description: "Roteiros turísticos exclusivos com guia brasileiro experiente",
                delay: 0.2,
              },
              {
                icon: Shield,
                title: "Confiança Total",
                description: "Motoristas brasileiros qualificados e veículos revisados",
                delay: 0.4,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: feature.delay, duration: 0.5 }}
                className="bg-card p-8 rounded-2xl shadow-card hover:shadow-elevated transition-all text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Descubra Buenos Aires
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore os lugares mais incríveis da capital argentina com nossos tours exclusivos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { image: tourLaboca, title: "La Boca", subtitle: "Bairro mais colorido", link: "/tours" },
              { image: tourRecoleta, title: "Recoleta", subtitle: "Sofisticação e cultura", link: "/tours" },
              { image: transferImage, title: "Transfer Executivo", subtitle: "Conforto garantido", link: "/transfers" },
              { image: heroImage, title: "City Tour", subtitle: "Principais atrações", link: "/tours" },
            ].map((item, index) => (
              <Link key={index} to={item.link}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer shadow-card hover:shadow-elevated transition-all"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="font-display font-bold text-2xl text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-white/80">{item.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Button variant="gold" size="lg" asChild>
              <Link to="/tours">Ver Todos os Tours</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
