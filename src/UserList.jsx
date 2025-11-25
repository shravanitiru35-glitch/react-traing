import { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  // Function to fetch users
  const fetchUsers = () => {
    setLoading(true);
    setError("");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  // Fetch users when component loads
  useEffect(() => {
    fetchUsers();
  }, []);

  // Filter users using search input
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Loading users...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div style={{ margin: "20px" }}>
      <h2>Users List</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search user by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "8px",
          marginBottom: "15px",
          width: "250px",
        }}
      />

      <button onClick={fetchUsers} style={{ marginLeft: "10px", padding: "6px 12px" }}>
        🔄 Refresh
      </button>

      <ul style={{ marginTop: "20px" }}>
        {filteredUsers.length === 0 ? (
          <p>No users found.</p>
        ) : (
          filteredUsers.map((user) => (
            <li
              key={user.id}
              style={{
                marginBottom: "10px",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                width: "350px",
                listStyle: "none",
              }}
            >
              <strong>{user.name}</strong>
              <br />
              📧 {user.email}
              <br />
              🏙️ {user.address.city}
              <br />
              🏢 {user.company.name}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default UserList;
