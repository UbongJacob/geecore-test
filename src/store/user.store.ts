import { create } from "zustand";
import { persist } from "zustand/middleware";
import { shallow } from "zustand/shallow";

import { decryptData, encryptData } from "utilities/encryption";
import { emptyString } from "assets/other";

interface LoginResponse {
  email: string;
}

interface UserStore {
  userDetails?: LoginResponse;
  setUserDetails: (userDetails?: LoginResponse) => void;
}

export const userStoreName: Readonly<string> = "useUserStore";

const userStore = create(
  persist<Readonly<UserStore>>(
    (set) => ({
      // INITIAL STATE
      userDetails: {
        email: emptyString,
      },

      // ACTIONS AND MUTATUTORS
      setUserDetails: (userDetails) => set(() => ({ userDetails })),
    }),
    {
      name: userStoreName,
      storage: {
        setItem: (name, value) => {
          return sessionStorage.setItem(name, encryptData(value));
        },
        getItem: (name) => {
          const value = sessionStorage.getItem(name);
          if (value) return decryptData(value);
          else return null;
        },
        removeItem: (name) => {
          return sessionStorage.removeItem(name);
        },
      },
    }
  )
);

export const useUserStore = () => {
  const store = userStore(
    ({ setUserDetails, userDetails }) => ({
      userDetails,
      setUserDetails,
    }),
    shallow
  );

  return store;
};
