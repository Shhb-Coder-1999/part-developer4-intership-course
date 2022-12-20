import { defineStore, acceptHMRUpdate } from "pinia";

export const useStore = defineStore({
  id: "store",
  state: () => ({
    lists: [
      {
        bgColor: "#892626",
        catName: "Daily",
        items: [
          { name: "carrot", checked: false },
          { name: "milk", checked: false },
          { name: "cake", checked: false },
        ],
      },
      {
        bgColor: "#7cefa8",
        catName: "Daily usage",
        items: [
          { name: "carrot", checked: false },
          { name: "milk", checked: false },
          { name: "cake", checked: false },
        ],
      },
    ],
  }),
  getters: {},
  actions: {
    addItem(catName, itemName) {
      function checkCatAvailability(arr, val) {
        return arr.some((arrVal) => val === arrVal.catName);
      }

      function checkItemAvailability(arr, val) {
        return arr.some((arrVal) => val === arrVal.name);
      }

      if (!checkCatAvailability(this.lists, catName)) {
        this.lists.push({
          bgColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
          catName: catName,
          items: [{ name: itemName, checked: false }],
        });
      } else {
        let index = this.lists.findIndex((item) => item.catName == catName);
        if (!checkItemAvailability(this.lists[index].items, itemName)) {
          this.lists[index].items.push({ name: itemName, checked: false });
        }
      }
    },

    changeCheckedState(listIndex, itemIndex) {
      this.lists[listIndex].items[itemIndex].checked =
        !this.lists[listIndex].items[itemIndex].checked;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}
