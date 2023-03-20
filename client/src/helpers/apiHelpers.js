export function getQueryParams(params) {
    const esc = encodeURIComponent;
    return Object.keys(params)
        .filter((key) => params[key] !== undefined)
        .map((key) => {
            if (key === 'sort' && ['+name', '-name', '+currentPrice', '-currentPrice'].includes(params[key])) {
                return `${key}=${params[key]}`;
            }
            return `${esc(key)}=${esc(params[key])}`;
        })
        .join('&');
}