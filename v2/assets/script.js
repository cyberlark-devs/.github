// Get the element by its ID
const element = document.getElementById('btt');

// Function to show or hide the element based on scroll position
function toggleElementVisibility() {
    if (window.scrollY > 20) {
        element.style.display = 'block'; // Show the element
        element.style.opacity = 1;
    } else {
        element.style.display = 'none'; // Hide the element
        element.style.opacity  = 0;
    }
}

// Add event listener to the window scroll event
window.addEventListener('scroll', toggleElementVisibility);