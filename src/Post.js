import PropTypes from 'prop-types';
import React from 'react';
import { PostHeader } from './PostHeader';
import styles from './Post.scss'

export const Post = (props) => {
  const { onRemove } = props;
  const { likes, id, title, subtitle, read, removed } = props.post
  return (
    <>
      <article className={removed ? styles.postDeleted : styles.post}>
        <PostHeader onRemove={onRemove}
          post={{
            id:id,
            title:title,
            read:read
          }}
          id={id} />
        {/* <strong>{read ? <s>{title}</s> : title}</strong>
        <button onClick={() => onRemove(id)}>Remove</button> */}
        <br />
        <small>{subtitle}</small>
        <br />
        Likes:{likes}
      </article>
      <br />
    </>
  );
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
    removed: PropTypes.bool.isRequired,
  })
}
