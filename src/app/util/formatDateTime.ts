import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(relativeTime);
dayjs.extend(advancedFormat);

export function formatCreatedAt(createdAt: string) {
    const now = dayjs();
    const createdDate = dayjs(createdAt);

    if (createdDate.isSame(now, 'day')) {
        return createdDate.format('ha [today]');
    }

    if (createdDate.isSame(now.subtract(1, 'day'), 'day')) {
        return 'yesterday';
    }

    // For older dates, format as "Fri, 6 Sep 2024"
    return createdDate.format('ddd, D MMM YYYY');
}
