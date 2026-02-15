// Fan image click effect for gallery
document.addEventListener("DOMContentLoaded", () => {
    const fanImages = document.querySelectorAll(".fan-image");
    fanImages.forEach(img => {
        img.addEventListener("click", function(event) {
            // Prevent event from bubbling to document
            event.stopPropagation();
            // Remove active class from all images
            fanImages.forEach(i => i.classList.remove("fan-active"));
            // Add active class to clicked image
            this.classList.add("fan-active");
        });
    });

    document.addEventListener("click", function(event) {
        // If the click is not on a .fan-image, remove all .fan-active classes
        if (!event.target.classList.contains("fan-image")) {
            fanImages.forEach(i => i.classList.remove("fan-active"));
        }
    });
});
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

document.addEventListener("DOMContentLoaded", (event) => {

    const checkboxes = document.querySelectorAll(".choice");
    const totalPriceElement = document.getElementById("total-price");


    // Add event listeners to checkboxes to call totalPrice on change
    checkboxes.forEach(cb => cb.addEventListener("change", () => totalPrice(checkboxes, totalPriceElement)));

    // Optionally, call totalPrice on page load to initialize
    totalPrice(checkboxes, totalPriceElement);

});

function totalPrice(checkboxes, totalPriceElement) {
    if (totalPriceElement) {
        let total = 0;
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                total += parseFloat(checkbox.value);
            }
        });
        totalPriceElement.textContent = total + " kr";
    }
}

