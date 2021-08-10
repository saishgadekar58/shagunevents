function hidelogo() {
  var e = document.getElementById("hideme");
  "none" === e.style.display
    ? (e.style.display = "block")
    : (e.style.display = "none");
}
$("#slider").owlCarousel({
  loop: !0,
  margin: 15,
  nav: !1,
  autoplay: !0,
  responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } },
});
