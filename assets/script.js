// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Simulate loading process
    simulateLoading();
  });
  
  function simulateLoading() {
    var progressBar = document.getElementById("progress-bar");
    var width = 0;
    var intervalId = setInterval(frame, 2); // Adjust the interval as needed
  
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
  
  const joystickContainer = document.getElementById('joystick-container');
  const joystickHandle = document.getElementById('joystick-handle');
  const fixedSection = document.getElementById('fixed-section');
  
  let isDragging = false;
  
  joystickHandle.addEventListener('mousedown', startDrag);
  document.addEventListener('mousemove', handleDrag);
  document.addEventListener('mouseup', endDrag);
  
  function startDrag(e) {
      isDragging = true;
  }
  
  function handleDrag(e) {
      if (isDragging) {
          const offsetX = e.clientX - joystickContainer.getBoundingClientRect().left;
          const offsetY = e.clientY - joystickContainer.getBoundingClientRect().top;
  
          const x = offsetX - joystickContainer.offsetWidth / 2;
          const y = offsetY - joystickContainer.offsetHeight / 2;
  
          const angle = Math.atan2(y, x);
          const distance = Math.min(joystickContainer.offsetWidth / 2, Math.hypot(x, y));
  
          const newX = distance * Math.cos(angle);
          const newY = distance * Math.sin(angle);
  
          joystickHandle.style.transform = `translate(${newX}px, ${newY}px)`;
      }
  }
  
  function endDrag() {
      if (isDragging) {
          isDragging = false;
  
          // Reset the joystick handle position to the center
          joystickHandle.style.transform = 'translate(0, 0)';
  
          // Check if the joystick handle is close to a specific direction and open the corresponding link
          const threshold = 15;
          const handlePosition = joystickHandle.getBoundingClientRect();
          const fixedSectionPosition = fixedSection.getBoundingClientRect();
  
          if (handlePosition.left < fixedSectionPosition.left + threshold) {
              // Open left link (adjust the link as needed)
              window.location.href = 'https://example.com/left';
          } else if (handlePosition.right > fixedSectionPosition.right - threshold) {
              // Open right link (adjust the link as needed)
              window.location.href = 'https://example.com/right';
          }
          // Add more conditions for other directions as needed
      }
  }
  
  // Optional: Reset joystick handle position on window resize
  window.addEventListener('resize', () => {
      joystickHandle.style.transform = 'translate(0, 0)';
  });
  