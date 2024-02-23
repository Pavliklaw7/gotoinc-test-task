import { defineStore } from 'pinia';

export const useParcelStore = defineStore('parcelStore', () => {
  const parcelTypes = ['Gadgets', 'Drinks', 'Clothes', 'Medicines', 'Other'];
  return { parcelTypes };
});
