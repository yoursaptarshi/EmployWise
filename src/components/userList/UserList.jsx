import React, { useState ,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers,updateUser, deleteUser } from '../../redux/actions/userActions';
import "./UserList.css";


  const UserList = () => {
    const { users, loading, error } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [editingUser, setEditingUser] = useState(null);
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '' });
    const [searchQuery, setSearchQuery] = useState('');
    useEffect(() => {
        dispatch(fetchUsers()); // Ensure this action is defined and works properly
      }, [dispatch]);
    // Filter users based on the search query
    const filteredUsers = users.filter(user => 
      user.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    const handleEditClick = (user) => {
      setEditingUser(user);
      setFormData({
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
      });
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSaveEdit = () => {
      if (editingUser) {
        dispatch(updateUser(editingUser.id, formData));
        setEditingUser(null);
      }
    };
  
    const handleDeleteClick = (id) => {
      dispatch(deleteUser(id));
    };
  
    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
    };
  
    return (
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search users..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
  
        <div className="user-list">
          {filteredUsers.length > 0 ? (
            filteredUsers.map(user => (
              <div key={user.id} className="user-card">
                <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
                <h3>{user.first_name} {user.last_name}</h3>
                <p>{user.email}</p>
                <button onClick={() => handleEditClick(user)}>Edit</button>
                <button onClick={() => handleDeleteClick(user.id)}>Delete</button>
              </div>
            ))
          ) : (
            <p>No users found.</p>
          )}
        </div>
        
        {editingUser && (
          <div className="edit-form">
            <h2>Edit User</h2>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
            <button onClick={handleSaveEdit}>Save</button>
            <button onClick={() => setEditingUser(null)}>Cancel</button>
          </div>
        )}
      </div>
    );
  };
  
  export default UserList;