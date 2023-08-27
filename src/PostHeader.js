import React from 'react'
import PropTypes from 'prop-types';
import Button from './Button';

export const PostHeader = (props) => {
  const { onRemove } = props;
  const { likes, id, title, subtitle, read } = props.post
  return (
    <>
      <strong>{read ? <s>{title}</s> : title}</strong>
      <Button onClick={() => onRemove(id)}>Remove</Button>
    </>
  )
}

PostHeader.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired
}
