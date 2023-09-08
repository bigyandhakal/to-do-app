import React from "react";

const Posts = ({ posts }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts && posts.length > 0 ? (
            posts.map((post, index) => {
              return (
                <tr key={post?.id || index}>
                  <td>{post?.userId}</td>
                  <td>{post?.id}</td>
                  <td>{post?.title}</td>
                  <td>{post?.body}</td>
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
