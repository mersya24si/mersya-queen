export const Skills = ({ listSkills }) => (
  <div className="card-biodata">
    <h2 className="title-section">Keahlian</h2>
    {listSkills.map((skill, index) => (
      <span key={index} className="skill-tag">{skill}</span>
    ))}
  </div>
);