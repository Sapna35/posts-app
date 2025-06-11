import React, { useState } from 'react'
import { Post } from '../types/post'

interface Props {
  onClose: () => void
  onSubmit: (newPost: Post) => void
}

const PostModal: React.FC<Props> = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleSubmit = () => {
    const newPost: Post = {
      id: Date.now(), 
      userId: 1,
      title,
      body,
    }
    onSubmit(newPost)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Create New Post</h2>
        <input
          className="border p-2 w-full mb-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          className="border p-2 w-full mb-2"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Body"
        />
        <div className="flex justify-end gap-2">
          <button className="bg-gray-300 px-4 py-2 rounded" onClick={onClose}>
            Cancel
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSubmit}>
            Create
          </button>
        </div>
      </div>
    </div>
  )
}

export default PostModal
