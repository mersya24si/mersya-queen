export const Experience = ({ listExp }) => (
  <div className="card-biodata">
    <h2 className="title-section">Pengalaman</h2>
    {listExp.map((exp, index) => (
      <div key={index} style={{ marginBottom: '10px' }}>
        <strong>{exp.posisi}</strong> | {exp.perusahaan}
      </div>
    ))}
  </div>
);