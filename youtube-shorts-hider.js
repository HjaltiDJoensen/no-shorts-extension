// Hide YouTube Shorts elements
function hideYouTubeShorts() {
  // Inject CSS to hide shorts-related elements more reliably
  if (!document.getElementById("no-shorts-css")) {
    const style = document.createElement("style");
    style.id = "no-shorts-css";
    style.textContent = `
      ytd-rich-shelf-renderer[is-shorts],
      ytd-video-renderer[is-shorts],
      ytd-video-renderer:has(a[href*="/shorts/"]),
      ytd-rich-item-renderer:has(a[href*="/shorts/"]),
      a[href="/shorts"],
      ytd-guide-entry-renderer:has(a[href="/shorts"]),
      a[title="Shorts"],
      ytd-guide-entry-renderer:has(a[title="Shorts"]),
      ytd-reel-shelf-renderer {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
  }

  // Fallback: Hide elements via JavaScript
  const shortsShelf = document.querySelector(
    "ytd-rich-shelf-renderer[is-shorts]",
  );
  if (shortsShelf) {
    shortsShelf.style.display = "none";
  }

  const shortVideos = document.querySelectorAll(
    "ytd-video-renderer[is-shorts]",
  );
  shortVideos.forEach((video) => {
    video.style.display = "none";
  });

  const searchShorts = document.querySelectorAll(
    'ytd-video-renderer:has(a[href*="/shorts/"])',
  );
  searchShorts.forEach((video) => {
    video.style.display = "none";
  });

  const sidebarShorts = document.querySelector(
    'ytd-guide-entry-renderer:has(a[title="Shorts"])',
  );
  if (sidebarShorts) {
    sidebarShorts.style.display = "none";
  }

  const shortsLinks = document.querySelectorAll('a[href*="/shorts/"]');
  shortsLinks.forEach((link) => {
    const container =
      link.closest("ytd-rich-item-renderer") ||
      link.closest("ytd-video-renderer") ||
      link.closest("ytd-guide-entry-renderer");
    if (container) {
      container.style.display = "none";
    }
  });

  // Hide reel shelves (shorts recommendations)
  const reelShelves = document.querySelectorAll("ytd-reel-shelf-renderer");
  reelShelves.forEach((shelf) => {
    shelf.style.cssText = "display: none !important;";
  });
}

// Run on page load and when new content is loaded (e.g., scrolling)
hideYouTubeShorts();
const observer = new MutationObserver(hideYouTubeShorts);
observer.observe(document.body, { childList: true, subtree: true });
