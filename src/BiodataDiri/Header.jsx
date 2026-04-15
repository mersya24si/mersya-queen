
export const Header = ({ nama, role }) => (
  <div className="card-biodata" style={{ textAlign: 'center' }}> 
    
    <h1>{nama}</h1>
    <p style={{ fontStyle: 'italic', marginTop: '10px' }}>{role}</p>
  </div>
);
