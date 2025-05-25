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
        <div className="flex flex-row gap-10 size-full ">
            {Settings.map((setting) => {
                if (setting.title.toLowerCase().includes(searchInput)) {
                    return (
                        <div className="w-[20%] h-[30%]" key={setting.title}>
                            {setting.element}
                        </div>
                    );
                }
            })}
        </div>
    );
}

export default SettingPanel;
