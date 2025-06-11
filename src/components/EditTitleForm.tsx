
import React, { useState } from 'react'

interface Props {
  currentTitle: string
  onSave: (title: string) => void
}

const EditTitleForm: React.FC<Props> = ({ currentTitle, onSave }) => {
  const [title, setTitle] = useState(currentTitle)

  return (
    <div className="my-4">
      <input
        className="border p-2 w-full"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
        onClick={() => onSave(title)}
      >
        Save Title
      </button>
    </div>
  )
}

export default EditTitleForm
