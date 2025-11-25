// Side-effect script: alleen in content script context
performance.now = () => Math.round(performance.now() / 10) * 10;
Object.defineProperty(window.screen, "width", { value: window.screen.width + Math.floor(Math.random() * 3 - 1) });
Object.defineProperty(window.screen, "height", { value: window.screen.height + Math.floor(Math.random() * 3 - 1) });
