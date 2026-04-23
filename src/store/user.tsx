import { create } from "zustand";
import { requests } from "../helpers/requests";
import type { UserType } from "../types";

type StateAction = {
  getDetail: (id: any, params: any) => Promise<any>;
  detail: UserType;
  detailLoading: boolean;
};

const initialState: StateAction = {
  getDetail: async () => {},
  detail: {} as UserType,
  detailLoading: false,
};

const userStore = create<StateAction>((set) => ({
  ...initialState,
  getDetail: async (id, params) => {
    set({ detailLoading: true });
    try {
      const { data } = await requests.fetchUserDetail(id, params);
      set({ detail: data?.data });
      return data;
    } catch (err) {
      throw err;
    } finally {
      set({ detailLoading: false });
    }
  },
}));

export default userStore;
