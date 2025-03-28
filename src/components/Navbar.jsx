// import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const isAuthenticated = !!localStorage.getItem("token");
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsAuthenticated(false); // Update auth state
//     toast.success("Logged out successfully!", { position: "top-center", autoClose: 2000 });
//     setTimeout(() => navigate("/login"), 2500); // Redirect after toast
//   };


//   // const handleLogout = () => {
//   //   localStorage.removeItem("token"); // Remove token
//   //   navigate("/login"); // Redirect to login page
//   // };

//   return (
//     <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
//       <h1 className="text-xl font-bold">
//         <Link to="/"  className="text-[22px] font-bold mb-6  text-blue-400">TaskBuddy</Link>
//       </h1>

//       <div>
//         {isAuthenticated ? (
//           <>
//             <Link to="/" className="mr-4 text-[20px] font-bold mb-6 text-center text-blue-400">Dashboard</Link>
//             <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded">
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <Link to="/login" className="mr-4">Login</Link>
//             <Link to="/register" className="bg-blue-500 px-3 py-1 rounded">Register</Link>
//           </>
//         )}
//       </div>
//       {/* <ToastContainer /> */}
//     </nav>
//   );
// };

// export default Navbar;

// // import { Link, useNavigate } from "react-router-dom";
// // import { ToastContainer, toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // const Navbar = ({ setIsAuthenticated }) => {
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     localStorage.removeItem("token");
// //     setIsAuthenticated(false); // Update auth state
// //     toast.success("Logged out successfully!", { position: "top-center", autoClose: 2000 });
// //     setTimeout(() => navigate("/login"), 2500); // Redirect after toast
// //   };

// //   return (
// //     <nav className="bg-gray-800 p-4 flex justify-between items-center text-white">
// //       <h1 className="text-xl font-bold">TaskBuddy</h1>
// //       <div>
// //         <Link to="/" className="mr-4">Dashboard</Link>
// //         <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">
// //           Logout
// //         </button>
// //       </div>
// //       <ToastContainer />
// //     </nav>
// //   );
// // };

// // export default Navbar;

import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    toast.success("Logged out successfully!", { position: "top-center", autoClose: 2000 });
    
    setTimeout(() => {
      navigate("/login"); // Redirect to login after the toast
    }, 2500);
  };

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link to="/" className="text-[22px] font-bold text-blue-400">TaskBuddy</Link>
      </h1>

      <div>
        {isAuthenticated ? (
          <>
            <Link to="/" className="mr-4 text-[20px] font-bold text-blue-400">Dashboard</Link>
            <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="mr-4">Login</Link>
            <Link to="/register" className="bg-blue-500 px-3 py-1 rounded">Register</Link>
          </>
        )}
      </div>

      {/* Ensure ToastContainer is inside the component */}
      <ToastContainer />
    </nav>
  );
};

export default Navbar;

