gsap.registerPlugin(ScrollTrigger);

gsap
  .timeline()
  .to(".hero__hi-svg", {
    duration: 2,
    strokeDashoffset: 0,
    delay: 0.1,
    ease: "expo.in",
  })
  .to("#svgGroup", {
    duration: 0.5,
    delay: 0.1,
    fill: "#D6D5A8",
  })
  .to(".hero__hi", {
    duration: 2,
    scale: 1,
    left: 0,
    transform: "translateX(0)",
    ease: "power3.inOut",
  })
  .to(".hero__blob", {
    duration: 0.5,
    opacity: 0.1,
  })
  .to(".hero__text-reveal", {
    duration: 0.5,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    top: 0,
    stagger: 0.5,
    ease: "power3.out",
  })
  .to(".hero__download-cv", {
    duration: 0.5,
    delay: 1,
    opacity: 1,
    onComplete: () => {
      document.querySelector(".page").classList.remove("page--loading");
      document
        .querySelector(".page__content")
        .classList.remove("page__content--loading");
    },
  });

// gsap.timeline({
//   scrollTrigger: {
//     trigger: '.portfolio-header',
//     // markers: true,
//     start: 'top top',
//     end: '+=50%',
//     scrub: 1,
//     pin: true,
//   }
// })
//   .to(
//     '.hero__container',
//     {
//       scale: 5,
//       opacity: 0,
//     }
//   )
//   .to(
//     '.hero',
//     {
//       opacity: 0,
//     }
//   )
//   .to(
//     '.hero',
//     {
//       display: "none",
//     }
//   )

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      scrub: true,
    },
  })
  .to(
    [".hero__content", ".hero__hi"],
    {
      y: 100,
    },
    "start"
  );

const portfolioItems = gsap.utils.toArray(".portfolio__item");

portfolioItems.slice(0, portfolioItems.length - 1).forEach((item) => {
  gsap.to(item, {
    background: "#9ea2cb",
    scrollTrigger: {
      trigger: item,
      start: "top top",
      pin: true,
      pinSpacing: false,
      scrub: true,
      snap: 1,
    },
  });
});

let newText = "";
const thisPageText = document.querySelector(".this-page__text");

for (const word of thisPageText.innerText.split(" ")) {
  for (const letter of word) {
    if (word === "designed") {
      newText += `<span class="this-page__text-letter this-page__text-letter--accent_yellow">${letter}</span>`;
    } else if (word === "developed") {
      newText += `<span class="this-page__text-letter this-page__text-letter--accent_purple">${letter}</span>`;
    } else {
      newText += `<span class="this-page__text-letter">${letter}</span>`;
    }
  }

  newText += " ";
}

thisPageText.innerHTML = newText;

gsap.from(".this-page__text-letter", {
  opacity: 0,
  color: "#816797",
  stagger: 0.03,
  scrollTrigger: {
    trigger: ".this-page__text",
    start: "10% bottom",
    end: "bottom bottom",
    toggleActions: "play play reverse none",
  },
});

const thisPage = document.querySelector(".this-page");

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".wrapper",
      start: "top top",
      pin: true,
      scrub: true,
    },
  })
  .to(
    ".this-page",
    {
      scale: 5,
      opacity: 0,
    },
    "start"
  )
  .to(
    ".contacts",
    {
      opacity: 1,
    },
    "start"
  );
