import React from 'react'

const BlogLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            <h1>Hi this is blog</h1>
            {children}
        </div>
    )
}

export default BlogLayout