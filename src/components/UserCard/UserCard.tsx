import './UserCard.scss';

interface Props {
    user: {
      id: number;
      username: string;
      avatar: string;
      album: number[]
    };
}

function UserCard(props: Props): JSX.Element {
    console.log(props.user)
  return (
    <div className="user">
        <img src={props.user.avatar}></img>
        <p>{props.user.username}</p>
    </div>
  );
}

export default UserCard;
