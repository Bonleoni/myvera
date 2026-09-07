import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kullanım Koşulları — VERA',
  description: 'VERA hizmetlerini kullanırken geçerli olan kullanım koşulları.',
};

export default function KullanimKosullariPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/" className="text-teal-600 hover:text-teal-700 font-medium">&larr; Ana Sayfaya Dön</Link>
        <h1 className="text-4xl font-bold text-gray-900 mt-6 mb-4">Kullanım Koşulları</h1>
        <p className="text-sm text-gray-500 mb-10">Son güncelleme: 7 Eylül 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Hizmetin Kapsamı</h2>
            <p>
              VERA, WhatsApp üzerinden erişilebilen, yapay zeka destekli bir farkındalık ve alışkanlık
              koçluğu hizmetidir. VERA; stres yönetimi, farkındalık geliştirme ve kişisel gelişim
              konularında genel destek sağlar. VERA bir tıbbi teşhis, tedavi veya profesyonel sağlık
              hizmeti değildir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Kullanıcı Sorumlulukları</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Hizmeti yasalara ve genel ahlak kurallarına uygun şekilde kullanmayı kabul edersiniz.</li>
              <li>Paylaştığınız bilgilerin doğru ve güncel olduğunu beyan edersiniz.</li>
              <li>Hesabınızın güvenliğinden ve WhatsApp hesabınızla ilgili işlemlerden siz sorumlusunuz.</li>
              <li>Acil sağlık durumlarında VERA yerine ilgili sağlık kuruluşlarına başvurmalısınız.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Yasaklı Kullanımlar</h2>
            <p>Aşağıdaki eylemler kesinlikle yasaktır:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Hizmeti yasa dışı, zararlı veya dolandırıcılık amaçlı kullanmak</li>
              <li>Hizmetin altyapısına zarar verecek veya işleyişini bozacak eylemlerde bulunmak</li>
              <li>Başka bir kullanıcının kimliğine bürünmek</li>
              <li>Hizmeti tersine mühendislik yoluyla kopyalamaya çalışmak</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Fikri Mülkiyet</h2>
            <p>
              VERA markası, logosu, içerikleri ve yazılımı VERA Teknoloji ve Yazılım A.Ş.&apos;nin fikri
              mülkiyetindedir. Yazılı izin olmaksızın kopyalanamaz, çoğaltılamaz veya dağıtılamaz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Sorumluluk Reddi</h2>
            <p>
              VERA tarafından sağlanan bilgi ve öneriler genel niteliktedir ve profesyonel tıbbi,
              psikolojik veya hukuki tavsiye yerine geçmez. VERA, hizmetin kullanımından doğabilecek
              doğrudan veya dolaylı zararlardan sorumlu tutulamaz. Hizmet &quot;olduğu gibi&quot; sunulmaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Değişiklikler</h2>
            <p>
              VERA, bu kullanım koşullarını dilediği zaman güncelleme hakkını saklı tutar. Güncellemeler
              bu sayfada yayınlandığı andan itibaren geçerli olur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Uygulanacak Hukuk</h2>
            <p>
              Bu koşullar Türkiye Cumhuriyeti kanunlarına tabidir. Doğabilecek uyuşmazlıklarda İstanbul
              Mahkemeleri ve İcra Daireleri yetkilidir.
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
