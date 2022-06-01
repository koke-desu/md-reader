import ExtendHeader from "components/ExtendHeader";
import { useInputText } from "globalState/inputText";
import { ParsedMD } from "globalState/type";
import { useParseMD } from "hooks/useParseMD";
import React from "react";
import style from "styles/markdown.module.css";

type ContainerProps = {};
type Props = {
  parsedMD: ParsedMD;
} & ContainerProps;

const Presenter: React.FC<Props> = ({ parsedMD }) => (
  <div className={style.markdown_body + " flex-1 w-full"}>
    <ExtendHeader parsedMD={parsedMD} depth={0} />
  </div>
);

const Container: React.FC<ContainerProps> = (props) => {
  const [md] = useInputText();

  const parsedMD = useParseMD(md);

  console.log(parsedMD);

  return <Presenter {...props} parsedMD={parsedMD} />;
};

export default Container;
