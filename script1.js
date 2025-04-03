document.addEventListener("DOMContentLoaded", function() {
  const loader = document.querySelector(".auroralis-loader");
  
  setTimeout(() => {
    loader.classList.add("fade-out");
    setTimeout(() => {
      loader.style.display = "none";
    }, 800); // Match CSS transition time
  }, 3000); // Loader duration (3s)
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      window.scrollTo({
          top: target.offsetTop - 50, 
          behavior: "smooth"
      });
  });
});
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  if (window.scrollY > 50) { // Change 50 to whatever threshold you need
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".stat-number");
  const speed = 100; // Adjust speed (lower is faster)

  const animateCounter = (counter) => {
    const target = +counter.getAttribute("data-count");
    let count = 0;
    const increment = target / speed;

    const updateCount = () => {
      if (count < target) {
        count += increment;
        counter.textContent = Math.ceil(count);
        requestAnimationFrame(updateCount);
      } else {
        counter.textContent = target; // Ensure final value is set
      }
    };

    updateCount();
  };

  const handleScroll = () => {
    counters.forEach((counter) => {
      const rect = counter.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        if (!counter.classList.contains("animated")) {
          counter.classList.add("animated");
          animateCounter(counter);
        }
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Run once in case the section is already in view
});



gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.step').forEach((step, i) => {
  gsap.from(step, {
      scrollTrigger: {
          trigger: step,
          start: 'top 80%',
          toggleActions: 'play none none none'
      },
      duration: 0.8,
      x: i % 2 === 0 ? -50 : 50,
      opacity: 0,
      ease: 'power2.out'
  });
});