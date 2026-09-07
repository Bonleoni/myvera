'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Brain,
  Footprints,
  Scale,
  MessageCircle,
  Smartphone,
  BarChart3,
  Shield,
  Lock,
  CheckCircle,
} from 'lucide-react';
import { IPhoneMockup } from '@/components/iPhoneMockup';

const whatsappLink =
  'https://wa.me/905551234567?text=Merhaba,%20VERA%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.';

const features = [
  {
    icon: Brain,
    title: 'Farkındalık Yarat',
    description:
      'Stres anındaki otomatik tepkilerini fark et, düşüncelerinle aranda sağlıklı bir mesafe oluştur.',
  },
  {
    icon: Footprints,
    title: 'Küçük Adımlar At',
    description:
      'Büyük değişimler küçük, sürdürülebilir adımlarla başlar. VERA seninle birlikte ilerler.',
  },
  {
    icon: Scale,
    title: 'Dengeni Koru',
    description:
      'Günlük yaşamında zihinsel ve duygusal dengeni koruman için kişiselleştirilmiş öneriler al.',
  },
];

const steps = [
  {
    icon: MessageCircle,
    title: 'WhatsApp\u2019tan Yaz',
    description: 'Uygulama indirmene gerek yok. VERA\u2019ya WhatsApp üzerinden yaz ve hemen başla.',
  },
  {
    icon: Smartphone,
    title: 'Günlük Kontrol',
    description: 'VERA seninle günlük kısa check-in\u2019ler yapar, o anki durumunu birlikte değerlendirir.',
  },
  {
    icon: BarChart3,
    title: 'İlerlemeni Gör',
    description: 'Zaman içinde farkındalığının ve alışkanlıklarının nasıl geliştiğini takip et.',
  },
];

const trustBadges = [
  { icon: Lock, label: 'Uçtan Uca Şifreli' },
  { icon: Shield, label: 'KVKK Uyumlu' },
  { icon: CheckCircle, label: 'Veri Paylaşımı Yok' },
  { icon: Brain, label: 'AI Destekli' },
];

const testimonials = [
  {
    name: 'Ayşe K.',
    role: 'İstanbul',
    quote:
      'Stresli anlarımda VERA\u2019ya yazmak bana çok iyi geldi. Otomatik tepkilerimin farkına varmaya başladım.',
  },
  {
    name: 'Mert T.',
    role: 'Ankara',
    quote:
      'Küçük adımlarla alışkanlıklarımı değiştirmenin bu kadar kolay olabileceğini düşünmemiştim. VERA sürecin her anında yanımda.',
  },
  {
    name: 'Elif Y.',
    role: 'İzmir',
    quote:
      'WhatsApp üzerinden anlık destek alabilmek harika. Uygulama indirmeme bile gerek kalmadı.',
  },
];

const faqs = [
  {
    question: 'VERA nedir?',
    answer:
      'VERA, WhatsApp üzerinden erişebileceğin, yapay zeka destekli bir farkındalık ve alışkanlık koçluğu asistanıdır. Stres yönetimi ve davranış değişimi konularında seni destekler.',
  },
  {
    question: 'VERA bir sağlık hizmeti mi sunuyor?',
    answer:
      'Hayır. VERA tıbbi teşhis, tedavi veya profesyonel sağlık hizmeti sunmaz; farkındalık ve alışkanlık geliştirmeye yönelik genel destek sağlar. Sağlık sorunların için lütfen bir uzmana danış.',
  },
  {
    question: 'Verilerim güvende mi?',
    answer:
      'Evet. Tüm mesajlaşmalar uçtan uca şifrelenir, verileriniz üçüncü taraflarla paylaşılmaz ve KVKK\u2019ya tam uyumlu şekilde işlenir.',
  },
  {
    question: 'Hangi konularda destek alabilirim?',
    answer:
      'VERA; stres yönetimi, alışkanlık değişimi, farkındalık, duygusal denge ve kişisel gelişim konularında destek sağlar.',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
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
              className="px-6 py-2.5 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition shadow-lg hover:shadow-xl"
            >
              WhatsApp&apos;tan Başla
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-50 via-white to-white pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-800 text-sm font-medium mb-6">
                <span className="flex h-2 w-2 rounded-full bg-teal-600"></span>
                Yapay zeka destekli dijital koçluk
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Stres Anındaki Dürtüleri Yönet,{' '}
                <span className="text-teal-600">Alışkanlıklarını Dönüştür</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                VERA, yapay zeka destekli kişisel gelişim asistanın. Otomatik tepkilerini fark et, mindful (bilinçli) seçimler yap ve yaşam dengeni kur.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition shadow-lg hover:shadow-xl text-lg"
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
                  <Lock className="h-4 w-4 text-teal-600" />
                  <span>Uçtan uca şifreli</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-teal-600" />
                  <span>KVKK uyumlu</span>
                </div>
              </div>
            </motion.div>

            {/* Right Content - iPhone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <IPhoneMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ÖZELLİKLER SECTION */}
      <section id="ozellikler" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nasıl Fark Yaratır?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              VERA, günlük hayatında sürdürülebilir değişim yaratman için üç temel alanda seninle birlikte çalışır.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-gray-50 hover:bg-teal-50 transition-colors"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 mb-6">
                    <Icon className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NASIL ÇALIŞIR SECTION */}
      <section id="nasil-calisir" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nasıl Çalışır?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Üç basit adımda VERA ile tanış ve dönüşüm yolculuğuna başla.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative p-8 rounded-2xl bg-white shadow-sm border border-gray-100"
                >
                  <div className="absolute -top-4 -left-4 flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 mb-6">
                    <Icon className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GÜVEN ROZETLERİ SECTION */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div key={badge.label} className="flex flex-col items-center text-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
                    <Icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{badge.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Kullanıcılarımız Ne Diyor?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              VERA ile farkındalık yolculuğuna çıkan kullanıcılarımızın deneyimleri.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white shadow-sm border border-gray-100"
              >
                <p className="text-gray-700 leading-relaxed mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-700 font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SSS SECTION */}
      <section id="sss" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group p-6 rounded-2xl bg-gray-50 border border-gray-100 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-900">
                  {faq.question}
                  <span className="ml-4 flex-shrink-0 text-teal-600 transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-br from-teal-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Dönüşümünün İlk Adımı Bir Mesaj Kadar Yakın</h2>
          <p className="text-xl text-teal-100 mb-8">
            Bugün WhatsApp&apos;tan VERA&apos;ya yaz, farkındalık yolculuğuna başla.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-teal-600 font-bold rounded-full hover:bg-gray-50 transition shadow-xl hover:shadow-2xl text-lg"
          >
            WhatsApp&apos;tan Ücretsiz Başla
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
              <p className="text-sm text-gray-400">
                Yapay zeka destekli alışkanlık ve farkındalık koçluğu. Dönüşüm, farkındalıkla başlar.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Hızlı Bağlantılar</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#nasil-calisir" className="hover:text-teal-400 transition">Nasıl Çalışır?</a></li>
                <li><a href="#ozellikler" className="hover:text-teal-400 transition">Özellikler</a></li>
                <li><a href="#sss" className="hover:text-teal-400 transition">SSS</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">İletişim</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">VERA Teknoloji ve Yazılım A.Ş.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>Maslak Mah. Büyükdere Cad. No:123<br />İç Kapı No:4, Sarıyer / İstanbul</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>+90 212 555 00 00</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>destek@myvera.online</span>
                </li>
              </ul>
              <div className="mt-4 text-xs text-gray-500">
                <p>Mersis No: 0123456789012345</p>
                <p>Vergi No: 1234567890 / Maslak Vergi Dairesi</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6 text-sm">
              <Link href="/gizlilik" className="hover:text-teal-400 transition">Gizlilik Politikası</Link>
              <Link href="/kullanim-kosullari" className="hover:text-teal-400 transition">Kullanım Koşulları</Link>
              <Link href="/mesafeli-satis" className="hover:text-teal-400 transition">Mesafeli Satış Sözleşmesi</Link>
            </div>
            <p className="text-sm text-gray-500">© 2026 VERA Teknoloji ve Yazılım A.Ş. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

