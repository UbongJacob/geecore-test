import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// interface INavigationHistoryStore {
//   history: string[];
//   setHistory: (pathName: string) => void;
// }

// interface IExampleStoreWithPersist {
//   example: string;
//   setExample: (text: string) => void;
// }

// const exampleStoreWithPersist = create(
//   persist<IExampleStoreWithPersist>(
//     (set) => ({
//       example: "",
//       setExample: (example) => set(() => ({ example })),
//     }),
//     {
//       name: "exampleStoreWithPersist",
//       storage: createJSONStorage(() => localStorage),
//     }
//   )
// );

interface INavigationHistoryStore {
  history: string[];
  setHistory: (pathName: string) => void;
}

const navigationHistoryStore = create(
  persist<Readonly<INavigationHistoryStore>>(
    (set, get) => ({
      history: [],
      setHistory: (pathName) =>
        set(() => ({ history: [...get().history, pathName] })),
    }),
    {
      name: "useNavigationHistoryStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export const useNavigationHistoryStore = (): INavigationHistoryStore => {
  const store = navigationHistoryStore(({ history, setHistory }) => ({
    history,
    setHistory,
  }));
  return store;
};
