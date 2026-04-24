// OrderFlow.jsx — Brownie Boo flavour picker + cart
const ORDER_FLAVOURS = [
  { name: 'Classic Chocolate', img: '../../assets/brownie-classic.jpg' },
  { name: 'Salted Caramel',    img: '../../assets/brownie-caramel.jpg' },
  { name: 'Walnut Crunch',     img: '../../assets/brownie-walnut.jpg' },
  { name: 'Double Chocolate',  img: '../../assets/brownie-double.jpg' },
  { name: 'Bueno',             img: '../../assets/brownie-bueno.jpg' },
  { name: 'Oreo',              img: '../../assets/brownie-oreo.jpg' },
];
const BOX_SIZE = 6;

const OrderFlow = ({ onNavigate }) => {
  const [quantities, setQuantities] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);

  const total = Object.values(quantities).reduce((s, v) => s + v, 0);
  const remaining = BOX_SIZE - total;

  const setQty = (name, delta) => {
    setQuantities(prev => {
      const cur = prev[name] || 0;
      const next = Math.max(0, cur + delta);
      if (delta > 0 && remaining <= 0) return prev;
      return { ...prev, [name]: next };
    });
  };

  const cartItems = ORDER_FLAVOURS.filter(f => quantities[f.name] > 0);

  const st = {
    page: { minHeight: '100vh', background: 'linear-gradient(135deg,#FFF8DC,#FFFEF7)', padding: '40px 24px' },
    container: { maxWidth: 1200, margin: '0 auto' },
    layout: { display: 'grid', gridTemplateColumns: '1fr 360px', gap: 36, alignItems: 'start' },
    h2: { fontFamily: "'Playfair Display',serif", fontSize: 34, fontWeight: 700, color: '#8B4513', margin: '0 0 8px' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginTop: 28 },
    flavCard: (hov) => ({
      background: '#fff', borderRadius: 20, overflow: 'hidden',
      boxShadow: hov ? '0 16px 32px rgba(139,69,19,.18)' : '0 8px 24px rgba(139,69,19,.1)',
      transform: hov ? 'translateY(-6px)' : 'none', transition: 'all .3s'
    }),
    sidebar: { position: 'sticky', top: 100 },
    cartCard: { background: '#fff', borderRadius: 24, boxShadow: '0 10px 30px rgba(139,69,19,.1)', overflow: 'hidden' },
    cartHeader: { padding: '16px 22px', borderBottom: '1px solid rgba(139,69,19,.1)', fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 700, color: '#8B4513' },
    cartBody: { padding: '18px 22px' },
    progress: { height: 8, background: 'rgba(139,69,19,.15)', borderRadius: 4, marginBottom: 14, overflow: 'hidden' },
    progFill: { height: '100%', background: 'linear-gradient(90deg,#FF8C00,#e67e00)', borderRadius: 4, transition: 'width .3s' },
    btn: { width: '100%', background: total < BOX_SIZE ? '#ddcdb9' : 'linear-gradient(135deg,#FF8C00,#e67e00)', color: total < BOX_SIZE ? '#b08060' : '#fff', border: 'none', borderRadius: 12, padding: '13px 0', fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 15, cursor: total < BOX_SIZE ? 'not-allowed' : 'pointer', marginTop: 16 }
  };

  if (submitted) return React.createElement('div', {
    style: { minHeight: '100vh', background: 'linear-gradient(135deg,#FFF8DC,#FFFEF7)', display: 'flex', alignItems: 'center', justifyContent: 'center' }
  },
    React.createElement('div', { style: { textAlign: 'center', padding: 40 } },
      React.createElement('div', {
        style: { width: 80, height: 80, background: 'linear-gradient(135deg,#FF8C00,#e67e00)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: 32, color: '#fff' }
      }, '✓'),
      React.createElement('h2', { style: { fontFamily: "'Playfair Display',serif", color: '#8B4513', fontSize: 28, margin: '0 0 12px' } }, 'Order Received!'),
      React.createElement('p', { style: { fontFamily: "'Nunito',sans-serif", color: 'rgba(139,69,19,.7)', marginBottom: 24 } }, 'Your brownies are being prepared with love 🍫'),
      React.createElement('button', { style: { ...st.btn, width: 'auto', padding: '12px 32px' }, onClick: () => { setSubmitted(false); setQuantities({}); onNavigate('home'); } }, 'Back to Home')
    )
  );

  return React.createElement('div', { style: st.page },
    React.createElement('div', { style: st.container },
      React.createElement('div', { style: { marginBottom: 28 } },
        React.createElement('button', { onClick: () => onNavigate('home'), style: { background: 'none', border: 'none', color: '#8B4513', fontFamily: "'Nunito',sans-serif", fontWeight: 600, fontSize: 15, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 } },
          '← Back to Home'
        )
      ),
      React.createElement('div', { style: st.layout },
        // Left: flavour picker
        React.createElement('div', null,
          React.createElement('h2', { style: st.h2 }, 'Build Your Box'),
          React.createElement('p', { style: { fontFamily: "'Nunito',sans-serif", color: 'rgba(139,69,19,.7)', fontSize: 15, margin: 0 } },
            `Choose ${BOX_SIZE} brownies — ${remaining > 0 ? `${remaining} slots remaining` : 'Box full!'}`
          ),
          React.createElement('div', { style: st.grid },
            ORDER_FLAVOURS.map(f => React.createElement(FlavourPickerCard, {
              key: f.name, flavour: f,
              qty: quantities[f.name] || 0,
              onAdd: () => setQty(f.name, 1),
              onRemove: () => setQty(f.name, -1),
              canAdd: remaining > 0
            }))
          )
        ),
        // Right: cart
        React.createElement('div', { style: st.sidebar },
          React.createElement('div', { style: st.cartCard },
            React.createElement('div', { style: st.cartHeader }, `🧁 Your Box (${total}/${BOX_SIZE})`),
            React.createElement('div', { style: st.cartBody },
              React.createElement('div', { style: st.progress },
                React.createElement('div', { style: { ...st.progFill, width: `${(total / BOX_SIZE) * 100}%` } })
              ),
              cartItems.length === 0
                ? React.createElement('p', { style: { fontFamily: "'Nunito',sans-serif", color: 'rgba(139,69,19,.5)', textAlign: 'center', padding: '20px 0', fontSize: 14 } }, 'Add brownies to fill your box')
                : cartItems.map(f => React.createElement('div', {
                    key: f.name,
                    style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(139,69,19,.08)' }
                  },
                    React.createElement('span', { style: { fontFamily: "'Nunito',sans-serif", fontSize: 14, color: '#8B4513', fontWeight: 600 } }, f.name),
                    React.createElement('span', { style: { fontFamily: "'Nunito',sans-serif", fontSize: 14, fontWeight: 700, color: '#FF8C00' } }, `×${quantities[f.name]}`)
                  )
                ),
              React.createElement('button', {
                style: st.btn,
                disabled: total < BOX_SIZE,
                onClick: () => total >= BOX_SIZE && setSubmitted(true)
              }, total < BOX_SIZE ? `Add ${remaining} more…` : 'Place Order →')
            )
          )
        )
      )
    )
  );
};

const FlavourPickerCard = ({ flavour, qty, onAdd, onRemove, canAdd }) => {
  const [hov, setHov] = React.useState(false);
  return React.createElement('div', {
    onMouseEnter: () => setHov(true), onMouseLeave: () => setHov(false),
    style: {
      background: '#fff', borderRadius: 18, overflow: 'hidden',
      boxShadow: hov ? '0 12px 28px rgba(139,69,19,.18)' : '0 6px 18px rgba(139,69,19,.1)',
      transform: hov ? 'translateY(-4px)' : 'none', transition: 'all .3s',
      border: qty > 0 ? '2px solid rgba(255,140,0,.5)' : '2px solid transparent'
    }
  },
    React.createElement('img', { src: flavour.img, alt: flavour.name, style: { width: '100%', height: 140, objectFit: 'cover', display: 'block' } }),
    React.createElement('div', { style: { padding: '12px 14px' } },
      React.createElement('p', { style: { fontFamily: "'Playfair Display',serif", fontSize: 14, fontWeight: 700, color: '#8B4513', margin: '0 0 10px' } }, flavour.name),
      React.createElement('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' } },
        React.createElement('button', { onClick: onRemove, disabled: qty === 0, style: { width: 30, height: 30, border: '2px solid #FF8C00', background: 'transparent', color: '#FF8C00', borderRadius: '50%', cursor: qty === 0 ? 'not-allowed' : 'pointer', fontWeight: 700, fontSize: 16, opacity: qty === 0 ? .4 : 1 } }, '−'),
        React.createElement('span', { style: { fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 18, color: '#8B4513', minWidth: 24, textAlign: 'center' } }, qty),
        React.createElement('button', { onClick: onAdd, disabled: !canAdd, style: { width: 30, height: 30, border: 'none', background: canAdd ? 'linear-gradient(135deg,#FF8C00,#e67e00)' : '#ddcdb9', color: '#fff', borderRadius: '50%', cursor: canAdd ? 'pointer' : 'not-allowed', fontWeight: 700, fontSize: 16 } }, '+')
      )
    )
  );
};

Object.assign(window, { OrderFlow, FlavourPickerCard });
