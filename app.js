const copyBtn = document.querySelector("button");
const textarea = document.querySelector("textarea");

copyBtn.addEventListener("click", () => {
  textarea.select();
  let textValue = textarea.value;

  navigator.clipboard.writeText(textValue);
  copyBtn.innerText = "کپی شد";
  copyBtn.style.backgroundColor = "turquoise";

  setTimeout(() => {
    copyBtn.innerText = "کپی کن";
    copyBtn.style.backgroundColor = "rgb(111, 186, 244)";
  }, 1500);
});
