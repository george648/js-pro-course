import { useSelector } from 'react-redux';
import './shownUsers.css'

export const ShownUsers = () => {
  const users = useSelector((state) => state.users);
  // console.log(users);

  return (
    <div className="shownUsersWrapper">
      <span>users will show here </span>
      {users.map((user) => <p key={user}>{user}</p>)}
    </div>
  );
};