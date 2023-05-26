import React, {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
interface DialogInfoType {
  type: "bot" | "user";
  message: string;
}

export interface ToogleLandingContextValue {
  toogleLanding: boolean;
  setToogleLanding: Dispatch<SetStateAction<boolean>>;
  dialogInfo: DialogInfoType[];
  setDialogInfo: React.Dispatch<React.SetStateAction<DialogInfoType[]>>;
}
//test
export const ToggleLandingContext = createContext<ToogleLandingContextValue>({
  toogleLanding: false,
  setToogleLanding: () => {},
  dialogInfo: [],
  setDialogInfo: () => {},
});

export const ToggleLandingContextProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [dialogInfo, setDialogInfo] = useState<DialogInfoType[]>([
    { type: "bot", message: "Hello my friend, how can i help you today?" },
  ]);
  const [toogleLanding, setToogleLanding] = useState(true);
  return (
    <ToggleLandingContext.Provider
      value={{ dialogInfo, toogleLanding, setToogleLanding, setDialogInfo }}
    >
      {children}
    </ToggleLandingContext.Provider>
  );
};
