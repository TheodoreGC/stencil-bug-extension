# Stencil Bug Chrome Extension - Reproduction Guide [#5206](https://github.com/ionic-team/stencil/issues/5206)

This repository is designed to demonstrate and help reproduce the specific issue detailed in [Ionic Team's Stencil Issue #5206](https://github.com/ionic-team/stencil/issues/5206) related to trustedTypes.

## Setting up the environment

## Load the Chrome Extension

First, you need to load the unpacked extension (the root folder) into your Chrome browser. Follow the instructions in the [Load an unpacked extension](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked) guide. This guide will assist you in setting up the necessary extension to observe the issue.

## Steps to reproduce the bug

1. Open a website which use `trustedTypes`. For instance, [Google Calendar](https://calendar.google.com/calendar).
2. Open Chrome Developer Tools (DevTools) either by right-clicking on the page and selecting Inspect or using the keyboard shortcuts Ctrl+Shift+I (Windows/Linux) or Cmd+Opt+I (Mac).
3. Identify the error

  ```js
  Uncaught (in promise) TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
  ```

## Additional information

The content of the `hello-world` folder is equivalent to the default component found in a standard Stencil project under `dist/hello-world`. For simplicity, the generated code for the component was copied directly into this repo.

This component was generated with the following Stencil configuration:

```ts
import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'hello-world',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: 'new',
  },
  extras: {
    enableImportInjection: true,
  },
  sourceMap: false,
};
```
