import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası — VERA',
  description: 'VERA gizlilik politikası ve KVKK aydınlatma metni.',
};

export default function GizlilikPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/" className="text-teal-600 hover:text-teal-700 font-medium">&larr; Ana Sayfaya Dön</Link>
        <h1 className="text-4xl font-bold text-gray-900 mt-6 mb-4">Gizlilik Politikası</h1>
        <p className="text-sm text-gray-500 mb-10">Son güncelleme: 7 Eylül 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Giriş</h2>
            <p>
              VERA Teknoloji ve Yazılım A.Ş. (&quot;VERA&quot;, &quot;biz&quot;) olarak kullanıcılarımızın
              gizliliğine büyük önem veriyoruz. Bu Gizlilik Politikası, 6698 sayılı Kişisel Verilerin
              Korunması Kanunu (&quot;KVKK&quot;) kapsamında, hizmetlerimizi kullanırken topladığımız
              kişisel verilerin nasıl işlendiğini, saklandığını ve korunduğunu açıklamaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Topladığımız Veriler</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>WhatsApp üzerinden bize ilettiğiniz mesaj içerikleri</li>
              <li>Telefon numaranız ve iletişim bilgileriniz</li>
              <li>Kullanım istatistikleri ve etkileşim verileri</li>
              <li>Cihaz ve bağlantı bilgileri (IP adresi, tarayıcı bilgisi vb.)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Verilerin Kullanım Amacı</h2>
            <p>
              Toplanan veriler yalnızca; size kişiselleştirilmiş farkındalık ve alışkanlık koçluğu
              hizmeti sunmak, hizmet kalitemizi geliştirmek, teknik sorunları gidermek ve yasal
              yükümlülüklerimizi yerine getirmek amacıyla kullanılır. Verileriniz reklam amacıyla
              üçüncü taraflara satılmaz veya kiralanmaz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Veri Güvenliği</h2>
            <p>
              Tüm mesajlaşma verileri uçtan uca şifreleme ile korunur. Verileriniz, yetkisiz erişime,
              kayba veya kötüye kullanıma karşı endüstri standardı teknik ve idari güvenlik önlemleri
              ile korunmaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Çerezler</h2>
            <p>
              Web sitemiz, kullanıcı deneyimini geliştirmek amacıyla temel işlevsel çerezler
              kullanabilir. Bu çerezler kişisel kimliğinizi belirlemek için kullanılmaz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">6. KVKK Kapsamındaki Haklarınız</h2>
            <p>KVKK&apos;nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>İşlenen verileriniz hakkında bilgi talep etme</li>
              <li>Verilerin işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme</li>
              <li>Yasal şartlar çerçevesinde verilerin silinmesini veya yok edilmesini isteme</li>
              <li>İşlenen verilerin üçüncü kişilere aktarılıp aktarılmadığını öğrenme</li>
            </ul>
            <p className="mt-3">
              Bu haklarınızı kullanmak için <a href="mailto:destek@myvera.online" className="text-teal-600 hover:underline">destek@myvera.online</a> adresinden bizimle iletişime geçebilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Veri Saklama Süresi</h2>
            <p>
              Kişisel verileriniz, işlenme amacının gerektirdiği süre boyunca ve yasal saklama
              yükümlülüklerimiz çerçevesinde saklanır. Süre sona erdiğinde veriler silinir, yok edilir
              veya anonim hale getirilir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">8. İletişim</h2>
            <p>
              VERA Teknoloji ve Yazılım A.Ş.<br />
              Maslak Mah. Büyükdere Cad. No:123, İç Kapı No:4, Sarıyer / İstanbul<br />
              Telefon: +90 212 555 00 00<br />
              E-posta: destek@myvera.online
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
