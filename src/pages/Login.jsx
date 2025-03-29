// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";

// // const Login = () => {
// //   const [form, setForm] = useState({ email: "", password: "" });
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const { data } = await axios.post("http://localhost:5000/api/auth/login", form);
// //       localStorage.setItem("token", data.token);
// //       navigate("/");
// //     } catch (error) {
// //       alert("Invalid credentials");
// //     }
// //   };

// //   return (
// //     <div className="flex justify-center items-center h-screen bg-gray-100">
// //       <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-lg w-96">
// //         <h2 className="text-xl font-semibold mb-4">Login</h2>
// //         <input className="w-full p-2 border rounded mb-2" type="email" placeholder="Email" required onChange={(e) => setForm({ ...form, email: e.target.value })} />
// //         <input className="w-full p-2 border rounded mb-2" type="password" placeholder="Password" required onChange={(e) => setForm({ ...form, password: e.target.value })} />
// //         <button className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Login = () => {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const { data } = await axios.post("https://taskbuddybackend-1.onrender.com/api/auth/login", form);
//   //     localStorage.setItem("token", data.token);
//   //     toast.success("Login Successful!", { position: "top-center", autoClose: 2000 });
//   //     setTimeout(() => navigate("/"), 2500);
//   //   } catch (error) {
//   //     toast.error("Invalid Credentials", { position: "top-center" });
//   //   }
//   // };
//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const { data } = await axios.post("https://taskbuddybackend-1.onrender.com/api/auth/login", form);
//   //     localStorage.setItem("token", data.token);
//   //     setIsAuthenticated(true);  // Update auth state
//   //     toast.success("Login Successful!", { position: "top-center", autoClose: 2000 });
//   //     setTimeout(() => navigate("/"), 2500);
//   //   } catch (error) {
//   //     toast.error("Invalid Credentials", { position: "top-center" });
//   //   }
//   // };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post("https://taskbuddybackend-1.onrender.com/api/auth/login", form);
//       localStorage.setItem("token", data.token);
//       toast.success("Login Successful!", { position: "top-center", autoClose: 2000 });
//       setTimeout(() => navigate("/"), 2500);
//     } catch (error) {
//       console.error("Login Error:", error.response ? error.response.data : error.message);
//       toast.error(error.response?.data?.message || "Invalid Credentials", { position: "top-center" });
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-900">
//       <ToastContainer />
//       <motion.form
//         onSubmit={handleSubmit}
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="bg-gray-800 bg-opacity-80 backdrop-blur-md shadow-lg p-8 rounded-lg w-96 text-center border border-gray-700"
//       >
//         <h2 className="text-2xl font-semibold text-blue-400 mb-4">Welcome Back</h2>
        
//         <input
//           className="w-full p-3 bg-gray-700 text-white rounded-lg mb-3 border border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none"
//           type="email"
//           placeholder="Email"
//           required
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//         />

//         <input
//           className="w-full p-3 bg-gray-700 text-white rounded-lg mb-3 border border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none"
//           type="password"
//           placeholder="Password"
//           required
//           onChange={(e) => setForm({ ...form, password: e.target.value })}
//         />

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-all duration-300"
//         >
//           Login
//         </motion.button>
//       </motion.form>
//     </div>
//   );
// };

// export default Login;


const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/"); // Redirect if already logged in
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://taskbuddybackend-1.onrender.com/api/auth/login",
        form
      );
      
      localStorage.setItem("token", data.token);
      setIsAuthenticated(true); // Update state to trigger re-render
      toast.success("Login Successful!", { position: "top-center", autoClose: 2000 });

      setTimeout(() => navigate("/"), 1500);
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Invalid Credentials", {
        position: "top-center",
      });
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
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">Welcome Back</h2>

        <input
          className="w-full p-3 bg-gray-700 text-white rounded-lg mb-3 border border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none"
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          className="w-full p-3 bg-gray-700 text-white rounded-lg mb-3 border border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none"
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-all duration-300"
        >
          Login
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Login;
