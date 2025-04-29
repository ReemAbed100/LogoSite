const logos = {
  1953: {
    src: "BurgerKing-1953-logo.png",
    description: "The original 'Insta-Burger King' logo featured a warm, inviting design that reflected the simplicity and charm of the newly founded brand."
  },
  1954: {
    src: "BurgerKing-1954-logo.png",
    description: "With the name shortened to 'Burger King,' this version used bold, clean type to match the no-nonsense appeal of a growing fast-food culture."
  },
  1957: {
    src: "BurgerKing-1957-logo.png",
    description: "This playful design featured a literal king atop a hamburger, highlighting the brand's fun personality and the slogan 'Home of the Whopper.'"
  },
  1969: {
    src: "BurgerKing-1969-logo.png",
    description: "Burger King debuted its iconic 'bun sandwich' logo—simple, effective, and instantly recognizable as the brand’s signature."
  },
  1994: {
    src: "BurgerKing-1994-logo.png",
    description: "This cleaner version of the classic bun logo sharpened the colors and type for a fresher, more appetizing look."
  },
  1999: {
    src: "BurgerKing-1999-logo.png",
    description: "With a blue swoosh and diagonal text, this energetic redesign brought movement and modern flair to the classic bun design."
  },
  2021: {
    src: "BurgerKing-2021-logo.png",
    description: "A return to its roots, the 2021 logo features a retro design inspired by the original bun logo, evoking nostalgia with a modern twist."
  },
};

Object.values(logos).forEach(logo => {
  const img = new Image();
  img.src = logo.src;
});

function changeLogo(year) {
  const logoImg = document.getElementById("logo");
  const desc = document.getElementById("description");
  const yearText = document.getElementById("year");

  logoImg.style.opacity = 0;
  setTimeout(() => {
    logoImg.src = logos[year].src;
    desc.textContent = logos[year].description;
    yearText.textContent = year;
    setTimeout(() => logoImg.style.opacity = 1, 50);
  }, 500);
}
