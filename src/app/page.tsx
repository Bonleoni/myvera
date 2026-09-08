import { Brain, Footprints, Scale, Shield, Lock, MessageCircle, CheckCircle, BarChart3, Smartphone } from 'lucide-react';

export default function Home() {
  const whatsappLink = "https://wa.me/905551234567?text=Merhaba,%20VERA%20hakkında%20bilgi%20almak%20istiyorum.";

  return (
    <div className="min-h-screen bg-white">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600">
                <span className="text-white font-bold">V</span>
              </div>
              <span className="text-xl font-bold text-gray-900">VERA</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#nasil-calisir" className="text-gray-600 hover:text-teal-600 transition">Nasıl Çalışır?</a>
              <a href="#ozellikler" className="text-gray-600 hover:text-teal-600 transition">Özellikler</a>
              <a href="#sss" className="text-gray-600 hover:text-teal-600 transition">SSS</a>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition"
            >
              WhatsApp'tan Başla
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-gradient-to-b from-teal-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-800 text-sm font-medium mb-6">
                <span className="flex h-2 w-2 rounded-full bg-teal-600"></span>
                Yapay zeka destekli dijital koçluk
              </div>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
                Stres Anındaki Dürtüleri Yönet,{' '}
                <span className="text-teal-600">Alışkanlıklarını Dönüştür</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                VERA, yapay zeka destekli kişisel gelişim asistanın. Otomatik tepkilerini fark et, mindful seçimler yap ve yaşam dengenizi kur.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition text-lg"
                >
                  Hemen Keşfet
                </a>
                <a
                  href="#nasil-calisir"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-full border-2 border-teal-600 hover:bg-teal-50 transition text-lg"
                >
                  Nasıl Çalışır?
                </a>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                  <span>Ücretsiz Başlangıç</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-teal-600" />
                  <span>Şifreli & Güvenli</span>
                </div>
              </div>
            </div>

            {/* Basit Chat Mockup */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-600">
                  <span className="text-white font-bold text-sm">V</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">VERA Koç</p>
                  <p className="text-xs text-teal-600">çevrimiçi</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-end">
                  <div className="bg-teal-600 text-white px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%] text-sm">
                    Bugün çok stresliyim, kendimi kötü hissediyorum...
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 px-4 py-3 rounded-2xl rounded-tl-sm max-w-[85%] text-sm">
                    <p className="mb-2">Bu hissi anlıyorum. Önce derin bir nefes al. 🌿</p>
                    <p>Şu anki stres seviyeni 1'den 10'a puanlar mısın? Birlikte bu anı yönetelim.</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-teal-600 text-white px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%] text-sm">
                    Sanırım 7... Çok yoruldum
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 px-4 py-3 rounded-2xl rounded-tl-sm max-w-[85%] text-sm">
                    <p>7 oldukça yüksek. Önce bu duyguyu kabul edelim.</p>
                    <p className="mt-2">🧘‍♀️ <strong>5 dakika egzersizi:</strong></p>
                    <ul className="mt-1 space-y-1 text-xs">
                      <li>• 4 saniye nefes al</li>
                      <li>• 4 saniye tut</li>
                      <li>• 6 saniye ver</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ÖZELLİKLER */}
      <section id="ozellikler" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Değişim, Farkındalıkla Başlar</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              VERA, sürdürülebilir değişimin farkındalıkla başladığını bilir.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-teal-50 to-white border border-teal-100">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-600 mb-6">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Farkındalık Yarat</h3>
              <p className="text-gray-600">Otomatik ve duygusal tepkilerini yapay zeka ile anında analiz et.</p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-teal-50 to-white border border-teal-100">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-600 mb-6">
                <Footprints className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Küçük Adımlar At</h3>
              <p className="text-gray-600">Ezberlenmiş listeler değil, sana özel, sürdürülebilir mikro-alışkanlıklar.</p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-teal-50 to-white border border-teal-100">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-600 mb-6">
                <Scale className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dengeni Koru</h3>
              <p className="text-gray-600">Yargılamayan, seni destekleyen bir alan. VERA, her zaman yanında.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NASIL ÇALIŞIR */}
      <section id="nasil-calisir" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Üç Basit Adımda Başla</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
                <MessageCircle className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-sm font-bold text-teal-600 mb-2">1. Adım</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">WhatsApp'tan Yaz</h3>
              <p className="text-gray-600">Uygulama indirmeye gerek yok. Zaten kullandığın WhatsApp üzerinden VERA'ya ulaş.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 mb-6">
                <Smartphone className="h-8 w-8 text-teal-600" />
              </div>
              <div className="text-sm font-bold text-teal-600 mb-2">2. Adım</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Günlük Kontrol</h3>
              <p className="text-gray-600">VERA, gün içinde sana nazik hatırlatmalar ve farkındalık soruları sorar.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6">
                <BarChart3 className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-sm font-bold text-teal-600 mb-2">3. Adım</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">İlerlemeni Gör</h3>
              <p className="text-gray-600">Haftalık özetlerle duygusal ve davranışsal gelişimini takip et.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GÜVEN ROZETLERİ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3 justify-center p-4 rounded-xl bg-gray-50">
              <Lock className="h-8 w-8 text-green-600" />
              <span className="text-sm font-semibold text-gray-700">Uçtan Uca Şifreli</span>
            </div>
            <div className="flex items-center gap-3 justify-center p-4 rounded-xl bg-gray-50">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-sm font-semibold text-gray-700">KVKK Uyumlu</span>
            </div>
            <div className="flex items-center gap-3 justify-center p-4 rounded-xl bg-gray-50">
              <CheckCircle className="h-8 w-8 text-teal-600" />
              <span className="text-sm font-semibold text-gray-700">Veri Paylaşımı Yok</span>
            </div>
            <div className="flex items-center gap-3 justify-center p-4 rounded-xl bg-gray-50">
              <Brain className="h-8 w-8 text-purple-600" />
              <span className="text-sm font-semibold text-gray-700">AI Destekli</span>
            </div>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section id="sss" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
          </div>
          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-xl">
              <summary className="flex cursor-pointer items-center justify-between p-6 text-gray-900">
                <h3 className="font-semibold">VERA bir diyetisyen veya doktor mudur?</h3>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Hayır, VERA bir yapay zeka destekli alışkanlık ve farkındalık koçudur. Tıbbi tavsiye vermez, davranışsal farkındalık sağlar.
              </div>
            </details>
            <details className="group bg-gray-50 rounded-xl">
              <summary className="flex cursor-pointer items-center justify-between p-6 text-gray-900">
                <h3 className="font-semibold">Verilerim güvende mi?</h3>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Kesinlikle. Tüm konuşmalar uçtan uca şifrelenir ve KVKK kapsamında korunur.
              </div>
            </details>
            <details className="group bg-gray-50 rounded-xl">
              <summary className="flex cursor-pointer items-center justify-between p-6 text-gray-900">
                <h3 className="font-semibold">Ücretli mi?</h3>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Başlangıç ücretsizdir. Detaylı bilgi için WhatsApp'tan bize ulaşabilirsiniz.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Dönüşümünün İlk Adımı Bir Mesaj Kadar Yakın</h2>
          <p className="text-xl text-teal-100 mb-8">Bugün WhatsApp'tan VERA'ya yaz, farkındalık yolculuğuna başla.</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-teal-600 font-bold rounded-full hover:bg-gray-50 transition shadow-xl text-lg"
          >
            WhatsApp'tan Ücretsiz Başla
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600">
                  <span className="text-white font-bold">V</span>
                </div>
                <span className="text-xl font-bold text-white">VERA</span>
              </div>
              <p className="text-sm text-gray-400">Yapay zeka destekli alışkanlık ve farkındalık koçluğu.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">İletişim</h4>
              <ul className="space-y-2 text-sm">
                <li>Maslak Mah. Büyükdere Cad. No:123</li>
                <li>İç Kapı No:4, Sarıyer / İstanbul</li>
                <li>+90 212 555 00 00</li>
                <li>destek@myvera.online</li>
              </ul>
              <div className="mt-4 text-xs text-gray-500">
                <p>Mersis No: 0123456789012345</p>
                <p>Vergi No: 1234567890 / Maslak VD</p>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Yasal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/gizlilik" className="hover:text-teal-400 transition">Gizlilik Politikası</a></li>
                <li><a href="/kullanim-kosullari" className="hover:text-teal-400 transition">Kullanım Koşulları</a></li>
                <li><a href="/mesafeli-satis" className="hover:text-teal-400 transition">Mesafeli Satış</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            © 2026 VERA Teknoloji. Tüm hakları saklıdır.
          </div>
        </div>
      </footer>
    </div>
  );
}
