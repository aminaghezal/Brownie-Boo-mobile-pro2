// MenuCards.jsx — Brownie Boo box menu section
const BOXES = [
  {
    title: 'Classic Box', items: '6 Mixed Brownies',
    desc: 'Perfect for sharing or treating yourself',
    img: '../../assets/box-classic.jpg', page: 'order', featured: false
  },
  {
    title: 'Party Pack', items: '30+ Mixed Brownies',
    desc: 'Perfect for celebrations and events',
    img: '../../assets/box-party.jpg', page: 'order', featured: false
  },
  {
    title: 'Special Box', items: 'One big piece',
    desc: 'Perfect for gifting, birthdays, romantic occasions',
    img: '../../assets/box-special.jpg', page: 'order', featured: true
  },
];

const MenuCards = ({ onNavigate }) => React.createElement('section', {
  id: 'menu',
  style: { padding: '80px 0', background: 'rgba(210,180,140,.08)' }
},
  React.createElement('div', { style: { maxWidth: 1200, margin: '0 auto', padding: '0 24px' } },
    React.createElement('div', { style: { textAlign: 'center', marginBottom: 52 } },
      React.createElement('h3', {
        style: { fontFamily: "'Playfair Display',serif", fontSize: 38, fontWeight: 700, color: '#8B4513', margin: '0 0 14px' }
      }, 'Our Menu'),
      React.createElement('p', {
        style: { fontFamily: "'Nunito',sans-serif", fontSize: 17, color: 'rgba(139,69,19,.7)' }
      }, 'Choose from our variety of brownie boxes and individual treats')
    ),
    React.createElement('div', {
      style: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }
    },
      BOXES.map(box => React.createElement(MenuCard, { key: box.title, box, onNavigate }))
    )
  )
);

const MenuCard = ({ box, onNavigate }) => {
  const [hov, setHov] = React.useState(false);
  return React.createElement('div', {
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      background: '#fff', borderRadius: 24,
      boxShadow: hov ? '0 20px 40px rgba(139,69,19,.2)' : '0 10px 30px rgba(139,69,19,.1)',
      transform: hov ? 'translateY(-8px)' : 'translateY(0)',
      transition: 'all .4s', overflow: 'hidden', position: 'relative',
      border: box.featured ? '2px solid #FF8C00' : '2px solid transparent'
    }
  },
    box.featured && React.createElement('div', {
      style: {
        background: 'linear-gradient(135deg,#FF8C00,#e67e00)', color: '#fff',
        textAlign: 'center', padding: '6px', fontSize: 12, fontWeight: 700,
        fontFamily: "'Nunito',sans-serif", letterSpacing: '.04em'
      }
    }, '⭐ Most Popular'),
    React.createElement('div', { style: { padding: 28 } },
      React.createElement('h4', {
        style: { fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 700, color: '#8B4513', margin: '0 0 6px' }
      }, box.title),
      React.createElement('p', {
        style: { fontFamily: "'Nunito',sans-serif", fontSize: 13, fontWeight: 700, color: '#FF8C00', margin: '0 0 14px' }
      }, box.items),
      React.createElement('img', {
        src: box.img, alt: box.title,
        style: { width: '100%', height: 180, objectFit: 'cover', borderRadius: 14, display: 'block', marginBottom: 14,
          transform: hov ? 'scale(1.03)' : 'scale(1)', transition: 'transform .4s' }
      }),
      React.createElement('p', {
        style: { fontFamily: "'Nunito',sans-serif", fontSize: 14, color: 'rgba(139,69,19,.7)', lineHeight: 1.6, margin: '0 0 20px' }
      }, box.desc),
      React.createElement('button', {
        onClick: () => onNavigate(box.page),
        style: {
          width: '100%', background: 'linear-gradient(135deg,#FF8C00,#e67e00)', color: '#fff',
          border: 'none', borderRadius: 12, padding: '12px 0',
          fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 15, cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(255,140,0,.3)'
        }
      }, 'Order Now')
    )
  );
};

Object.assign(window, { MenuCards, MenuCard });
