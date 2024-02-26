// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Simulate loading process
    simulateLoading();
  });
  
  function simulateLoading() {
    var progressBar = document.getElementById("progress-bar");
    var width = 0;
    var intervalId = setInterval(frame, 20); // Adjust the interval as needed
  
    function frame() {
      if (width >= 100) {
        clearInterval(intervalId);
        document.getElementById("pre-loader").style.display = "none";
      } else {
        width++;
        progressBar.style.width = width + "%";
      }
    }
  }
  // Simulate binary text animation
  const binaryText = document.getElementById("binary-text");
  setInterval(function () {
    binaryText.textContent = generateRandomBinaryString(30);
  }, 300);

  function generateRandomBinaryString(length) {
    const binaryArray = Array.from({ length }, () => Math.random() < 0.5 ? '0' : '1');
    return binaryArray.join('');
  }
  