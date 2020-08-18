import React from "react";

function Post({value}) {
  return (
    <div className="bg-white mb-10 shadow p-10">
      <h1 className="text-2xl font-medium">
        {value.id} : {value.title}
      </h1>
      <p>{value.body}</p>
    </div>
  );
}

export default Post;
