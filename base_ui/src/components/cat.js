import React, { Fragment, useEffect, useState } from 'react';
import { Row, Button } from 'reactstrap';


import { createApi } from "unsplash-js";

const api = createApi({
    // Don't forget to set your access token here!
    // See https://unsplash.com/developers
    accessKey: ""
  });

const CatPicture = ({ photo }) => {
  const { user, urls } = photo;

  return (
    <Fragment>
      <img className="img" src={urls.regular} />
      <a
        className="credit"
        target="_blank"
        href={`https://unsplash.com/@${user.username}`}
      >
        {user.name}
      </a>
    </Fragment>
  );
};

const Bastet = () => {
  const [data, setPhotosResponse] = useState(null);

  useEffect(() => {
    api.photos
      .getRandom({ count: 1, query: 'cat' })
      .then(result => {
        setPhotosResponse(result);
        console.log(result)
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  } else if (data.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
        <div>PS: Make sure to set your access token!</div>
      </div>
    );
  } else {
    return (
      <div className="feed">
        <ul className="columnUl">
          {data.response.map(photo => (
            <li key={photo.id} className="li">
              <CatPicture photo={photo} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default Bastet;
