import { useState } from 'react';

const initialForm = { fullName: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(previous => ({ ...previous, [name]: value }));
    setErrors(previous => ({ ...previous, [name]: '' }));
    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name.';
    if (!formData.email.trim()) newErrors.email = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email address.';
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject.';
    if (!formData.message.trim()) newErrors.message = 'Please enter a message.';
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setFormData(initialForm);
    }
  }

  return (
    <main>
      <section className="page-hero"><div className="container"><span className="eyebrow dark-eyebrow">CONTACT US</span><h1>Let's start a<br/><em>conversation.</em></h1><p>Tell us what you're working towards. We'd be glad to hear from you.</p></div></section>
      <section className="section container contact-layout">
        <div className="contact-info"><span className="eyebrow dark-eyebrow">GET IN TOUCH</span><h2>Every good plan<br/>starts with a chat.</h2><p>Use the form to tell us about your goals, questions or project ideas.</p><div className="contact-detail"><span>EMAIL</span><a href="mailto:hello@msc.example">hello@msc.example</a></div><div className="contact-detail"><span>PHONE</span><a href="tel:+2348000000000">+234 800 000 0000</a></div><p className="sample-note">Sample contact details for this student project. Replace them with your approved details before publishing.</p></div>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <h3>Send us a message</h3>
          {submitted && <div className="success-message" role="status">Thank you! Your form passed validation. This demo does not send messages to a server.</div>}
          <div className="form-field"><label htmlFor="fullName">Full name</label><input id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Your full name" />{errors.fullName && <small className="error-text">{errors.fullName}</small>}</div>
          <div className="form-field"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" />{errors.email && <small className="error-text">{errors.email}</small>}</div>
          <div className="form-field"><label htmlFor="subject">Subject</label><input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="What would you like to discuss?" />{errors.subject && <small className="error-text">{errors.subject}</small>}</div>
          <div className="form-field"><label htmlFor="message">Message</label><textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} placeholder="Tell us a little about your project..." />{errors.message && <small className="error-text">{errors.message}</small>}</div>
          <button className="button button-dark" type="submit">Submit message <span>↗</span></button>
        </form>
      </section>
    </main>
  );
}
