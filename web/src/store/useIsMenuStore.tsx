import { create } from 'zustand';

// Define the store's state and methods interface
interface MenuStore {
    menuDisplay: 'full' | 'short';
    setMenuDisplay: (state: 'full' | 'short') => void;
}

const useIsMenuStore = create<MenuStore>((set) => ({
    menuDisplay: 'full',
    setMenuDisplay: (state: 'full' | 'short') => set(() => ({ menuDisplay: state })),
}));

export default useIsMenuStore;
