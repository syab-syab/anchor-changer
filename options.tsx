// import { useState } from "react"
import { useStorage } from "@plasmohq/storage/hook"
import { nonBlankBackgroundLocalKey } from "localKey"
import { nonBlankColorLocalKey } from "localKey"
import { withBlankBackgroundLocalKey } from "localKey"
import { withBlankColorLocalKey } from "localKey"
import { noopenerNoreferrerBackgroundLocalKey } from "localKey"
import { noopenerNoreferrerColorLocalKey } from "localKey"


function OptionsIndex() {
  // const [data, setData] = useState("")

  // const [nonBlankBackground, setNonBlankBackground] = useStorage(nonBlankBackgroundLocalKey, "")

  return (
    <div>
      <h1>
        ここでaタグに付ける背景色と文字色を設定できるようにする
      </h1>
    </div>
  )
}

export default OptionsIndex