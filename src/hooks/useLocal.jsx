/// Default
import create from "zustand";

export const useLocal = create((set, get) => ({
  // Variables
  verson: 1,
  storageName: "UnlockTest",
  locked: [true, true, true, true, true, true],
  // Setting Locked and unlocked variables
  setUnlockFromURL: (scannedURL) => {
    const { setUnlock } = get();
    var url = new window.URL(scannedURL);
    const searchParams1 = new URLSearchParams(url.search);
    const unLock = parseInt(searchParams1.get("ul"));
    return setUnlock(unLock);
  },
  setUnlock: (i) => {
    const { locked, setLocked, saveStorage } = get();
    if (i >= locked.length) return false;
    locked[i] = false;
    setLocked(locked);
    saveStorage();
    return true;
  },
  toggleUnlock: (i) => {
    const { locked, setLocked, saveStorage } = get();
    locked[i] = !locked[i];
    setLocked(locked);
    saveStorage();
  },
  setLocked: (locked) => set((s) => ({ locked })),
  setLockAll: () => {
    const { locked, setLocked, saveStorage } = get();
    console.log(locked);
    const allLocked = locked.map((e) => true);
    console.log("setAll", allLocked);
    setLocked(allLocked);
    saveStorage();
  },
  // Local and Session Storage
  storageData: () => {
    const { verson, storageName, locked } = get();
    return {
      version: verson,
      name: storageName,
      locked: locked
    };
  },
  getURLVars: (URL) => {
    const { setUnlock } = get();
    const searchParams1 = new URLSearchParams(URL.search);
    const unlockNum = searchParams1.get("ul");
    console.log(unlockNum);
    setUnlock(unlockNum);
  },
  saveStorage: () => {
    const { storageData, storageName } = get();
    const jsonData = JSON.stringify(storageData());
    localStorage.setItem(storageName, jsonData);
    sessionStorage.setItem(storageName, jsonData);
  },
  getStorage: () => {
    const { storageName, verson, locked } = get();
    let localContent = JSON.parse(localStorage.getItem(storageName));
    let sessionContent = JSON.parse(sessionStorage.getItem(storageName));
    if (localContent || sessionContent) {
      const retrevedData = { ...localContent, ...sessionContent };
      console.log(retrevedData);
      set((s) => ({
        verson: retrevedData.version || verson,
        storageName: retrevedData.storageName || storageName,
        locked: retrevedData.locked || locked
      }));
    }
  },
  removeStorage: () => {
    const { storageName } = get();
    localStorage.removeItem(storageName);
    sessionStorage.removeItem(storageName);
  }
}));
