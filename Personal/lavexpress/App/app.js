// TODO

var header = $("header");
var headerSize = $(header).height();
var shazam = $("#page-2").offset().top;
var bottom = $(document).height();

$(".address").on("click", function () {
  let address = $(this).text();
  $(".googleMap").attr(
    "src",
    `https://www.google.com/maps/embed/v1/place?key=AIzaSyB7Uzw3kUS3XA9k2sIaX-7nn3BaxtFRQek
  &q=${address}`
  );
});

$("header a").on("click", function () {
  $("header a").removeClass("active");
  $(this).addClass("active");
});

$(window).scroll(function () {
  var scrollTop = $(this).scrollTop();
  var scrollBottom = $(this).scrollTop() + $(this).height();

  // TODO Fix buggy behavior
  // TODO - disappears when mouse moves
  // Show header on hover when in first page
  if (scrollTop < shazam) {
    $(window).on("mousemove", function (event) {
      var mouseY = event.clientY;
      if (mouseY <= headerSize) {
        $(header).addClass("visible");
      } else {
        $(header).removeClass("visible");
      }
    });
  }

  // Togle navbar element for info in footer when bottom of page reached
  if (scrollBottom === bottom) {
    $('a[href="#footer"]').addClass("active");
  } else {
    $('a[href="#footer"]').removeClass("active");
  }

  // Show/hide header on scroll
  if (scrollTop <= 0) {
    $(header).removeClass("visible");
  }
  if (scrollTop >= shazam) {
    $(header).addClass("visible");
  }

  // TODO fix slow behavior
  // Underline section nav element on scroll
  $("section").each(function () {
    var id;
    if (
      scrollTop > $(this).offset().top &&
      scrollTop <= $(this).offset().top + $(this).height()
    ) {
      id = $(this).attr("id");
      $(`a[href="#${id}"]`).addClass("active");
    } else {
      id = $(this).attr("id");
      $(`a[href="#${id}"]`).removeClass("active");
    }
  });
});

// Dynamically set year
var today = new Date();
var year = today.getFullYear();
$(".thisYear").html(year);

// —————————————— PARTICLES ——————————————

particlesJS("particles-js", {
  particles: {
    number: { value: 400, density: { enable: true, value_area: 800 } },
    color: { value: "#fff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 10,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: "#ffffff",
      opacity: 0.4,
      width: 2,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "top",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 0.5 } },
      bubble: { distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
