import { useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard.jsx';
import { services } from '../data/services.js';

export default function Services() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredServices = services.filter(service => `${service.title} ${service.description} ${service.tag}`.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <main>
      <section className="page-hero"><div className="container"><span className="eyebrow dark-eyebrow">OUR SERVICES</span><h1>Ideas backed by<br/><em>insight. Action</em><br/>backed by strategy.</h1><p>Explore practical ways MSC can support your brand, marketing and business development goals.</p></div></section>
      <section className="section container services-page-section">
        <div className="services-toolbar"><div><span className="eyebrow dark-eyebrow">HOW WE CAN HELP</span><h2>Our areas of focus</h2></div><label className="search-box"><span>⌕</span><input type="search" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} placeholder="Search services..." aria-label="Search services" /></label></div>
        {filteredServices.length ? <div className="service-grid">{filteredServices.map(service => <ServiceCard key={service.id} service={service} />)}</div> : <p className="empty-state">No services match “{searchTerm}”. Try another search.</p>}
      </section>
      <section className="cta-band"><div className="container cta-inner"><div><span className="eyebrow">NOT SURE WHERE TO START?</span><h2>Let's find the right<br/>solution together.</h2></div><Link to="/contact" className="button button-light">Contact MSC <span>↗</span></Link></div></section>
    </main>
  );
}
