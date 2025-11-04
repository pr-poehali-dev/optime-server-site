import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [onlinePlayers, setOnlinePlayers] = useState(847);

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlinePlayers(prev => Math.max(800, Math.min(1200, prev + Math.floor(Math.random() * 21) - 10)));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const servers = [
    {
      name: 'Анархия',
      mode: 'Survival',
      online: 342,
      max: 500,
      version: '1.20.1',
      icon: 'Swords',
      description: 'Полная свобода действий без правил'
    },
    {
      name: 'РП Сервер',
      mode: 'RolePlay',
      online: 289,
      max: 300,
      version: '1.19.4',
      icon: 'Users',
      description: 'Погрузись в мир ролевых игр'
    },
    {
      name: 'SkyBlock',
      mode: 'Economy',
      online: 216,
      max: 400,
      version: '1.20.1',
      icon: 'Cloud',
      description: 'Развивай свой остров в небесах'
    }
  ];

  const donatePackages = [
    {
      name: 'VIP',
      price: 199,
      features: ['Цветной ник', 'Приват территории', '5 домов', 'Кит раз в день'],
      color: 'primary'
    },
    {
      name: 'PREMIUM',
      price: 499,
      features: ['Все из VIP', 'Полёт в лобби', '10 домов', 'Уникальные эффекты', 'Кит 2 раза в день'],
      color: 'secondary',
      popular: true
    },
    {
      name: 'LEGEND',
      price: 999,
      features: ['Все из PREMIUM', 'Полёт на всех серверах', '20 домов', 'Эксклюзивные питомцы', 'Кит 4 раза в день'],
      color: 'accent'
    }
  ];

  const rules = [
    { icon: 'Ban', title: 'Запрещено использование читов', description: 'Любые модификации дающие преимущество' },
    { icon: 'MessageSquareOff', title: 'Уважение к игрокам', description: 'Без оскорблений и токсичности' },
    { icon: 'ShieldAlert', title: 'Запрет на грифинг', description: 'Не ломай чужие постройки без разрешения' },
    { icon: 'Megaphone', title: 'Без рекламы', description: 'Реклама других серверов запрещена' },
    { icon: 'Bug', title: 'Багоюз наказуем', description: 'Использование багов карается баном' },
    { icon: 'UserX', title: 'Мультиаккаунты', description: 'Один игрок - один аккаунт' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center glow-primary">
              <Icon name="Gamepad2" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              OpTime
            </span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#main" className="hover:text-primary transition-colors">Главная</a>
            <a href="#servers" className="hover:text-primary transition-colors">Сервера</a>
            <a href="#donate" className="hover:text-primary transition-colors">Донат</a>
            <a href="#rules" className="hover:text-primary transition-colors">Правила</a>
          </div>
          <Button className="glow-primary">
            <Icon name="Play" size={18} className="mr-2" />
            Играть
          </Button>
        </div>
      </nav>

      <section id="main" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              OpTime
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Легендарный игровой опыт. Множество режимов. Активное комьюнити.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="text-lg px-8 py-6 glow-primary hover:scale-105 transition-transform">
                <Icon name="Rocket" size={24} className="mr-2" />
                Начать играть
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                <Icon name="MessageCircle" size={24} className="mr-2" />
                Discord
              </Button>
            </div>
            <Card className="max-w-md mx-auto bg-card/50 backdrop-blur-sm border-primary/50 glow-primary animate-pulse-glow">
              <CardContent className="pt-6 flex items-center justify-center gap-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse glow-accent"></div>
                <div>
                  <p className="text-4xl font-bold text-primary">{onlinePlayers}</p>
                  <p className="text-sm text-muted-foreground">игроков онлайн</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="servers" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <h2 className="text-5xl font-black text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Наши сервера
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Выбери режим по душе и начни свое приключение
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {servers.map((server, index) => (
              <Card 
                key={index} 
                className="hover:scale-105 transition-all duration-300 cursor-pointer bg-card/80 backdrop-blur-sm border-2 hover:border-primary hover:glow-primary animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                      <Icon name={server.icon as any} size={28} className="text-white" />
                    </div>
                    <Badge variant="secondary" className="text-sm">
                      {server.online}/{server.max}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">{server.name}</CardTitle>
                  <CardDescription className="text-base">{server.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 mb-4">
                    <Badge variant="outline">{server.mode}</Badge>
                    <Badge variant="outline">{server.version}</Badge>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 mb-2">
                    <div 
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(server.online / server.max) * 100}%` }}
                    ></div>
                  </div>
                  <Button className="w-full mt-4 glow-primary">
                    <Icon name="LogIn" size={18} className="mr-2" />
                    Подключиться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="donate" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-black text-center mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Донат-привилегии
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Поддержи проект и получи эксклюзивные возможности
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {donatePackages.map((pkg, index) => (
              <Card 
                key={index}
                className={`relative hover:scale-105 transition-all duration-300 bg-card/80 backdrop-blur-sm border-2 ${
                  pkg.popular 
                    ? 'border-secondary glow-secondary' 
                    : `hover:border-${pkg.color} hover:glow-${pkg.color}`
                } animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-secondary text-secondary-foreground px-4 py-1">
                      Популярный
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl mb-2">{pkg.name}</CardTitle>
                  <div className="text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {pkg.price}₽
                  </div>
                  <CardDescription>в месяц</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${pkg.popular ? 'glow-secondary' : 'glow-primary'}`}>
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="rules" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-black text-center mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Правила сервера
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Соблюдай правила, чтобы игра была комфортной для всех
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {rules.map((rule, index) => (
              <Card 
                key={index}
                className="hover:scale-105 transition-all duration-300 bg-card/80 backdrop-blur-sm hover:border-accent hover:glow-accent animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={rule.icon as any} size={24} className="text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg mb-1">{rule.title}</CardTitle>
                      <CardDescription>{rule.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Gamepad2" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold">OpTime</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Легендарный игровой опыт с 2024 года
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="ghost" size="icon">
              <Icon name="MessageCircle" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Youtube" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Instagram" size={20} />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
