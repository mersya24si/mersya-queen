export const Header = ({ nama, role }) => (
  <div className="card-biodata" style={{ textAlign: 'center', background: '#2c3e50', color: 'white' }}>
    <h1>{nama}</h1>
    <p style={{ opacity: 0.9 }}>{role}</p>
  </div>
);