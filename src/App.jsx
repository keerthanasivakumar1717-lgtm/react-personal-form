import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    phone: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let newErrors = {};

    if (form.name === "") {
      newErrors.name = "Name is required";
    }

    if (!form.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if (form.age < 18 || form.age === "") {
      newErrors.age = "Age must be 18 or above";
    }

    if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="container">
      <h1>Personal Information</h1>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <p>{errors.name}</p>

        <label>Email</label>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <p>{errors.email}</p>

        <label>Age</label>
        <input
          type="number"
          name="age"
          value={form.age}
          onChange={handleChange}
        />
        <p>{errors.age}</p>

        <label>Phone Number</label>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />
        <p>{errors.phone}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;