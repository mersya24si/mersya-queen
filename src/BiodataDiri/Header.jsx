// Di file child component
export const Header = ({ nama, role }) => (
  <div className="card-biodata" style={{ textAlign: 'center' }}> 
    {/* Hapus background & color inline agar mengikuti custom.css */}
    <h1>{nama}</h1>
    <p style={{ fontStyle: 'italic', marginTop: '10px' }}>{role}</p>
  </div>
);