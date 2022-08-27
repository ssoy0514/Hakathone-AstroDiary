const $ = (selector) => document.querySelector(selector);
const modal = $(".modal-container");
const body = $("body");


const openmodal = () => {
    modal.classList.add("open");
    body.style.overflow = "hidden";
  };
  const closemodal = () => {
    modal.classList.remove("open");
    body.style.overflow = "auto";
  };
  export{openmodal, closemodal}