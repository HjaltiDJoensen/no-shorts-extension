# No Shorts Extension

This browser extension hides short video content on YouTube, TikTok, and 9GAG to improve browsing focus and reduce distractions.

## Features

- Hides YouTube Shorts shelf, sidebar tab, and short videos in feed/search
- Blocks TikTok short video feed
- Removes video posts from 9GAG

## Compatibility

Compatible with Chrome, Edge, and Firefox

## Performance

Uses efficient CSS injection for performance

## Installation

1. Clone or download this repository
2. **Chrome/Edge**: Open `chrome://extensions/`, enable Developer mode, click "Load unpacked", and select the extension folder
3. **Firefox**: Open `about:debugging`, click "This Firefox", then "Load Temporary Add-on", and select `manifest.json`
4. Reload the extension in the browser after any code changes

## How It Works

The extension injects content scripts that identify and hide short video elements using CSS rules and JavaScript selectors. It observes DOM changes to handle dynamic content loading.

## Contributing

Contributions are welcome. Please test changes across all supported browsers.
