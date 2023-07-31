import { useSelector } from 'react-redux';

const Profile = () => {
  const { user, loading } = useSelector((state) => state.user);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome, {user.username}!</h1>
      <p>Email: {user.email}</p>
      <p>{user._id}</p>
      <p>{user.createdAt}</p>
      <p>{user.role}</p>


      {/* other user data */}
    </div>
  );
};

export default Profile;