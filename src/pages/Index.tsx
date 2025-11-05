import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Index() {
  const [showCover, setShowCover] = useState(true);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {showCover ? (
        <div className="relative w-full h-screen flex items-center justify-center">
          <img
            src="https://cdn.poehali.dev/projects/9c6e7d6f-f922-4e5a-9f8d-266773cf0666/files/9487e485-d4d3-44f6-8cb2-608572a35497.jpg"
            alt="День и ночь - Обложка клипа"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
          
          <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center">
            <h1 className="text-6xl font-black text-white mb-2 drop-shadow-[0_0_20px_rgba(0,255,255,0.8)]">
              ДЕНЬ И НОЧЬ
            </h1>
            <p className="text-2xl text-cyan-400 font-bold">Music Video Cover</p>
          </div>

          <Button
            onClick={() => setShowCover(false)}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 text-lg font-bold shadow-lg hover:scale-110 transition-transform"
          >
            ✕ Закрыть
          </Button>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-4xl text-white mb-8">Обложка скрыта</h2>
          <Button
            onClick={() => setShowCover(true)}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 text-lg font-bold shadow-lg hover:scale-110 transition-transform"
          >
            🎨 Показать обложку
          </Button>
        </div>
      )}
    </div>
  );
}
