import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Article = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sample data - replace with your data fetching logic
  const sampleBlogs = [
    { id: 1, title: 'First Blog', content: 'This is the first blog.' },
    { id: 2, title: 'Second Blog', content: 'This is the second blog.' },
    { id: 3, title: 'Third Blog', content: 'This is the third blog.' },
    // Add more blogs as needed
  ];

  useEffect(() => {
    // Simulate fetching data
    setBlogs(sampleBlogs);
  }, []);

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Blog List</h2>
      <input
        type="text"
        placeholder="Search blogs..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="form-control mb-3"
      />
      <ul className="list-group">
        {filteredBlogs.map(blog => (
          <li key={blog.id} className="list-group-item">
            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Article;
