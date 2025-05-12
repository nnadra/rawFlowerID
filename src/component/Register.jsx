import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/api/register', {
      name: nama,
      email: email,
      password: password,
    })
    .then(res => {
      // Simpan data user ke localStorage biar bisa dipakai di navbar
      const userData = {
        name: nama, // atau bisa juga pakai res.data.user.name kalau backend kirim data lengkap
        email: email
      };
      localStorage.setItem("user", JSON.stringify(userData));

      // Arahkan ke halaman shop
      window.location.href = "/shop";
    })
    .catch(err => {
      console.error("Gagal daftar:", err);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nama"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Register;
