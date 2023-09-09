import React from "react";

const Posts = ({ posts }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Subtasks</th>
          </tr>
        </thead>
        <tbody>
          {posts && posts.length > 0 ? (
            posts.map((post, index) => {
              return (
                <tr key={post?.id || index}>
                  <td>{post?.title}</td>
                  <td>{post?.status}</td>
                  <td>{post?.subtasks}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={4} className="text-center">
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Posts;
