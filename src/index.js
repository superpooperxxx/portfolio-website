// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

gsap.timeline().from(
  '.hero__hi-svg',
  {
    duration: 2,
    strokeDashoffset: 629,
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
  .from(
    '.hero__hi',
    {
      duration: 2,
      left: '50%',
      scale: 2,
      transform: 'translateX(-50%)',
      position: 'relative',
      ease: 'power3.inOut',
    }
  )
  .from(
    '.hero__blob',
    {
      duration: 0.5,
      opacity: 0,
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
      onComplete: () => document.querySelector('.page').classList.remove('page--loading')
    }
  );

gsap.timeline({
  scrollTrigger: {
    trigger: '.portfolio-header',
    markers: true,
    start: 'top top',
    end: '+=50%',
    scrub: 1,
    pin: true,
  }
})
  .to(
    '.hero__container', 
    {
      scale: 5,
      opacity: 0,
    }
  )
  .to(
    '.hero',
    {
      opacity: 0,
    }
  )
  .to(
    '.hero',
    {
      display: "none",
    }
  )
