import { create } from "zustand";

export const useStore = create((set) => ({
  months: [],
  items: {},

  addMonth: (month) =>
    set((state) => {
      const newMonth = {
        monthName: month.name,
        date: month.date,
        id: Date.now(),
      };
      return { months: [...state.months, newMonth] };
    }),

  addItem: (monthId, itemName, quantity) =>
    set((state) => {
      const newItem = { name: itemName, quantity, id: Date.now() };
      const items = state.items[monthId] || [];
      return { items: { ...state.items, [monthId]: [...items, newItem] } };
    }),

  loadFromStorage: () =>
    set(() => {
      const months = JSON.parse(localStorage.getItem("months")) || [];
      const items = JSON.parse(localStorage.getItem("items")) || {};
      return { months, items };
    }),

  saveToStorage: () =>
    set((state) => {
      localStorage.setItem("months", JSON.stringify(state.months));
      localStorage.setItem("items", JSON.stringify(state.items));
    }),
}));
