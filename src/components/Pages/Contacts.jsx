import "../../styles/contact.css";

const Contacts = () => {
  return (
    <main>
      <section id="contact-box">
        <div>
          <h2>CONTACTS</h2>
          <p>
            For any inquiries or questions, please contact us using the
            information below:
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-label">Address:</span>
              <span className="contact-value">
                123 Main Street, City, Country
              </span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Phone:</span>
              <span className="contact-value">+1 234 567 890</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Email:</span>
              <span className="contact-value">info@example.com</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contacts;