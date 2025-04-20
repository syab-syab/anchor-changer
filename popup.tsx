// 登録したURLにアクセスするのを我慢する拡張機能
// Webページ内のすべての画像を一括でサイドパネルにリストアップしてワンタッチで保存
// 脆弱性があると話題のtarget="_blank"のタブを色付けして、すべてのaタグのtarget_blankを外したり付けたりする

// import { useState } from "react"

// すべてのaタグに色を付ける
// その中のtarget="_blank"はエラーっぽい色で目立たせる
// ただし、安全性が高い(rel="noopener noreferrer")なら安全な色にする

// すべてのaタグにtarget="_blank"を設定する
// rel="noopener noreferrer"もついでに追加した方が良いかどうかはユーザーが好きに選べるようにする

// すべてのtarget="_blank"にrel="noopener noreferrer"を設定する

function IndexPopup() {

  // const [aStyle, setAStyle] = useState(false)

  const changeStyle = async () => {
    try {
      // 現在のタブを取得
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
      // コンテンツスクリプトにメッセージを送信
      await chrome.tabs.sendMessage(tab.id, {
        name: "change-a-style",
        body: {
          value: "anchor tag's style change"
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
        body: {
          value: "anchor tag's add blank"
        }
      })
      console.log("A Style change requested")
      // setAStyle(!aStyle)
    } catch (error) {
      console.error("Error sending message:", error)
    }
  }

  return (
    <div style={{ padding: 16, width: 300 }}>
      <h1>aタグを目立たせる</h1>
      <button onClick={changeStyle}>送信</button>
      <h1>すべてのaタグにtarget="_blank"を設定する</h1>
      <button onClick={AddBlank}>送信</button>
      <h1>リセットする</h1>
      <button onClick={resetStyle}>リセット</button>
    </div>
  )
}


export default IndexPopup
