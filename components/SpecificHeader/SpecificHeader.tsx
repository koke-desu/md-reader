import React from "react";

type Headers = "h1" | "h2" | "h3";

// headLevelが1なら h1を、
// 2なら h2を返すコンポーネント
// h1~h3まで対応
type ContainerProps = { headLevel: number } & { children: string };
type Props = {
  tagName: Headers;
} & ContainerProps;

const Presenter: React.FC<Props> = ({ tagName: TagName, children }) => (
  <TagName>{children}</TagName>
);

const Container: React.FC<ContainerProps> = (props) => {
  let tagName: Headers = "h1";

  if ([1, 2, 3].some((level) => level === props.headLevel))
    tagName = ("h" + props.headLevel.toString()) as Headers;

  return <Presenter {...props} tagName={tagName} />;
};

export default Container;
