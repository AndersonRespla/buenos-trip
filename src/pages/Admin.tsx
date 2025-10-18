import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Pencil, Trash2, Plus, X } from "lucide-react";
import { useState } from "react";
import { tours as initialTours } from "@/data/mockData";
import { toast } from "sonner";

interface Tour {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  highlights: string[];
  image: string;
}

const Admin = () => {
  const [tours, setTours] = useState<Tour[]>(initialTours);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTour, setEditingTour] = useState<Tour | null>(null);
  const [formData, setFormData] = useState<Tour>({
    id: "",
    title: "",
    description: "",
    duration: "",
    price: "",
    highlights: [""],
    image: "",
  });

  const openModal = (tour?: Tour) => {
    if (tour) {
      setEditingTour(tour);
      setFormData(tour);
    } else {
      setEditingTour(null);
      setFormData({
        id: Date.now().toString(),
        title: "",
        description: "",
        duration: "",
        price: "",
        highlights: [""],
        image: "",
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingTour(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingTour) {
      setTours((prev) => prev.map((t) => (t.id === editingTour.id ? formData : t)));
      toast.success("Tour atualizado com sucesso!");
    } else {
      setTours((prev) => [...prev, formData]);
      toast.success("Tour adicionado com sucesso!");
    }
    closeModal();
  };

  const handleDelete = (id: string) => {
    setTours((prev) => prev.filter((t) => t.id !== id));
    toast.success("Tour removido com sucesso!");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleHighlightChange = (index: number, value: string) => {
    const newHighlights = [...formData.highlights];
    newHighlights[index] = value;
    setFormData((prev) => ({ ...prev, highlights: newHighlights }));
  };

  const addHighlight = () => {
    setFormData((prev) => ({ ...prev, highlights: [...prev.highlights, ""] }));
  };

  const removeHighlight = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      highlights: prev.highlights.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="min-h-screen pt-20 pb-24 md:pb-8 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-display font-bold text-4xl text-foreground mb-2">
                Painel Administrativo
              </h1>
              <p className="text-muted-foreground">
                Gerencie os pacotes turísticos da Buenos Trip
              </p>
            </div>
            <Button variant="gold" size="lg" onClick={() => openModal()}>
              <Plus className="mr-2" />
              Novo Tour
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-2xl shadow-card overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 font-display font-semibold text-foreground">
                    Tour
                  </th>
                  <th className="text-left p-4 font-display font-semibold text-foreground">
                    Duração
                  </th>
                  <th className="text-left p-4 font-display font-semibold text-foreground">
                    Preço
                  </th>
                  <th className="text-right p-4 font-display font-semibold text-foreground">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {tours.map((tour, index) => (
                  <motion.tr
                    key={tour.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-t border-border hover:bg-muted/30 transition-colors"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={tour.image}
                          alt={tour.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div>
                          <p className="font-display font-semibold text-foreground">
                            {tour.title}
                          </p>
                          <p className="text-sm text-muted-foreground line-clamp-1">
                            {tour.description}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-muted-foreground">{tour.duration}</td>
                    <td className="p-4">
                      <span className="font-display font-bold text-accent">
                        {tour.price}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => openModal(tour)}
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(tour.id)}
                        >
                          <Trash2 className="w-4 h-4 text-destructive" />
                        </Button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card rounded-2xl shadow-elevated max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 border-b border-border flex items-center justify-between sticky top-0 bg-card z-10">
              <h2 className="font-display font-bold text-2xl text-foreground">
                {editingTour ? "Editar Tour" : "Novo Tour"}
              </h2>
              <Button variant="ghost" size="icon" onClick={closeModal}>
                <X className="w-5 h-5" />
              </Button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Título
                </label>
                <Input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Nome do tour"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Descrição
                </label>
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Descrição completa do tour"
                  rows={4}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Duração
                  </label>
                  <Input
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    placeholder="Ex: 4 horas"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Preço
                  </label>
                  <Input
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="Ex: USD 120"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  URL da Imagem
                </label>
                <Input
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="/src/assets/tour-exemplo.jpg"
                  required
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-foreground">
                    Destaques
                  </label>
                  <Button type="button" variant="ghost" size="sm" onClick={addHighlight}>
                    <Plus className="w-4 h-4 mr-1" />
                    Adicionar
                  </Button>
                </div>
                <div className="space-y-2">
                  {formData.highlights.map((highlight, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={highlight}
                        onChange={(e) => handleHighlightChange(index, e.target.value)}
                        placeholder="Destaque do tour"
                      />
                      {formData.highlights.length > 1 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => removeHighlight(index)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={closeModal}
                >
                  Cancelar
                </Button>
                <Button type="submit" variant="gold" className="flex-1">
                  {editingTour ? "Salvar Alterações" : "Criar Tour"}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Admin;
