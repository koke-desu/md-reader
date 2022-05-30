import { atom, useRecoilState } from "recoil";

const InputText = atom({ key: "inputText", default: "" });

export const useInputText = () => {
  return useRecoilState(InputText);
};
