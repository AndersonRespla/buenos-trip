import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-soft"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
            <MapPin className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="hidden sm:block">
            <span className="font-display font-bold text-xl text-foreground">Buenos Trip</span>
            <p className="text-xs text-muted-foreground">Seu motorista brasileiro 🇧🇷</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {[
            { path: "/", label: "Home" },
            { path: "/transfers", label: "Transfers" },
            { path: "/tours", label: "Tours" },
            { path: "/sobre", label: "Sobre" },
            { path: "/contato", label: "Contato" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === item.path
                  ? "text-primary font-semibold"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};
