$("#slider").owlCarousel({
  loop: true,
  margin: 15,
  nav: false,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

function hidelogo() {
  // var x = document.getElementById("hide");
  var x = document.getElementById("hideme");
  // x.style.display = "none";
  console.log("hi");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
