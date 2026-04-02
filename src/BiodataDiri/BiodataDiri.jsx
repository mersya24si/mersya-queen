import React from 'react';
import './custom.css';
import { Header } from './Header';
import { About } from './About';
import { Education } from './Education';
import { Skills } from './Skills';
import { Experience } from './Experience';
import { Contact } from './Contact';

const BiodataDiri = () => {
  const data = {
    nama: "Mersya Meylani Putri",
    umur: "20 tahun",
    bio: "Saya adalah mahasiswa yang fokus pada pengembangan antarmuka web yang responsif dan modern.",
    sekolah: [
      { tahun: "2021 - 2025", namaSekolah: "Sistem Informasi - Politeknik Caltex Riau" },
      { tahun: "2018 - 2021", namaSekolah: "SMAN 1 Tebing Tinggi" }
    ],
    keahlian: ["Menari", "Makeup", "Masak"],
    pengalaman: [
      { pengalaman: "Lomba tari mewakili kota di provinsi" },
      { pengalaman: "Mengikuti lomba tari fls2n dan mendapatkan juara" }
    ],
    kontak: {
      email: "mersyameylaniputri@gmail.com",
      telp: "0812-6749-8272"
    }
  };

  return (
    <div className="container-biodata">
      <Header nama={data.nama} role={data.role} />
      <About deskripsi={data.bio} />
      <Education sekolah={data.sekolah} />
      <Skills listSkills={data.keahlian} />
      <Experience listExp={data.pengalaman} />
      <Contact email={data.kontak.email} telp={data.kontak.telp} />
    </div>
  );
};

export default BiodataDiri;