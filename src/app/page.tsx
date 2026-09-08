import { Brain, Footprints, Scale, Shield, Lock, MessageCircle, CheckCircle, BarChart3, Smartphone, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Home() {
  const whatsappLink = "https://wa.me/905551234567?text=Merhaba,%20VERA%20hakkında%20bilgi%20almak%20istiyorum.";

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="text-xl font-bold tracking-tight">VERA</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#ozellikler" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Özellikler</a>
              <a href="#nasil-calisir" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Nasıl Çalışır?</a>
              <a href="#sss" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">SSS</a>
            </div>
            <Button
              className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-6"
              render={<a href={whatsappLink} target="_blank" rel="noopener noreferrer" />}
            >
              WhatsApp'tan Başla
            </Button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="px-4 py-1.5 text-sm font-medium bg-teal-50 text-teal-700 border-teal-200 hover:bg-teal-100">
                <span className="flex h-2 w-2 rounded-full bg-teal-600 mr-2"></span>
                Yapay zeka destekli dijital koçluk
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                Stres Anındaki Dürtüleri Yönet,{' '}
                <span className="text-teal-600">Alışkanlıklarını Dönüştür</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                VERA, yapay zeka destekli kişisel gelişim asistanın. Otomatik tepkilerini fark et, mindful seçimler yap ve yaşam dengenizi kur.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8 h-12 text-base"
                  render={<a href={whatsappLink} target="_blank" rel="noopener noreferrer" />}
                >
                  Hemen Keşfet <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 h-12 text-base border-teal-600 text-teal-700 hover:bg-teal-50"
                  render={<a href="#nasil-calisir" />}
                >
                  Nasıl Çalışır?
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground pt-4">
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

            {/* Premium Chat Mockup Card */}
            <Card className="border-2 border-teal-100 shadow-2xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="border-b border-gray-100 pb-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 bg-teal-600">
                    <AvatarFallback className="text-white font-bold text-sm">V</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base font-semibold">VERA Koç</CardTitle>
                    <CardDescription className="text-teal-600 flex items-center gap-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                      </span>
                      çevrimiçi
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4 bg-gradient-to-b from-white to-gray-50/50">
                <div className="flex justify-end">
                  <div className="bg-teal-600 text-white px-4 py-3 rounded-2xl rounded-tr-sm max-w-[85%] text-sm shadow-sm">
                    Bugün çok stresliyim, kendimi kötü hissediyorum...
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 text-gray-800 px-4 py-3 rounded-2xl rounded-tl-sm max-w-[85%] text-sm shadow-sm">
                    <p className="mb-2">Bu hissi anlıyorum. Önce derin bir nefes al. 🌿</p>
                    <p>Şu anki stres seviyeni 1'den 10'a puanlar mısın? Birlikte bu anı yönetelim.</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-teal-600 text-white px-4 py-3 rounded-2xl rounded-tr-sm max-w-[85%] text-sm shadow-sm">
                    Sanırım 7... Çok yoruldum 
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 text-gray-800 px-4 py-3 rounded-2xl rounded-tl-sm max-w-[85%] text-sm shadow-sm">
                    <p>7 oldukça yüksek. Önce bu duyguyu kabul edelim.</p>
                    <p className="mt-2 font-medium text-teal-700">🧘‍♀️ 5 dakika egzersizi:</p>
                    <ul className="mt-2 space-y-1.5 text-sm text-gray-600">
                      <li className="flex items-center gap-2"><span className="text-teal-500">•</span> 4 saniye nefes al</li>
                      <li className="flex items-center gap-2"><span className="text-teal-500">•</span> 4 saniye tut</li>
                      <li className="flex items-center gap-2"><span className="text-teal-500">•</span> 6 saniye ver</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ÖZELLİKLER */}
      <section id="ozellikler" className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-foreground">Değişim, Farkındalıkla Başlar</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              VERA, sürdürülebilir değişimin farkındalıkla başladığını bilir.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-teal-100 hover:border-teal-300 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-teal-50/50 to-white">
              <CardHeader>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-600 mb-2 shadow-md shadow-teal-600/20">
                  <Brain className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl">Farkındalık Yarat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Otomatik ve duygusal tepkilerini yapay zeka ile anında analiz et. Neden bu şekilde hissettiğini anla.
                </p>
              </CardContent>
            </Card>

            <Card className="border-teal-100 hover:border-teal-300 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-teal-50/50 to-white">
              <CardHeader>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-600 mb-2 shadow-md shadow-teal-600/20">
                  <Footprints className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl">Küçük Adımlar At</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Ezberlenmiş listeler değil, sana özel, sürdürülebilir mikro-alışkanlıklar. Her gün bir adım daha.
                </p>
              </CardContent>
            </Card>

            <Card className="border-teal-100 hover:border-teal-300 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-teal-50/50 to-white">
              <CardHeader>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-600 mb-2 shadow-md shadow-teal-600/20">
                  <Scale className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl">Dengeni Koru</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Yargılamayan, seni destekleyen bir alan. VERA, her zaman yanında.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* NASIL ÇALIŞIR */}
      <section id="nasil-calisir" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-foreground">Üç Basit Adımda Başla</h2>
            <p className="text-xl text-muted-foreground">Uygulama indirmeye gerek yok. WhatsApp kadar kolay.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative p-8 rounded-2xl border border-gray-100 bg-gray-50/50">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 mb-6">
                <MessageCircle className="h-7 w-7 text-green-600" />
              </div>
              <div className="text-sm font-bold text-teal-600 mb-2 uppercase tracking-wide">1. Adım</div>
              <h3 className="text-xl font-bold text-foreground mb-3">WhatsApp'tan Yaz</h3>
              <p className="text-muted-foreground">Uygulama indirmeye gerek yok. Zaten kullandığın WhatsApp üzerinden VERA'ya ulaş.</p>
            </div>

            <div className="relative p-8 rounded-2xl border border-gray-100 bg-gray-50/50">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 mb-6">
                <Smartphone className="h-7 w-7 text-teal-600" />
              </div>
              <div className="text-sm font-bold text-teal-600 mb-2 uppercase tracking-wide">2. Adım</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Günlük Kontrol</h3>
              <p className="text-muted-foreground">VERA, gün içinde sana nazik hatırlatmalar ve farkındalık soruları sorar.</p>
            </div>

            <div className="relative p-8 rounded-2xl border border-gray-100 bg-gray-50/50">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 mb-6">
                <BarChart3 className="h-7 w-7 text-blue-600" />
              </div>
              <div className="text-sm font-bold text-teal-600 mb-2 uppercase tracking-wide">3. Adım</div>
              <h3 className="text-xl font-bold text-foreground mb-3">İlerlemeni Gör</h3>
              <p className="text-muted-foreground">Haftalık özetlerle duygusal ve davranışsal gelişimini takip et.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GÜVEN ROZETLERİ */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3 justify-center p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
              <Lock className="h-6 w-6 text-green-600" />
              <span className="text-sm font-semibold text-foreground">Uçtan Uca Şifreli</span>
            </div>
            <div className="flex items-center gap-3 justify-center p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
              <Shield className="h-6 w-6 text-blue-600" />
              <span className="text-sm font-semibold text-foreground">KVKK Uyumlu</span>
            </div>
            <div className="flex items-center gap-3 justify-center p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
              <CheckCircle className="h-6 w-6 text-teal-600" />
              <span className="text-sm font-semibold text-foreground">Veri Paylaşımı Yok</span>
            </div>
            <div className="flex items-center gap-3 justify-center p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
              <Brain className="h-6 w-6 text-purple-600" />
              <span className="text-sm font-semibold text-foreground">AI Destekli</span>
            </div>
          </div>
        </div>
      </section>

      {/* SSS (Accordion ile) */}
      <section id="sss" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-foreground">Sıkça Sorulan Sorular</h2>
          </div>
          <Accordion className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-xl px-6">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                VERA bir diyetisyen veya doktor mudur?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                Hayır, VERA bir yapay zeka destekli alışkanlık ve farkındalık koçudur. Tıbbi tavsiye vermez, davranışsal farkındalık sağlar. Sağlık sorunlarınız için lütfen uzmanlara danışın.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border border-gray-200 rounded-xl px-6">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                Verilerim güvende mi?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                Kesinlikle. Tüm konuşmalar uçtan uca şifrelenir ve KVKK kapsamında korunur. Verileriniz hiçbir üçüncü tarafla paylaşılmaz.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border border-gray-200 rounded-xl px-6">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                Ücretli mi?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                Başlangıç ücretsizdir. Detaylı bilgi ve premium özellikler için WhatsApp'tan bize ulaşabilirsiniz.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-teal-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">Dönüşümünün İlk Adımı Bir Mesaj Kadar Yakın</h2>
          <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
            Bugün WhatsApp'tan VERA'ya yaz, farkındalık yolculuğuna başla.
          </p>
          <Button
            size="lg"
            className="bg-white text-teal-700 hover:bg-gray-50 font-bold rounded-full px-10 h-14 text-lg shadow-xl"
            render={<a href={whatsappLink} target="_blank" rel="noopener noreferrer" />}
          >
            WhatsApp'tan Ücretsiz Başla
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-400 py-16 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600">
                  <span className="text-white font-bold text-sm">V</span>
                </div>
                <span className="text-xl font-bold text-white tracking-tight">VERA</span>
              </div>
              <p className="text-sm leading-relaxed">
                Yapay zeka destekli alışkanlık ve farkındalık koçluğu. Dönüşüm, farkındalıkla başlar.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">İletişim</h4>
              <ul className="space-y-3 text-sm">
                <li>Maslak Mah. Büyükdere Cad. No:123</li>
                <li>İç Kapı No:4, Sarıyer / İstanbul</li>
                <li className="text-white font-medium">+90 212 555 00 00</li>
                <li className="text-teal-400">destek@myvera.online</li>
              </ul>
              <div className="mt-6 text-xs text-gray-500 space-y-1">
                <p>Mersis No: 0123456789012345</p>
                <p>Vergi No: 1234567890 / Maslak VD</p>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Yasal</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/gizlilik" className="hover:text-teal-400 transition-colors">Gizlilik Politikası</a></li>
                <li><a href="/kullanim-kosullari" className="hover:text-teal-400 transition-colors">Kullanım Koşulları</a></li>
                <li><a href="/mesafeli-satis" className="hover:text-teal-400 transition-colors">Mesafeli Satış Sözleşmesi</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-900 pt-8 text-center text-sm text-gray-500">
            © 2026 VERA Teknoloji. Tüm hakları saklıdır.
          </div>
        </div>
      </footer>
    </div>
  );
}
