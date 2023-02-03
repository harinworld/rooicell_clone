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




document.querySelector('.cot03-inner-box2 form button').addEventListener('click', function(e) {
  if (document.querySelector('#f_name').value == '') { 
      e.preventDefault() 
      alert('이름을 입력해주세요')
  }
  else if (document.querySelector('#f_email').value == '') { 
    e.preventDefault() 
    alert('이메일을 입력해주세요')
  }
  else if (document.querySelector('#f_mobile').value == '') { 
    e.preventDefault() 
    alert('연락처를 입력해주세요')
  }
  else if (document.querySelector('#f_country').value == '') { 
    e.preventDefault()
    alert('국가를 입력해주세요')
  }
  else if (document.querySelector('#f_content').value == '') { 
    e.preventDefault()
    alert('문의내용을 입력해주세요')
  }
});


