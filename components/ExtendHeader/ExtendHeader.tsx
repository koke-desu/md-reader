import SpecificHeader from "components/SpecificHeader";
import { ParsedMD } from "globalState/type";
import { isHeader } from "globalState/typeChecker";
import React from "react";
import ReactMarkdown from "react-markdown";

type Props = { parsedMD: ParsedMD; depth: number };

const colors = ["bg-red-100", "bg-blue-100", "bg-green-100"];

const ExtendHeader: React.FC<Props> = ({ parsedMD, depth }) => (
  <>
    {parsedMD.map((element) => {
      if (isHeader(element)) {
        const header = element;
        return (
          <div
            key={`header-${header.title}`}
            className={"p-4 flex mt-4 flex-col rounded-lg " + colors[depth]}
          >
            <SpecificHeader headLevel={depth + 1}>{header.title}</SpecificHeader>

            {/* 再帰してる。 */}
            <ExtendHeader parsedMD={header.children} depth={depth + 1} />
          </div>
        );
      } else {
        const content = element;
        return <ReactMarkdown>{content.body}</ReactMarkdown>;
      }
    })}
  </>
);

export default ExtendHeader;
