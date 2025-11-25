performance.now = ()=>Math.round(performance.now()/10)*10;
Object.defineProperty(screen,"width",{value:screen.width+Math.floor(Math.random()*3-1)});
Object.defineProperty(screen,"height",{value:screen.height+Math.floor(Math.random()*3-1)});
