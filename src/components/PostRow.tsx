import React from 'react'
import Link from 'next/link'
import { Post } from '../types/post'

const PostRow: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <tr className="border-t">
      <td className="px-4 py-2">{post.id}</td>
      <td className="px-4 py-2">{post.title}</td>
      <td className="px-4 py-2">
        <Link href={`/posts/${post.id}`}>
          <span className="text-blue-600 hover:underline cursor-pointer">
            View Details
          </span>
        </Link>
      </td>
    </tr>
  )
}

export default PostRow
