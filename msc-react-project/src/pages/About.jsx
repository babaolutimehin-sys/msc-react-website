import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main>
      <section className="page-hero"><div className="container"><span className="eyebrow dark-eyebrow">ABOUT MSC</span><h1>We believe better<br/><em>decisions build</em> better<br/>businesses.</h1><p>Marketing Support Consultancy is a student-developed business concept focused on helping organisations make informed marketing and growth decisions.</p></div></section>
      <section className="section container about-layout"><div className="about-visual"><div className="about-visual-inner"><span>MSC</span><strong>Think clearly.<br/>Move boldly.</strong><small>STRATEGY • INSIGHT • GROWTH</small></div></div><div className="about-copy"><span className="eyebrow dark-eyebrow">OUR STORY</span><h2>Practical support<br/>for ambitious ideas.</h2><p>Businesses need more than visibility. They need to understand the people they serve, recognise opportunities and communicate their value clearly.</p><p>MSC is designed around that belief. We bring research, marketing strategy and practical support together to help businesses plan their next steps with confidence.</p><div className="mission-grid"><div><span>01 / MISSION</span><h3>Make growth clearer.</h3><p>Help businesses make informed decisions through useful insight and effective marketing support.</p></div><div><span>02 / VISION</span><h3>Build lasting impact.</h3><p>Become a trusted consultancy concept known for thoughtful strategy and measurable progress.</p></div></div><Link to="/contact" className="text-link">Talk to our team <span>→</span></Link></div></section>
    </main>
  );
}
