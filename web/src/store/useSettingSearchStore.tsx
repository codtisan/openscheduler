import { create } from 'zustand';

// Define the store's state and methods interface
interface SearchInputStore {
    searchInput: string;
    setSearchInput: (state: string) => void;
}

const useSettingSearchStore = create<SearchInputStore>((set) => ({
    searchInput: '',
    setSearchInput: (state: string) => set(() => ({ searchInput: state })),
}));

export default useSettingSearchStore;
