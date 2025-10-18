import { motion } from "framer-motion";
import { Heart, Shield, Users } from "lucide-react";
import { teamMembers } from "@/data/mockData";
import transferImage from "@/assets/transfer-service.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-20 pb-24 md:pb-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Sobre a Buenos Trip
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Brasileiros apaixonados por Buenos Aires, oferecendo o melhor serviço de transporte e turismo
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-display font-bold text-3xl text-foreground mb-4">
                Nossa Missão
              </h2>
              <p className="text-muted-foreground mb-4">
                Fundada por brasileiros que se apaixonaram por Buenos Aires, a Buenos Trip nasceu da vontade de oferecer aos conterrâneos um serviço de qualidade, com aquele atendimento caloroso que só brasileiro sabe dar.
              </p>
              <p className="text-muted-foreground mb-4">
                Conhecemos as dificuldades de estar em outro país, não falar o idioma perfeitamente e querer se sentir seguro. Por isso, oferecemos mais do que transporte: oferecemos tranquilidade, dicas locais e aquela conversa amiga que faz toda diferença.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={transferImage}
                alt="Nossa equipe"
                className="w-full h-80 object-cover rounded-2xl shadow-card"
              />
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              icon: Heart,
              title: "Atendimento Brasileiro",
              description: "Aquele jeitinho acolhedor que só nós brasileiros temos",
            },
            {
              icon: Shield,
              title: "Confiança Total",
              description: "Veículos revisados e motoristas experientes",
            },
            {
              icon: Users,
              title: "Experiência Local",
              description: "Anos de vivência em Buenos Aires para te orientar",
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl shadow-card text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-display font-bold text-3xl text-foreground mb-8 text-center">
            Conheça Nossa Equipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-card p-6 rounded-2xl shadow-card"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-accent text-center font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-center text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
