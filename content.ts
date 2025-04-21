import type { PlasmoCSConfig } from "plasmo"
 
export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
}

type Props = {
  normalColor: string,
  normalBackground: string,
  withBlankColor: string,
  withBlankBackground: string,
  noopenerNoreferrerColor: string,
  noopenerNoreferrerBackground: string
}

const changeAstyle = (style: Props) => {

  const styleElement = document.createElement("style");
  const css = `
    a {
      color: ${style.normalColor} !important;
      background: ${style.normalBackground} !important;
    }
    a[target="_blank"] {
      color: ${style.withBlankColor} !important;
      background: ${style.withBlankBackground} !important;
    }
    a[rel="noopener noreferrer"], a[rel="noopener"], a[rel="noreferrer"]{
      color: ${style.noopenerNoreferrerColor} !important;
      background: ${style.noopenerNoreferrerBackground} !important;
    }
    a[rel="noopener noreferrer"]::before {
      content: "noopener noreferrer";
      background-color: white;
      border: 1px black solid;
    }
    a[rel="noopener"]::before {
      content: "noopener";
      background-color: white;
      border: 1px black solid;
    }
    a[rel="noreferrer"]::before {
      content: "noreferrer";
      background-color: white;
      border: 1px black solid;
    }
  `
  styleElement.textContent = css;
  document.head.appendChild(styleElement);
}

const addBlank = (rel: string) => {
  const nonBlanks = document.querySelectorAll("a")
  nonBlanks.forEach((t) => {
    t.target = "_blank"
    t.rel = `${rel}`
    // t.style.background = "#00ff7f"
  })
  alert("設定完了")
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.name === "change-a-style") {
    const css: Props = msg.body
    changeAstyle(css)
    sendResponse({ status: "Atag's Style changed" })
  } else if (msg.name === "add-a-blank") {
    addBlank(msg.body)
    sendResponse({ status: "Atag's Style changed" })
  } else if (msg.name === "reset-a-style") {
    window.location.reload()
  }
})