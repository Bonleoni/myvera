export default function Home() {
  const whatsappLink = "https://wa.me/905551234567?text=Merhaba,%20VERA%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum";

  // SVG İkonlar
  const ChatIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  );

  const ClockIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );

  const ShieldIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  );

  const RobotIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2"></rect>
      <circle cx="12" cy="5" r="2"></circle>
      <path d="M12 7v4"></path>
      <line x1="8" y1="16" x2="8" y2="16"></line>
      <line x1="16" y1="16" x2="16" y2="16"></line>
    </svg>
  );

  const TargetIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="6"></circle>
      <circle cx="12" cy="12" r="2"></circle>
    </svg>
  );

  const MessageIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );

  return (
    <div style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif', color: '#1e293b', lineHeight: 1.6 }}>
      
      {/* NAVBAR */}
      <nav style={{ backgroundColor: 'white', padding: '20px 24px', borderBottom: '1px solid #e5e7eb', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '36px', height: '36px', backgroundColor: '#0f172a', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '18px' }}>V</div>
            <span style={{ fontSize: '22px', fontWeight: '700', color: '#0f172a', letterSpacing: '-0.5px' }}>VERA</span>
          </div>
          <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
            <a href="#nasil-calisir" style={{ textDecoration: 'none', color: '#475569', fontSize: '15px', fontWeight: 500, transition: 'color 0.2s' }}>Nasıl Çalışır?</a>
            <a href="#ozellikler" style={{ textDecoration: 'none', color: '#475569', fontSize: '15px', fontWeight: 500 }}>Özellikler</a>
            <a href="#fiyatlar" style={{ textDecoration: 'none', color: '#475569', fontSize: '15px', fontWeight: 500 }}>Fiyatlar</a>
            <a href="#sss" style={{ textDecoration: 'none', color: '#475569', fontSize: '15px', fontWeight: 500 }}>SSS</a>
          </div>
          <a href={whatsappLink} style={{ backgroundColor: '#0f172a', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontSize: '15px', fontWeight: 600, transition: 'background-color 0.2s' }}>
            WhatsApp'tan Başla
          </a>
        </div>
      </nav>

      {/* HERO BÖLÜMÜ */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)', padding: '100px 24px', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(255,255,255,0.1)', padding: '10px 18px', borderRadius: '9999px', fontSize: '14px', marginBottom: '32px', border: '1px solid rgba(255,255,255,0.2)' }}>
              <span style={{ width: '8px', height: '8px', backgroundColor: '#14b8a6', borderRadius: '50%' }}></span>
              Yapay zeka destekli dijital koçluk
            </div>
            <h1 style={{ fontSize: '48px', fontWeight: '700', lineHeight: 1.15, marginBottom: '28px', letterSpacing: '-1px' }}>
              Sürdürülebilir Değişim, Kişiselleştirilmiş Yaklaşım
            </h1>
            <p style={{ fontSize: '18px', lineHeight: 1.7, opacity: 0.9, marginBottom: '40px', color: '#cbd5e1' }}>
              VERA, yapay zeka destekli dijital koçluk ile hayatına gerçek bir partner. Her gün seninle birlikte, bilimsel temelli ve tamamen kişiselleştirilmiş bir yolculuk.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href={whatsappLink} style={{ backgroundColor: '#14b8a6', color: 'white', padding: '16px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '16px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px', transition: 'background-color 0.2s' }}>
                Ücretsiz Ön Görüşme Al
              </a>
              <a href="#nasil-calisir" style={{ backgroundColor: 'transparent', color: 'white', padding: '16px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '16px', fontWeight: 500, border: '1px solid rgba(255,255,255,0.3)', transition: 'background-color 0.2s' }}>
                Nasıl Çalışır?
              </a>
            </div>
            <p style={{ fontSize: '13px', opacity: 0.6, marginTop: '32px' }}>
              Kredi kartı gerekmez • 30 günde istediğin zaman iptal et
            </p>
          </div>
          
          {/* GERÇEK WHATSAPP MOCKUP */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ backgroundColor: '#075E54', borderRadius: '16px', padding: '0', maxWidth: '340px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', overflow: 'hidden' }}>
              {/* WhatsApp Header */}
              <div style={{ backgroundColor: '#075E54', padding: '16px', display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: '#14b8a6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '16px' }}>V</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, color: 'white', fontSize: '15px' }}>VERA Koç</div>
                  <div style={{ fontSize: '12px', color: '#86efac' }}>çevrimiçi</div>
                </div>
              </div>
              
              {/* WhatsApp Chat Area */}
              <div style={{ backgroundColor: '#0B141A', padding: '20px', minHeight: '380px', backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
                <div style={{ backgroundColor: '#202C33', padding: '12px 16px', borderRadius: '8px', marginBottom: '12px', maxWidth: '85%' }}>
                  <div style={{ fontSize: '14px', color: '#E9EDEF', lineHeight: 1.5 }}>
                    Merhaba! Bugün akşam yeme krizi yaşadın mı?
                  </div>
                  <div style={{ fontSize: '11px', color: '#8696A0', marginTop: '4px', textAlign: 'right' }}>14:32</div>
                </div>
                
                <div style={{ backgroundColor: '#005C4B', padding: '12px 16px', borderRadius: '8px', marginBottom: '12px', maxWidth: '85%', marginLeft: 'auto' }}>
                  <div style={{ fontSize: '14px', color: '#E9EDEF', lineHeight: 1.5 }}>
                    Evet, biraz stresliydim 😔
                  </div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', marginTop: '4px', textAlign: 'right' }}>14:33 ✓✓</div>
                </div>
                
                <div style={{ backgroundColor: '#202C33', padding: '12px 16px', borderRadius: '8px', marginBottom: '12px', maxWidth: '85%' }}>
                  <div style={{ fontSize: '14px', color: '#E9EDEF', lineHeight: 1.5 }}>
                    Anlıyorum. Stres anında 5 dakika derin nefes egzersizi yapalım mı? Sana rehberlik edeyim.
                  </div>
                  <div style={{ fontSize: '11px', color: '#8696A0', marginTop: '4px', textAlign: 'right' }}>14:33</div>
                </div>
                
                <div style={{ backgroundColor: '#005C4B', padding: '12px 16px', borderRadius: '8px', maxWidth: '85%', marginLeft: 'auto' }}>
                  <div style={{ fontSize: '14px', color: '#E9EDEF', lineHeight: 1.5 }}>
                    Tamam, başlayalım 🙏
                  </div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', marginTop: '4px', textAlign: 'right' }}>14:34 ✓✓</div>
                </div>
              </div>
              
              {/* WhatsApp Input Area */}
              <div style={{ backgroundColor: '#075E54', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ flex: 1, backgroundColor: '#2A3942', padding: '10px 16px', borderRadius: '20px', fontSize: '14px', color: '#8696A0' }}>
                  Mesaj yazın
                </div>
                <div style={{ width: '36px', height: '36px', backgroundColor: '#14b8a6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={{ backgroundColor: 'white', padding: '48px 24px', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', textAlign: 'center' }}>
          <div>
            <div style={{ fontSize: '32px', fontWeight: '700', color: '#0f172a', marginBottom: '4px' }}>500+</div>
            <div style={{ fontSize: '14px', color: '#64748b' }}>Mutlu kullanıcı</div>
          </div>
          <div>
            <div style={{ fontSize: '32px', fontWeight: '700', color: '#0f172a', marginBottom: '4px' }}>%95</div>
            <div style={{ fontSize: '14px', color: '#64748b' }}>Memnuniyet oranı</div>
          </div>
          <div>
            <div style={{ fontSize: '32px', fontWeight: '700', color: '#0f172a', marginBottom: '4px' }}>4.8/5</div>
            <div style={{ fontSize: '14px', color: '#64748b' }}>Kullanıcı puanı</div>
          </div>
          <div>
            <div style={{ fontSize: '32px', fontWeight: '700', color: '#0f172a', marginBottom: '4px' }}>7/24</div>
            <div style={{ fontSize: '14px', color: '#64748b' }}>Kesintisiz destek</div>
          </div>
        </div>
      </section>

      {/* NASIL ÇALIŞIR */}
      <section id="nasil-calisir" style={{ backgroundColor: '#f8fafc', padding: '100px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ fontSize: '13px', color: '#14b8a6', fontWeight: 600, marginBottom: '12px', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Nasıl Çalışır?</div>
            <h2 style={{ fontSize: '40px', fontWeight: '700', color: '#0f172a', marginBottom: '16px', letterSpacing: '-0.5px' }}>Dört adımda kalıcı değişim</h2>
            <p style={{ fontSize: '17px', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>Karmaşık kurulum yok. Uygulama indirmene gerek yok. Sadece bir mesajla başla.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {[
              { num: '01', icon: <MessageIcon />, title: 'Ücretsiz Ön Görüşme', desc: 'İhtiyaçlarını ve hedeflerini anlıyoruz. Kredi kartı gerekmez.' },
              { num: '02', icon: <ChatIcon />, title: 'Kişisel Analiz', desc: 'Yaşam tarzını, alışkanlıklarını ve engellerini derinlemesine inceliyoruz.' },
              { num: '03', icon: <TargetIcon />, title: 'Sana Özel Plan', desc: 'Bilimsel temelli, tamamen kişiselleştirilmiş bir yol haritası oluşturuyoruz.' },
              { num: '04', icon: <ClockIcon />, title: 'Günlük Destek', desc: 'Her gün proaktif mesajlar, anlık rehberlik ve sürekli motivasyon.' }
            ].map((item) => (
              <div key={item.num} style={{ backgroundColor: 'white', padding: '36px 28px', borderRadius: '12px', border: '1px solid #e2e8f0', transition: 'box-shadow 0.2s' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{ width: '48px', height: '48px', backgroundColor: '#f1f5f9', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {item.icon}
                  </div>
                  <div style={{ fontSize: '14px', color: '#14b8a6', fontWeight: 700 }}>{item.num}</div>
                </div>
                <h3 style={{ fontSize: '19px', fontWeight: 600, color: '#0f172a', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÖZELLİKLER */}
      <section id="ozellikler" style={{ backgroundColor: 'white', padding: '100px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ fontSize: '13px', color: '#14b8a6', fontWeight: 600, marginBottom: '12px', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Özellikler</div>
            <h2 style={{ fontSize: '40px', fontWeight: '700', color: '#0f172a', marginBottom: '16px', letterSpacing: '-0.5px' }}>Bir uygulamadan fazlası, gerçek bir koç</h2>
            <p style={{ fontSize: '17px', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>VERA sadece bir chatbot değil. Gerçek davranış değişimi için tasarlanmış bir sistem.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { icon: <RobotIcon />, title: 'Birebir AI Koçluk', desc: 'Yapay zeka destekli, kişiselleştirilmiş rehberlik. Her mesaj sana özel.', features: ['Kişisel hedef takibi', 'Anlık geri bildirim', 'Duygu analizi'] },
              { icon: <ClockIcon />, title: 'Proaktif Destek', desc: 'İhtiyacın olduğunda, tam zamanında mesajlar. Beklemene gerek yok.', features: ['Akıllı hatırlatmalar', 'Kriz anı desteği', 'Günlük check-in'] },
              { icon: <ShieldIcon />, title: 'Gizlilik Garantisi', desc: 'Verilerin şifrelenir, asla paylaşılmaz. Tam kontrol sende.', features: ['KVKK uyumlu', 'Uçtan uca şifreleme', 'İstediğin an sil'] }
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: '#f8fafc', padding: '36px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <div style={{ width: '56px', height: '56px', backgroundColor: '#0f172a', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '21px', fontWeight: 600, color: '#0f172a', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.6, marginBottom: '24px' }}>{item.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {item.features.map((f, j) => (
                    <li key={j} style={{ fontSize: '14px', color: '#475569', padding: '8px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ color: '#14b8a6', fontWeight: 'bold' }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KULLANICI YORUMLARI */}
      <section style={{ backgroundColor: '#f8fafc', padding: '100px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ fontSize: '13px', color: '#14b8a6', fontWeight: 600, marginBottom: '12px', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Kullanıcı Yorumları</div>
            <h2 style={{ fontSize: '40px', fontWeight: '700', color: '#0f172a', marginBottom: '16px', letterSpacing: '-0.5px' }}>Sonuçlar, gerçek insanlardan</h2>
            <p style={{ fontSize: '17px', color: '#64748b' }}>Dijital değil, gerçek insanlar. İşte VERA ile hayatlarını değiştiren kullanıcılarımız.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { name: 'Ayşe K.', role: '32 yaşında, İstanbul', text: '3 ayda 8 kg verdim ama asıl kazancım ilişkimin yemeyle olan bağını koparmak oldu. Artık akşamları dolaba değil, VERA\'ya yazıyorum.', stars: 5 },
              { name: 'Mehmet Y.', role: '41 yaşında, Ankara', text: 'İş stresi yüzünden yeme krizlerim vardı. VERA tam o anlarda devreye giriyor. Gerçek bir koç gibi hissediyorum.', stars: 5 },
              { name: 'Zeynep A.', role: '28 yaşında, İzmir', text: 'Hiçbir diyet programı işe yaramamıştı. VERA farklı çünkü beni tanıyor. Her mesajı kişisel, her tavsiye uygulanabilir.', stars: 5 }
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: 'white', padding: '36px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <div style={{ color: '#fbbf24', fontSize: '18px', marginBottom: '20px', letterSpacing: '2px' }}>{'★'.repeat(item.stars)}</div>
                <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.7, marginBottom: '28px', fontStyle: 'italic' }}>&ldquo;{item.text}&rdquo;</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '44px', height: '44px', backgroundColor: '#0f172a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '16px' }}>{item.name[0]}</div>
                  <div>
                    <div style={{ fontWeight: 600, color: '#0f172a', fontSize: '15px' }}>{item.name}</div>
                    <div style={{ fontSize: '13px', color: '#64748b' }}>{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FİYATLANDIRMA */}
      <section id="fiyatlar" style={{ backgroundColor: 'white', padding: '100px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ fontSize: '13px', color: '#14b8a6', fontWeight: 600, marginBottom: '12px', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Fiyatlandırma</div>
            <h2 style={{ fontSize: '40px', fontWeight: '700', color: '#0f172a', marginBottom: '16px', letterSpacing: '-0.5px' }}>Sana uygun planı seç</h2>
            <p style={{ fontSize: '17px', color: '#64748b' }}>Taahhüt yok, gizli ücret yok. İstediğin an planını değiştirebilir veya iptal edebilirsin.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', alignItems: 'start' }}>
            {[
              { name: 'Basic', price: '19', period: '/ay', desc: 'Başlangıç seviyesi', features: ['Günlük AI koçluk', 'Temel takip', 'Haftalık özet', 'E-posta desteği'], popular: false },
              { name: 'Pro', price: '29', period: '/ay', desc: 'En çok tercih edilen', features: ['Her şey Basic\'te olanlar', 'Proaktif kriz desteği', 'Kişisel analiz raporu', 'Öncelikli destek', 'Aylık canlı seans'], popular: true },
              { name: 'Premium', price: '49', period: '/ay', desc: 'Maksimum sonuç', features: ['Her şey Pro\'da olanlar', 'Sınırsız mesaj', 'Aylık uzman görüşü', 'Özel program tasarımı', '7/24 öncelikli destek'], popular: false }
            ].map((item, i) => (
              <div key={i} style={{ 
                backgroundColor: item.popular ? '#0f172a' : 'white', 
                color: item.popular ? 'white' : '#0f172a',
                padding: '40px 32px', 
                borderRadius: '12px', 
                border: item.popular ? 'none' : '1px solid #e2e8f0',
                position: 'relative',
                transform: item.popular ? 'scale(1.05)' : 'none',
                boxShadow: item.popular ? '0 20px 25px -5px rgba(0,0,0,0.1)' : 'none'
              }}>
                {item.popular && (
                  <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#14b8a6', color: 'white', padding: '6px 18px', borderRadius: '9999px', fontSize: '12px', fontWeight: 700, letterSpacing: '0.5px' }}>
                    EN POPÜLER
                  </div>
                )}
                <h3 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '8px' }}>{item.name}</h3>
                <p style={{ fontSize: '14px', opacity: 0.7, marginBottom: '28px' }}>{item.desc}</p>
                <div style={{ marginBottom: '28px' }}>
                  <span style={{ fontSize: '52px', fontWeight: '700', letterSpacing: '-2px' }}>${item.price}</span>
                  <span style={{ fontSize: '16px', opacity: 0.6 }}>{item.period}</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0' }}>
                  {item.features.map((f, j) => (
                    <li key={j} style={{ fontSize: '15px', padding: '10px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ color: '#14b8a6', fontWeight: 'bold' }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href={whatsappLink} style={{ 
                  display: 'block', 
                  textAlign: 'center', 
                  padding: '14px', 
                  borderRadius: '8px', 
                  textDecoration: 'none', 
                  fontSize: '15px', 
                  fontWeight: 600,
                  backgroundColor: item.popular ? '#14b8a6' : 'transparent',
                  color: item.popular ? 'white' : '#0f172a',
                  border: item.popular ? 'none' : '2px solid #0f172a',
                  transition: 'all 0.2s'
                }}>
                  Planı Seç
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SSS */}
      <section id="sss" style={{ backgroundColor: '#f8fafc', padding: '100px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ fontSize: '13px', color: '#14b8a6', fontWeight: 600, marginBottom: '12px', letterSpacing: '1.5px', textTransform: 'uppercase' }}>SSS</div>
            <h2 style={{ fontSize: '40px', fontWeight: '700', color: '#0f172a', marginBottom: '16px', letterSpacing: '-0.5px' }}>Sıkça sorulan sorular</h2>
            <p style={{ fontSize: '17px', color: '#64748b' }}>Aklında kalan her şeyi burada bulabilirsin.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { q: 'Uygulama indirmem gerekiyor mu?', a: 'Hayır! VERA tamamen WhatsApp üzerinden çalışır. Uygulama indirmene, form doldurmana veya karmaşık kurulum yapmana gerek yok. Sadece bir mesajla başla.' },
              { q: 'VERA gerçek bir diyetisyen mi?', a: 'VERA bir yapay zeka destekli davranışsal koçtur. Tıbbi teşhis veya tedavi vermez. Bunun yerine, sürdürülebilir alışkanlık değişimi için bilimsel temelli rehberlik sunar.' },
              { q: 'Verilerim güvende mi?', a: 'Kesinlikle. Tüm verilerin uçtan uca şifrelenir ve KVKK/GDPR uyumlu olarak saklanır. İstediğin zaman tüm verilerini silebilirsin.' },
              { q: 'İstediğim zaman iptal edebilir miyim?', a: 'Evet! Taahhüt yok, gizli ücret yok. İstediğin zaman aboneliğini iptal edebilirsin. İptal ettiğinde o ayın sonuna kadar hizmet almaya devam edersin.' },
              { q: 'Hangi dillerde hizmet veriyorsunuz?', a: 'Şu anda Türkçe, İngilizce, İspanyolca ve Portekizce dillerinde hizmet veriyoruz. Yeni diller eklenmeye devam ediyor.' }
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: 'white', padding: '28px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '17px', fontWeight: 600, color: '#0f172a', marginBottom: '12px' }}>{item.q}</h3>
                <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.7 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)', padding: '100px 24px', color: 'white' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '44px', fontWeight: '700', marginBottom: '20px', letterSpacing: '-1px' }}>Bugün tek bir mesajla başla</h2>
          <p style={{ fontSize: '19px', opacity: 0.9, marginBottom: '40px', lineHeight: 1.6 }}>
            İlk görüşme ücretsizdir. Uygulama indirmene, form doldurmana veya kredi kartı vermana gerek yok. Sadece bir mesajla başla.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <a href={whatsappLink} style={{ backgroundColor: '#14b8a6', color: 'white', padding: '16px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '16px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px', transition: 'background-color 0.2s' }}>
              WhatsApp'tan Yaz
            </a>
            <a href="#fiyatlar" style={{ backgroundColor: 'transparent', color: 'white', padding: '16px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '16px', fontWeight: 500, border: '1px solid rgba(255,255,255,0.3)', transition: 'background-color 0.2s' }}>
              Planları İncele
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#020617', color: '#94a3b8', padding: '80px 24px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '64px', marginBottom: '64px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ width: '36px', height: '36px', backgroundColor: '#0f172a', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '18px' }}>V</div>
                <span style={{ fontSize: '22px', fontWeight: '700', color: 'white', letterSpacing: '-0.5px' }}>VERA</span>
              </div>
              <p style={{ fontSize: '15px', lineHeight: 1.7, maxWidth: '320px', color: '#64748b' }}>
                Yapay zeka destekli dijital koçluk ile sürdürülebilir davranış değişimi. Uygulama yok, sadece WhatsApp.
              </p>
            </div>
            <div>
              <h4 style={{ color: 'white', fontSize: '15px', fontWeight: 600, marginBottom: '20px' }}>Ürün</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px' }}>
                <li style={{ marginBottom: '12px' }}><a href="#ozellikler" style={{ color: '#64748b', textDecoration: 'none', transition: 'color 0.2s' }}>Özellikler</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#fiyatlar" style={{ color: '#64748b', textDecoration: 'none' }}>Fiyatlar</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#sss" style={{ color: '#64748b', textDecoration: 'none' }}>SSS</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'white', fontSize: '15px', fontWeight: 600, marginBottom: '20px' }}>Şirket</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px' }}>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>Hakkımızda</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>Blog</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>İletişim</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'white', fontSize: '15px', fontWeight: 600, marginBottom: '20px' }}>Yasal</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px' }}>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>Gizlilik Politikası</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>Kullanım Koşulları</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>KVKK</a></li>
              </ul>
            </div>
          </div>
          <div style={{ borderTop: '1px solid #1e293b', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px' }}>
            <div style={{ color: '#64748b' }}>© 2026 VERA. Tüm hakları saklıdır.</div>
            <div style={{ display: 'flex', gap: '24px' }}>
              <a href="#" style={{ color: '#64748b', textDecoration: 'none', transition: 'color 0.2s' }}>Twitter</a>
              <a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>LinkedIn</a>
              <a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}