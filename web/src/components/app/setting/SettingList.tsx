import type { JSX } from 'react/jsx-runtime';
import { PreferenceSetting } from './PreferenceSetting';
import { ProfileSetting } from './ProfileSetting';
import { SystemSetting } from './SystemSetting';

export type ISettingItem = {
    title: string;
    element: JSX.Element;
};

export const SettingList = [
    {
        title: 'Profile',
        element: <ProfileSetting />,
    },
    {
        title: 'Preference',
        element: <PreferenceSetting />,
    },
    {
        title: 'System',
        element: <SystemSetting />,
    },
];
