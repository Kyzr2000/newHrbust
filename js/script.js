"use strict";
//指向nav导航栏的时候会出现副导航栏
const navItems = document.querySelectorAll(".nav-item");
let currNav;
navItems.forEach((item) => {
  item.addEventListener("mouseover", function () {
    currNav = item.getAttribute("currNav");
    const content = document.querySelector(`.nav-content-${currNav}`);
    content.style.display = "block";
    content.style.opacity = 1;
  });
  item.addEventListener("mouseout", function () {
    const content = document.querySelector(`.nav-content-${currNav}`);
    content.style.display = "none";
    content.style.opacity = 0;
  });
});

const topImg = document.querySelectorAll(".topImg");
let currTopImg = 1;
const nextBtn = document.querySelector(".btn-right");
const prevBtn = document.querySelector(".btn-left");
const nextMainBtn = document.querySelector(".btn-main-right");
const prevMainBtn = document.querySelector(".btn-main-left");
//顶部轮播图
//先设置第一个图片显示
const topImg1 = document.querySelector(".topImg1");
topImg1.style.opacity = 1;
const nextImg = function () {
  topImg.forEach((img) => {
    img.style.opacity = 0;
  });
  currTopImg != 3 ? currTopImg++ : (currTopImg = 1);

  const nextImg = document.querySelector(`.topImg${currTopImg}`);
  nextImg.style.opacity = 1;
};
const prevImg = function () {
  topImg.forEach((img) => {
    img.style.opacity = 0;
  });
  currTopImg != 1 ? currTopImg-- : (currTopImg = 3);

  const nextImg = document.querySelector(`.topImg${currTopImg}`);
  nextImg.style.opacity = 1;
};
prevBtn.addEventListener("click", prevImg);
nextBtn.addEventListener("click", nextImg);
//设置个定时器 让他时刻保持一个3秒切图状态
//鼠标指向图片的时候需要移除定时器
let autoNextImg = setInterval(nextImg, 3000);
const pictureChanged = document.querySelector(".pictureChanged");
pictureChanged.addEventListener("mouseover", function () {
  clearInterval(autoNextImg);
});
pictureChanged.addEventListener("mouseout", function () {
  autoNextImg = setInterval(nextImg, 3000);
});
//main部分的轮播图
const mainImg1 = document.querySelector(".mainImg1");
const mainImg = document.querySelectorAll(".mainImg");
mainImg1.style.opacity = 1;
let currMainImg = 1;
//下面灰色区域的内容
const mainImgContent = document.querySelector(".mainImg-content");
const focusBtns = document.querySelectorAll(".focusImg");
const nextMainImg = function () {
  mainImg.forEach((img) => {
    img.style.opacity = 0;
  });
  focusBtns.forEach((btn) => {
    btn.classList.remove("focusActive");
  });
  currMainImg != 3 ? currMainImg++ : (currMainImg = 1);

  const nextMainImg = document.querySelector(`.mainImg${currMainImg}`);
  nextMainImg.style.opacity = 1;
  mainImgContent.innerHTML = "";
  mainImgContent.innerHTML = nextMainImg.getAttribute("content");
  const focusImg = document.querySelector(`.focus${currMainImg}`);
  focusImg.classList.add("focusActive");
};
const prevMainImg = function () {
  mainImg.forEach((img) => {
    img.style.opacity = 0;
  });
  focusBtns.forEach((btn) => {
    btn.classList.remove("focusActive");
  });
  currMainImg != 1 ? currMainImg-- : (currMainImg = 3);

  const nextMainImg = document.querySelector(`.mainImg${currMainImg}`);
  nextMainImg.style.opacity = 1;
  mainImgContent.innerHTML = "";
  mainImgContent.innerHTML = nextMainImg.getAttribute("content");
  const focusImg = document.querySelector(`.focus${currMainImg}`);
  focusImg.classList.add("focusActive");
};
const changeMainImg = function (index) {
  mainImg.forEach((img) => {
    img.style.opacity = 0;
  });
  currMainImg = index;
  const nextMainImg = document.querySelector(`.mainImg${currMainImg}`);
  nextMainImg.style.opacity = 1;
  mainImgContent.innerHTML = "";
  mainImgContent.innerHTML = nextMainImg.getAttribute("content");
};
prevMainBtn.addEventListener("click", prevMainImg);
nextMainBtn.addEventListener("click", nextMainImg);
//底部点击切图

//默认
const focusBtn1 = document.querySelector(`.focus1`);
focusBtn1.classList.add("focusActive");
focusBtns.forEach((focus) => {
  focus.addEventListener("click", function () {
    const data = focus.getAttribute("data");
    focusBtns.forEach((btn) => {
      btn.classList.remove("focusActive");
    });
    const focusBtn = document.querySelector(`.focus${data}`);
    focusBtn.classList.add("focusActive");
    currMainImg = data;
    changeMainImg(currMainImg);
  });
});
//定时器
let autoNextMainImg = setInterval(nextMainImg, 3000);
const pictureMainChanged = document.querySelector(".mainleft-img");
pictureMainChanged.addEventListener("mouseover", function () {
  clearInterval(autoNextMainImg);
});
pictureMainChanged.addEventListener("mouseout", function () {
  autoNextMainImg = setInterval(nextMainImg, 3000);
});
//为third-bottom-list里面的元素设置背景
for (let i = 1; i <= 7; i++) {
  const item = document.querySelector(`.third-bottom-item${i}`);
  item.style.background = `url(images/icon/icon${i}.png)`;
}
//循环遍历党建活动、科研动态、常用下载内的部分文章，并为其添加一个title,添加点击样式
const allDicuss = document.querySelectorAll(".main-sec-title");
allDicuss.forEach((dicuss) => {
  // console.log(dicuss.innerHTML);
  dicuss.setAttribute("title", dicuss.innerHTML);
  dicuss.setAttribute("href", "javascript:void(0)");
});
//遍历友情链接，添加点击样式
const allFriends = document.querySelectorAll(".friend-a");
allFriends.forEach((friend) => {
  friend.setAttribute("href", "javascript:void(0)");
});
//师生风采添加2个监听器 鼠标指向和鼠标移走时的事件
// const slider = document.querySelector(".slider");
// const sliderItems = document.querySelectorAll(".slider-container");
// slider.addEventListener("mouseover", function () {
//   sliderItems.style.animation = "";
// });
