import React from "react";

interface TageBlogger {
  title: string;
}

const Tag: React.FC<TageBlogger> = (props) => {
  return (
    <span className="flex justify-center flex-grow-1 items-center p-7 text-center w-auto h-10 rounded-full bg-white-shade-3 text-black">
      {props.title}
    </span>
  );
};

export default Tag;
