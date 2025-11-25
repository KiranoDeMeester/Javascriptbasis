export function heuristicClean() {
    const patterns = [/adbanner/i,/sponsor/i,/promoted/i,/pixel/i];
    document.querySelectorAll("*").forEach(el=>{
        const combined=(el.className+" "+el.id+" "+el.dataset.ad).toLowerCase();
        if(patterns.some(p=>p.test(combined))) el.remove();
    });
}
