export type Content = {
  body: string;
};

export type Header = {
  title: string;
  children: (Header | Content)[];
};

export type ParsedMD = (Header | Content)[];
