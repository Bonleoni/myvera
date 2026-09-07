'use client';

import { motion } from 'framer-motion';

export function IPhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative mx-auto max-w-[280px]"
    >
      {/* iPhone Frame */}
      <div className="relative rounded-[3rem] bg-gray-900 p-3 shadow-2xl">
        {/* Notch */}
        <div className="absolute left-1/2 top-4 h-6 w-32 -translate-x-1/2 rounded-full bg-gray-900"></div>
        
        {/* Screen */}
        <div className="overflow-hidden rounded-[2.5rem] bg-white">
          {/* Status Bar */}
          <div className="flex items-center justify-between bg-gradient-to-b from-gray-50 to-white px-4 pt-3 pb-2">
            <span className="text-xs font-semibold text-gray-900">9:41</span>
            <div className="flex items-center gap-1">
              <div className="h-3 w-3 rounded-full bg-gray-900"></div>
              <div className="h-3 w-3 rounded-full bg-gray-900"></div>
            </div>
          </div>

          {/* WhatsApp Chat */}
          <div className="bg-gradient-to-b from-gray-50 to-white p-4 min-h-[500px]">
            {/* Chat Header */}
            <div className="mb-4 flex items-center gap-3 border-b border-gray-200 pb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-600">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">VERA Koç</p>
                <p className="text-xs text-teal-600">çevrimiçi</p>
              </div>
            </div>

            {/* Messages */}
            <div className="space-y-3">
              {/* User Message */}
              <div className="flex justify-end">
                <div className="max-w-[80%] rounded-2xl bg-teal-600 px-4 py-2 text-white text-sm shadow-md">
                  Bugün çok stresliyim, kendimi kötü hissediyorum...
                </div>
              </div>

              {/* VERA Message */}
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-2xl bg-white px-4 py-3 text-gray-800 text-sm shadow-md border border-gray-200">
                  <p className="mb-2">Bu hissi anlıyorum. Önce derin bir nefes al. 🌿</p>
                  <p>Şu anki stres seviyeni 1&apos;den 10&apos;a puanlar mısın? Birlikte bu anı yönetelim.</p>
                  <p className="mt-2 text-xs text-gray-400 text-right">14:32 ✓✓</p>
                </div>
              </div>

              {/* User Message */}
              <div className="flex justify-end">
                <div className="max-w-[80%] rounded-2xl bg-teal-600 px-4 py-2 text-white text-sm shadow-md">
                  Sanırım 7... Çok yoruldum 
                </div>
              </div>

              {/* VERA Message */}
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-2xl bg-white px-4 py-3 text-gray-800 text-sm shadow-md border border-gray-200">
                  <p>7 oldukça yüksek. Önce bu duyguyu kabul edelim.</p>
                  <p className="mt-2">🧘‍♀️ <strong>5 dakika egzersizi:</strong></p>
                  <ul className="mt-1 space-y-1 text-xs">
                    <li>• 4 saniye nefes al</li>
                    <li>• 4 saniye tut</li>
                    <li>• 6 saniye ver</li>
                  </ul>
                  <p className="mt-2 text-xs text-gray-400 text-right">14:33 ✓✓</p>
                </div>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 bg-white p-3">
            <div className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2">
              <span className="text-sm text-gray-400">Mesaj yaz...</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-8 top-20 rounded-full bg-teal-500 px-4 py-2 text-white text-xs font-semibold shadow-lg"
      >
        ✓ Anlık Destek
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -right-4 bottom-32 rounded-full bg-blue-600 px-4 py-2 text-white text-xs font-semibold shadow-lg"
      >
        🔒 Şifreli & Güvenli
      </motion.div>
    </motion.div>
  );
}
