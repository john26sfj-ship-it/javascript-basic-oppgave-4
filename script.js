const homeClick = document.getElementById("home-btn");
const bookingClick = document.getElementById("booking-btn");
const galleryClick = document.getElementById("gallery-btn");
const feedbackClick = document.getElementById("feedback-btn");

if (homeClick) {
    homeClick.addEventListener("click", () => {
        window.open("index.html", "_self")
    })
}
if (bookingClick) {
    bookingClick.addEventListener("click", () => {
        window.open("booking.html", "_self")
    })
}
if (galleryClick) {
    galleryClick.addEventListener("click", () => {
        window.open("gallery.html", "_self")
    })
}
if (feedbackClick) {
    feedbackClick.addEventListener("click", () => {
        window.open("feedback.html", "_self")
    })
}