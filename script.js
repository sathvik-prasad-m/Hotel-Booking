// Redirect to booking form with selected room details
function bookRoom(roomType, price) {
    localStorage.setItem("roomType", roomType);
    localStorage.setItem("price", price);
    window.location.href = 'booking.html';
}

// Populate booking form fields
function loadBookingForm() {
    document.getElementById("roomType").value = localStorage.getItem("roomType");
    document.getElementById("price").value = `$${localStorage.getItem("price")}`;
}

// Submit booking form and redirect to confirmation
function submitBookingForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);

    window.location.href = 'confirmation.html';
    return false; // Prevent form submission
}

// Load confirmation details
function loadConfirmation() {
    document.getElementById("userName").innerText = localStorage.getItem("userName");
    document.getElementById("userEmail").innerText = localStorage.getItem("userEmail");
}

// Load necessary data when page is loaded
document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById("bookRoomForm")) {
        loadBookingForm();
    }
    if (document.getElementById("confirmation")) {
        loadConfirmation();
    }
});
