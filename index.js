const card = document.querySelector(".card");
const container = document.querySelector(".container");
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const sneaker_description = document.querySelector(".sneaker .description");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info");
const sizes = document.querySelector(".sizes");

container.addEventListener("mousemove", (e) => {
  const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 25;

  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate in
container.addEventListener("mouseenter", (e) => {
  card.style.transition = `none`;
  // pop out effect
  title.style.transform = "translateZ(120px)";
  sneaker.style.transform = "translateZ(120px) rotate(-30deg)";
  sneaker.style.transform = "translateZ(120px) rotate(-30deg)";
  purchase.style.transform = "translateZ(120px)";
  description.style.transform = "translateZ(120px)";
  sizes.style.transform = "translateZ(130px)";
});

//Animate out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = `0.3s all ease-in-out`;
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  // pop out effect close
  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) rotate(0deg)";
  purchase.style.transform = "translateZ(0px)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
});
