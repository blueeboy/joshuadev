
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
