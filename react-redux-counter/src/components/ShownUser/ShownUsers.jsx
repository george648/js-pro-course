import { useSelector } from 'react-redux';
import './shownUsers.css';

export const ShownUsers = () => {
  const users = useSelector((state) => state.users);

  return (
    <div className="shownUsersWrapper">
      <span>users will shown </span>
      {users.map((user, index) => <p key={index}>{user}</p>)}
    </div>
  );
};