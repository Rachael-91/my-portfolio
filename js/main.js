// main.js

// Function to load the head.html content
async function loadHead() {
    try {
      const response = await fetch('/src/head.html');
      if (response.ok) {
        const headContent = await response.text();
        document.head.innerHTML = headContent + document.head.innerHTML;
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
      const headerResponse = await fetch('/src/header.html');
      if (headerResponse.ok) {
        const headerHTML = await headerResponse.text();
        document.getElementById('header').innerHTML = headerHTML;
      } else {
        console.error('Failed to load header:', headerResponse.statusText);
      }
  
      // Load Footer
      const footerResponse = await fetch('/src/footer.html');
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
    document.body.classList.add('hidden'); // Hide body during loading
    await loadHead(); // Load head first
    await loadPartials(); // Then load header and footer
    document.body.classList.remove('hidden'); // Reveal the body
  }
  
  // Initialize the page
  initializePage();
  
  