// =========================
// features/stats/statsComponent.js
// =========================

export const StatsComponent = (function () {

    function render(count, avg) {
        const countSpan = document.querySelector('#feat_stats_count');
        const avgSpan = document.querySelector('#feat_stats_avg');

        if (countSpan) {
            countSpan.textContent = count;
        }
        if (avgSpan) {
            avgSpan.textContent = `€${avg.toFixed(2)}`;
        }
    }

    return {
        render
    };
})();
