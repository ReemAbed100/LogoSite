const logos = {
  1971: {
    src: "Starbucks-1971-logo.png",
    description: "The first Starbucks logo featured a brown twin-tailed mermaid (siren) inspired by Greek mythology, designed to lure coffee lovers just like the sirens lured sailors. The circular badge also included the words 'coffee, tea, and spices.'"
  },
  1987: {
    src: "Starbucks-1987-logo.png",
    description: "Howard Schultz acquired the company and changed the logo to green with a cleaner siren, covered hair, and crown. The words 'tea' and 'spices' were removed, replaced by 'Starbucks Coffee' with two stars."
  },
  1992: {
    src: "Starbucks-1992-logo.png",
    description: "This version zoomed in on the siren’s face, removing her belly button and focusing more on her facial features. The wordmark and stars remained, but the look was sharpened for a modern identity."
  },
  2008: {
    src: "Starbucks-2008-logo.png",
    description: "In celebration of its 40th anniversary, Starbucks briefly returned to a modified version of its original brown logo, but backlash over abandoning the iconic green forced the company to revert quickly."
  },
  2011: {
    src: "Starbucks-2011-logo.png",
    description: "The modern minimalist version: Starbucks dropped the wordmark and outer ring, focusing solely on the siren with a clean, symmetrical green-and-white design that represents its global brand identity."
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
