import { closemodal, openmodal } from "./modal.mjs";
const $ = (selector) => document.querySelector(selector);
function App() {
  $(".btn-open-modal").addEventListener("click", ()=>{
    openmodal();
  });
  $(".modal-close").addEventListener("click", ()=>{
    closemodal();
  });
}
const app = new App();
