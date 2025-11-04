import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [snowflakes] = useState(
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 10
    }))
  );

  const achievements = [
    { icon: 'Sword', title: 'Мастер сражений', description: 'Победил в 100+ битвах' },
    { icon: 'Pickaxe', title: 'Король шахт', description: 'Добыл 10000 блоков' },
    { icon: 'Trophy', title: 'Легенда сервера', description: 'Топ-1 игрок месяца' },
    { icon: 'Crown', title: 'Зимний воин', description: 'Особый зимний скин' }
  ];

  const stats = [
    { label: 'Часов в игре', value: '1,247', icon: 'Clock' },
    { label: 'Побед', value: '892', icon: 'Award' },
    { label: 'Друзей', value: '156', icon: 'Users' },
    { label: 'Уровень', value: '99', icon: 'Zap' }
  ];

  const gallery = [
    { title: 'Зимнее приключение', description: 'Покоритель снежных земель' },
    { title: 'Легендарный скин', description: 'Уникальный зимний образ' },
    { title: 'Боевой дух', description: 'Готов к любым испытаниям' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 via-sky-300 to-white relative overflow-hidden">
      <div className="snowfall">
        {snowflakes.map((flake) => (
          <div
            key={flake.id}
            className="snowflake"
            style={{
              left: `${flake.left}%`,
              animationDelay: `${flake.delay}s`,
              animationDuration: `${flake.duration}s`
            }}
          >
            ❄️
          </div>
        ))}
      </div>

      <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-cyan-500/90 to-blue-500/90 backdrop-blur-lg border-b-4 border-cyan-300 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg transform rotate-45">
              <span className="text-2xl transform -rotate-45">🎮</span>
            </div>
            <span className="text-3xl font-black text-white drop-shadow-lg pixel-font">
              ДЕН
            </span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#hero" className="text-white font-bold hover:text-cyan-200 transition-colors drop-shadow">О Дене</a>
            <a href="#stats" className="text-white font-bold hover:text-cyan-200 transition-colors drop-shadow">Статистика</a>
            <a href="#achievements" className="text-white font-bold hover:text-cyan-200 transition-colors drop-shadow">Достижения</a>
            <a href="#gallery" className="text-white font-bold hover:text-cyan-200 transition-colors drop-shadow">Галерея</a>
          </div>
          <Button className="bg-white text-cyan-600 hover:bg-cyan-100 font-bold shadow-lg">
            <Icon name="Heart" size={18} className="mr-2" />
            Подписаться
          </Button>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4 relative">
        <div className="container mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 blur-2xl opacity-50 animate-pulse"></div>
              <img 
                src="https://cdn.poehali.dev/files/e743f04c-dc92-4867-9ff8-1b90227d1c3e.png" 
                alt="Ден - Зимний воин" 
                className="relative w-80 h-80 object-contain mx-auto drop-shadow-2xl hover:scale-110 transition-transform duration-500 pixel-art"
              />
            </div>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black mb-6 text-white drop-shadow-lg pixel-font animate-bounce-slow">
            ДЕН
          </h1>
          
          <div className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
            <span className="flex items-center gap-2 font-bold">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              ОНЛАЙН
            </span>
          </div>
          
          <p className="text-2xl md:text-3xl text-blue-900 font-bold mb-8 max-w-3xl mx-auto drop-shadow">
            🎮 Легендарный игрок Minecraft<br/>
            ❄️ Покоритель зимних земель<br/>
            ⚔️ Мастер выживания
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-xl text-white font-bold">
              <Icon name="Play" size={24} className="mr-2" />
              Играть с Деном
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-4 border-white bg-white/80 hover:bg-white text-blue-600 font-bold shadow-xl">
              <Icon name="MessageCircle" size={24} className="mr-2" />
              Написать
            </Button>
          </div>

          <Card className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm border-4 border-cyan-300 shadow-2xl">
            <CardContent className="pt-6">
              <p className="text-xl text-blue-900 font-bold mb-4">
                "Зима - моё любимое время года! Снежные бои и ледяные приключения - это то, что делает Minecraft особенным!"
              </p>
              <p className="text-cyan-600 font-bold">- Ден</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="stats" className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-6xl font-black text-center mb-4 text-blue-900 pixel-font drop-shadow-lg">
            СТАТИСТИКА
          </h2>
          <p className="text-center text-blue-700 mb-12 text-xl font-bold">
            Впечатляющие достижения Дена
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="text-center hover:scale-105 transition-transform bg-gradient-to-br from-cyan-400 to-blue-500 border-4 border-white shadow-xl"
              >
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon name={stat.icon as any} size={32} className="text-cyan-600" />
                  </div>
                  <p className="text-5xl font-black text-white mb-2 drop-shadow-lg">{stat.value}</p>
                  <p className="text-white font-bold text-lg drop-shadow">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-6xl font-black text-center mb-4 text-blue-900 pixel-font drop-shadow-lg">
            ДОСТИЖЕНИЯ
          </h2>
          <p className="text-center text-blue-700 mb-12 text-xl font-bold">
            Награды и успехи легендарного игрока
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className="hover:scale-105 transition-all bg-white/90 backdrop-blur-sm border-4 border-cyan-300 shadow-xl"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transform rotate-12 hover:rotate-0 transition-transform">
                      <Icon name={achievement.icon as any} size={32} className="text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-blue-900 mb-2">{achievement.title}</CardTitle>
                      <CardDescription className="text-lg text-blue-600 font-semibold">{achievement.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-white/50 to-cyan-100/50">
        <div className="container mx-auto">
          <h2 className="text-6xl font-black text-center mb-4 text-blue-900 pixel-font drop-shadow-lg">
            ГАЛЕРЕЯ
          </h2>
          <p className="text-center text-blue-700 mb-12 text-xl font-bold">
            Моменты из приключений Дена
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {gallery.map((item, index) => (
              <Card 
                key={index}
                className="overflow-hidden hover:scale-105 transition-all bg-white border-4 border-cyan-300 shadow-xl group"
              >
                <div className="aspect-square bg-gradient-to-br from-sky-200 to-cyan-300 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/files/e743f04c-dc92-4867-9ff8-1b90227d1c3e.png" 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 pixel-art"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">{item.title}</CardTitle>
                  <CardDescription className="text-blue-600 font-semibold">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t-4 border-cyan-300 py-12 px-4 bg-gradient-to-r from-cyan-500 to-blue-600">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg transform rotate-45">
              <span className="text-2xl transform -rotate-45">🎮</span>
            </div>
            <span className="text-3xl font-black text-white pixel-font drop-shadow-lg">ДЕН</span>
          </div>
          <p className="text-white text-lg mb-6 font-bold drop-shadow">
            Легендарный игрок Minecraft | Зимний воин | Мастер выживания
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="ghost" size="icon" className="bg-white/20 hover:bg-white/30 text-white">
              <Icon name="Youtube" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="bg-white/20 hover:bg-white/30 text-white">
              <Icon name="Twitch" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="bg-white/20 hover:bg-white/30 text-white">
              <Icon name="MessageCircle" size={24} />
            </Button>
          </div>
        </div>
      </footer>

      <style>{`
        .snowfall {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }
        
        .snowflake {
          position: absolute;
          top: -20px;
          animation: fall linear infinite;
          font-size: 20px;
          opacity: 0.8;
        }
        
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .pixel-font {
          text-shadow: 4px 4px 0px rgba(0,0,0,0.2);
        }
        
        .pixel-art {
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
        }
      `}</style>
    </div>
  );
}
