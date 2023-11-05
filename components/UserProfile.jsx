    'use client'
    import { useEffect, useState } from 'react';

function UserProfile() {
  const [user, setUser] = useState(null);
  console.log(user)

  useEffect(() => {
    const email = 'hardikbhammar@gmail.com';  
        
    // Replace with the desired email
    fetch(`/api/user?email=${email}`) // Pass email as a query parameter
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {user ? (
        <div>
          {/* <p>Name: {user.username}</p> */}
          <p>Email: {user.email}</p>
          {/* Display other user data as needed */}
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
}

export default UserProfile;