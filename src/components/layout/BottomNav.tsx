import { Link, useLocation } from "react-router-dom";
import { Home, Car, Map, MessageCircle, User } from "lucide-react";
import { motion } from "framer-motion";

export const BottomNav = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/transfers", icon: Car, label: "Transfers" },
    { path: "/tours", icon: Map, label: "Tours" },
    { path: "/contato", icon: MessageCircle, label: "Contato" },
    { path: "/sobre", icon: User, label: "Sobre" },
  ];

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card/95 backdrop-blur-md border-t border-border shadow-elevated"
    >
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex flex-col items-center justify-center flex-1 h-full group"
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-xl transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground group-hover:text-primary"
                }`}
              >
                <Icon className="w-5 h-5" />
              </motion.div>
              <span
                className={`text-xs mt-1 font-medium ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
};
