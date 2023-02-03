window.onload = function () {
  let a = 0;
  const mainContent = document.querySelector(".main-content"),
    Footer = document.querySelector("footer");

  window.addEventListener("mousewheel", function (event) {
    let bodyHeight = document.body.offsetHeight - window.innerHeight * 0.2;

    console.log(a);
    if (event.wheelDelta < 0) {
      if (a > bodyHeight * 0.9) {
        a = bodyHeight;
      } else {
        a += 120;
      }
    } else {
      a -= 120;
    }

    console.log(bodyHeight);
    console.log(event.wheelDelta);
    console.log(a);

    mainContent.style = `transform:translateY(-${a}px)`;
    Footer.style = `transform:translateY(-${a}px)`;
  });

  setTimeout(function () {
    scrollTo(0, 0);
  }, 100); //새로고침 첫화면으로
};

// const box = document.querySelector("body");

// console.log(box.clientWidth, box.clientHeight);
