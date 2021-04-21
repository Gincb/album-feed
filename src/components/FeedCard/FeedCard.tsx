import UserCard from "../UserCard/UserCard"

import './FeedCard.scss';

interface Props {
    image: {imageID: number, imageURL: string, userID: number};
    user: {
      id: number;
      username: string;
      avatar: string;
      album: number[]
    };
}

function FeedCard(props: Props): JSX.Element {

  return (
    <div className="feed-card">
        <div>
          <img src={props.image.imageURL} alt={props.image.imageID.toString()}/>
        </div>
        {props.user ? <UserCard user={props.user}/> : null }
    </div>
  );
}

export default FeedCard;
