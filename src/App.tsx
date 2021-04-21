import React, {useState, useEffect} from 'react';
import {getUsers, getImages} from './modules/data';
import FeedCard from './components/FeedCard/FeedCard'
import Loader from 'react-loader-spinner';
import InfiniteScroll from 'react-infinite-scroller';

import './App.scss';

function App(): JSX.Element {
  const [users, setUsers] = useState<{id: number, username: string, avatar: string, album: number[]}[]>();
  const [images, setImages] = useState<{imageID: number, imageURL: string, userID: number}[]>([]);
  const [feedImages, setFeedImages] = useState<{imageID: number, imageURL: string, userID: number}[]>([]);

  const fetchMoreImages = () => {
    setFeedImages([
      ...feedImages,
      ...images.slice(feedImages.length, feedImages.length + 3),
    ]);
  };

  useEffect(() => {
    getUsers(setUsers);
    getImages(setImages);
    setFeedImages(images.slice(0, 6));
  }, []);

  return (
    <div className="App">
        {
        images ? 

        <InfiniteScroll
        pageStart={0}
        loadMore={fetchMoreImages}
        hasMore={feedImages.length < images.length}
        loader={<Loader type="Rings" color="pink" height={80} width={80} />}
        >
          {
            feedImages.sort(() => Math.random() - 0.5).map(i => {
              return <FeedCard key={Math.random() + i.imageID} image={i}/>
            })
          }
        </InfiniteScroll>
        :
        <div className="loader-wrapper"> 
       <Loader type="Rings" color="pink" height={80} width={80} />
       </div>
      }
    </div>
  );
}

export default App;
