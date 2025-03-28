// // import { Routes, Route, Navigate } from "react-router-dom";
// // import Login from "./pages/Login";
// // import Register from "./pages/Register";
// // import Dashboard from "./pages/Dashboard";

// // const App = () => {
// //   const isAuthenticated = !!localStorage.getItem("token");

// //   return (
// //     <Routes>
// //       <Route path="/" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
// //       <Route path="/login" element={<Login />} />
// //       <Route path="/register" element={<Register />} />
// //       <Route path="*" element={<Navigate to="/" />} />
// //     </Routes>
// //   );
// // };

// // export default App;


// import { Routes, Route, Navigate } from "react-router-dom";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import Navbar from "./components/Navbar"; // Import Navbar

// const App = () => {
//   const isAuthenticated = !!localStorage.getItem("token");

//   return (
//     <div>
//       <Navbar /> {/* Always Show Navbar */}
//       <Routes>
//         <Route path="/" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;


import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    const checkAuth = () => setIsAuthenticated(!!localStorage.getItem("token"));
    window.addEventListener("storage", checkAuth); // Detect token changes

    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
