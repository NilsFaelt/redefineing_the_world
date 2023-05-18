import React, {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export interface ToogleLandingContextValue {
  toogleLanding: boolean;
  setToogleLanding: Dispatch<SetStateAction<boolean>>;
}

export const ToggleLandingContext = createContext<ToogleLandingContextValue>({
  toogleLanding: false,
  setToogleLanding: () => {},
});

export const ToggleLandingContextProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [toogleLanding, setToogleLanding] = useState(false);
  return (
    <ToggleLandingContext.Provider value={{ toogleLanding, setToogleLanding }}>
      {children}
    </ToggleLandingContext.Provider>
  );
};
