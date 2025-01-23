import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Test.css"; 

const Test = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [editId, setEditId] = useState(null);

  const apiUrl = "https://6791c8adcf994cc680476e48.mockapi.io/t1/Test";

  // Fetch data from MockAPI
  const fetchUsers = async () => {
    try {
      const response = await axios.get(apiUrl);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Add or update user
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { name, color };

    try {
      if (editId) {
        await axios.put(`${apiUrl}/${editId}`, userData);
        setEditId(null);
      } else {
        await axios.post(apiUrl, userData);
      }
      setName("");
      setColor("");
      fetchUsers();
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  // Populate form for editing
  const handleEdit = (user) => {
    setName(user.name);
    setColor(user.color);
    setEditId(user.id);
  };

  // Delete user
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h1>CRUD Operation</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Favorite Color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          required
        />
        <button type="submit">{editId ? "Update" : "Add"}</button>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Favorite Color</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.color}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Test;
