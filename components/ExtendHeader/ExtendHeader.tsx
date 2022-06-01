import SpecificHeader from "components/SpecificHeader";
import { ParsedMD } from "globalState/type";
import { isHeader } from "globalState/typeChecker";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

type Props = { parsedMD: ParsedMD; depth: number };

const colors = ["bg-red-100", "bg-blue-100", "bg-green-100"];

const ExtendHeader: React.FC<Props> = ({ parsedMD, depth }) => {
  const [childrenOpen, setChildrenOpen] = useState<boolean[]>(Array(parsedMD.length).fill(true));

  return (
    <>
      {parsedMD.map((element, index) => {
        if (isHeader(element)) {
          const header = element;
          return (
            <div
              key={`header-${depth}-${index}`}
              className={
                "p-4 flex mt-4 flex-col rounded-lg cursor-pointer " +
                colors[depth] +
                (childrenOpen[index] ? "" : " shadow-lg cursor-zoom-in") // 閉じてるときは影をつけて分かりやすく
              }
              onClick={(e) => {
                e.stopPropagation();
                const nextOpen = childrenOpen.slice();
                nextOpen[index] = !nextOpen[index];
                setChildrenOpen(nextOpen);
              }}
            >
              <SpecificHeader headLevel={depth + 1}>{header.title}</SpecificHeader>

              {/* 子要素をレンダリングしたままにしたいから、styleを変えるだけにしてる。 */}
              {/* childrenOpen[index] && <ExtendHeader> ってしたら子要素の、childrenOpenがリセットされちゃうからダメ。 */}
              <div
                className={childrenOpen[index] ? "" : "hidden"}
                key={`content-${depth}-${index}`}
              >
                {/* 再帰してる */}
                <ExtendHeader parsedMD={header.children} depth={depth + 1} />
              </div>
            </div>
          );
        } else {
          const content = element;
          return <ReactMarkdown>{content.body}</ReactMarkdown>;
        }
      })}
    </>
  );
};

export default ExtendHeader;
