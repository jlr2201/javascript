const button = document.getElementById('btn');

button.addEventListener("click", async function () {
    const module = await import('./06b-module.js');
    console.log(module);
    module.hello();
});
