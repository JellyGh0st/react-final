import "../../styles/contact.css";

const Contacts = () => {
  return (
    <main>
      <section id="contact-box">
        <div>
          <h2>Contact us:</h2>
          <p>
            For any inquiries or questions, please contact us using the
            information below:
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-label">Address: </span>
              <span className="contact-value">
                777 React Street, React City,  React Country
              </span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Phone: </span>
              <span className="contact-value">+7 777 777 777</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Email: </span>
              <span className="contact-value">info@BandZoo.com</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contacts;