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
  const [normalColor, setNormalColor] = useStorage(nomalColorLocalKey, "#FFFFFF")
  const [normalBackground, setNormalBackground] = useStorage(nomalBackgroundLocalKey, "#00b371")

  const [withBlankColor, setWithBlankColor] = useStorage(withBlankColorLocalKey, "#ff0000")
  const [withBlankBackground, setWithBlankBackground] = useStorage(withBlankBackgroundLocalKey, "#000000")

  const [noopenerNoreferrerColor, setNoopenerNoreferrerColor]
    = useStorage(noopenerNoreferrerColorLocalKey, "#ff0000")
  const [noopenerNoreferrerBackground, setNoopenerNoreferrerBackground]
    = useStorage(noopenerNoreferrerBackgroundLocalKey, "#00b371")
  

  const resetColors = () => {
    setNormalColor("#FFFFFF")
    setNormalBackground("#00b371")
    setWithBlankColor("#ff0000")
    setWithBlankBackground("#000000")
    setNoopenerNoreferrerColor("#ff0000")
    setNoopenerNoreferrerBackground("#00b371")
  }

  return (
    <div>
      <h1>
        ここでaタグに付ける背景色と文字色を設定できるようにする
      </h1>

      {/* 普通のaタグ */}
      <div>
        <h2>普通のaタグ</h2>
        <label htmlFor="">文字色</label>
        <br />
        <input
          type="color"
          value={normalColor}
          onChange={(e) => setNormalColor(e.target.value)}
        />
        <br />
        <label htmlFor="">背景色</label>
        <br />
        <input
          type="color"
          value={normalBackground}
          onChange={(e) => setNormalBackground(e.target.value)}
        />
      </div>

      {/* target="_blank" */}
      <div>
        <h2>target="_blank"</h2>
        <label htmlFor="">文字色</label>
        <br />
        <input
          type="color"
          value={withBlankColor}
          onChange={(e) => setWithBlankColor(e.target.value)}
        />
        <br />
        <label htmlFor="">背景色</label>
        <br />
        <input
          type="color"
          value={withBlankBackground}
          onChange={(e) => setWithBlankBackground(e.target.value)}
        />
      </div>

      {/* rel="noopener noreferrer" */}
      <div>
        <h2>rel="noopener noreferrer"</h2>
        <label htmlFor="">文字色</label>
        <br />
        <input
          type="color"
          value={noopenerNoreferrerColor}
          onChange={(e) => setNoopenerNoreferrerColor(e.target.value)}
        />
        <br />
        <label htmlFor="">背景色</label>
        <br />
        <input
          type="color"
          value={noopenerNoreferrerBackground}
          onChange={(e) => setNoopenerNoreferrerBackground(e.target.value)}
        />
      </div>

      <div>
        <button onClick={() => resetColors()}>初期化</button>
      </div>
    </div>
  )
}

export default OptionsIndex