import React from 'react'
import styles from './page.module.css'

export async function generateStaticParams() {
  const posts = await fetch('https://.../').then((res) => res.json())
 
  return posts.map((post: any) => ({
    slug: post.slug,
  }))
}

const Blog = ({post}: {post: any}) => {
  return (
    <div className={styles.container}>
      Blog
    </div>
  )
}

export default Blog