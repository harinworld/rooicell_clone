let effect1 = `grow 1000ms 0ms 1 both`;

const mainText01 = document.querySelector(".main-text01");

let tag = "";
for (let i = 0; i < mainText01.textContent.length; i++) {
  tag += `<span>${mainText01.textContent[i]}</span>`;
}
mainText01.innerHTML = tag;
console.log(tag);

const spanAll = document.querySelectorAll(".main-text01 span");
let num = -1;
let inter = setInterval(() => {
  if (num < spanAll.length) {
    num++;
  } else {
    clearInterval(inter);
  }
  spanAll[num].style.animation += effect1;
  //   `transform: translateY(0rem); opacity: 1;`;
  console.log(spanAll[num]);
}, 100);

