import React, {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { boolean } from "zod";
interface DialogInfoType {
  type: "bot" | "user";
  message: string;
}

export interface MainContextContextValue {
  toogleLanding: boolean;
  setToogleLanding: Dispatch<SetStateAction<boolean>>;
  dialogInfo: DialogInfoType[];
  setDialogInfo: React.Dispatch<React.SetStateAction<DialogInfoType[]>>;
  toogleChat: boolean;
  setToogleChat: Dispatch<SetStateAction<boolean>>;
}
//test
export const MainContext = createContext<MainContextContextValue>({
  toogleLanding: false,
  setToogleLanding: () => {},
  dialogInfo: [],
  setDialogInfo: () => {},
  toogleChat: false,
  setToogleChat: () => {},
});

export const MainContextProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [dialogInfo, setDialogInfo] = useState<DialogInfoType[]>([
    { type: "bot", message: "Hello my friend, how can i help you today?" },
  ]);
  const [toogleLanding, setToogleLanding] = useState(true);
  const [toogleChat, setToogleChat] = useState(false);
  return (
    <MainContext.Provider
      value={{
        toogleChat,
        setToogleChat,
        dialogInfo,
        toogleLanding,
        setToogleLanding,
        setDialogInfo,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
