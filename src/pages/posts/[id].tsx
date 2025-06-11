

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function PostDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [analysis, setAnalysis] = useState<any>(null);

  useEffect(() => {
    if (id) {
      fetchPostAndAnalysis();
    }
  }, [id]);

  const fetchPostAndAnalysis = async () => {
  try {
    const res = await axios.get(`/api/posts/${id}`);
    const postData = res.data;
    setPost(postData);
    setTitle(postData.title);

    const API_URL = process.env.NEXT_PUBLIC_ANALYSIS_API || "http://127.0.0.1:9000";

    const analysisRes = await axios.post('/api/analyze', {
  title: postData.title,
  body: postData.body,
});

    setAnalysis(analysisRes.data);
  } catch (error) {
    console.error("Error fetching analysis:", error);
  }
};


   



  const handleUpdateTitle = async () => {
    if (!post) return;
    try {
      const res = await fetch(`/api/posts/${post.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.NEXT_PUBLIC_API_KEY || 'my-secret-123',
        },
        body: JSON.stringify({ title }),
      });

      if (res.ok) {
        const updated = await res.json();
        setPost(updated);
        alert('Post title updated successfully!');
      } else {
        const err = await res.json();
        alert('Failed to update: ' + err.message);
      }
    } catch (err) {
      console.error('Update error:', err);
      alert('An error occurred while updating the post.');
    }
  };

  if (loading) return <p className="p-6">Loading post...</p>;
  if (!post) return <p className="p-6">Post not found.</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Post Details</h1>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded p-2"
        />
        <button
          onClick={handleUpdateTitle}
          className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Save Title
        </button>
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">Content:</label>
        <p className="border rounded p-2 bg-gray-50">{post.body}</p>
      </div>

      {analysis && (
        <div className="mt-6 border-t pt-4">
          <h2 className="text-xl font-semibold mb-2">Post Analysis</h2>
          <p>📝 Word Count: {analysis.wordCount}</p>
          <p>🔤 Title Length: {analysis.titleLength}</p>
          <p>💬 Sentiment: {analysis.sentiment}</p>
        </div>
      )}
    </div>
  );
}
