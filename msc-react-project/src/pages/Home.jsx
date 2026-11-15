import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard.jsx';
import { services } from '../data/services.js';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><span className="eyebrow-line" /> YOUR PARTNER IN BUSINESS GROWTH</span>
            <h1>Make your next move a <em>smart</em> one.</h1>
            <p className="hero-text">We help businesses understand their markets, connect with the right people and turn good ideas into measurable progress.</p>
            <div className="hero-actions"><Link className="button button-light" to="/services">Explore our services <span>↗</span></Link><Link className="text-link" to="/about">Get to know us <span>→</span></Link></div>
            <div className="hero-note"><span className="note-dot" /> Research-led thinking. Practical solutions. Real ambition.</div>
          </div>
          <div className="hero-art" role="img" aria-label="Abstract green and cream business growth illustration">
            <div className="art-circle art-circle-one" /><div className="art-circle art-circle-two" />
            <div className="art-card"><span className="art-card-label">THE MSC APPROACH</span><div className="art-chart"><i /><i /><i /><i /><i /><i /><i /></div><div className="art-card-bottom"><strong>Insight to impact</strong><span>01 — 03</span></div></div>
            <div className="art-stamp">GROW<br/>WITH<br/>PURPOSE</div>
            <span className="art-spark">✳</span>
          </div>
        </div>
      </section>
      <section className="intro-strip"><div className="container intro-inner"><strong>Good marketing starts with understanding.</strong><p>We bring research, creativity and strategy together to help your business move forward.</p></div></section>
      <section className="section container">
        <div className="section-heading"><div><span className="eyebrow dark-eyebrow">WHAT WE DO</span><h2>Support for every<br/><em>stage of growth.</em></h2></div><Link className="text-link" to="/services">View all services <span>→</span></Link></div>
        <div className="service-grid home-services">{services.slice(0, 3).map(service => <ServiceCard key={service.id} service={service} />)}</div>
      </section>
      <section className="cta-band"><div className="container cta-inner"><div><span className="eyebrow">LET'S BUILD WHAT'S NEXT</span><h2>Have a business goal<br/>in mind?</h2></div><Link to="/contact" className="button button-light">Start a conversation <span>↗</span></Link></div></section>
    </>
  );
}
