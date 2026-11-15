export default function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div className="service-card-top"><span className="service-icon">{service.icon}</span><span className="service-tag">{service.tag}</span></div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <span className="card-arrow" aria-hidden="true">↗</span>
    </article>
  );
}
