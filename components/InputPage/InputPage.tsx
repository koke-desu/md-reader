import { useInputText } from "globalState/inputText";
import React, { useState } from "react";

type ContainerProps = {};
type Props = {
  text: string;
  setText: (text: string) => void;
} & ContainerProps;

const Presenter: React.FC<Props> = ({ text, setText }) => (
  <>
    <textarea
      className="flex-1 w-4/5 border border-gray-400 shadow-md p-4"
      value={text}
      onChange={(e) => {
        setText(e.target.value);
      }}
    />
    <a
      className="fixed flex justify-center items-center aspect-square rounded-full px-6 border border-gray-300 bg-white right-8 bottom-8 shadow-md"
      href="https://qiita.com/tbpgr/items/989c6badefff69377da7"
      target="_blank"
      rel="noopener noreferrer"
    >
      <p className="text-4xl text-gray-400">？</p>
    </a>
  </>
);

const Container: React.FC<ContainerProps> = (props) => {
  const [text, setText] = useInputText();

  return <Presenter {...props} {...{ text, setText }} />;
};

export default Container;
