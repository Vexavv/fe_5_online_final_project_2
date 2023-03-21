export function getQueryParams(params) {
    const esc = encodeURIComponent;
    return Object.entries(params)
        .filter(([key, value]) => value !== undefined)
        .map(([key, value]) => {
            if (key === 'sort' && /^(\+name|\+currentPrice)$/.test(value)) {
                return `${key}=${value}`;
            }
            return [esc(key), esc(value)].join('=');
        })
        .join('&');

}
