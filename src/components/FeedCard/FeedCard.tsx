// import UserCard from "../UserCard/UserCard"

import './FeedCard.scss';

interface Props {
    image: {imageID: number, imageURL: string, userID: number};
    user?: {
      id: number;
      username: string;
      avatar: string;
      album: string[]
    };
}

function FeedCard(props: Props): JSX.Element {

  return (
    <div className="album">
        <div>
          <img src={props.image.imageURL} alt={props.image.imageID.toString()}/>
        </div>
        {/* <UserCard user={props.user}/> */}
    </div>
  );
}

export default FeedCard;
