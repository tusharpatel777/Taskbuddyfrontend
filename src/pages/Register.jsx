// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Register = () => {
//   const [form, setForm] = useState({ name: "", email: "", password: "" });
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/api/auth/register", form);
//       navigate("/login");
//     } catch (error) {
//       alert("Error registering user");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-lg w-96">
//         <h2 className="text-xl font-semibold mb-4">Register</h2>
//         <input className="w-full p-2 border rounded mb-2" type="text" placeholder="Name" required onChange={(e) => setForm({ ...form, name: e.target.value })} />
//         <input className="w-full p-2 border rounded mb-2" type="email" placeholder="Email" required onChange={(e) => setForm({ ...form, email: e.target.value })} />
//         <input className="w-full p-2 border rounded mb-2" type="password" placeholder="Password" required onChange={(e) => setForm({ ...form, password: e.target.value })} />
//         <button className="w-full bg-green-500 text-white p-2 rounded">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://taskbuddybackend-1.onrender.com/api/auth/register", form);
      toast.success("Registration Successful! Redirecting...", { position: "top-center", autoClose: 2000 });
      setTimeout(() => navigate("/login"), 2500);
    } catch (error) {
      toast.error("Error registering user", { position: "top-center" });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <ToastContainer />
      <motion.form
        onSubmit={handleSubmit}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-gray-800 bg-opacity-80 backdrop-blur-md shadow-lg p-8 rounded-lg w-96 text-center border border-gray-700"
      >
        <h2 className="text-2xl font-semibold text-green-400 mb-4">Create an Account</h2>

        <input
          className="w-full p-3 bg-gray-700 text-white rounded-lg mb-3 border border-gray-600 focus:ring-2 focus:ring-green-400 outline-none"
          type="text"
          placeholder="Name"
          required
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="w-full p-3 bg-gray-700 text-white rounded-lg mb-3 border border-gray-600 focus:ring-2 focus:ring-green-400 outline-none"
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          className="w-full p-3 bg-gray-700 text-white rounded-lg mb-3 border border-gray-600 focus:ring-2 focus:ring-green-400 outline-none"
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition-all duration-300"
        >
          Register
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Register;
