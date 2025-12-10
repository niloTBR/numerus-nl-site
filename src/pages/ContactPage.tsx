import { useState } from 'react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import styles from './ContactPage.module.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' });
      setShowSuccess(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const locations = [
    {
      id: 'baghdad',
      city: 'Baghdad',
      country: 'Iraq',
      lat: 33.3128,
      lng: 44.3615,
      address: ['PO Box 11235', 'Al-Karrada, District 905', 'Street 1, Building 8', 'Baghdad, Iraq'],
      phone: ['M: +964 (790) 190-5157', 'T: +964 (1) 717-8456 / 7', 'F: +964 (1) 717-8458'],
      mapUrl: 'https://maps.google.com/?q=33.3128,44.3615'
    },
    {
      id: 'basra',
      city: 'Basra',
      country: 'Iraq',
      company: 'Al-Gharraf Oil Services',
      lat: 30.5085,
      lng: 47.7804,
      address: ['Sayed Ameen Street', 'Opposite Alhadara schools', 'Albradeya Basrah, Iraq'],
      phone: ['T: +964 (781) 877-4944'],
      email: 'info@numerusgroup.com',
      mapUrl: 'https://maps.google.com/?q=30.5085,47.7804'
    },
    {
      id: 'erbil1',
      city: 'Erbil',
      country: 'Iraq',
      company: 'Al-Estilam Express Cargo',
      lat: 36.1901,
      lng: 44.0091,
      address: ['First Italian Village', 'Villa 245', 'Erbil, Kurdistan, Iraq'],
      phone: ['Phone: +964 750 630 8000'],
      mapUrl: 'https://maps.google.com/?q=36.1901,44.0091'
    },
    {
      id: 'erbil2',
      city: 'Erbil',
      country: 'Iraq',
      company: 'Leading Star Automotive',
      lat: 36.2101,
      lng: 44.0291,
      address: ['Kirkuk Road, Qarachnagha', 'Erbil, Kurdistan Iraq'],
      phone: ['Phone: +964 750 353-5638', '+964 773 555-5638'],
      mapUrl: 'https://maps.google.com/?q=36.2101,44.0291'
    },
    {
      id: 'dubai',
      city: 'Dubai',
      country: 'UAE',
      lat: 25.1850,
      lng: 55.2708,
      address: ['PO Box 64250', 'Bayswater Tower, Suite 1807', 'Al-Abraj Street, Business Bay', 'Dubai, UAE'],
      phone: ['T: +971 (4) 457-3030', 'F: +971 (4) 422-8117'],
      mapUrl: 'https://maps.google.com/?q=25.1850,55.2708'
    }
  ];

  return (
    <div className={styles.contactPage}>
      <PageHeader 
        title="Contact Us" 
        subtitle="Connect with our global team to explore partnership opportunities"
      />

      {/* Contact Form and Info Section */}
      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Contact Form */}
            <div className={styles.formContainer}>
              <h2 className={styles.sectionTitle}>Send us a Message</h2>
              {showSuccess && (
                <div className={styles.successMessage}>
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={styles.formTextarea}
                  />
                </div>
                <button type="submit" className={styles.submitButton}>
                  Send Message
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>

            {/* Quick Contact Info */}
            <div className={styles.infoContainer}>
              <h2 className={styles.sectionTitle}>Quick Contact</h2>
              <div className={styles.quickLocations}>
                {locations.map((location) => (
                  <a
                    key={location.id}
                    href={location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.quickCard}
                  >
                    <div className={styles.quickCardHeader}>
                      <MapPin size={16} />
                      <div>
                        <h4>{location.city}, {location.country}</h4>
                        {location.company && (
                          <span className={styles.quickCompany}>{location.company}</span>
                        )}
                      </div>
                    </div>
                    <div className={styles.quickCardContent}>
                      {location.address.map((line, i) => (
                        <p key={i} className={styles.addressLine}>{line}</p>
                      ))}
                      <div className={styles.quickPhones}>
                        {location.phone.map((phone, i) => (
                          <p key={i} className={styles.phoneLine}>{phone}</p>
                        ))}
                        {location.email && (
                          <p className={styles.emailLine}>E: {location.email}</p>
                        )}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default ContactPage;