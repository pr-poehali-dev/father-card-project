import { Card } from "@/components/ui/card";
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
      link.download = "otkrytka-den-ottsa.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (error) {
      console.error("Ошибка при сохранении открытки:", error);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://cdn.poehali.dev/projects/793041ee-e788-44d0-b878-835da0fbab59/files/f5cb373c-8b8d-4c9a-b054-f13a4e686af8.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-2xl space-y-4">
          <Card ref={cardRef} className="w-full bg-white/95 backdrop-blur-sm shadow-2xl border-2 border-primary/20 animate-scale-in">
            <div className="p-8 md:p-12 space-y-8">
              <div className="text-center space-y-4 animate-fade-in">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Wheat" size={40} className="text-primary" />
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                  С Днём отца!
                </h1>
                
                <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
              </div>

              <div className="space-y-6 text-center animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed" style={{ fontFamily: "'Merriweather', serif" }}>
                  Уважаемые партнёры!
                </p>
                
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed" style={{ fontFamily: "'Merriweather', serif" }}>
                  От всей души поздравляем вас с Днём отца! Ваш ежедневный труд на земле — 
                  это не просто работа, это призвание, которое требует настоящей преданности и мужества.
                </p>
                
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed" style={{ fontFamily: "'Merriweather', serif" }}>
                  Благодарим за плодотворное сотрудничество и ответственный подход к делу. 
                  Ваши золотые руки выращивают не только щедрые урожаи, но и будущее для следующих поколений.
                </p>
                
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed" style={{ fontFamily: "'Merriweather', serif" }}>
                  Желаем вам и вашим семьям крепкого здоровья, благополучия и успешных урожаев. 
                  Пусть каждый день приносит радость, а совместная работа укрепляет наше партнёрство!
                </p>
              </div>

              <div className="flex justify-center gap-6 pt-6 animate-fade-in" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Icon name="Sprout" size={24} className="text-secondary" />
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">Урожай</span>
                </div>
                
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Icon name="Sun" size={24} className="text-accent" />
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">Тепло</span>
                </div>
                
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="Heart" size={24} className="text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">Успех</span>
                </div>
              </div>

              <div className="text-center pt-4 animate-fade-in" style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}>
                <p className="text-2xl font-semibold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                  С уважением и благодарностью 🤝
                </p>
              </div>
            </div>
          </Card>

          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.8s', opacity: 0, animationFillMode: 'forwards' }}>
            <Button 
              onClick={handleDownload}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all"
            >
              <Icon name="Download" size={20} className="mr-2" />
              Скачать открытку
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;