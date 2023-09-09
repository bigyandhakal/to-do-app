import React from "react";

const Lists = ({ lists }) => {
    console.log(lists)
  return (
    <>
        {lists && lists.length > 0 ? (
          lists.map((list) => {
            return <ul key={list.id}>
                <li>{list.title}</li>
            </ul>;
          })
        ) : (
          <p>No data found</p>
        )}
    </>
  );
};

export default Lists;
