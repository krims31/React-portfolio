import React from "react";
import { contacts } from "../../data/contacts";
import { Github, Mail, Send } from "lucide-react";
import './Contact.css';

const Contact = () => {
  const sectionId = 'Contact';

  const getIcon = (label) => {
    if(label.toLowerCase().includes('github')) return Github;
    if(label.toLowerCase().includes('email')) return Mail;
    if(label.toLowerCase().includes('telegram')) return Send;
  }

  return (
    <div id={sectionId} className="contact">
      <h2>Let's Work Together</h2>
      <p>I'm always open to new opportunities and collaborations.</p>
      <div className="contact-container" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
        {contacts.map((item, index) => {
          const Icon = getIcon(item.label);
          let href = item.href;

          if(item.label.toLowerCase().includes('email') && !href.startsWith('mailto:')) {
            href = `mailto:${href}`;
          }

          return (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={item.className}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              {Icon && <Icon size={20} />}
              {item.label}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Contact;
