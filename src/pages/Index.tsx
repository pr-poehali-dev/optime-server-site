import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [onlinePlayers, setOnlinePlayers] = useState(3842);

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlinePlayers(prev => Math.max(3500, Math.min(4500, prev + Math.floor(Math.random() * 41) - 20)));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const gamemodes = [
    {
      name: 'BedWars',
      icon: 'Bed',
      online: 1247,
      description: 'Защищай свою кровать и уничтожай вражеские',
      color: 'from-red-500 to-orange-500',
      popular: true
    },
    {
      name: 'SkyWars',
      icon: 'Cloud',
      online: 892,
      description: 'Сражайся на летающих островах',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'HungerGames',
      icon: 'Swords',
      online: 567,
      description: 'Выживи в королевской битве',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'BuildBattle',
      icon: 'Paintbrush',
      online: 423,
      description: 'Покажи свой талант строителя',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Duels',
      icon: 'Sword',
      online: 389,
      description: 'Сражайся 1 на 1',
      color: 'from-amber-500 to-yellow-500'
    },
    {
      name: 'Prison',
      icon: 'Lock',
      online: 324,
      description: 'Добывай ресурсы и прокачивайся',
      color: 'from-slate-500 to-gray-600'
    }
  ];

  const features = [
    {
      icon: 'Zap',
      title: 'Мощные сервера',
      description: 'Нет лагов даже с 4000+ игроками онлайн'
    },
    {
      icon: 'Trophy',
      title: 'Система рангов',
      description: 'Прокачивайся и получай уникальные возможности'
    },
    {
      icon: 'Star',
      title: 'Уникальные режимы',
      description: 'Собственные доработки популярных мини-игр'
    },
    {
      icon: 'Shield',
      title: 'Честная игра',
      description: 'Продвинутая защита от читеров'
    }
  ];

  const ranks = [
    {
      name: 'VIP',
      price: '149₽',
      color: 'from-green-400 to-emerald-500',
      features: ['Цветной ник', 'Приоритетный вход', 'Кит VIP', '2x опыта']
    },
    {
      name: 'PREMIUM',
      price: '299₽',
      color: 'from-cyan-400 to-blue-500',
      features: ['Всё из VIP', 'Полёт в лобби', '3x опыта', 'Эффекты частиц'],
      popular: true
    },
    {
      name: 'LEGEND',
      price: '599₽',
      color: 'from-purple-400 to-pink-500',
      features: ['Всё из PREMIUM', 'Уникальные эффекты', '5x опыта', 'Эксклюзивный чат']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-blue-950 to-cyan-950 relative overflow-hidden">
      <div className="fixed inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/50 shadow-lg shadow-cyan-500/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 rounded-lg blur-sm animate-pulse"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-xl shadow-cyan-500/50">
                <Icon name="Gem" size={24} className="text-white" />
              </div>
            </div>
            <span className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Cristallix
            </span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#main" className="text-gray-300 hover:text-cyan-400 transition-colors font-semibold">Главная</a>
            <a href="#games" className="text-gray-300 hover:text-cyan-400 transition-colors font-semibold">Режимы</a>
            <a href="#donate" className="text-gray-300 hover:text-cyan-400 transition-colors font-semibold">Донат</a>
            <a href="#features" className="text-gray-300 hover:text-cyan-400 transition-colors font-semibold">Особенности</a>
          </div>
          <Button className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-600 text-white font-bold shadow-lg shadow-cyan-500/50">
            <Icon name="Play" size={18} className="mr-2" />
            Играть
          </Button>
        </div>
      </nav>

      <section id="main" className="pt-32 pb-20 px-4 relative">
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8 animate-fade-in">
            <div className="inline-block relative mb-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-32 h-32 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/50 animate-float">
                <Icon name="Gem" size={64} className="text-white" />
              </div>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl animate-glow">
              Cristallix
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-bold">
              Легендарный Minecraft сервер
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Более 10 уникальных режимов игры. Присоединяйся к тысячам игроков!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-600 text-white font-bold shadow-xl shadow-cyan-500/30 hover:scale-105 transition-all">
              <Icon name="Rocket" size={24} className="mr-2" />
              Начать играть
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-bold hover:scale-105 transition-all">
              <Icon name="MessageCircle" size={24} className="mr-2" />
              Discord
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 font-bold hover:scale-105 transition-all">
              <Icon name="Users" size={24} className="mr-2" />
              VK
            </Button>
          </div>

          <Card className="max-w-md mx-auto bg-slate-900/50 backdrop-blur-sm border-2 border-cyan-500/50 shadow-2xl shadow-cyan-500/20">
            <CardContent className="pt-6 flex items-center justify-center gap-4">
              <div className="w-4 h-4 bg-cyan-500 rounded-full animate-pulse shadow-lg shadow-cyan-500/50"></div>
              <div>
                <p className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">{onlinePlayers}</p>
                <p className="text-sm text-gray-400 font-semibold">игроков онлайн прямо сейчас</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="games" className="py-20 px-4 bg-slate-950/30 backdrop-blur-sm relative">
        <div className="container mx-auto relative z-10">
          <h2 className="text-5xl font-black text-center mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Игровые режимы
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Выбери свою любимую мини-игру
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gamemodes.map((mode, index) => (
              <Card 
                key={index} 
                className="hover:scale-105 transition-all duration-300 cursor-pointer bg-slate-900/80 backdrop-blur-sm border-2 border-slate-700 hover:border-cyan-500/50 shadow-xl hover:shadow-cyan-500/20 relative overflow-hidden"
              >
                {mode.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1">
                    <Icon name="Star" size={12} />
                    Популярно
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${mode.color} rounded-lg flex items-center justify-center shadow-lg`}>
                      <Icon name={mode.icon as any} size={28} className="text-white" />
                    </div>
                    <Badge className="bg-green-500/20 text-green-400 border border-green-500/50">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                      {mode.online}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-white">{mode.name}</CardTitle>
                  <CardDescription className="text-base text-gray-400">{mode.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className={`w-full bg-gradient-to-r ${mode.color} text-white font-bold hover:scale-105 transition-all`}
                  >
                    <Icon name="Play" size={18} className="mr-2" />
                    Играть
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="donate" className="py-20 px-4 relative">
        <div className="container mx-auto relative z-10">
          <h2 className="text-5xl font-black text-center mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Донат привилегии
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Поддержи проект и получи эксклюзивные возможности
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {ranks.map((rank, index) => (
              <Card 
                key={index}
                className={`hover:scale-105 transition-all bg-slate-900/80 backdrop-blur-sm border-2 ${rank.popular ? 'border-cyan-500 shadow-2xl shadow-cyan-500/30' : 'border-slate-700'} relative overflow-hidden`}
              >
                {rank.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center text-sm font-bold py-2">
                    🔥 САМЫЙ ПОПУЛЯРНЫЙ
                  </div>
                )}
                <CardHeader className={rank.popular ? 'pt-12' : ''}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${rank.color} rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <Icon name="Crown" size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-3xl text-center text-white mb-2">{rank.name}</CardTitle>
                  <p className={`text-4xl font-black text-center mb-4 bg-gradient-to-r ${rank.color} bg-clip-text text-transparent`}>
                    {rank.price}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {rank.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <Icon name="Check" size={18} className="text-green-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full bg-gradient-to-r ${rank.color} text-white font-bold hover:scale-105 transition-all shadow-lg`}
                  >
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-slate-950/30 backdrop-blur-sm relative">
        <div className="container mx-auto relative z-10">
          <h2 className="text-5xl font-black text-center mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Почему Cristallix?
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Нас выбирают тысячи игроков
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="text-center hover:scale-105 transition-all bg-slate-900/80 backdrop-blur-sm border-2 border-slate-700 hover:border-cyan-500/50 shadow-xl"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-500/30">
                    <Icon name={feature.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl text-white mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-400">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-cyan-500/50 py-12 px-4 bg-slate-950/80 backdrop-blur-sm relative">
        <div className="container mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 rounded-lg blur-sm animate-pulse"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-xl shadow-cyan-500/50">
                <Icon name="Gem" size={24} className="text-white" />
              </div>
            </div>
            <span className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Cristallix</span>
          </div>
          <p className="text-gray-400 text-lg mb-6">
            Легендарный Minecraft сервер | 10+ режимов игры | 4000+ игроков онлайн
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="ghost" size="icon" className="bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-slate-700">
              <Icon name="MessageCircle" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-slate-700">
              <Icon name="Youtube" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-slate-700">
              <Icon name="Users" size={24} />
            </Button>
          </div>
          <p className="text-gray-600 text-sm mt-8">
            © 2025 Cristallix. Все права защищены.
          </p>
        </div>
      </footer>

      <style>{`
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
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            filter: drop-shadow(0 0 20px rgba(34, 211, 238, 0.5));
          }
          50% {
            filter: drop-shadow(0 0 40px rgba(34, 211, 238, 0.8));
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
