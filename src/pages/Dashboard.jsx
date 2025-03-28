// // // import { useEffect, useState } from "react";
// // // import axios from "axios";

// // // const Dashboard = () => {
// // //   const [tasks, setTasks] = useState([]);
// // //   const [newTask, setNewTask] = useState({ title: "", description: "" });

// // //   const fetchTasks = async () => {
// // //     try {
// // //       const token = localStorage.getItem("token");
// // //       if (!token) {
// // //         console.error("No authentication token found.");
// // //         return;
// // //       }
// // //       const { data } = await axios.get("http://localhost:5000/api/tasks", {
// // //         headers: { Authorization: `Bearer ${token}` } // Add "Bearer"
// // //       });
// // //       setTasks(data);
// // //     } catch (error) {
// // //       console.error("Error fetching tasks:", error.response ? error.response.data : error.message);
// // //     }
// // //   };
  
  

// // //   useEffect(() => {
// // //     fetchTasks();
// // //   }, []);

// // //   const createTask = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const token = localStorage.getItem("token");
// // //       if (!token) {
// // //         console.error("No authentication token found.");
// // //         return;
// // //       }
// // //       await axios.post("http://localhost:5000/api/tasks", newTask, {
// // //         headers: { Authorization: `Bearer ${token}` } // Add "Bearer"
// // //       });
// // //       fetchTasks();
// // //     } catch (error) {
// // //       console.error("Error creating task:", error.response ? error.response.data : error.message);
// // //     }
// // //   };
  
// // //   const deleteTask = async (id) => {
// // //     try {
// // //       const token = localStorage.getItem("token");
// // //       if (!token) {
// // //         console.error("No authentication token found.");
// // //         return;
// // //       }
// // //       await axios.delete(`http://localhost:5000/api/tasks/${id}`, {
// // //         headers: { Authorization: `Bearer ${token}` } // Add "Bearer"
// // //       });
// // //       fetchTasks();
// // //     } catch (error) {
// // //       console.error("Error deleting task:", error.response ? error.response.data : error.message);
// // //     }
// // //   };
  

// // //   return (
// // //     <div className="container mx-auto p-6">
// // //       <h1 className="text-2xl font-bold mb-4">Task Manager</h1>

// // //       <form onSubmit={createTask} className="mb-4">
// // //         <input className="p-2 border rounded mr-2" placeholder="Task Title" required onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} />
// // //         <input className="p-2 border rounded mr-2" placeholder="Task Description" required onChange={(e) => setNewTask({ ...newTask, description: e.target.value })} />
// // //         <button className="bg-blue-500 text-white p-2 rounded">Add Task</button>
// // //       </form>

// // //       <ul>
// // //         {tasks.map((task) => (
// // //           <li key={task._id} className="bg-gray-100 p-2 rounded mb-2 flex justify-between">
// // //             <span>{task.title} - {task.description}</span>
// // //             <button onClick={() => deleteTask(task._id)} className="bg-red-500 text-white p-1 rounded">Delete</button>
// // //           </li>
// // //         ))}
// // //       </ul>
// // //     </div>
// // //   );
// // // };

// // // export default Dashboard;


// // import { useEffect, useState } from "react";
// // import axios from "axios";

// // const Dashboard = () => {
// //   const [tasks, setTasks] = useState([]);
// //   const [newTask, setNewTask] = useState({ title: "", description: "" });
// //   const [editingTask, setEditingTask] = useState(null); // Track the task being edited
// //   const [updatedTask, setUpdatedTask] = useState({ title: "", description: "" });

// //   const fetchTasks = async () => {
// //     try {
// //       const token = localStorage.getItem("token");
// //       if (!token) {
// //         console.error("No authentication token found.");
// //         return;
// //       }
// //       const { data } = await axios.get("http://localhost:5000/api/tasks", {
// //         headers: { Authorization: `Bearer ${token}` }, // Fix token format
// //       });
// //       setTasks(data);
// //     } catch (error) {
// //       console.error("Error fetching tasks:", error.response ? error.response.data : error.message);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchTasks();
// //   }, []);

// //   const createTask = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const token = localStorage.getItem("token");
// //       if (!token) {
// //         console.error("No authentication token found.");
// //         return;
// //       }
// //       await axios.post("http://localhost:5000/api/tasks", newTask, {
// //         headers: { Authorization: `Bearer ${token}` },
// //       });
// //       setNewTask({ title: "", description: "" });
// //       fetchTasks();
// //     } catch (error) {
// //       console.error("Error creating task:", error.response ? error.response.data : error.message);
// //     }
// //   };

// //   const updateTask = async (id) => {
// //     try {
// //       const token = localStorage.getItem("token");
// //       if (!token) {
// //         console.error("No authentication token found.");
// //         return;
// //       }
// //       await axios.put(`http://localhost:5000/api/tasks/${id}`, updatedTask, {
// //         headers: { Authorization: `Bearer ${token}` },
// //       });
// //       setEditingTask(null);
// //       fetchTasks();
// //     } catch (error) {
// //       console.error("Error updating task:", error.response ? error.response.data : error.message);
// //     }
// //   };

// //   const deleteTask = async (id) => {
// //     try {
// //       const token = localStorage.getItem("token");
// //       if (!token) {
// //         console.error("No authentication token found.");
// //         return;
// //       }
// //       await axios.delete(`http://localhost:5000/api/tasks/${id}`, {
// //         headers: { Authorization: `Bearer ${token}` },
// //       });
// //       fetchTasks();
// //     } catch (error) {
// //       console.error("Error deleting task:", error.response ? error.response.data : error.message);
// //     }
// //   };

// //   return (
// //     <div className="container mx-auto p-6">
// //       <h1 className="text-2xl font-bold mb-4 text-center text-blue-700">Task Notes</h1>

// //       {/* Task Creation Form */}
// //       <form onSubmit={createTask} className="mb-4">
// //         <input
// //           className="p-2 border rounded mr-2"
// //           placeholder="Task Title"
// //           required
// //           value={newTask.title}
// //           onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
// //         />
// //         <input
// //           className="p-2 border rounded mr-2"
// //           placeholder="Task Description"
// //           required
// //           value={newTask.description}
// //           onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
// //         />
// //         <button className="bg-blue-500 text-white p-2 rounded">Add Task</button>
// //       </form>

// //       {/* Task List */}
// //       <ul>
// //         {tasks.map((task) => (
// //           <li key={task._id} className="bg-gray-100 p-2 rounded mb-2 flex justify-between">
// //             {editingTask === task._id ? (
// //               <div>
// //                 <input
// //                   className="p-2 border rounded mr-2"
// //                   value={updatedTask.title}
// //                   onChange={(e) => setUpdatedTask({ ...updatedTask, title: e.target.value })}
// //                 />
// //                 <input
// //                   className="p-2 border rounded mr-2"
// //                   value={updatedTask.description}
// //                   onChange={(e) => setUpdatedTask({ ...updatedTask, description: e.target.value })}
// //                 />
// //                 <button
// //                   className="bg-green-500 text-white p-1 rounded mr-2"
// //                   onClick={() => updateTask(task._id)}
// //                 >
// //                   Save
// //                 </button>
// //                 <button
// //                   className="bg-gray-500 text-white p-1 rounded"
// //                   onClick={() => setEditingTask(null)}
// //                 >
// //                   Cancel
// //                 </button>
// //               </div>
// //             ) : (
// //               <span>{task.title} - {task.description}</span>
// //             )}
// //             <div>
// //               {editingTask !== task._id && (
// //                 <button
// //                   className="bg-yellow-500 text-white p-1 rounded mr-2"
// //                   onClick={() => {
// //                     setEditingTask(task._id);
// //                     setUpdatedTask({ title: task.title, description: task.description });
// //                   }}
// //                 >
// //                   Edit
// //                 </button>
// //               )}
// //               <button
// //                 onClick={() => deleteTask(task._id)}
// //                 className="bg-red-500 text-white p-1 rounded"
// //               >
// //                 Delete
// //               </button>
// //             </div>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default Dashboard;

// // import { useEffect, useState } from "react";
// // import axios from "axios";

// // const Dashboard = () => {
// //   const [tasks, setTasks] = useState([]);
// //   const [newTask, setNewTask] = useState({ title: "", description: "" });
// //   const [editingTask, setEditingTask] = useState(null);
// //   const [updatedTask, setUpdatedTask] = useState({ title: "", description: "" });

// //   const fetchTasks = async () => {
// //     try {
// //       const token = localStorage.getItem("token");
// //       if (!token) {
// //         console.error("No authentication token found.");
// //         return;
// //       }
// //       const { data } = await axios.get("http://localhost:5000/api/tasks", {
// //         headers: { Authorization: `Bearer ${token}` },
// //       });
// //       setTasks(data);
// //     } catch (error) {
// //       console.error("Error fetching tasks:", error.response ? error.response.data : error.message);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchTasks();
// //   }, []);

// //   const createTask = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const token = localStorage.getItem("token");
// //       if (!token) {
// //         console.error("No authentication token found.");
// //         return;
// //       }
// //       await axios.post("http://localhost:5000/api/tasks", newTask, {
// //         headers: { Authorization: `Bearer ${token}` },
// //       });
// //       setNewTask({ title: "", description: "" });
// //       fetchTasks();
// //     } catch (error) {
// //       console.error("Error creating task:", error.response ? error.response.data : error.message);
// //     }
// //   };

// //   const updateTask = async (id) => {
// //     try {
// //       const token = localStorage.getItem("token");
// //       if (!token) {
// //         console.error("No authentication token found.");
// //         return;
// //       }
// //       await axios.put(`http://localhost:5000/api/tasks/${id}`, updatedTask, {
// //         headers: { Authorization: `Bearer ${token}` },
// //       });
// //       setEditingTask(null);
// //       fetchTasks();
// //     } catch (error) {
// //       console.error("Error updating task:", error.response ? error.response.data : error.message);
// //     }
// //   };

// //   const deleteTask = async (id) => {
// //     try {
// //       const token = localStorage.getItem("token");
// //       if (!token) {
// //         console.error("No authentication token found.");
// //         return;
// //       }
// //       await axios.delete(`http://localhost:5000/api/tasks/${id}`, {
// //         headers: { Authorization: `Bearer ${token}` },
// //       });
// //       fetchTasks();
// //     } catch (error) {
// //       console.error("Error deleting task:", error.response ? error.response.data : error.message);
// //     }
// //   };

// //   return (
// //     <div className="container mx-auto p-6">
// //       <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Task Manager</h1>
      
// //       <form onSubmit={createTask} className="flex flex-col md:flex-row gap-2 mb-6">
// //         <input className="p-2 border rounded w-full md:w-1/3" placeholder="Task Title" required value={newTask.title} onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} />
// //         <input className="p-2 border rounded w-full md:w-1/3" placeholder="Task Description" required value={newTask.description} onChange={(e) => setNewTask({ ...newTask, description: e.target.value })} />
// //         <button className="bg-blue-500 text-white p-2 rounded w-full md:w-auto">Add Task</button>
// //       </form>
      
// //       <ul>
// //         {tasks.map((task) => (
// //           <li key={task._id} className="bg-gray-100 p-4 rounded mb-4 flex flex-col md:flex-row justify-between items-center shadow">
// //             {editingTask === task._id ? (
// //               <div className="flex flex-col md:flex-row gap-2 w-full">
// //                 <input className="p-2 border rounded w-full" value={updatedTask.title} onChange={(e) => setUpdatedTask({ ...updatedTask, title: e.target.value })} />
// //                 <input className="p-2 border rounded w-full" value={updatedTask.description} onChange={(e) => setUpdatedTask({ ...updatedTask, description: e.target.value })} />
// //                 <button className="bg-green-500 text-white p-2 rounded" onClick={() => updateTask(task._id)}>Save</button>
// //                 <button className="bg-gray-500 text-white p-2 rounded" onClick={() => setEditingTask(null)}>Cancel</button>
// //               </div>
// //             ) : (
// //               <span className="flex-grow text-lg font-medium">{task.title} - {task.description}</span>
// //             )}
// //             <div className="flex gap-2 mt-2 md:mt-0">
// //               {editingTask !== task._id && (
// //                 <button className="bg-yellow-500 text-white p-2 rounded" onClick={() => {
// //                   setEditingTask(task._id);
// //                   setUpdatedTask({ title: task.title, description: task.description });
// //                 }}>Edit</button>
// //               )}
// //               <button className="bg-red-500 text-white p-2 rounded" onClick={() => deleteTask(task._id)}>Delete</button>
// //             </div>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default Dashboard;

// // import { useEffect, useState } from "react";
// // import axios from "axios";

// // const Dashboard = () => {
// //   const [tasks, setTasks] = useState([]);
// //   const [newTask, setNewTask] = useState({ title: "", description: "" });
// //   const [editingTask, setEditingTask] = useState(null);
// //   const [updatedTask, setUpdatedTask] = useState({ title: "", description: "" });

// //   const fetchTasks = async () => {
// //     try {
// //       const token = localStorage.getItem("token");
// //       if (!token) {
// //         console.error("No authentication token found.");
// //         return;
// //       }
// //       const { data } = await axios.get("http://localhost:5000/api/tasks", {
// //         headers: { Authorization: `Bearer ${token}` },
// //       });
// //       setTasks(data);
// //     } catch (error) {
// //       console.error("Error fetching tasks:", error.response ? error.response.data : error.message);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchTasks();
// //   }, []);

// //   const createTask = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const token = localStorage.getItem("token");
// //       if (!token) {
// //         console.error("No authentication token found.");
// //         return;
// //       }
// //       await axios.post("http://localhost:5000/api/tasks", newTask, {
// //         headers: { Authorization: `Bearer ${token}` },
// //       });
// //       setNewTask({ title: "", description: "" });
// //       fetchTasks();
// //     } catch (error) {
// //       console.error("Error creating task:", error.response ? error.response.data : error.message);
// //     }
// //   };

// //   const updateTask = async (id) => {
// //     try {
// //       const token = localStorage.getItem("token");
// //       if (!token) {
// //         console.error("No authentication token found.");
// //         return;
// //       }
// //       await axios.put(`http://localhost:5000/api/tasks/${id}`, updatedTask, {
// //         headers: { Authorization: `Bearer ${token}` },
// //       });
// //       setEditingTask(null);
// //       fetchTasks();
// //     } catch (error) {
// //       console.error("Error updating task:", error.response ? error.response.data : error.message);
// //     }
// //   };

// //   const deleteTask = async (id) => {
// //     try {
// //       const token = localStorage.getItem("token");
// //       if (!token) {
// //         console.error("No authentication token found.");
// //         return;
// //       }
// //       await axios.delete(`http://localhost:5000/api/tasks/${id}`, {
// //         headers: { Authorization: `Bearer ${token}` },
// //       });
// //       fetchTasks();
// //     } catch (error) {
// //       console.error("Error deleting task:", error.response ? error.response.data : error.message);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-900 text-white p-6">
// //       <h1 className="text-3xl font-bold mb-6 text-center text-blue-400">Task Manager</h1>
      
// //       <form onSubmit={createTask} className="flex flex-col md:flex-row gap-2 mb-6">
// //         <input className="p-2 border rounded w-full md:w-1/3 bg-gray-800 text-white" placeholder="Task Title" required value={newTask.title} onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} />
// //         <input className="p-2 border rounded w-full md:w-1/3 bg-gray-800 text-white" placeholder="Task Description" required value={newTask.description} onChange={(e) => setNewTask({ ...newTask, description: e.target.value })} />
// //         <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded w-full md:w-auto">Add Task</button>
// //       </form>
      
// //       <ul>
// //         {tasks.map((task) => (
// //           <li key={task._id} className="bg-gray-800 p-4 rounded mb-4 flex flex-col md:flex-row justify-between items-center shadow">
// //             {editingTask === task._id ? (
// //               <div className="flex flex-col md:flex-row gap-2 w-full">
// //                 <input className="p-2 border rounded w-full bg-gray-700 text-white" value={updatedTask.title} onChange={(e) => setUpdatedTask({ ...updatedTask, title: e.target.value })} />
// //                 <input className="p-2 border rounded w-full bg-gray-700 text-white" value={updatedTask.description} onChange={(e) => setUpdatedTask({ ...updatedTask, description: e.target.value })} />
// //                 <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded" onClick={() => updateTask(task._id)}>Save</button>
// //                 <button className="bg-gray-500 hover:bg-gray-600 text-white p-2 rounded" onClick={() => setEditingTask(null)}>Cancel</button>
// //               </div>
// //             ) : (
// //               <span className="flex-grow text-lg font-medium">{task.title} - {task.description}</span>
// //             )}
// //             <div className="flex gap-2 mt-2 md:mt-0">
// //               {editingTask !== task._id && (
// //                 <button className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded" onClick={() => {
// //                   setEditingTask(task._id);
// //                   setUpdatedTask({ title: task.title, description: task.description });
// //                 }}>Edit</button>
// //               )}
// //               <button className="bg-red-500 hover:bg-red-600 text-white p-2 rounded" onClick={() => deleteTask(task._id)}>Delete</button>
// //             </div>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default Dashboard;
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-hot-toast";

// const Dashboard = () => {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState({ title: "", description: "" });
//   const [editingTask, setEditingTask] = useState(null);
//   const [updatedTask, setUpdatedTask] = useState({ title: "", description: "" });

//   const fetchTasks = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.error("No authentication token found.");
//         return;
//       }
//       const { data } = await axios.get("http://localhost:5000/api/tasks", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setTasks(data);
//     } catch (error) {
//       console.error("Error fetching tasks:", error.response ? error.response.data : error.message);
//     }
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const createTask = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.error("No authentication token found.");
//         return;
//       }
//       await axios.post("http://localhost:5000/api/tasks", newTask, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setNewTask({ title: "", description: "" });
//       toast.success("Task created successfully!");
//       fetchTasks();
//     } catch (error) {
//       toast.error("Error creating task");
//       console.error("Error creating task:", error.response ? error.response.data : error.message);
//     }
//   };

//   const updateTask = async (id) => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.error("No authentication token found.");
//         return;
//       }
//       await axios.put(`http://localhost:5000/api/tasks/${id}`, updatedTask, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setEditingTask(null);
//       toast.success("Task updated successfully!");
//       fetchTasks();
//     } catch (error) {
//       toast.error("Error updating task");
//       console.error("Error updating task:", error.response ? error.response.data : error.message);
//     }
//   };

//   const deleteTask = async (id) => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.error("No authentication token found.");
//         return;
//       }
//       await axios.delete(`http://localhost:5000/api/tasks/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       toast.success("Task deleted successfully!");
//       fetchTasks();
//     } catch (error) {
//       toast.error("Error deleting task");
//       console.error("Error deleting task:", error.response ? error.response.data : error.message);
//     }
//   };

//   return (
//     <div className="container mx-auto p-6 bg-gray-900 text-white min-h-screen">
//       <h1 className="text-3xl font-bold mb-6 text-center text-blue-400">Task Manager</h1>
      
//       <form onSubmit={createTask} className="flex flex-col md:flex-row gap-2 mb-6">
//         <input className="p-2 border rounded w-full md:w-1/3 bg-gray-800 text-white" placeholder="Task Title" required value={newTask.title} onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} />
//         <input className="p-2 border rounded w-full md:w-1/3 bg-gray-800 text-white" placeholder="Task Description" required value={newTask.description} onChange={(e) => setNewTask({ ...newTask, description: e.target.value })} />
//         <button className="bg-blue-500 text-white p-2 rounded w-full md:w-auto">Add Task</button>
//       </form>
      
//       <ul>
//         {tasks.map((task) => (
//           <li key={task._id} className="bg-gray-800 p-4 rounded mb-4 flex flex-col md:flex-row justify-between items-center shadow">
//             {editingTask === task._id ? (
//               <div className="flex flex-col md:flex-row gap-2 w-full">
//                 <input className="p-2 border rounded w-full bg-gray-700 text-white" value={updatedTask.title} onChange={(e) => setUpdatedTask({ ...updatedTask, title: e.target.value })} />
//                 <input className="p-2 border rounded w-full bg-gray-700 text-white" value={updatedTask.description} onChange={(e) => setUpdatedTask({ ...updatedTask, description: e.target.value })} />
//                 <button className="bg-green-500 text-white p-2 rounded" onClick={() => updateTask(task._id)}>Save</button>
//                 <button className="bg-gray-500 text-white p-2 rounded" onClick={() => setEditingTask(null)}>Cancel</button>
//               </div>
//             ) : (
//               <span className="flex-grow text-lg font-medium">{task.title} - {task.description}</span>
//             )}
//             <div className="flex gap-2 mt-2 md:mt-0">
//               {editingTask !== task._id && (
//                 <button className="bg-yellow-500 text-white p-2 rounded" onClick={() => {
//                   setEditingTask(task._id);
//                   setUpdatedTask({ title: task.title, description: task.description });
//                   toast("Editing task");
//                 }}>Edit</button>
//               )}
//               <button className="bg-red-500 text-white p-2 rounded" onClick={() => deleteTask(task._id)}>Delete</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Dashboard;

import { useEffect, useState } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", description: "" });
  const [editingTask, setEditingTask] = useState(null);
  const [updatedTask, setUpdatedTask] = useState({ title: "", description: "" });

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("No authentication token found!", { position: "top-right" });
        return;
      }
      const { data } = await axios.get("http://localhost:5000/api/tasks", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(data);
    } catch (error) {
      toast.error("Error fetching tasks", { position: "top-right" });
      console.error(error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const createTask = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("No authentication token found!", { position: "top-right" });
        return;
      }
      await axios.post("http://localhost:5000/api/tasks", newTask, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNewTask({ title: "", description: "" });
      toast.success("Task created successfully!", { position: "top-right" });
      fetchTasks();
    } catch (error) {
      toast.error("Error creating task", { position: "top-right" });
      console.error(error.response ? error.response.data : error.message);
    }
  };

  const updateTask = async (id) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("No authentication token found!", { position: "top-right" });
        return;
      }
      await axios.put(`http://localhost:5000/api/tasks/${id}`, updatedTask, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEditingTask(null);
      toast.success("Task updated successfully!", { position: "top-right" });
      fetchTasks();
    } catch (error) {
      toast.error("Error updating task", { position: "top-right" });
      console.error(error.response ? error.response.data : error.message);
    }
  };

  const deleteTask = async (id) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("No authentication token found!", { position: "top-right" });
        return;
      }
      await axios.delete(`http://localhost:5000/api/tasks/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Task deleted successfully!", { position: "top-right" });
      fetchTasks();
    } catch (error) {
      toast.error("Error deleting task", { position: "top-right" });
      console.error(error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="w-full h-screen bg-gray-900 text-white flex flex-col items-center justify-start p-6 overflow-hidden">
      <Toaster /> {/* Ensure toast notifications work */}
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-400">Tasks</h1>
      
      <form onSubmit={createTask} className="flex flex-col md:flex-row gap-2 mb-6 w-full max-w-3xl">
        <input className="p-2 border rounded w-full md:w-1/3 bg-gray-800 text-white" placeholder="Task Title" required value={newTask.title} onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} />
        <input className="p-2 border rounded w-full md:w-1/3 bg-gray-800 text-white" placeholder="Task Description" required value={newTask.description} onChange={(e) => setNewTask({ ...newTask, description: e.target.value })} />
        <button className="bg-blue-500 text-white p-2 rounded w-full md:w-auto">Add Task</button>
      </form>
      
      <ul className="w-full max-w-3xl">
        {tasks.map((task) => (
          <li key={task._id} className="bg-gray-800 p-4 rounded mb-4 flex flex-col md:flex-row justify-between items-center shadow w-full">
            {editingTask === task._id ? (
              <div className="flex flex-col md:flex-row gap-2 w-full">
                <input className="p-2 border rounded w-full bg-gray-700 text-white" value={updatedTask.title} onChange={(e) => setUpdatedTask({ ...updatedTask, title: e.target.value })} />
                <input className="p-2 border rounded w-full bg-gray-700 text-white" value={updatedTask.description} onChange={(e) => setUpdatedTask({ ...updatedTask, description: e.target.value })} />
                <button className="bg-green-500 text-white p-2 rounded" onClick={() => updateTask(task._id)}>Save</button>
                <button className="bg-gray-500 text-white p-2 rounded" onClick={() => setEditingTask(null)}>Cancel</button>
              </div>
            ) : (
              <span className="flex-grow text-lg font-medium">{task.title} - {task.description}</span>
            )}
            <div className="flex gap-2 mt-2 md:mt-0">
              {editingTask !== task._id && (
                <button className="bg-yellow-500 text-white p-2 rounded" onClick={() => {
                  setEditingTask(task._id);
                  setUpdatedTask({ title: task.title, description: task.description });
                  toast("Editing task", { position: "top-right" });
                }}>Edit</button>
              )}
              <button className="bg-red-500 text-white p-2 rounded" onClick={() => deleteTask(task._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
