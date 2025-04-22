import { useStorage } from "@plasmohq/storage/hook"
import { nomalColorLocalKey } from "localKey"
import { nomalBackgroundLocalKey } from "localKey"
import { withBlankColorLocalKey } from "localKey"
import { withBlankBackgroundLocalKey } from "localKey"
import { noopenerNoreferrerColorLocalKey } from "localKey"
import { noopenerNoreferrerBackgroundLocalKey } from "localKey"
import styled from "styled-components"
import Header from "components/header"

const AllWrapper = styled.div`
  background: white;  
`

const Wrapper = styled.div`
  text-align: center;
  font-size: 15px;
  width: 700px;
  margin: 50px auto;
  background: rgb(238 235 235);
  padding: 10px 0 0;
`

const HeadTag = styled.h1`
  font-weight: normal;
`

const MidTag = styled.h2`
  font-weight: normal;
`

const FormWrapper = styled.div`
  margin-bottom: 10px;
`

const Label = styled.label`
  font-size: 20px;
`

const Btn = styled.button`
  font-size: 20px;
  width: 100%;
`

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
    <AllWrapper>
      <Wrapper>
        <Header />
        <HeadTag>
          aタグに付ける背景色と文字色を設定できます。
        </HeadTag>

        {/* 普通のaタグ */}
        <FormWrapper>
          <MidTag>普通のaタグ</MidTag>
          <Label htmlFor="color">文字色</Label>
          <br />
          <input
            id="color"
            type="color"
            value={normalColor}
            onChange={(e) => setNormalColor(e.target.value)}
          />
          <br />
          <Label htmlFor="back">背景色</Label>
          <br />
          <input
            id="back"
            type="color"
            value={normalBackground}
            onChange={(e) => setNormalBackground(e.target.value)}
          />
        </FormWrapper>

        {/* target="_blank" */}
        <FormWrapper>
          <MidTag>target="_blank"</MidTag>
          <Label htmlFor="blank-color">文字色</Label>
          <br />
          <input
            id="blank-color"
            type="color"
            value={withBlankColor}
            onChange={(e) => setWithBlankColor(e.target.value)}
          />
          <br />
          <Label htmlFor="blank-back">背景色</Label>
          <br />
          <input
            id="blank-back"
            type="color"
            value={withBlankBackground}
            onChange={(e) => setWithBlankBackground(e.target.value)}
          />
        </FormWrapper>

        {/* rel="noopener noreferrer" */}
        <FormWrapper>
          <MidTag>rel="noopener noreferrer"</MidTag>
          <Label htmlFor="noopener-noreferrer-color">文字色</Label>
          <br />
          <input
            id="noopener-noreferrer-color"
            type="color"
            value={noopenerNoreferrerColor}
            onChange={(e) => setNoopenerNoreferrerColor(e.target.value)}
          />
          <br />
          <Label htmlFor="noopener-noreferrer-back">背景色</Label>
          <br />
          <input
            id="noopener-noreferrer-back"
            type="color"
            value={noopenerNoreferrerBackground}
            onChange={(e) => setNoopenerNoreferrerBackground(e.target.value)}
          />
        </FormWrapper>

        <div>
          <Btn onClick={() => resetColors()}>初期化</Btn>
        </div>
      </Wrapper>
    </AllWrapper>
  )
}

export default OptionsIndex