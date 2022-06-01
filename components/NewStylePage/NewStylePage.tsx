import SpecificHeader from "components/SpecificHeader";
import { useInputText } from "globalState/inputText";
import { Content, Header, ParsedMD } from "globalState/type";
import { useParseMD } from "hooks/useParseMD";
import React from "react";
import ReactMarkdown from "react-markdown";
import style from "styles/markdown.module.css";

type ContainerProps = {};
type Props = {
  parsedMD: ParsedMD;
  depth: number;
} & ContainerProps;

const colors = ["bg-red-100", "bg-blue-100", "bg-green-100"];

const Presenter: React.FC<Props> = ({ parsedMD, depth }) => (
  <>
    {parsedMD.map((element) => {
      if (isHeader(element)) {
        const header = element;
        return (
          <div className={"p-4 flex mt-4 flex-col rounded-lg " + colors[depth]}>
            <SpecificHeader headLevel={depth + 1}>{header.title}</SpecificHeader>

            {/* 再帰してる。 */}
            <Presenter parsedMD={header.children} depth={depth + 1} />
          </div>
        );
      } else {
        const content = element;
        return <ReactMarkdown>{content.body}</ReactMarkdown>;
      }
    })}
  </>
);

const isHeader = (element: any): element is Header => {
  if (!element) return false;
  if (typeof element.title !== "string") return false;

  // childrenも再帰で求めたほうがいいだろうけど、今の使い方だと、どうせChildrenもそのうちisHeaderで調べるから省略
  if (typeof element.children === "undefined") return false;

  return true;
};

const Container: React.FC<ContainerProps> = (props) => {
  const [md] = useInputText();

  const parsedMD = useParseMD(md);

  console.log(parsedMD);

  return (
    <div className={style.markdown_body + " flex-1 w-full"}>
      <Presenter {...props} parsedMD={parsedMD} depth={0} />
    </div>
  );
};

export default Container;
