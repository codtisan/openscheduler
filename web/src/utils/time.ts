import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export const convertDate = (date: string) => {
    return dayjs.utc(date).format('MMMM D, YYYY, h:mm A');
};
