import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [onlinePlayers, setOnlinePlayers] = useState(1247);

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlinePlayers(prev => Math.max(1000, Math.min(1500, prev + Math.floor(Math.random() * 21) - 10)));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const servers = [
    {
      name: 'Voltex',
      mode: 'Анархия',
      status: 'maintenance',
      description: 'Полная свобода без правил',
      icon: 'Zap',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'EmeraldGrief',
      mode: 'Гриферство',
      status: 'online',
      online: 487,
      description: 'Разрушай и строй',
      icon: 'Flame',
      color: 'from-emerald-500 to-green-500'
    },
    {
      name: 'ReallyBull',
      mode: 'Выживание',
      status: 'maintenance',
      description: 'Настоящее выживание',
      icon: 'Shield',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'CooMix',
      mode: 'Мини-игры',
      status: 'online',
      online: 342,
      description: 'Микс лучших режимов',
      icon: 'Sparkles',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const features = [
    {
      icon: 'Server',
      title: 'Сеть серверов',
      description: '4 уникальных сервера с разными режимами игры'
    },
    {
      icon: 'Users',
      title: 'Активное комьюнити',
      description: 'Более 1000 игроков онлайн каждый день'
    },
    {
      icon: 'Shield',
      title: 'Защита от читов',
      description: 'Современная античит система'
    },
    {
      icon: 'Headphones',
      title: 'Поддержка 24/7',
      description: 'Администрация всегда на связи'
    }
  ];

  const rules = [
    { icon: 'Ban', title: 'Запрещены читы', description: 'Использование модификаций карается баном' },
    { icon: 'MessageSquareOff', title: 'Уважение к игрокам', description: 'Без оскорблений и токсичности' },
    { icon: 'Megaphone', title: 'Без рекламы', description: 'Реклама других серверов запрещена' },
    { icon: 'Bug', title: 'Багоюз наказуем', description: 'Сообщайте о багах администрации' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800">
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-xl border-b border-emerald-500/50 shadow-lg shadow-emerald-500/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-green-500 rounded-lg animate-pulse"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/50">
                <Icon name="Box" size={24} className="text-white" />
              </div>
            </div>
            <span className="text-3xl font-black bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              ProxyCraft
            </span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#main" className="text-gray-300 hover:text-emerald-400 transition-colors font-semibold">Главная</a>
            <a href="#servers" className="text-gray-300 hover:text-emerald-400 transition-colors font-semibold">Сервера</a>
            <a href="#features" className="text-gray-300 hover:text-emerald-400 transition-colors font-semibold">Особенности</a>
            <a href="#rules" className="text-gray-300 hover:text-emerald-400 transition-colors font-semibold">Правила</a>
          </div>
          <Button className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-bold shadow-lg shadow-emerald-500/50">
            <Icon name="Play" size={18} className="mr-2" />
            Играть
          </Button>
        </div>
      </nav>

      <section id="main" className="pt-32 pb-20 px-4 relative">
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-7xl md:text-9xl font-black mb-6 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent drop-shadow-2xl">
              ProxyCraft
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-bold">
              Сеть серверов Minecraft
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Выбирай из 4 уникальных серверов и начни своё приключение
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-bold shadow-xl shadow-emerald-500/30">
              <Icon name="Rocket" size={24} className="mr-2" />
              Начать играть
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 font-bold">
              <Icon name="MessageCircle" size={24} className="mr-2" />
              Discord
            </Button>
          </div>

          <Card className="max-w-md mx-auto bg-slate-800/50 backdrop-blur-sm border-2 border-emerald-500/50 shadow-2xl shadow-emerald-500/20">
            <CardContent className="pt-6 flex items-center justify-center gap-4">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50"></div>
              <div>
                <p className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">{onlinePlayers}</p>
                <p className="text-sm text-gray-400 font-semibold">игроков онлайн</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="servers" className="py-20 px-4 bg-slate-900/50 relative">
        <div className="container mx-auto relative z-10">
          <h2 className="text-5xl font-black text-center mb-4 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
            Наши сервера
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Каждый сервер - уникальный игровой опыт
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servers.map((server, index) => (
              <Card 
                key={index} 
                className="hover:scale-105 transition-all duration-300 cursor-pointer bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700 hover:border-emerald-500/50 shadow-xl hover:shadow-emerald-500/20"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${server.color} rounded-lg flex items-center justify-center shadow-lg`}>
                      <Icon name={server.icon as any} size={28} className="text-white" />
                    </div>
                    {server.status === 'online' ? (
                      <Badge className="bg-green-500/20 text-green-400 border border-green-500/50">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                        Онлайн
                      </Badge>
                    ) : (
                      <Badge className="bg-orange-500/20 text-orange-400 border border-orange-500/50">
                        <Icon name="Wrench" size={12} className="mr-1" />
                        Тех. работы
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-2xl text-white">{server.name}</CardTitle>
                  <CardDescription className="text-base text-gray-400">{server.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="mb-4 border-emerald-500/50 text-emerald-400">{server.mode}</Badge>
                  {server.status === 'online' && server.online && (
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">Онлайн</span>
                        <span className="text-emerald-400 font-bold">{server.online}</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div 
                          className={`bg-gradient-to-r ${server.color} h-2 rounded-full transition-all duration-500`}
                          style={{ width: `${(server.online / 500) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  <Button 
                    className={`w-full ${server.status === 'online' ? 'bg-gradient-to-r ' + server.color : 'bg-slate-700'} text-white font-bold`}
                    disabled={server.status !== 'online'}
                  >
                    {server.status === 'online' ? (
                      <>
                        <Icon name="LogIn" size={18} className="mr-2" />
                        Подключиться
                      </>
                    ) : (
                      <>
                        <Icon name="Wrench" size={18} className="mr-2" />
                        На тех. работах
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 relative">
        <div className="container mx-auto relative z-10">
          <h2 className="text-5xl font-black text-center mb-4 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
            Особенности сети
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Почему стоит играть на ProxyCraft
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="text-center hover:scale-105 transition-all bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700 hover:border-emerald-500/50 shadow-xl"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/30">
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

      <section id="rules" className="py-20 px-4 bg-slate-900/50 relative">
        <div className="container mx-auto relative z-10">
          <h2 className="text-5xl font-black text-center mb-4 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
            Правила сервера
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Соблюдай правила для комфортной игры
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {rules.map((rule, index) => (
              <Card 
                key={index}
                className="bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700 hover:border-emerald-500/50 transition-all shadow-xl"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Icon name={rule.icon as any} size={24} className="text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-white mb-2">{rule.title}</CardTitle>
                      <CardDescription className="text-gray-400">{rule.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-emerald-500/50 py-12 px-4 bg-slate-950/80 backdrop-blur-sm relative">
        <div className="container mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-green-500 rounded-lg animate-pulse"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/50">
                <Icon name="Box" size={24} className="text-white" />
              </div>
            </div>
            <span className="text-3xl font-black bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">ProxyCraft</span>
          </div>
          <p className="text-gray-400 text-lg mb-6">
            Сеть серверов Minecraft | 4 уникальных сервера | Более 1000 игроков
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="ghost" size="icon" className="bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700">
              <Icon name="MessageCircle" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700">
              <Icon name="Youtube" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700">
              <Icon name="Users" size={24} />
            </Button>
          </div>
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
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}
