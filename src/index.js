gsap.registerPlugin(ScrollTrigger);

gsap.timeline()
  .to(
    '.hero__hi-svg',
    {
      duration: 2,
      strokeDashoffset: 0,
      delay: 0.1,
      ease: 'expo.in'
    }
  )
  .to(
    '#svgGroup',
    {
      duration: 0.5,
      delay: 0.1,
      fill: '#D6D5A8',
    }
  )
  .to(
    '.hero__hi',
    {
      duration: 2,
      scale: 1,
      left: 0,
      transform: 'translateX(0)',
      ease: 'power3.inOut',
    }
  )
  .to(
    '.hero__blob',
    {
      duration: 0.5,
      opacity: 0.1,
    }
  )
  .to(
    '.hero__text-reveal',
    {
      duration: 0.5,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      top: 0,
      stagger: 0.5,
      ease: 'power3.out'
    }
  )
  .to(
    '.hero__download-cv',
    {
      duration: 0.5,
      delay: 1,
      opacity: 1,
      onComplete: () => {
        document.querySelector('.page').classList.remove('page--loading');
        document.querySelector('.page__content').classList.remove('page__content--loading');
      }
    }
  );

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

gsap.timeline({
  scrollTrigger: {
    trigger: '.hero',
    start: "top top",
    scrub: true,
  }
})
  .to(
    ['.hero__content', '.hero__hi'],
    {
      y: 100,
    },
    'start'
  )

const portfolioItems = gsap.utils.toArray('.portfolio__item');

portfolioItems.slice(0, portfolioItems.length - 1).forEach((item, i, items) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: 'top top',
      pin: true,
      pinSpacing: false,
      markers: true,
    }
  })
    .to(
      item,
      {
        background: '#afb2d5',
        scrollTrigger: {
          trigger: item,
          start: "bottom bottom",
          scrub: true,
        }
      },
      'start'
    )
})
