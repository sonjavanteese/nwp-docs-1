const clickHandler = (event) => {
   let actBtn = event.target.closest('[data-action]');
   if (actBtn) {
        console.log(actBtn.dataset.action)
   };
};

document.addEventListener('click', clickHandler, false);

window.addEventListener("load", () => {
    console.log("Document Ready")
});