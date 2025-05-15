// Frontend URL validation and error message for index.ejs
const urlForm = document.getElementById("urlForm");
const originalUrlInput = document.getElementById("originalUrl");
const errorMessage = document.getElementById("errorMessage");

if (urlForm) {
  urlForm.addEventListener("submit", (e) => {
    errorMessage.textContent = "";
    const urlValue = originalUrlInput.value.trim();

    // Simple URL pattern check
    const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/i;
    if (!urlPattern.test(urlValue)) {
      e.preventDefault();
      errorMessage.textContent =
        "Please enter a valid URL (include http/https).";
      originalUrlInput.focus();
    }
  });
}

// Copy button logic for result.ejs
const copyBtn = document.getElementById("copyBtn");
const copyMessage = document.getElementById("copyMessage");

if (copyBtn) {
  copyBtn.addEventListener("click", () => {
    const shortUrl = window.location.href;
    navigator.clipboard
      .writeText(shortUrl)
      .then(() => {
        copyMessage.textContent = "Copied to clipboard!";
        setTimeout(() => (copyMessage.textContent = ""), 3000);
      })
      .catch(() => {
        copyMessage.textContent = "Failed to copy.";
      });
  });
}
