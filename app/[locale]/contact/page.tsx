// app/[locale]/contact/page.tsx
'use client';

import { Language, translations } from '@/data/translations';
import { useState } from 'react';

export default function ContactPage({ params }: { params: { locale: Language } }) {
  const locale = params.locale;
  const t = translations[locale];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send to a backend service
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <h1>{locale === 'fr' ? 'Nous Contacter' : 'Contact Us'}</h1>
        <p>
          {locale === 'fr'
            ? 'Avez-vous des questions? Nous aimerions entendre parler de vous.'
            : 'Have questions? We would love to hear from you.'}
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">📧</div>
            <h3>{locale === 'fr' ? 'Email' : 'Email'}</h3>
            <p>contact@mdbcosmetics.com</p>
            <p className="info-label">
              {locale === 'fr' ? 'Réponse rapide' : 'Quick response'}
            </p>
          </div>

          <div className="info-card">
            <div className="info-icon">🌍</div>
            <h3>{locale === 'fr' ? 'Affiliation' : 'Affiliation'}</h3>
            <p>affiliate@mdbcosmetics.com</p>
            <p className="info-label">
              {locale === 'fr'
                ? 'Partenaires Amazon'
                : 'Amazon Partners'}
            </p>
          </div>

          <div className="info-card">
            <div className="info-icon">⚖️</div>
            <h3>{locale === 'fr' ? 'Juridique' : 'Legal'}</h3>
            <p>legal@mdbcosmetics.com</p>
            <p className="info-label">
              {locale === 'fr' ? 'Conformité' : 'Compliance'}
            </p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              {locale === 'fr' ? 'Nom' : 'Name'}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder={locale === 'fr' ? 'Votre nom' : 'Your name'}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder={locale === 'fr' ? 'Votre email' : 'Your email'}
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">
              {locale === 'fr' ? 'Sujet' : 'Subject'}
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder={locale === 'fr' ? 'Sujet du message' : 'Message subject'}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">
              {locale === 'fr' ? 'Message' : 'Message'}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder={locale === 'fr' ? 'Votre message...' : 'Your message...'}
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            {locale === 'fr' ? 'Envoyer' : 'Send'}
          </button>

          {submitted && (
            <div className="success-message">
              {locale === 'fr'
                ? '✓ Message envoyé avec succès!'
                : '✓ Message sent successfully!'}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
