// import {useParams} from 'react-router-dom';
// import ReactPlayer from 'react-player';
// import './Trailer.css';

// import React from 'react'

// const Trailer = () => {

//     let params = useParams();
//     let key = params.ytTrailerId;

//   return (
//     <div className="react-player-container">
//       {(key!=null)?<ReactPlayer controls={true} playing={true} url ={`https://www.youtube.com/watch?v=${key}?autoplay=1`} 
//       width = '100%' height='100%' />:null}
//     </div>
//   )
// }

// export default Trailer
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './Trailer.css';
import React from 'react';

const Trailer = () => {
  let { ytTrailerId } = useParams();
  let key = ytTrailerId;

  return (
    <div className="react-player-container">
      {key ? (
        <ReactPlayer
          controls={true}
          playing={true}
          url={`https://www.youtube.com/embed/${key}?autoplay=1`}
          width="100%"
          height="100%"
        />
      ) : null}
    </div>
  );
};

export default Trailer;

