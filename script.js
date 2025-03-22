// Make mobile navigation work

const headerEl = document.querySelector(".section-header");
const btnNavEl = document.querySelector(".mobile-nav-btn");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Making according Work

const conEl = document.querySelector(".con-1");
const btnAccEl = document.querySelector(".btn-Acc");

btnAccEl.addEventListener("click", function () {
  conEl.classList.toggle("open");
});

const con2El = document.querySelector(".con-2");
const btnAcc2El = document.querySelector("btn-acc2");

btnAcc2El.addEventListener("click", function () {
  con2El.classList.toggle("open");
});

////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);

    // scroll to bottom
    if (href === "#")
      window.scrollTo({
        top: 40,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      // console.log(sectionEl);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // close mobile navigation
    if (link.classList.contains("nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});
