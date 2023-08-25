import React from 'react'
import Header from './Header'
import { Post } from './Post'

const posts = [
  {        title:'News title 01',
        subtitle:'News subtitle 01',
        likes:20},
  {        title:'News title 02',
        subtitle:'News subtitle 02',
        likes:455},
  {        title:'News title 03',
        subtitle:'News subtitle 03',
        likes:97}
]

export const App = () => {
  return (
    <>
      <Header title='This is a test title'
      >
        <h2>This is a subtitle</h2>
      </Header>

      {posts.map((post) => (
        <Post
          post={{
          title: post.title,
          subtitle: post.subtitle,
          }}
          likes={post.likes}
        />
      ))}

      {/* <Post
        title={'News title'}
        subtitle={'News subtitle'}
        likes={20}
      />

      <Post
        title={'News title'}
        subtitle={'News subtitle'}
        likes={50}
      /> */}

    </>
  )
}
