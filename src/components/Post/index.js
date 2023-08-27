import PropTypes from 'prop-types';
import React from 'react';
import { PostHeader } from './PostHeader';
import { Likes, Subtitle, Container } from './styles';

export const Post = (props) => {
  const { onRemove, onRead } = props;
  const { likes, id, title, subtitle, read, removed } = props.post
  return (
    <>
      <Container removed={removed}>
        <PostHeader onRemove={onRemove} onRead={onRead}
          post={{
            id:id,
            title:title,
            read:read
          }}
          id={id} />
        {/* <strong>{read ? <s>{title}</s> : title}</strong>
        <button onClick={() => onRemove(id)}>Remove</button> */}
        <Subtitle>{subtitle}</Subtitle>
       <Likes>Likes:{likes}</Likes>
      </Container>
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
