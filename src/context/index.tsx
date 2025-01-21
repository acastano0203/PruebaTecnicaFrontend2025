import { createContext, useState } from "react";

interface ContextType {
  // Define aquí las propiedades que necesitas en tu contexto
  isRecipesOpen?: boolean;
  detailRecipe?: any[];
  openRecipesDetail?: () => void;
  closeRecipesDetail?: () => void;
  setDetailRecipe?: (recipe: any[]) => void;
}

export const Context = createContext<ContextType>({});

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isRecipesOpen, setIsRecipesOpen] = useState(false);
  //view detail recipe
  const [detailRecipe, setDetailRecipe] = useState<any[]>([]);

  const openRecipesDetail = () => setIsRecipesOpen(true);
  const closeRecipesDetail = () => setIsRecipesOpen(false);

  return (
    <Context.Provider
      value={{
        isRecipesOpen,
        detailRecipe,
        setDetailRecipe,
        openRecipesDetail,
        closeRecipesDetail,
      }}
    >
      {children}
    </Context.Provider>
  );
};
