import React from "react";

type ContainerProps = {};
type Props = {} & ContainerProps;

const Presenter: React.FC<Props> = (props) => <div></div>;

const Container: React.FC<ContainerProps> = (props) => {
  return <Presenter {...props} />;
};

export default Container;
