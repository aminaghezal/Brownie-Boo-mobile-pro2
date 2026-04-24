// Hero.jsx — Brownie Boo landing hero section
const Hero = ({ onNavigate }) => {
  const s = {
    section: {
      background: 'linear-gradient(135deg,#FFF8DC 0%,#FFFEF7 100%)',
      padding: '80px 0 60px', minHeight: '88vh', display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden'
    },
    container: { maxWidth: 1200, margin: '0 auto', padding: '0 24px', width: '100%' },
    grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' },
    badge: {
      display: 'inline-flex', alignItems: 'center', gap: 6,
      background: 'rgba(255,140,0,.13)', color: '#FF8C00',
      padding: '8px 18px', borderRadius: 25, fontSize: 14, fontWeight: 700,
      border: '1px solid rgba(255,140,0,.28)', marginBottom: 20
    },
    h1: {
      fontFamily: "'Playfair Display', serif",
      fontSize: 52, fontWeight: 900, lineHeight: 1.1,
      color: '#8B4513', margin: '0 0 20px'
    },
    accent: {
      background: 'linear-gradient(135deg,#FF8C00,#e67e00)',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
      backgroundClip: 'text', display: 'block', marginTop: 4
    },
    desc: { fontSize: 17, color: 'rgba(139,69,19,.8)', lineHeight: 1.7, marginBottom: 28, fontFamily: "'Nunito',sans-serif" },
    btnRow: { display: 'flex', gap: 16, flexWrap: 'wrap' },
    btnPrimary: {
      display: 'inline-flex', alignItems: 'center', gap: 8,
      background: 'linear-gradient(135deg,#FF8C00,#e67e00)', color: '#fff',
      border: 'none', borderRadius: 15, padding: '14px 28px',
      fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 17,
      cursor: 'pointer', boxShadow: '0 4px 15px rgba(255,140,0,.3)'
    },
    btnOutline: {
      background: 'transparent', color: '#8B4513',
      border: '2px solid #8B4513', borderRadius: 15, padding: '14px 28px',
      fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 17, cursor: 'pointer'
    },
    imgWrap: {
      position: 'relative', borderRadius: 28, overflow: 'hidden',
      boxShadow: '0 25px 50px rgba(139,69,19,.18)',
    },
    ratingBadge: {
      position: 'absolute', bottom: -16, right: -16,
      background: 'linear-gradient(135deg,#FF8C00,#e67e00)', color: '#fff',
      padding: '14px 18px', borderRadius: '50%', textAlign: 'center',
      boxShadow: '0 8px 24px rgba(255,140,0,.35)', minWidth: 80
    }
  };

  return React.createElement('section', { style: s.section },
    React.createElement('div', { style: s.container },
      React.createElement('div', { style: s.grid },
        // Text side
        React.createElement('div', null,
          React.createElement('div', { style: s.badge },
            React.createElement('i', { className: 'fas fa-sparkles' }),
            ' Handcrafted with Love'
          ),
          React.createElement('h2', { style: s.h1 },
            'Indulge in Our',
            React.createElement('span', { style: s.accent }, 'Premium Brownies')
          ),
          React.createElement('p', { style: s.desc },
            'Experience the perfect blend of rich chocolate, premium ingredients, and artisanal craftsmanship. Each brownie is a masterpiece of flavor that melts in your mouth.'
          ),
          React.createElement('div', { style: s.btnRow },
            React.createElement('button', { style: s.btnPrimary, onClick: () => onNavigate('choose') },
              React.createElement('i', { className: 'fas fa-heart' }), ' Make an Order'
            ),
            React.createElement('button', { style: s.btnOutline, onClick: () => onNavigate('menu') },
              'View Menu'
            )
          ),
          // Stats
          React.createElement('div', { style: { display: 'flex', gap: 32, marginTop: 36 } },
            [['5.0', 'Rating'], ['100%', 'Handcrafted'], ['Fresh', 'Daily Baked']].map(([n, l]) =>
              React.createElement('div', { key: l, style: { textAlign: 'center' } },
                React.createElement('span', { style: { display: 'block', fontSize: 24, fontWeight: 800, color: '#FF8C00', fontFamily: "'Playfair Display',serif" } }, n),
                React.createElement('span', { style: { fontSize: 12, color: 'rgba(139,69,19,.65)', fontFamily: "'Nunito',sans-serif" } }, l)
              )
            )
          )
        ),
        // Image side
        React.createElement('div', { style: { position: 'relative' } },
          React.createElement('div', { style: s.imgWrap },
            React.createElement('img', { src: '../../assets/hero-brownies.png', alt: 'Brownies', style: { width: '100%', height: 'auto', display: 'block' } })
          ),
          React.createElement('div', { style: s.ratingBadge },
            React.createElement('div', { style: { display: 'flex', gap: 2, justifyContent: 'center', marginBottom: 4 } },
              [1,2,3,4,5].map(i => React.createElement('i', { key: i, className: 'fas fa-star', style: { fontSize: 10, color: '#fff' } }))
            ),
            React.createElement('p', { style: { margin: 0, fontSize: 11, fontWeight: 700, fontFamily: "'Nunito',sans-serif" } }, '5.0 Rating')
          )
        )
      )
    )
  );
};

Object.assign(window, { Hero });
