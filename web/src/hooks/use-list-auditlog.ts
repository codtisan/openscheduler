import { BackendBaseUrl } from '@/constants/http';
import axios from 'axios';
import useSWR from 'swr';

const fetcher = (url: string) => axios.get(url).then((res) => res.data.data);

export const UseGetAuditlogList = (limit: number, skip: number) => {
    const { data, isLoading, error, mutate } = useSWR(`${BackendBaseUrl}/auditlog?limit=${limit}&skip=${skip}`, fetcher);

    return {
        data,
        isLoading,
        error,
        mutate,
    };
};

export const UseGetMetricslogList = (limit: number, skip: number) => {
    const { data, isLoading, error, mutate } = useSWR(`${BackendBaseUrl}/metricslog?limit=${limit}&skip=${skip}`, fetcher);

    return {
        data,
        isLoading,
        error,
        mutate,
    };
};

export const UseGetResponselogList = (limit: number, skip: number) => {
    const { data, isLoading, error, mutate } = useSWR(`${BackendBaseUrl}/responselog?limit=${limit}&skip=${skip}`, fetcher);

    return {
        data,
        isLoading,
        error,
        mutate,
    };
};
