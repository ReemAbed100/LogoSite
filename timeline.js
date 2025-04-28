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
  }
};

function changeLogo(year) {
  const logoImg = document.getElementById("logo");
  const desc = document.getElementById("description");
  const yearText = document.getElementById("year");

  logoImg.style.opacity = 0;

  setTimeout(() => {
    logoImg.src = logos[year].src;
    desc.textContent = logos[year].description;
    yearText.textContent = year;
    logoImg.style.opacity = 1;
  }, 300);
}
