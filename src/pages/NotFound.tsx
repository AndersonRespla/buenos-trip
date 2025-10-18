import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center px-4"
      >
        <h1 className="mb-4 text-8xl font-display font-bold text-primary">404</h1>
        <p className="mb-6 text-2xl text-muted-foreground">Página não encontrada</p>
        <p className="mb-8 text-muted-foreground max-w-md mx-auto">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Button variant="gold" size="lg" asChild>
          <Link to="/">
            <Home className="mr-2" />
            Voltar para Home
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFound;
