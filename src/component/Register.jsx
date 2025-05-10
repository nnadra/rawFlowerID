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
      localStorage.setItem("user", JSON.stringify(res.data.user));
      window.location.href = "/shop";
    })
    .catch(err => {
      console.error("Gagal daftar:", err);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nama" value={nama} onChange={(e) => setNama(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Register;
