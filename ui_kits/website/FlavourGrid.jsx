// FlavourGrid.jsx — Brownie Boo flavour cards grid
const FLAVOURS = [
  { name: 'Classic Chocolate', desc: 'Rich, fudgy chocolate brownies with premium cocoa', img: '../../assets/brownie-classic.jpg', popular: true },
  { name: 'Salted Caramel', desc: 'Decadent brownies swirled with salted caramel goodness', img: '../../assets/brownie-caramel.jpg', popular: true },
  { name: 'Walnut Crunch', desc: 'Traditional brownies loaded with premium walnuts', img: '../../assets/brownie-walnut.jpg', popular: false },
  { name: 'Double Chocolate', desc: 'For chocolate lovers — extra rich with chocolate chips', img: '../../assets/brownie-double.jpg', popular: true },
  { name: 'Bueno Brownies', desc: 'Kinder Bueno flavour brownies — hazelnut & cream', img: '../../assets/brownie-bueno.jpg', popular: false },
  { name: 'Oreo', desc: 'Crunchy Oreo pieces in rich chocolate brownies', img: '../../assets/brownie-oreo.jpg', popular: false },
];

const FlavourCard = ({ flavour }) => {
  const [hovered, setHovered] = React.useState(false);
  return React.createElement('div', {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      background: '#fff', borderRadius: 24, overflow: 'hidden',
      boxShadow: hovered ? '0 20px 40px rgba(139,69,19,.2)' : '0 10px 30px rgba(139,69,19,.1)',
      transform: hovered ? 'translateY(-10px)' : 'translateY(0)',
      transition: 'all .4s ease', position: 'relative'
    }
  },
    React.createElement('div', { style: { position: 'relative', height: 220, overflow: 'hidden' } },
      React.createElement('img', {
        src: flavour.img, alt: flavour.name,
        style: { width: '100%', height: '100%', objectFit: 'cover', transform: hovered ? 'scale(1.1)' : 'scale(1)', transition: 'transform .4s ease', display: 'block' }
      }),
      flavour.popular && React.createElement('div', {
        style: {
          position: 'absolute', top: 12, left: 12,
          background: '#edfd0b', color: '#8B4513',
          padding: '4px 12px', borderRadius: 20, fontSize: 11, fontWeight: 700,
          fontFamily: "'Nunito',sans-serif"
        }
      }, 'Popular'),
      // Hover overlay
      React.createElement('div', {
        style: {
          position: 'absolute', inset: 0,
          background: 'rgba(139,69,19,.88)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: hovered ? 1 : 0, transition: 'opacity .3s'
        }
      },
        React.createElement('div', { style: { textAlign: 'center', color: '#fff', padding: '0 20px' } },
          React.createElement('p', { style: { fontFamily: "'Nunito',sans-serif", fontSize: 14, lineHeight: 1.6, margin: 0 } }, flavour.desc)
        )
      )
    ),
    React.createElement('div', { style: { padding: '18px 20px' } },
      React.createElement('h4', {
        style: { fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 700, color: '#8B4513', margin: '0 0 6px' }
      }, flavour.name),
      React.createElement('p', {
        style: { fontFamily: "'Nunito',sans-serif", fontSize: 13, color: 'rgba(139,69,19,.7)', lineHeight: 1.5, margin: 0 }
      }, flavour.desc)
    )
  );
};

const FlavourGrid = () => React.createElement('section', {
  id: 'flavours',
  style: { padding: '80px 0', background: 'linear-gradient(135deg,#FFF8DC,#FFFEF7)' }
},
  React.createElement('div', { style: { maxWidth: 1200, margin: '0 auto', padding: '0 24px' } },
    React.createElement('div', { style: { textAlign: 'center', marginBottom: 52 } },
      React.createElement('h3', {
        style: { fontFamily: "'Playfair Display',serif", fontSize: 38, fontWeight: 700, color: '#8B4513', margin: '0 0 14px' }
      }, 'Our Signature Flavours'),
      React.createElement('p', {
        style: { fontFamily: "'Nunito',sans-serif", fontSize: 17, color: 'rgba(139,69,19,.7)', maxWidth: 620, margin: '0 auto' }
      }, 'Discover our carefully crafted selection of premium brownie flavours, each one a unique taste adventure')
    ),
    React.createElement('div', {
      style: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }
    },
      FLAVOURS.map(f => React.createElement(FlavourCard, { key: f.name, flavour: f }))
    )
  )
);

Object.assign(window, { FlavourGrid });
