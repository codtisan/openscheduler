import { BackendBaseUrl } from '@/constants/http';
import axios from 'axios';
import useSWR from 'swr';

const fetcher = (url: string) => axios.get(url).then((res) => res.data.data);

export const UseGetUserList = (limit: number, skip: number) => {
    const { data, isLoading, error, mutate } = useSWR(`${BackendBaseUrl}/user?limit=${limit}&skip=${skip}`, fetcher);

    return {
        data,
        isLoading,
        error,
        mutate,
    };
};

export const UseGetRoleList = (limit: number, skip: number) => {
    const { data, isLoading, error, mutate } = useSWR(`${BackendBaseUrl}/role?limit=${limit}&skip=${skip}`, fetcher);

    return {
        data,
        isLoading,
        error,
        mutate,
    };
};

export const UseGetServiceAccountList = (limit: number, skip: number) => {
    const { data, isLoading, error, mutate } = useSWR(`${BackendBaseUrl}/serviceaccount?limit=${limit}&skip=${skip}`, fetcher);

    return {
        data,
        isLoading,
        error,
        mutate,
    };
};
