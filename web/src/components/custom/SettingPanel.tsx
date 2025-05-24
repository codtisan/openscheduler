import useSettingSearchStore from '@/store/useSettingSearchStore';
import { PreferenceSetting } from './PreferenceSetting';
import { ProfileSetting } from './ProfileSetting';

export const Settings = [
    {
        title: 'Profile',
        element: <ProfileSetting />,
    },
    {
        title: 'Preference',
        element: <PreferenceSetting />,
    },
];

function SettingPanel() {
    const { searchInput } = useSettingSearchStore();

    return (
        <div className="flex flex-row mt-10 w-[90%] h-[90%] gap-10">
            {Settings.map((setting) => {
                if (setting.title.toLowerCase().includes(searchInput)) {
                    return setting.element;
                }
            })}
        </div>
    );
}

export default SettingPanel;
