import React, { useState } from 'react'
import styles from './App.scss'
import Header from './Header'
import { Post } from './Post'
import { ThemeProvider } from './ThemeContext'


export const App = () => {


  const [posts, setPosts] = useState([
    {
      id:Math.random(),
      title:'News title 01',
      subtitle:'News subtitle 01',
      likes:20,
      read: false,
      removed: false
    },
    {
      id:Math.random(),
      title:'News title 02',
      subtitle:'News subtitle 02',
      likes:455,
      read: true,
      removed: true
    },
    {
      id:Math.random(),
      title:'News title 03',
      subtitle:'News subtitle 03',
      likes:97,
      read: false,
      removed: false
    }
  ])



  const handleRefresh = () => {
    setPosts((oldPosts) => [
      ...oldPosts,
      {
        id: Math.random(),
        title: `News title ${oldPosts.length+1}`,
        subtitle: `News subtitle ${oldPosts.length+1}`,
        likes: 75,
        read: false,
        removed: false
      }
    ])
  }
  const handleRemovePost = (postId) => {
    setPosts((posts) => (
      posts.map(
        post => post.id === postId ? { ...post, removed: true } : post
      )
    ))
    // setPosts((posts) => (
    //   posts.filter(post => post.id !== postId)
    // ))
  }
  return (
    <ThemeProvider>

      <Header title='This is a test title'

      >
        <h2 className={styles.title}>This is a subtitle      <button onClick={handleRefresh}>
        add..
      </button></h2>

      </Header>

      {posts.map((post) => (
        <Post
        onRemove={handleRemovePost}
        key={post.id}
        post={post}
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

    </ThemeProvider>
  )
}
