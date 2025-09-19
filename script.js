// Portfolio link alert
const portfolioLink = document.getElementById('portfolio-link');
portfolioLink.addEventListener('click', function() {
  alert('Opening Portfolio in a new tab!');
});

// Social Media links alert
const socialLinks = document.querySelectorAll('.social-link');
socialLinks.forEach(link => {
  link.addEventListener('click', function() {
    alert(`Opening ${link.textContent} in a new tab!`);
  });
});
