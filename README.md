# Stencil Bug Chrome Extension - Reproduction Guide [#5206](https://github.com/ionic-team/stencil/issues/5206)

This repository is designed to demonstrate and help reproduce the specific issue detailed in [Ionic Team's Stencil Issue #5206](https://github.com/ionic-team/stencil/issues/5206) related to trustedTypes.

## Setting up the environment

Before you start, ensure that you have the following prerequisites installed:

## Prerequisites

- **npm**: Make sure you have the latest Long-Term Support (LTS) version of npm (Node Package Manager) installed. You can check your npm version by running npm -v in your terminal.
- **Node.js**: Node.js is required to run npm packages. Similar to npm, it's best to use the latest LTS version. Check your Node.js version using node -v in the terminal.

## Installation

Follow these steps to set up the `hello-world` project (web component):

1. Navigate to the project directory:

   ```sh
   cd hello-world
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Build the project:

   ```sh
   npm run build
   ```

4. Return to main directory (optional)"

   ```sh
   cd -
   ```

## Load the Chrome Extension

First, you need to load the unpacked extension (the root folder) into your Chrome browser. Follow the instructions in the [Load an unpacked extension](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked) guide. This guide will assist you in setting up the necessary extension to observe the issue.

## Steps to reproduce the bug

1. Open a website which use `trustedTypes`. For instance, [Google Calendar](https://calendar.google.com/calendar).
2. Open Chrome Developer Tools (DevTools) either by right-clicking on the page and selecting Inspect or using the keyboard shortcuts Ctrl+Shift+I (Windows/Linux) or Cmd+Opt+I (Mac).
3. Identify the error

  ```js
  Uncaught (in promise) TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
  ```

## Affected Browsers

This issue has been tested on:

- [Brave v1.61.114 Chromium: 120.0.6099.199 (Official Build) (arm64)](https://brave.com/latest/)
- [Chrome v120.0.6099.216 (Official Build) (arm64)](https://chromereleases.googleblog.com/2024/01/stable-channel-update-for-desktop_9.html)
