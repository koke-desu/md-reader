import React from "react";

type ContainerProps = {};
type Props = {} & ContainerProps;

const Presenter: React.VFC<Props> = (props) => <div></div>;

const Container: React.VFC<ContainerProps> = (props) => {
  return <Presenter {...props} />;
};

export default Container;
