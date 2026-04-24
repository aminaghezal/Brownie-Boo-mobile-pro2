// Header.jsx — Brownie Boo sticky navigation
const Header = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = ['Home', 'Flavours', 'Menu', 'Contact'];

  return React.createElement('header', {
    style: {
      position: 'sticky', top: 0, zIndex: 1000,
      background: 'rgba(255,255,255,0.96)',
      backdropFilter: 'blur(10px)',
      boxShadow: scrolled ? '0 2px 20px rgba(139,69,19,.15)' : '0 2px 20px rgba(139,69,19,.08)',
      transition: 'box-shadow .3s',
    }
  },
    React.createElement('div', { style: { maxWidth: 1200, margin: '0 auto', padding: '0 24px' } },
      React.createElement('div', {
        style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }
      },
        // Logo
        React.createElement('div', {
          style: { display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' },
          onClick: () => onNavigate('home')
        },
          React.createElement('img', { src: '../../assets/logo-no-bg.png', width: 48, height: 48, alt: 'Brownie Boo', style: { objectFit: 'contain' } }),
          React.createElement('span', {
            style: { fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: '#8B4513' }
          }, 'Brownie Boo')
        ),
        // Desktop nav
        React.createElement('nav', { style: { display: 'flex', gap: 32 } },
          navLinks.map(link =>
            React.createElement('a', {
              key: link,
              href: '#',
              onClick: e => { e.preventDefault(); onNavigate(link.toLowerCase()); },
              style: {
                textDecoration: 'none',
                color: currentPage === link.toLowerCase() ? '#FF8C00' : '#8B4513',
                fontWeight: 600, fontSize: 15,
                borderBottom: currentPage === link.toLowerCase() ? '2px solid #FF8C00' : '2px solid transparent',
                paddingBottom: 2, transition: 'all .2s'
              }
            }, link)
          )
        ),
        // CTA
        React.createElement('button', {
          onClick: () => onNavigate('choose'),
          style: {
            background: 'linear-gradient(135deg,#FF8C00,#e67e00)', color: '#fff',
            border: 'none', borderRadius: 12, padding: '10px 22px',
            fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 15,
            cursor: 'pointer', boxShadow: '0 4px 15px rgba(255,140,0,.3)'
          }
        }, 'Order Now')
      )
    )
  );
};

Object.assign(window, { Header });
