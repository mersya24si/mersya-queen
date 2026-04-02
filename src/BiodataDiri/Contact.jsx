export const Contact = ({ email, telp }) => (
  <div className="card-biodata">
    <h2 className="title-section">Kontak</h2>
    <p className="contact-info">📧 Email: {email}</p>
    <p className="contact-info">📞 No. HP: {telp}</p>
  </div>
);