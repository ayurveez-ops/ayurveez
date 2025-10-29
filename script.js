console.log("Ayurveez website loaded!");

console.log("Ayurveez website loaded!");

let index = 0;
const shlokas = document.querySelectorAll('.shloka');
const total = shlokas.length;
const intervalTime = 5000; // auto-slide every 5 seconds
let autoSlide;

// show current shloka
function showShloka(i) {
  shlokas.forEach((s, idx) => {
    s.classList.toggle('active', idx === i);
  });
}

// next button
document.getElementById('next').addEventListener('click', () => {
  index = (index + 1) % total;
  showShloka(index);
  resetAutoSlide();
});

// prev button
document.getElementById('prev').addEventListener('click', () => {
  index = (index - 1 + total) % total;
  showShloka(index);
  resetAutoSlide();
});

// auto slide function
function startAutoSlide() {
  autoSlide = setInterval(() => {
    index = (index + 1) % total;
    showShloka(index);
  }, intervalTime);
}

// reset auto slide timer when user manually clicks
function resetAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide();
}

// start sliding when page loads
showShloka(index);
startAutoSlide();