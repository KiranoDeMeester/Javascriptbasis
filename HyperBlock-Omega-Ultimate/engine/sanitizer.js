export function sanitizeRequest(details) {
    const blocked = ["tracking","ads","analytics","pixel"];
    return blocked.some(x => details.url.includes(x));
}
