import { Revenue } from "./definitions";

export const formatCurrency = (amount: number) => {
    return (amount / 100).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
};

export const formatDateToLocal = (
    dateStr: string,
    locale: string = 'fr-FR'
) => {

    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }

    const date = new Date(dateStr);
    const formatter = new Intl.DateTimeFormat(locale, options);
    return formatter.format(date);
}

export const generateYAxis = (revenue: Revenue[]) => {
    const highestRecord = Math.max(...revenue.map((month) => month.revenue));
    const topLabel = Math.ceil(highestRecord / 1000) * 1000;
    return topLabel;
}

export const generatePagination = (currentPage: number, totalPages: number) => {
    if(totalPages <= 7) {
        return Array.from({ length: totalPages}, (_, i) => i + 1);
    }

    // [1][2][3][...][5][6]
    if (currentPage <= 3) {
        return [1, 2, 3, '...', totalPages - 1, totalPages];
    }

    // [1][2][...][4][5][6]
    if (currentPage >= totalPages - 2) {
        return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
    }

    // [1][...][voisine - 1][page actuelle][voisine + 1][...][6]
    return [
        1,
        '...',
        currentPage - 1,
        currentPage,
        currentPage + 1,
        '...',
        totalPages
    ];
}

