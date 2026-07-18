import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/contact.css';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error');
      setErrorMessage('Email service is not configured. Please add your EmailJS keys.');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'anmiraabdelkader@gmail.com',
        },
        publicKey,
      );
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      console.error('Failed to send message', err);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again later or email me directly.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-title" data-aos="fade-up">
        <div className="hr"></div>
        <h2>Let's Connect</h2>
        <div className="hr"></div>
      </div>

      {/* 2-column grid: left col (photo + links) | right col (form) */}
      <div className="contact-grid" data-aos="fade-up">

        {/* ── LEFT COLUMN ── */}
        <div className="contact-left-col">

          {/* Tall photo card */}
          <article className="contact-visual-card">
            <img
              src="/media/images/profile3.png"
              alt="Abdelkader Anmira"
              className="contact-hero-image"
            />
            <div className="visual-overlay">
              <p className="eyebrow">Need a data partner?</p>
              <h3>Abdelkader Anmira</h3>
              <p className="profile-role">Data Engineering • Analytics • AI</p>
              <div className="location-chip">
                <span>Based in</span>
                <strong>Marrakech, Morocco</strong>
              </div>
            </div>
          </article>

          {/* Icon-only social row — no card, no labels */}
          <div className="social-icon-row">
            <a href="mailto:nmiraabdellader@gmail.com" className="social-icon-btn" title="Email">
              <FaEnvelope />
            </a>
            <a href="https://www.linkedin.com/in/abdelkader-anmira4" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/abdoNM5" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="GitHub">
              <FaGithub />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="Instagram">
              <FaInstagram />
            </a>
            <a href="https://wa.me/212651191581" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>

        </div>
        {/* ── END LEFT COLUMN ── */}

        {/* ── RIGHT COLUMN: Full-height contact form ── */}
        <div className="contact-form-box">
          <div className="form-header">
            <p className="eyebrow">CONTACT ME VIA MESSAGE</p>
            <h3>Tell me about your data challenge</h3>
            <p className="form-subtitle">I read every message and reply straight from my inbox.</p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-columns">
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  maxLength={60}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="********@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  maxLength={60}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Hiring for... / Need help with..."
                value={formData.subject}
                onChange={handleChange}
                maxLength={120}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message *</label>
              <textarea
                id="message"
                name="message"
                placeholder="Share what you need help with—role, challenge, or outcome."
                value={formData.message}
                onChange={handleChange}
                maxLength={550}
                rows={6}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
          </form>

          {status === 'success' && (
            <div className="success-message">✓ Message sent! Expect a reply shortly.</div>
          )}
          {status === 'error' && (
            <div className="error-message">⚠ {errorMessage}</div>
          )}
        </div>
        {/* ── END RIGHT COLUMN ── */}

      </div>
    </section>
  );
};
