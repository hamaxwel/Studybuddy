import React from 'react';
import './BlogPage.css';

const blogPosts = [
  {
    title: 'The Benefits of Online Learning',
    date: '2024-11-01',
    description: 'Discover the key advantages of online learning for students and educators.',
    image: '/path/to/online-learning-image.jpg',
    link: '/blog/online-learning',
  },
  {
    title: 'How to Stay Focused During Study Sessions',
    date: '2024-10-25',
    description: 'Learn tips and tricks to stay focused and motivated during study sessions.',
    image: '/path/to/study-focus-image.jpg',
    link: '/blog/study-focus',
  },
  {
    title: '5 Ways to Improve Your Memory for Exams',
    date: '2024-10-15',
    description: 'Explore effective techniques to boost your memory retention during exam preparation.',
    image: '/path/to/exam-memory-image.jpg',
    link: '/blog/exam-memory',
  },
  // Add more blog posts as needed
];

const BlogPage = () => {
  return (
    <div className="blog-page">
      <div className="blog-container">
        <section className="blog-posts">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-post">
              <img src={post.image} alt={post.title} className="blog-post-image" />
              <div className="blog-post-content">
                <h2 className="blog-post-title">{post.title}</h2>
                <p className="blog-post-date">{post.date}</p>
                <p className="blog-post-description">{post.description}</p>
                <a href={post.link} className="read-more">Read More</a>
              </div>
            </div>
          ))}
        </section>

        <aside className="blog-sidebar">
          <h3>Recent Posts</h3>
          <ul>
            {blogPosts.slice(0, 3).map((post, index) => (
              <li key={index}>
                <a href={post.link} className="sidebar-post-title">{post.title}</a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default BlogPage;
