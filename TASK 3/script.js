document.addEventListener('DOMContentLoaded', () => {
    const resumeButton = document.getElementById('resumeButton');
    const imageWrapper = document.querySelector('.image-wrapper');
  
    // Show the "Generate Resume" button on image hover
    imageWrapper.addEventListener('mouseenter', () => {
      resumeButton.style.display = 'block';
    });
  
    // Hide the "Generate Resume" button when mouse leaves the image
    imageWrapper.addEventListener('mouseleave', () => {
      resumeButton.style.display = 'none';
    });
  
    // Open the other HTML file on button click
    resumeButton.addEventListener('click', () => {
      // You can replace 'path_to_resume.html' with the actual path to the other HTML file.
      window.location.href = 'cv.html';
    });
  });
  