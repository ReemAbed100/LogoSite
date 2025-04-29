const logos = {
  1964: {
    src: "Nike-1964-logo.png",
    description: "In 1964, Nike started as Blue Ribbon Sports. Its original logo used interlacing 'BRS' letters with the full name beneath. While not very legible by today’s standards, it worked for its time."
  },
  1971: {
    src: "Nike-1971-logo.png",
    description: "When Blue Ribbon Sports became Nike in 1971, designer Carolyn Davidson introduced the iconic Swoosh. The word 'Nike' appeared in a lowercase script over the symbol, emphasizing the brand's fresh identity."
  },
  1978: {
    src: "Nike-1978-logo.png",
    description: "Nike updated its logo in 1978. The Swoosh became solid black, and the wordmark changed to bold, italic Futura. The last letter’s edge flowed into the Swoosh, giving it dynamic movement."
  },
  1985: {
    src: "Nike-1985-logo.png",
    description: "In 1985, Nike’s logo took on a red background with white text and Swoosh. This era introduced the famous slogan 'Just Do It' in 1988, enhancing its bold, energetic brand personality."
  },
  1995: {
    src: "Nike-1995-logo.png",
    description: "By 1995, the Swoosh was so iconic that Nike dropped the wordmark entirely. The logo became just the symbol—instantly recognizable, global, and minimal—representing strength, speed, and simplicity."
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
