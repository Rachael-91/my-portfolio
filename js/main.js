// main.js

// Function to load the head.html content
async function loadHead() {
    try {
      const response = await fetch('/components/head.html');
      if (response.ok) {
        const headContent = await response.text();
        // Append the loaded head content before the existing head content
        document.head.insertAdjacentHTML('afterbegin', headContent);
      } else {
        console.error('Failed to load head:', response.statusText);
      }
    } catch (error) {
      console.error('Error loading head:', error);
    }
  }
  
  // Function to load the header and footer
  async function loadPartials() {
    try {
      // Load Header
      const headerResponse = await fetch('/components/header.html');
      if (headerResponse.ok) {
        const headerHTML = await headerResponse.text();
        document.getElementById('header').innerHTML = headerHTML;
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
  
  
  