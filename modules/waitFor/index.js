/**
 * @param {String} selector
 * @param {Element} root
 * @returns Element
 */
export async function waitForElement(selector, root = document.body) {
  return new Promise((resolve) => {
    if (root.querySelector(selector)) {
      return resolve(root.querySelector(selector));
    }

    const observer = new MutationObserver((_mutations) => {
      if (root.querySelector(selector)) {
        resolve(root.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(root, {
      childList: true,
      subtree: true,
    });
  });
}

export function waitForDOMLoaded() {
  return new Promise((resolve) => {
    switch (document.readyState) {
      case "interactive":
      case "complete":
        resolve();
        break;

      default:
        addEventListener("DOMContentLoaded", () => resolve());
    }
  });
}
