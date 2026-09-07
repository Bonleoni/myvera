import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mesafeli Satış Sözleşmesi — VERA',
  description: 'VERA mesafeli satış sözleşmesi, cayma hakkı ve iade koşulları.',
};

export default function MesafeliSatisPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/" className="text-teal-600 hover:text-teal-700 font-medium">&larr; Ana Sayfaya Dön</Link>
        <h1 className="text-4xl font-bold text-gray-900 mt-6 mb-4">Mesafeli Satış Sözleşmesi</h1>
        <p className="text-sm text-gray-500 mb-10">Son güncelleme: 7 Eylül 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Taraflar</h2>
            <p>
              İşbu sözleşme, bir tarafta VERA Teknoloji ve Yazılım A.Ş. (&quot;Satıcı&quot;) ile diğer
              tarafta hizmeti WhatsApp üzerinden satın alan gerçek/tüzel kişi (&quot;Alıcı&quot;) arasında,
              6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği
              hükümleri uyarınca elektronik ortamda akdedilmiştir.
            </p>
            <p className="mt-3">
              Satıcı Bilgileri:<br />
              VERA Teknoloji ve Yazılım A.Ş.<br />
              Maslak Mah. Büyükdere Cad. No:123, İç Kapı No:4, Sarıyer / İstanbul<br />
              Mersis No: 0123456789012345<br />
              Vergi No: 1234567890 / Maslak Vergi Dairesi<br />
              Telefon: +90 212 555 00 00<br />
              E-posta: destek@myvera.online
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Sözleşmenin Konusu</h2>
            <p>
              İşbu sözleşmenin konusu, Alıcı&apos;nın Satıcı&apos;ya ait dijital koçluk hizmetini
              WhatsApp üzerinden elektronik ortamda satın almasına ilişkin tarafların hak ve
              yükümlülüklerinin belirlenmesidir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Fiyat Bilgisi</h2>
            <p>
              Hizmete ait güncel fiyat bilgisi, WhatsApp üzerinden Alıcı ile paylaşılan teklif ve/veya
              ödeme sayfasında belirtilir. Tüm fiyatlara yasal vergiler dahildir. Fiyatlandırma, satın
              alma anında Alıcı&apos;ya açıkça bildirilir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Cayma Hakkı</h2>
            <p>
              Alıcı, herhangi bir gerekçe göstermeksizin ve cezai şart ödemeksizin, hizmetin satın
              alındığı tarihten itibaren <strong>14 (on dört) gün</strong> içinde cayma hakkına sahiptir.
              Cayma hakkının kullanılması için bu süre içinde <a href="mailto:destek@myvera.online" className="text-teal-600 hover:underline">destek@myvera.online</a> adresine
              yazılı bildirimde bulunulması yeterlidir.
            </p>
            <p className="mt-3">
              Mesafeli Sözleşmeler Yönetmeliği&apos;nin 15. maddesi uyarınca; Alıcı&apos;nın onayı ile
              cayma hakkı süresi dolmadan ifasına başlanan ve tamamen ifa edilen hizmetlerde, Alıcı
              cayma hakkını kullanamaz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. İade Koşulları</h2>
            <p>
              Cayma hakkının usulüne uygun kullanılması halinde, Alıcı&apos;dan tahsil edilen bedel,
              cayma bildiriminin Satıcı&apos;ya ulaşmasından itibaren 14 gün içinde, Alıcı&apos;nın
              ödemeyi gerçekleştirdiği yöntemle iade edilir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Genel Hükümler</h2>
            <p>
              İşbu sözleşme, Alıcı&apos;nın hizmeti WhatsApp üzerinden satın almayı onaylaması ile
              elektronik ortamda kurulmuş sayılır ve Alıcı, sözleşmenin tüm koşullarını kabul etmiş
              sayılır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Uyuşmazlıkların Çözümü</h2>
            <p>
              İşbu sözleşmeden doğabilecek uyuşmazlıklarda, Ticaret Bakanlığı&apos;nca ilan edilen
              parasal sınırlar dahilinde Alıcı&apos;nın yerleşim yerindeki veya işlemin yapıldığı
              yerdeki Tüketici Hakem Heyetleri ile Tüketici Mahkemeleri yetkilidir.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
