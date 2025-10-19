import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import html2canvas from "html2canvas";
import { useRef } from "react";

const Index = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!cardRef.current) return;

    try {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: null,
        scale: 2,
        logging: false,
        useCORS: true,
      });

      const link = document.createElement("a");
      link.download = "status-den-ottsa.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (error) {
      console.error("Ошибка при сохранении:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-accent/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4">
        <div 
          ref={cardRef} 
          className="w-full aspect-[9/16] relative overflow-hidden rounded-3xl shadow-2xl animate-scale-in"
          style={{ maxWidth: '400px', margin: '0 auto' }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://cdn.poehali.dev/projects/793041ee-e788-44d0-b878-835da0fbab59/files/ee0b0e48-1276-4405-9f5e-3675691ef0e3.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70"></div>
          </div>

          <div className="relative z-10 h-full flex flex-col justify-between p-8">
            <div className="text-center animate-fade-in">
              <div className="inline-block p-4 bg-white/20 backdrop-blur-md rounded-full mb-4">
                <Icon name="Wheat" size={48} className="text-white drop-shadow-lg" />
              </div>
              <h1 className="text-5xl font-bold text-white drop-shadow-lg mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                С Днём отца!
              </h1>
            </div>

            <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <p className="text-lg font-medium text-center text-foreground/90 leading-relaxed" style={{ fontFamily: "'Merriweather', serif" }}>
                  Поздравляем наших партнёров с праздником!
                </p>
                <p className="text-base text-center text-foreground/80 mt-3 leading-relaxed" style={{ fontFamily: "'Merriweather', serif" }}>
                  Ваш труд на земле — это настоящее призвание. Благодарим за сотрудничество!
                </p>
              </div>

              <div className="flex justify-center gap-4">
                <div className="flex flex-col items-center gap-1 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3">
                  <Icon name="Sprout" size={24} className="text-secondary" />
                  <span className="text-xs font-semibold text-foreground">Урожай</span>
                </div>
                <div className="flex flex-col items-center gap-1 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3">
                  <Icon name="Heart" size={24} className="text-primary" />
                  <span className="text-xs font-semibold text-foreground">Успех</span>
                </div>
              </div>

              <div className="text-center">
                <p className="text-xl font-bold text-white drop-shadow-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                  С уважением 🤝
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
          <Button 
            onClick={handleDownload}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all"
          >
            <Icon name="Download" size={20} className="mr-2" />
            Скачать для WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
