import { Box } from '@mui/material'
import  { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phoneNumber: string;
  city: string;
};


export default function Register() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", phoneNumber: "", city: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null); setError(null);
    if (!form.name || !form.email) { setError("Name and email are required."); return; }
    setLoading(true);
    try {
      const payload = {
        name: form.name,
        email: form.email.toLowerCase(),
        phoneNumber: form.phoneNumber ? Number(form.phoneNumber) : undefined,
        city: form.city,
      };
      const res = await fetch(import.meta.env.VITE_REGISTER, {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error( "Request failed");
      setMessage(data.message || "Our team will contact you soon.");
      setForm({ name: "", email: "", phoneNumber: "", city: "" });
    } catch (err: any) {
      setError( "Something went wrong.");
    } finally { setLoading(false); }
  };

  return (
    <Box component={'div'} display={'flex'} flexDirection={'row'} sx={{ bgcolor: 'whitesmoke' }} >
      <Box component={'div'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} sx={{ width: '60vw', bgcolor:'white', height: '30rem' }} >
        <Box>
          <h2>SHREE RENUKA ROADLINES</h2>
          <p>Your trusted partner for safe, timely, and dependable road transportation services</p>
        </Box>
      </Box>
      <Box component={'div'} >
        <div style={{ maxWidth: 520, margin: "2rem auto", padding: 16 }}>
          <h2>Register</h2>
          <form onSubmit={handleSubmit} style={{ display: "grid", gap: 10 }}>
            <label className="field">
              <span className="field-label">Name</span>
              <input name="name" value={form.name} onChange={onChange} required />
            </label>

            <label className="field">
              <span className="field-label">Email</span>
              <input name="email" type="email" value={form.email} onChange={onChange} required />
            </label>

            <label className="field">
              <span className="field-label">Phone</span>
              <input name="phoneNumber" value={form.phoneNumber} onChange={onChange} />
            </label>

            <label className="field">
              <span className="field-label">City</span>
              <input name="city" value={form.city} onChange={onChange} />
            </label>

            <div className="form-actions">
              <button className="btn btn-primary" type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>

          {message && <div className="toast success">{message}</div>}
          {error && <div className="toast error">{error}</div>}
        </div>
      </Box>
    </Box>
  )
}