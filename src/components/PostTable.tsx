import React from 'react'
import PostRow from './PostRow'
import { Post } from '../types/post'

interface PostTableProps {
  posts: Post[]
}

const PostTable: React.FC<PostTableProps> = ({ posts }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Title</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <PostRow key={post.id} post={post} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PostTable
