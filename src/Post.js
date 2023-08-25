import PropTypes from 'prop-types';
import React from 'react';

export const Post = (props) => {
  const { likes } = props;
  const {title, subtitle} = props.post
  return (
    <>
      <article>
        <strong>{title}</strong><br />
        <small>{subtitle}</small>
        <br />
        Likes:{likes}
      </article>
      <br />
    </>
  );
}

Post.propTypes = {
  likes: PropTypes.number.isRequired
}
