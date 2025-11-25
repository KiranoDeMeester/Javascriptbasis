(function() {
    const neuter = ["googletag","adsbygoogle","adService","adSlots","sponsorData"];
    for(const key of neuter) Object.defineProperty(window,key,{value:{},writable:false,configurable:false});
})();
