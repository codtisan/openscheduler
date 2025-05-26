import type { formSchema } from '@/components/app/login/LoginForm';
import { getCookie, setCookie } from '@/services/cookie';
import { BackendServices } from '@/services/http';
import type { z } from 'zod';

export const UseLoginSubmit = async (loginInfo: z.infer<typeof formSchema>) => {
    try {
        const res = await BackendServices.post('/user/login', loginInfo);
        if (res.status === 200) {
            if (!getCookie('access_token')) {
                setCookie('access_token', res.data.access_token);
            }
            return true;
        } else {
            return false;
        }
    } catch {
        return false;
    }
};
