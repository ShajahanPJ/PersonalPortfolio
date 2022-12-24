// (function ($) {
// 	"use strict";
// 	var nav = $('nav');
//   var navHeight = nav.outerHeight();
  
//   $('.navbar-toggler').on('click', function() {
//     if( ! $('#mainNav').hasClass('navbar-reduce')) {
//       $('#mainNav').addClass('navbar-reduce');
//     }
//   })

//   // Preloader
//   $(window).on('load', function () {
//     if ($('#preloader').length) {
//       $('#preloader').delay(100).fadeOut('slow', function () {
//         $(this).remove();
//       });
//     }
//   });

//   // Back to top button
//   $(window).scroll(function() {
//     if ($(this).scrollTop() > 100) {
//       $('.back-to-top').fadeIn('slow');
//     } else {
//       $('.back-to-top').fadeOut('slow');
//     }
//   });
//   $('.back-to-top').click(function(){
//     $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
//     return false;
//   });

// 	/*--/ Star ScrollTop /--*/
// 	$('.scrolltop-mf').on("click", function () {
// 		$('html, body').animate({
// 			scrollTop: 0
// 		}, 1000);
// 	});

// 	/*--/ Star Counter /--*/
// 	$('.counter').counterUp({
// 		delay: 15,
// 		time: 2000
// 	});

// 	/*--/ Star Scrolling nav /--*/
// 	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
// 		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
// 			var target = $(this.hash);
// 			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
// 			if (target.length) {
// 				$('html, body').animate({
// 					scrollTop: (target.offset().top - navHeight + 5)
// 				}, 1000, "easeInOutExpo");
// 				return false;
// 			}
// 		}
// 	});

// 	// Closes responsive menu when a scroll trigger link is clicked
// 	$('.js-scroll').on("click", function () {
// 		$('.navbar-collapse').collapse('hide');
// 	});

// 	// Activate scrollspy to add active class to navbar items on scroll
// 	$('body').scrollspy({
// 		target: '#mainNav',
// 		offset: navHeight
// 	});
// 	/*--/ End Scrolling nav /--*/

// 	/*--/ Navbar Menu Reduce /--*/
// 	$(window).trigger('scroll');
// 	$(window).on('scroll', function () {
// 		var pixels = 50; 
// 		var top = 1200;
// 		if ($(window).scrollTop() > pixels) {
// 			$('.navbar-expand-md').addClass('navbar-reduce');
// 			$('.navbar-expand-md').removeClass('navbar-trans');
// 		} else {
// 			$('.navbar-expand-md').addClass('navbar-trans');
// 			$('.navbar-expand-md').removeClass('navbar-reduce');
// 		}
// 		if ($(window).scrollTop() > top) {
// 			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
// 		} else {
// 			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
// 		}
// 	});

// 	/*--/ Star Typed /--*/
// 	if ($('.text-slider').length == 1) {
//     var typed_strings = $('.text-slider-items').text();
// 		var typed = new Typed('.text-slider', {
// 			strings: typed_strings.split(','),
// 			typeSpeed: 80,
// 			loop: true,
// 			backDelay: 1100,
// 			backSpeed: 30
// 		});
// 	}

// 	/*--/ Testimonials owl /--*/
// 	$('#testimonial-mf').owlCarousel({
// 		margin: 20,
// 		autoplay: true,
// 		autoplayTimeout: 4000,
// 		autoplayHoverPause: true,
// 		responsive: {
// 			0: {
// 				items: 1,
// 			}
// 		}
// 	});

// })(jQuery);


/**
 * Template Name: MyResume - v4.9.2
 * Template URL: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
(function () {
	"use strict";
  
	/**
	 * Easy selector helper function
	 */
	const select = (el, all = false) => {
	  el = el.trim();
	  if (all) {
		return [...document.querySelectorAll(el)];
	  } else {
		return document.querySelector(el);
	  }
	};
  
	/**
	 * Easy event listener function
	 */
	const on = (type, el, listener, all = false) => {
	  let selectEl = select(el, all);
	  if (selectEl) {
		if (all) {
		  selectEl.forEach((e) => e.addEventListener(type, listener));
		} else {
		  selectEl.addEventListener(type, listener);
		}
	  }
	};
  
	/**
	 * Easy on scroll event listener
	 */
	const onscroll = (el, listener) => {
	  el.addEventListener("scroll", listener);
	};
  
	/**
	 * Navbar links active state on scroll
	 */
	let navbarlinks = select("#navbar .scrollto", true);
	const navbarlinksActive = () => {
	  let position = window.scrollY + 200;
	  navbarlinks.forEach((navbarlink) => {
		if (!navbarlink.hash) return;
		let section = select(navbarlink.hash);
		if (!section) return;
		if (
		  position >= section.offsetTop &&
		  position <= section.offsetTop + section.offsetHeight
		) {
		  navbarlink.classList.add("active");
		} else {
		  navbarlink.classList.remove("active");
		}
	  });
	};
	window.addEventListener("load", navbarlinksActive);
	onscroll(document, navbarlinksActive);
  
	/**
	 * Scrolls to an element with header offset
	 */
	const scrollto = (el) => {
	  let elementPos = select(el).offsetTop;
	  window.scrollTo({
		top: elementPos,
		behavior: "smooth",
	  });
	};
  
	/**
	 * Back to top button
	 */
	let backtotop = select(".back-to-top");
	if (backtotop) {
	  const toggleBacktotop = () => {
		if (window.scrollY > 100) {
		  backtotop.classList.add("active");
		} else {
		  backtotop.classList.remove("active");
		}
	  };
	  window.addEventListener("load", toggleBacktotop);
	  onscroll(document, toggleBacktotop);
	}
  
	/**
	 * Mobile nav toggle
	 */
	on("click", ".mobile-nav-toggle", function (e) {
	  select("body").classList.toggle("mobile-nav-active");
	  this.classList.toggle("bi-list");
	  this.classList.toggle("bi-x");
	});
  
	/**
	 * Scrool with ofset on links with a class name .scrollto
	 */
	on(
	  "click",
	  ".scrollto",
	  function (e) {
		if (select(this.hash)) {
		  e.preventDefault();
  
		  let body = select("body");
		  if (body.classList.contains("mobile-nav-active")) {
			body.classList.remove("mobile-nav-active");
			let navbarToggle = select(".mobile-nav-toggle");
			navbarToggle.classList.toggle("bi-list");
			navbarToggle.classList.toggle("bi-x");
		  }
		  scrollto(this.hash);
		}
	  },
	  true
	);
  
	/**
	 * Scroll with ofset on page load with hash links in the url
	 */
	window.addEventListener("load", () => {
	  if (window.location.hash) {
		if (select(window.location.hash)) {
		  scrollto(window.location.hash);
		}
	  }
	});
  
	/**
	 * Preloader
	 */
	let preloader = select("#preloader");
	if (preloader) {
	  window.addEventListener("load", () => {
		preloader.remove();
	  });
	}
  
	/**
	 * Hero type effect
	 */
	const typed = select(".typed");
	if (typed) {
	  let typed_strings = typed.getAttribute("data-typed-items");
	  typed_strings = typed_strings.split(",");
	  new Typed(".typed", {
		strings: typed_strings,
		loop: true,
		typeSpeed: 100,
		backSpeed: 50,
		backDelay: 2000,
	  });
	}
  
	/**
	 * Skills animation
	 */
	let skilsContent = select(".skills-content");
	if (skilsContent) {
	  new Waypoint({
		element: skilsContent,
		offset: "80%",
		handler: function (direction) {
		  let progress = select(".progress .progress-bar", true);
		  progress.forEach((el) => {
			el.style.width = el.getAttribute("aria-valuenow") + "%";
		  });
		},
	  });
	}
  
	/**
	 * Portfolio isotope and filter
	 */
	window.addEventListener("load", () => {
	  let portfolioContainer = select(".portfolio-container");
	  if (portfolioContainer) {
		let portfolioIsotope = new Isotope(portfolioContainer, {
		  itemSelector: ".portfolio-item",
		});
  
		let portfolioFilters = select("#portfolio-flters li", true);
  
		on(
		  "click",
		  "#portfolio-flters li",
		  function (e) {
			e.preventDefault();
			portfolioFilters.forEach(function (el) {
			  el.classList.remove("filter-active");
			});
			this.classList.add("filter-active");
  
			portfolioIsotope.arrange({
			  filter: this.getAttribute("data-filter"),
			});
			portfolioIsotope.on("arrangeComplete", function () {
			  AOS.refresh();
			});
		  },
		  true
		);
	  }
	});
  
	/**
	 * Initiate portfolio lightbox
	 */
	const portfolioLightbox = GLightbox({
	  selector: ".portfolio-lightbox",
	});
  
	/**
	 * Initiate portfolio details lightbox
	 */
	const portfolioDetailsLightbox = GLightbox({
	  selector: ".portfolio-details-lightbox",
	  width: "90%",
	  height: "90vh",
	});
  
	/**
	 * Portfolio details slider
	 */
	new Swiper(".portfolio-details-slider", {
	  speed: 400,
	  loop: true,
	  autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	  },
	  pagination: {
		el: ".swiper-pagination",
		type: "bullets",
		clickable: true,
	  },
	});
  
	/**
	 * Testimonials slider
	 */
	new Swiper(".testimonials-slider", {
	  speed: 600,
	  loop: true,
	  autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	  },
	  slidesPerView: "auto",
	  pagination: {
		el: ".swiper-pagination",
		type: "bullets",
		clickable: true,
	  },
	});
  
	/**
	 * Animation on scroll
	 */
	window.addEventListener("load", () => {
	  AOS.init({
		duration: 1000,
		easing: "ease-in-out",
		once: true,
		mirror: false,
	  });
	});
  
	/**
	 * Initiate Pure Counter
	 */
	new PureCounter();
  })();
  //
  
	// function will get executed
	// on click of submit button
	function submitData() {
		console.log('Form submitting');
	  var form = $("#formContact");
	  let successSubmit = $("#successSubmit");
  
	  let loader = $("#formSubmitLoader");
	  let errSubmit = $("#errSubmit");
  
	  let fNmae = $("#name");
	  let femail = $("#email");
	  let fsubject = $("#subject");
	  let fmessage = $("#message");
	  var url =
	  "https://script.google.com/macros/s/AKfycbwgIT6uO3XfCHrYv-XBu-SCTtKFLAMZv93EqTJ36N2ePLUnKLHFDh8k2alhMZBjgFH9gg/exec";
	  loader.css("display", "block");
	  if (
		fNmae.val() && femail.val() && fsubject.val() && fmessage.val()  
	  ) {
		$.ajax({
		  type: "POST",
		  url: url,
		  data: form.serialize(),
		  success: function (data) {
			loader.css("display", "none");
			// Ajax call completed successfully
  
			successSubmit.css("display", "block");
			setTimeout(() => {
			  successSubmit.css("display", "none");
			}, 8000);
		  },
		  error: function (data) {
			loader.css("display", "none");
  
			// Some error in ajax call
			alert("some Error");
		  },
		});
	  } else {
		loader.css("display", "none");
		errSubmit.css("display", "block");
		errSubmit.html("Seems Something Went Wrong");
		setTimeout(() => {
		  errSubmit.css("display", "none");
		}, 5000);
	  }
	}

  
  function ValidateEmail(mail) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
	  return true;
	}
	return false;
  }