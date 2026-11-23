/* Damian Valencia | site.js
   Small progressive enhancements. The page is complete without this file. */
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Reveal cards and timeline entries as they enter the viewport.
  var revealEls = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || reduce) {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  // Fill the timeline line as the reader scrolls through it.
  var timeline = document.querySelector("[data-timeline]");
  if (timeline) {
    var ticking = false;
    var paint = function () {
      var rect = timeline.getBoundingClientRect();
      var vh = window.innerHeight || document.documentElement.clientHeight;
      var progress = (vh * 0.6 - rect.top) / rect.height;
      progress = Math.max(0, Math.min(1, progress));
      timeline.style.setProperty("--fill", (progress * 100).toFixed(1) + "%");
      ticking = false;
    };
    var onScroll = function () {
      if (!ticking) {
        window.requestAnimationFrame(paint);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    paint();

    // Light up each job marker when it is reached.
    var jobs = timeline.querySelectorAll(".job");
    if ("IntersectionObserver" in window && !reduce) {
      var jio = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { entry.target.classList.add("in"); }
        });
      }, { rootMargin: "0px 0px -55% 0px" });
      jobs.forEach(function (job) { jio.observe(job); });
    } else {
      jobs.forEach(function (job) { job.classList.add("in"); });
    }
  }
})();
