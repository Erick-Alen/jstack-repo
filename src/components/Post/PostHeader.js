import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Button';

export const PostHeader = (props) => {
  const { onRemove, onRead } = props;
  const { likes, id, title, subtitle, read } = props.post
  return (
    <>
      <strong>{read ? <s>{title}</s> : title}</strong>
      <Button onClick={() => onRemove(id)}>Remove</Button>
      <Button onClick={() => onRead(id)}>Read</Button>
    </>
  )
}

PostHeader.propTypes = {
  onRemove: PropTypes.func.isRequired,
  onRead: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired
}
