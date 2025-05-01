
const logos = {
  1976: {
    src: "Apple-1976-logo.png",
    description: "The very first Apple logo, created by co-founder Ronald Wayne, depicted Sir Isaac Newton sitting under an apple tree, referencing the story of gravity's discovery. This intricate design was short-lived and replaced the following year."
  },
  1977: {
    src: "Apple-1977-logo.png",
    description: "Apple introduced a simpler and more modern design in 1977, crafted by Rob Janoff. This logo featured a stylized apple with a bite taken out of it, symbolizing knowledge and simplicity, which aligned with Apple's mission to make computers more user-friendly."
  },
  1998: {
    src: "Apple-1998-logo.png",
    description: "As Apple transitioned to a new era under Steve Jobs' leadership, the logo received a smoother, more minimalistic look. This logo design was created with a polished, monochromatic finish to emphasize Apple's new direction as a forward-thinking tech company."
  },
  2001: {
    src: "Apple-2001-logo.png",
    description: "In 2001, as Apple became a global brand, the logo was given a metallic sheen to reflect its premium products. The new design, introduced alongside the iPod and other breakthrough products, was intended to reflect a blend of technology and elegance."
  },
  2007: {
    src: "Apple-2007-logo.png",
    description: "With the launch of the iconic iPhone in 2007, Apple embraced a reflective glass effect in its logo. This sleek, shiny appearance echoed Apple's commitment to creating beautiful and functional products, with the logo symbolizing innovation and cutting-edge technology."
  },
  2017: {
    src: "Apple-2017-logo.png",
    description: "The most recent Apple logo, introduced in 2017, returned to a simple, flat design. This design reflects Apple's refined focus on clean aesthetics and its core principle of creating simple, intuitive products that remain timeless in their design."
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


  logoImg.style.transition = "opacity 0.5s";
  logoImg.style.opacity = 0;

  setTimeout(() => {
    logoImg.src = logos[year].src;
    desc.textContent = logos[year].description;
    yearText.textContent = year;

    setTimeout(() => {
      logoImg.style.opacity = 1;
    }, 50);
  }, 500);
}
