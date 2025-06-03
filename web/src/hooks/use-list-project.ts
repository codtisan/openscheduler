import { BackendBaseUrl } from '@/constants/http';
import axios from 'axios';
import useSWR from 'swr';

const fetcher = (url: string) => axios.get(url).then((res) => res.data.data);

export const UseGetProjectList = (limit: number, skip: number) => {
    const { data, isLoading, error, mutate } = useSWR(`${BackendBaseUrl}/project?limit=${limit}&skip=${skip}`, fetcher);

    return {
        data,
        isLoading,
        error,
        mutate,
    };
};
