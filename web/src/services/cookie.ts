import Cookies from 'js-cookie';

export function setCookie(key: string, value: string) {
    console.log(value);
    Cookies.set(key, value);
}

export function getCookie(key: string): string | undefined {
    return Cookies.get(key);
}
