const main = document.querySelector("main");

document.querySelector(".scroller").addEventListener("scroll", (event) => {
  const scrollLeft = event.target.scrollLeft;
  const itemWidth = main.getBoundingClientRect().width;

  // คำนวณ active index
  main.dataset.activeIndex = Math.round(scrollLeft / itemWidth);
});
