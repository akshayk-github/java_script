// Immediately Invoked Function Expression (IIFE)

(function chai() {
    // Name IIFE
    console.log("Jay Swaminarayan");
})();

( ()=> {
    console.log("Laxminarayan Dev");
})();

( (name)=> {
    // Simple / Unamed IIFE
    console.log(`Laxminarayan Dev ${name}`);
})(`ni Jay`);