const componentScript = document.createElement('script');
componentScript.src = chrome.runtime.getURL('hello-world/dist/hello-world/hello-world.esm.js');
componentScript.type = 'module';
componentScript.dataset.resourcesUrl = chrome.runtime.getURL('hello-world/dist/hello-world');
componentScript.dataset.stencilNamespace = 'hello-world';

document.addEventListener('readystatechange', () => {
  if (document.body) {
    document.head.appendChild(componentScript);

    const component = document.createElement('my-component');

    document.body.appendChild(component);
  }
});
