import { useInputText } from "globalState/inputText";
import React from "react";
import ReactMarkdown from "react-markdown";
import style from "styles/markdown.module.css";

type ContainerProps = {};
type Props = { text: string } & ContainerProps;

const Presenter: React.FC<Props> = ({ text }) => (
  <div className="flex-1 w-full">
    <div className={style.markdown_body}>
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  </div>
);

const Container: React.FC<ContainerProps> = (props) => {
  const [text] = useInputText();

  return <Presenter {...props} text={text} />;
};

export default Container;
