import { createContext } from "react";

type ContextType = {
  frontIndex: number;
  setFrontIndex: React.Dispatch<React.SetStateAction<number>>;
  backIndex: number;
  setBackIndex: React.Dispatch<React.SetStateAction<number>>;
  featuredIndex: number;
  setFeaturedIndex: React.Dispatch<React.SetStateAction<number>>;
};

const Context = createContext<ContextType>({} as ContextType);

export default Context;
