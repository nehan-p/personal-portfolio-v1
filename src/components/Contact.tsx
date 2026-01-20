import React from "react";
import "../assets/styles/Contact.scss";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function Contact() {
  const email = "nehan.punjani@mail.utoronto.ca";
  const subject = "Hello Nehan — Let’s connect";
  const body =
    "Hi Nehan,%0D%0A%0D%0A(Reaching out about...)%0D%0A%0D%0A—%0D%0AName:%0D%0ALinkedIn/GitHub:%0D%0A";

  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;

  return (
    <section id="contact" className="contact-section">
      <div className="items-container">
        <div className="contact-card">
          <p className="contact-kicker">Want to chat?</p>
          <h1 className="contact-title">Get in touch.</h1>

          <p className="contact-subtitle">
            I’m currently looking for software internships (Summer 2026). If you have an
            opportunity, a project idea, or just want to say hi, feel free to reach out.
          </p>

          <div className="contact-actions">
            <a className="contact-btn" href={mailto}>
              <MailOutlineIcon />
              Reach out
            </a>

            <div className="contact-email">
              <span>Or email me directly at</span>{" "}
              <a className="contact-email-link" href={`mailto:${email}`}>
                {email}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
