import type { PlasmoCSConfig } from "plasmo"
 
export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
}

// const backgroundColor = "#3cb371"

const changeAstyle = () => {
  const nonBlanks = document.querySelectorAll("a")
  const blanks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('a[target="_blank"]')
  nonBlanks.forEach((t) => {
    t.style.color = "white"
    t.style.background = "#3cb371"
  })
  blanks.forEach((t) => {
    t.style.color = "red"
    t.style.background = "black"
  })
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