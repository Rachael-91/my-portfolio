// Function to load the head.html content
async function loadHead() {
  try {
    const response = await fetch('/components/head.html');
    if (response.ok) {
      const headContent = await response.text();
      document.head.insertAdjacentHTML('afterbegin', headContent);
    } else {
      console.error('Failed to load head:', response.statusText);
    }
  } catch (error) {
    console.error('Error loading head:', error);
  }
}

// Function to highlight active navbar link
function highlightActiveLink() {
  const currentPage = window.location.pathname.split("/").pop().toLowerCase(); // Get the current page
  document.querySelectorAll(".nav-link").forEach(link => {
    const linkPage = link.getAttribute("href").split("/").pop().toLowerCase(); // Normalize href
    if (linkPage === currentPage) {
      link.parentElement.classList.add("active"); // Add active class
    } else {
      link.parentElement.classList.remove("active"); // Remove active class
    }
  });
}

// Function to load the header and footer
async function loadPartials() {
  try {
    // Load Header
    const headerResponse = await fetch('/components/header.html');
    if (headerResponse.ok) {
      const headerHTML = await headerResponse.text();
      document.getElementById('header').innerHTML = headerHTML;
      
      // Highlight the active navbar link AFTER header is loaded
      highlightActiveLink();
    } else {
      console.error('Failed to load header:', headerResponse.statusText);
    }

    // Load Footer
    const footerResponse = await fetch('/components/footer.html');
    if (footerResponse.ok) {
      const footerHTML = await footerResponse.text();
      document.getElementById('footer').innerHTML = footerHTML;
    } else {
      console.error('Failed to load footer:', footerResponse.statusText);
    }
  } catch (error) {
    console.error('Error loading partials:', error);
  }
}

// Function to initialize the page (load head, header, and footer, then reveal page)
async function initializePage() {
  try {
    document.body.classList.add('hidden'); // Hide body during loading
    await loadHead(); // Load the head first
    await loadPartials(); // Load header and footer next
    document.body.classList.remove('hidden'); // Reveal the body
  } catch (error) {
    console.error('Error initializing the page:', error);
  }
}

// Initialize the page
initializePage();

// About Page Accordion auto scroll to top
document.addEventListener("DOMContentLoaded", () => {
  const accordionButtons = document.querySelectorAll(".accordion-button");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      setTimeout(() => {
        const expanded = event.target.getAttribute("aria-expanded") === "true";
        if (expanded) {
          // Get the accordion header element
          const accordionHeader = event.target.closest(".accordion-header");

          // Adjust for sticky headers or navbars if needed
          const headerOffset = 70; // Adjust this value if you have a fixed navbar
          const elementPosition = accordionHeader.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerOffset;

          // Scroll to the adjusted position
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 300); // Adjust delay to match Bootstrap animation
    });
  });
});

// Back to top button on about page
document.addEventListener("DOMContentLoaded", () => {
  const backToTopButton = document.getElementById("backToTop");

  // Show or hide the button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });

  // Scroll back to the top when the button is clicked
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

  
  