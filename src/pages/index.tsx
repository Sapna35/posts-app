import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { Post } from '../types/post';

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const POSTS_PER_PAGE = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
        setPosts(res.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const paginatedPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const handlePageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <span role="img" aria-label="page icon">📄</span> Posts
      </h1>

      {/* Create Post Button (modal opens here later) */}
      <div className="flex justify-end mb-6">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => alert('Open Create Post Modal here')}
        >
          <span role="img" aria-label="plus">📝</span> + Create New Post
        </button>
      </div>

      {loading ? (
        <p>Loading posts...</p>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left">ID</th>
                  <th className="border p-2 text-left">Title</th>
                  <th className="border p-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {paginatedPosts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-100 transition">
                    <td className="border p-2 text-left">{post.id}</td>
                    <td className="border p-2">{post.title}</td>
                    <td className="border p-2 text-center">
                      <Link
                        href={`/posts/${post.id}`}
                        className="text-blue-500 hover:underline"
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-6 flex justify-center flex-wrap gap-2">
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => handlePageChange(idx + 1)}
                className={`px-3 py-1 rounded border text-sm font-medium transition duration-200 shadow-sm ${
                  currentPage === idx + 1
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
