const button = document.getElementById('btn');

button.addEventListener("click", async function () {
    const module = await import('./06b-module.js');
    console.log(module);
    module.hello();
});

// Continuar en la clase 31 es12