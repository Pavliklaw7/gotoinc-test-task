import type { RequestDto } from '@/models';

export const getFromStorage = (key: string) => {
  const itemsFromStore = JSON.parse(localStorage.getItem(key)!);
  if (!itemsFromStore) return;
  return itemsFromStore;
};

export const addToStorage = (key: string, item: RequestDto) => {
  let itemsFromStore = JSON.parse(localStorage.getItem(key)!);

  if (itemsFromStore && itemsFromStore.length) {
    const itemsToStore = JSON.stringify([...itemsFromStore, item]);
    localStorage.setItem(key, itemsToStore);
  } else {
    localStorage.setItem(key, JSON.stringify([item]));
  }

  itemsFromStore = JSON.parse(localStorage.getItem(key)!);
};

export const removeFromStorage = (key: string, itemId: string) => {
  const itemsFromStore = JSON.parse(localStorage.getItem(key)!);

  if (itemsFromStore.length) {
    const itemsToStore = itemsFromStore.filter((item: any) => item.id !== itemId);
    localStorage.setItem(key, JSON.stringify(itemsToStore));
  }
};
