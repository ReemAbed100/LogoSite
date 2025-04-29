// Define the logos object first
const logos = {
  1976: {
    src: "Apple-1976-logo.png",
    description: "The very first Apple logo in 1976 featured Isaac Newton under an apple tree. It was designed by Ronald Wayne."
  },
  1977: {
    src: "Apple-1977-logo.png",
    description: "Apple introduced a cleaner, more modern look with a monochrome logo."
  },
  1998: {
    src: "Apple-1998-logo.png",
    description: "The very first Apple logo in 1976 featured Isaac Newton under an apple tree. It was designed by Ronald Wayne."
  },
  2001: {
    src: "Apple-2001-logo.png",
    description: "The logo evolved to a flatter, minimal design, reflecting modern UI trends."
  },
  2007: {
    src: "Apple-2007-logo.png",
    description: "A refined version with a sleeker finish, maintaining the iconic apple shape."
  },
  2017: {
    src: "Apple-2017-logo.png",
    description: "The latest design continues Apple's commitment to simplicity and elegance."
  },
};

// Preload all logo images
Object.values(logos).forEach(logo => {
  const img = new Image();
  img.src = logo.src;
});

function changeLogo(year) {
  const logoImg = document.getElementById("logo");
  const desc = document.getElementById("description");
  const yearText = document.getElementById("year");

  // Fade out image first
  logoImg.style.transition = "opacity 0.5s"; // Make sure fade is smooth
  logoImg.style.opacity = 0;

  // After fade out is done (wait 500ms), change image and fade in
  setTimeout(() => {
    logoImg.src = logos[year].src;
    desc.textContent = logos[year].description;
    yearText.textContent = year;

    // Small extra wait before fade-in to ensure image is loaded
    setTimeout(() => {
      logoImg.style.opacity = 1;
    }, 50); // small delay for better smoothness
  }, 500); // match with CSS transition time
}
