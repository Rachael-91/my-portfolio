// main.js

// Function to load partials into the page
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

    // Load the head.html content
    async function loadHead() {
        const response = await fetch('/src/head.html');
        if (response.ok) {
          const headContent = await response.text();
          document.head.innerHTML = headContent + document.head.innerHTML;
        } else {
          console.error('Failed to load head:', response.statusText);
        }
      }
      loadHead();
  }
  
  // Call the function to load the partials
  loadPartials();
  