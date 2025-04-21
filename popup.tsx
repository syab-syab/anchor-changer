import { useState } from "react"
import { useStorage } from "@plasmohq/storage/hook"
import { nomalColorLocalKey } from "localKey"
import { nomalBackgroundLocalKey } from "localKey"
import { withBlankColorLocalKey } from "localKey"
import { withBlankBackgroundLocalKey } from "localKey"
import { noopenerNoreferrerColorLocalKey } from "localKey"
import { noopenerNoreferrerBackgroundLocalKey } from "localKey"
import Header from "components/header"


function IndexPopup() {
  const [normalColor] = useStorage(nomalColorLocalKey, "#FFFFFF")
  const [normalBackground] = useStorage(nomalBackgroundLocalKey, "#00b371")

  const [withBlankColor] = useStorage(withBlankColorLocalKey, "#ff0000")
  const [withBlankBackground] = useStorage(withBlankBackgroundLocalKey, "#000000")

  const [noopenerNoreferrerColor] = useStorage(noopenerNoreferrerColorLocalKey, "#ff0000")
  const [noopenerNoreferrerBackground] = useStorage(noopenerNoreferrerBackgroundLocalKey, "#00b371")

  const [rel, setRel] = useState("")

  const changeStyle = async () => {
    try {
      // 現在のタブを取得
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
      // コンテンツスクリプトにメッセージを送信
      await chrome.tabs.sendMessage(tab.id, {
        name: "change-a-style",
        body: {
          normalColor: normalColor,
          normalBackground: normalBackground,
          withBlankColor: withBlankColor,
          withBlankBackground: withBlankBackground,
          noopenerNoreferrerColor: noopenerNoreferrerColor,
          noopenerNoreferrerBackground: noopenerNoreferrerBackground
        }
      })
      console.log("A Style change requested")
      // setAStyle(!aStyle)
    } catch (error) {
      console.error("Error sending message:", error)
    }
  }

  const resetStyle = async() => {
    try {
      // 現在のタブを取得
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
      // コンテンツスクリプトにメッセージを送信
      await chrome.tabs.sendMessage(tab.id, {
        name: "reset-a-style",
        body: {
          value: "reset please"
        }
      })
      console.log("Style reset requested")
      // setAStyle(!aStyle)
    } catch(error) {
      console.error("Error sending message:", error)
    }
  }

  const AddBlank = async () => {
    try {
      // 現在のタブを取得
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
      // コンテンツスクリプトにメッセージを送信
      await chrome.tabs.sendMessage(tab.id, {
        name: "add-a-blank",
        body: rel
      })
      setRel("")
      console.log("A Style change requested")
      // setAStyle(!aStyle)
    } catch (error) {
      console.error("Error sending message:", error)
    }
  }

  const removeBlank = async () => {
    try {
      // 現在のタブを取得
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
      // コンテンツスクリプトにメッセージを送信
      await chrome.tabs.sendMessage(tab.id, {
        name: "remove-a-blank",
        body: "remove please"
      })
      console.log("A Style change requested")
      // setAStyle(!aStyle)
    } catch (error) {
      console.error("Error sending message:", error)
    }
  }

  

  return (
    <div
      style={{
        width: "340px",
      }}
    >
      <Header />
      <h1>aタグを目立たせる</h1>
      <button onClick={changeStyle}>送信</button>

      <h1>すべてのaタグにtarget="_blank"を付ける</h1>
      <label htmlFor="">rel=</label>
      <select name="" id="" onChange={(e) => setRel(e.target.value)}>
        <option value="">無し</option>
        <option value="noopener noreferrer">noopener noreferrer</option>
        <option value="noopener">noopener</option>
        <option value="noreferrer">noreferrer</option>
      </select>
      <button onClick={AddBlank}>付与</button>

      <h1>すべてのaタグからtarget="_blank"を外す</h1>
      <button onClick={removeBlank}>外す</button>
      
      <h1>リセットする</h1>
      <button onClick={resetStyle}>リセット</button>
    </div>
  )
}


export default IndexPopup
