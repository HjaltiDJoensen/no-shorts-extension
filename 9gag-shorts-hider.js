function hide9GAGShorts() {
  if (!document.getElementById("no-shorts-css-9gag")) {
    const style = document.createElement("style");
    style.id = "no-shorts-css-9gag";
    style.textContent = `
      article:has(.video-post) {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
  }

  const shortPosts = document.querySelectorAll("article");
  shortPosts.forEach((post) => {
    const videoPost = post.querySelector(".video-post");
    if (videoPost) {
      post.style.display = "none";
    }
  });
}

// Run on page load
hide9GAGShorts();
