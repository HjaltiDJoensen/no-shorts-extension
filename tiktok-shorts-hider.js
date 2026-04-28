function hideTikTokShorts() {
  // Inject CSS to hide short videos more reliably
  if (!document.getElementById("no-shorts-css-tiktok")) {
    const style = document.createElement("style");
    style.id = "no-shorts-css-tiktok";
    style.textContent = `
      article[data-e2e="recommend-list-item-container"] {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
  }

  // Fallback: Hide elements via JavaScript
  const shortVideos = document.querySelectorAll(
    'article[data-e2e="recommend-list-item-container"]',
  );
  shortVideos.forEach((video) => {
    video.style.display = "none";
  });
}

// Run on page load and observe changes
hideTikTokShorts();
const observer = new MutationObserver(hideTikTokShorts);
observer.observe(document.body, { childList: true, subtree: true });
