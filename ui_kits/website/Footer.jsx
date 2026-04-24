// Footer.jsx — Brownie Boo dark footer
const Footer = ({ onNavigate }) => React.createElement('footer', {
  style: {
    background: 'linear-gradient(135deg,#020100,#654321)',
    color: '#FFF8DC', padding: '48px 24px 24px', position: 'relative', overflow: 'hidden'
  }
},
  React.createElement('div', { style: { maxWidth: 1200, margin: '0 auto' } },
    React.createElement('div', { style: { display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 40, marginBottom: 32 } },
      // Brand
      React.createElement('div', null,
        React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 } },
          React.createElement('img', { src: '../../assets/logo-no-bg.png', width: 48, height: 48, alt: 'Logo', style: { objectFit: 'contain' } }),
          React.createElement('span', { style: { fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 700, color: '#FFF8DC' } }, 'Brownie Boo')
        ),
        React.createElement('p', { style: { fontFamily: "'Nunito',sans-serif", fontSize: 14, color: 'rgba(255,248,220,.75)', lineHeight: 1.7, maxWidth: 280 } },
          'Crafting the perfect brownies with love, passion, and premium ingredients since day one.'
        ),
        // Social
        React.createElement('div', { style: { display: 'flex', gap: 10, marginTop: 16 } },
          ['fab fa-instagram', 'fab fa-facebook', 'fab fa-tiktok'].map(icon =>
            React.createElement('a', {
              key: icon, href: '#',
              style: { width: 36, height: 36, background: 'rgba(255,140,0,.18)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF8C00', textDecoration: 'none', fontSize: 15, transition: 'all .2s' }
            },
              React.createElement('i', { className: icon })
            )
          )
        )
      ),
      // Quick Links
      React.createElement('div', null,
        React.createElement('h6', { style: { fontFamily: "'Playfair Display',serif", fontSize: 16, color: '#FFF8DC', margin: '0 0 16px' } }, 'Quick Links'),
        React.createElement('ul', { style: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 } },
          ['Home', 'Flavours', 'Menu', 'Contact'].map(l =>
            React.createElement('li', { key: l },
              React.createElement('a', {
                href: '#', onClick: e => { e.preventDefault(); onNavigate(l.toLowerCase()); },
                style: { color: 'rgba(255,248,220,.75)', textDecoration: 'none', fontFamily: "'Nunito',sans-serif", fontSize: 14, transition: 'color .2s' }
              }, l)
            )
          )
        )
      ),
      // Contact
      React.createElement('div', null,
        React.createElement('h6', { style: { fontFamily: "'Playfair Display',serif", fontSize: 16, color: '#FFF8DC', margin: '0 0 16px' } }, 'Contact'),
        React.createElement('ul', { style: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 } },
          [['📧', 'brownieboo@gmail.com'], ['📞', '0657757691'], ['📍', 'Oran, Algérie']].map(([icon, text]) =>
            React.createElement('li', { key: text, style: { fontFamily: "'Nunito',sans-serif", fontSize: 14, color: 'rgba(255,248,220,.75)', display: 'flex', alignItems: 'flex-start', gap: 8 } },
              React.createElement('span', null, icon), React.createElement('span', null, text)
            )
          )
        )
      )
    ),
    React.createElement('div', { style: { borderTop: '1px solid rgba(255,248,220,.15)', paddingTop: 20, textAlign: 'center' } },
      React.createElement('p', { style: { fontFamily: "'Nunito',sans-serif", fontSize: 13, color: 'rgba(255,248,220,.5)', margin: 0 } }, '© 2025 Brownie Boo. All rights reserved.')
    )
  )
);

Object.assign(window, { Footer });
