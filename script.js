// Select DOM elements
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const menuBar = document.querySelector('.menu');
const container = document.getElementById('container');



// Show the menu
hamburger.addEventListener('click', () => {
  menuBar.classList.add('show');
});

// Close the menu
close.addEventListener('click', () => {
  menuBar.classList.remove('show');
});

// Close the menu when a link is clicked
menuBar.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuBar.classList.remove('show');
  });
});

// Close the menu when clicking outside of it
document.addEventListener('click', (event) => {
  const isClickInside = menuBar.contains(event.target) || hamburger.contains(event.target);
  if (!isClickInside) {
    menuBar.classList.remove('show');
  }
});




  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const circle = entry.target.querySelector(".progress");
      const number = entry.target.querySelector("span");
      const targetPercent = parseInt(entry.target.querySelector(".circle").dataset.percentage);

      if (entry.isIntersecting) {
        // Start animation
        let current = 0;
        const interval = setInterval(() => {
          if (current <= targetPercent) {
            number.textContent = current;
            const offset = 314 - (314 * current) / 100;
            circle.style.strokeDashoffset = offset;
            current++;
          } else {
            clearInterval(interval);
          }
        }, 20);
      } else {
        // Reset animation
        number.textContent = 0;
        circle.style.strokeDashoffset = 314;
      }
    });
  }, {
    threshold: 0.6
  });

  document.querySelectorAll(".skill-card").forEach(skill => {
    observer.observe(skill);
  });
