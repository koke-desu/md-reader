import { useInputText } from "globalState/inputText";
import React, { useState } from "react";

type ContainerProps = {};
type Props = {
  text: string;
  setText: (text: string) => void;
} & ContainerProps;

const Presenter: React.FC<Props> = ({ text, setText }) => (
  <textarea
    className="flex-1 w-4/5 border border-gray-400 shadow-md p-4"
    value={text}
    onChange={(e) => {
      setText(e.target.value);
    }}
  />
);

const Container: React.FC<ContainerProps> = (props) => {
  const [text, setText] = useInputText();

  return <Presenter {...props} {...{ text, setText }} />;
};

export default Container;
