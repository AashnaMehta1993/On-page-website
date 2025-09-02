// Get elements
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

// Open lightbox when image is clicked
document.querySelectorAll(".gallery-item").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
    captionText.textContent = img.alt;
  });
});

// Close modal when clicking X
closeBtn.onclick = () => {
  lightbox.style.display = "none";
};

// Also close when clicking outside the image
lightbox.onclick = (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
};
