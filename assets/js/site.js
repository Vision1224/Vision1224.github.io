/* Damian Valencia | site.js
   Optional polish: scroll reveals and a timeline that fills as you read.
   The page is complete without this file. */
(function () {
  "use strict";

  var root = document.documentElement;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var canObserve = "IntersectionObserver" in window && !reduce;

  // Reveal cards and timeline entries as they enter the viewport.
  var reveals = document.querySelectorAll(".reveal");
  if (!canObserve) {
    reveals.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  var timeline = document.querySelector("[data-timeline]");
  if (!timeline) { return; }

  // Fill the timeline line as the reader scrolls through it.
  var frame = 0;
  function paint() {
    frame = 0;
    var rect = timeline.getBoundingClientRect();
    if (rect.height <= 0) { return; }
    var vh = window.innerHeight || root.clientHeight;
    var progress = Math.max(0, Math.min(1, (vh * 0.6 - rect.top) / rect.height));
    timeline.style.setProperty("--fill", (progress * 100).toFixed(1) + "%");
  }
  function schedule() {
    if (!frame) { frame = window.requestAnimationFrame(paint); }
  }
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
  paint();

  // Light each job marker once the reader reaches it.
  var jobs = timeline.querySelectorAll(".job");
  if (!canObserve) {
    jobs.forEach(function (job) { job.classList.add("is-lit"); });
  } else {
    var jio = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-lit");
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -55% 0px" });
    jobs.forEach(function (job) { jio.observe(job); });
  }
})();
