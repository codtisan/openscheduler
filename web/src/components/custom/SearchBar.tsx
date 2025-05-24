import useSettingSearchStore from '@/store/useSettingSearchStore';
import { Input } from '../ui/input';

export function SearchBar() {
    const { setSearchInput } = useSettingSearchStore();

    const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
    };
    return <Input type="search" placeholder="Search" onChange={handleSearchInput} />;
}

export default SearchBar;
