// Immediately Invoked Function Expression (IIFE)

(function js() {
    // Name IIFE (js)
    console.log("Jay Swaminarayan");
})();

(() => {
    console.log("Harikrushn Maharaj");
})();

((name) => {
    // Simple / Unamed IIFE
    console.log(`Laxminarayan Dec ${name}`);
})("ni jay")