import type { PlasmoCSConfig } from "plasmo"
 
export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
}

// const backgroundColor = "#00b371"


const changeAstyle = () => {

  const styleElement = document.createElement("style");
  const css = `
    a {
      color: white !important;
      background: #00b371 !important;
    }
    a[target="_blank"] {
      color: red !important;
      background: black !important;
    }
    a[rel="noopener noreferrer"], a[rel="noopener"], a[rel="noreferrer"]{
      color: red !important;
      background: #00b371 !important;
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

const addBlank = () => {
  const nonBlanks = document.querySelectorAll("a")
  nonBlanks.forEach((t) => {
    t.target = "_blank"
    t.rel = "noopener noreferrer"
    t.style.background = "#00ff7f"
  })
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.name === "change-a-style") {
    // const { fontColor } = msg.body
    // const body = msg.body
    // ウェブページのスタイルを変更
    // document.body.style.backgroundColor = backgroundColor
    // injectStyle(fontColor)
    changeAstyle()
    sendResponse({ status: "Atag's Style changed" })
  } else if (msg.name === "add-a-blank") {
    addBlank()
    sendResponse({ status: "Atag's Style changed" })
  } else if (msg.name === "reset-a-style") {
    window.location.reload()
  }
})