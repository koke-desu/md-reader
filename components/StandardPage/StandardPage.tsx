import { useInputText } from "globalState/inputText";
import React from "react";
import ReactMarkdown from "react-markdown";
import style from "styles/markdown.module.css";

type ContainerProps = {};
type Props = { text: string } & ContainerProps;

const Presenter: React.VFC<Props> = ({ text }) => (
  <div className="flex-1 overflow-y-scroll w-full">
    <div className={style.markdown_body}>
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  </div>
);

const Container: React.VFC<ContainerProps> = (props) => {
  const [text] = useInputText();

  return <Presenter {...props} text={text} />;
};

export default Container;
