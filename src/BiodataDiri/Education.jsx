export const Education = ({ sekolah }) => (
  <div className="card-biodata">
    <h2 className="title-section">Pendidikan</h2>
    <ul>
      {sekolah.map((item, index) => (
        <li key={index}><strong>{item.tahun}</strong> - {item.namaSekolah}</li>
      ))}
    </ul>
  </div>
);