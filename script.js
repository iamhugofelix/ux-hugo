// Lucide icon Library
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
  });


// Copy to Clipboard function
function copyText() {
  const button = document.getElementById('copyButton');
  const icon = button.querySelector('i'); // Get the <i> element

  const textToCopy = "example@example.com";

  navigator.clipboard.writeText(textToCopy)
      .then(() => {
          // Change the button text
          button.innerHTML = `
              <i data-lucide="check" class="icon-small"></i>
              Copied!
          `;

          // Re-render Lucide icons
          lucide.createIcons();

          // Reset after 2 seconds
          setTimeout(() => {
              button.innerHTML = `
                  <i data-lucide="copy" class="icon-small"></i>
                  Copy Email
              `;
              lucide.createIcons(); // Re-render the original icon
          }, 2000);
      })
      .catch(err => console.error("Error copying text:", err));
}
