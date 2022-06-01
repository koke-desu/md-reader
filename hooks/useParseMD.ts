import { Content, Header, ParsedMD } from "globalState/type";

export const useParseMD = (_md: string): ParsedMD => {
  const md = _md.split("\n");

  const result: ParsedMD = [];

  let depth = 0;

  md.filter((row) => row !== "").forEach((row) => {
    const headerReg = new RegExp("^#+ ");

    if (headerReg.test(row)) {
      // rowがhタグの場合の処理
      const [head] = row.split(" ");
      const numOfHash = head.length; // #が何個あるか

      const element: Header = {
        title: row.slice(numOfHash), // # の数＋スペースを除いた部分をタイトルとする
        children: [],
      };

      const parent = getLastHeader(result, numOfHash - 1);
      if (parent === undefined) throw Error("不正な形式のmarkdown?");

      parent.children.push(element);
      depth = numOfHash;
    } else {
      // hタグ以外の場合
      const element: Content = {
        body: row,
      };

      const parent = getLastHeader(result, depth);
      if (parent === undefined) throw Error("不正な形式のmarkdown");

      parent.children.push(element);
    }
  });

  return result;
};

// 指定されたdepthの一番あとの要素を返す。
// 例）2って入れたら、h2の一番最後を返す
const getLastHeader = (md: ParsedMD, depth = 0): Header | undefined => {
  // 今見てるとこ
  let now: Header = { children: md, title: "" };
  let count = 0;

  while (count < depth) {
    const lastHeader = now.children
      .filter((child) => Object.keys(child).some((key) => key === "children"))
      .at(-1) as Header | undefined;
    count++;
    if (lastHeader === undefined) return;

    now = lastHeader;
  }

  return now;
};
