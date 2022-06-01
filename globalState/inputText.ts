import { atom, useRecoilState } from "recoil";

const defaultText = `
# ヘッダー1
## ヘッダー2

* こんな風に
* リスト形式も
* 簡単にできる

## ヘッダー2-2
ああああ
`;

const InputText = atom({ key: "inputText", default: defaultText });

export const useInputText = () => {
  return useRecoilState(InputText);
};
