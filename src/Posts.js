import React from 'react'

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h3>Loading....</h3>
    }
    // else {
    return (
        <div className='mt-3'>
            <ul className='list-group'>
                {posts.map(post => (
                    <li key={post.id} className='list-group-item'>{post.title}</li>
                ))}
            </ul>
        </div>
    )
    // }
}

export default Posts
