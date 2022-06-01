import { Header } from "./type";

export const isHeader = (element: any): element is Header => {
  if (!element) return false;
  if (typeof element.title !== "string") return false;

  // childrenも再帰で求めたほうがいいだろうけど、今の使い方だと、どうせChildrenもそのうちisHeaderで調べるから省略
  if (typeof element.children === "undefined") return false;

  return true;
};
