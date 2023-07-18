import '../styles/pages/AdminPanel.sass';

import { useState } from "react";

// Define the types for the Page and Post objects
interface Page {
  id: number;
  name: string;
}

interface Post {
  name: string;
  info: string;
}

const AdminPanel = () => {
  // State variables to track the selected page and the list of posts
  const [selectedPage, setSelectedPage] = useState<Page | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);

  // Array of available pages
  const pages: Page[] = [
    { id: 1, name: "Archeology" },
    { id: 2, name: "Architecture" },
    // Add more pages here
  ];

  // Function to add a new post
  const addPost = () => {
    if (selectedPage) {
      const newPost: Post = {
        name: "New Post",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      };
      setPosts([...posts, newPost]);
    }
  };

  return (
    <>
      <h1>Admin Panel</h1>
      {/* Dropdown to select a page */}
      <select
        value={selectedPage?.id || ""}
        onChange={(event) => {
          const selectedPageId = parseInt(event.target.value);
          const page = pages.find((p) => p.id === selectedPageId);
          setSelectedPage(page || null);
        }}
      >
        <option value="">Select a page</option>
        {/* Render options for each page */}
        {pages.map((page) => (
          <option key={page.id} value={page.id}>
            {page.name}
          </option>
        ))}
      </select>
      {/* Display the selected page and add post button */}
      {selectedPage && (
        <div>
          <h2>Selected Page: {selectedPage.name}</h2>
          <button onClick={addPost}>Add Post</button>
        </div>
      )}
      {/* Render the list of posts */}
      {posts.map((post, index) => (
        <div key={index}>
          <h3>{post.name}</h3>
          <p>{post.info}</p>
        </div>
      ))}
    </>
  );
};

export default AdminPanel;