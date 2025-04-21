// import { useState } from "react"
import { useStorage } from "@plasmohq/storage/hook"
import { nomalColorLocalKey } from "localKey"
import { nomalBackgroundLocalKey } from "localKey"
import { withBlankColorLocalKey } from "localKey"
import { withBlankBackgroundLocalKey } from "localKey"
import { noopenerNoreferrerColorLocalKey } from "localKey"
import { noopenerNoreferrerBackgroundLocalKey } from "localKey"

// 普通のaタグ
// color: white; background: #00b371;

// blank
// color: red; background: black;

// noopener&noreferrer
// color: red: background: #00b371;

function OptionsIndex() {
  const [normalColor, setNormalColor] = useStorage(nomalColorLocalKey, "white")
  const [normalBackground, setNormalBackground] = useStorage(nomalBackgroundLocalKey, "#00b371")

  const [withBlankColor, setWithBlankColor] = useStorage(withBlankColorLocalKey, "red")
  const [withBlankBackground, setWithBlankBackground] = useStorage(withBlankBackgroundLocalKey, "black")

  const [noopenerNoreferrerColor, setNoopenerNoreferrerColor]
    = useStorage(noopenerNoreferrerColorLocalKey, "red")
  const [noopenerNoreferrerBackground, setNoopenerNoreferrerBackground]
    = useStorage(noopenerNoreferrerBackgroundLocalKey, "#00b371")
  

  return (
    <div>
      <h1>
        ここでaタグに付ける背景色と文字色を設定できるようにする
      </h1>
    </div>
  )
}

export default OptionsIndex