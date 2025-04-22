import { useState } from "react"
import { useStorage } from "@plasmohq/storage/hook"
import { nomalColorLocalKey } from "localKey"
import { nomalBackgroundLocalKey } from "localKey"
import { withBlankColorLocalKey } from "localKey"
import { withBlankBackgroundLocalKey } from "localKey"
import { noopenerNoreferrerColorLocalKey } from "localKey"
import { noopenerNoreferrerBackgroundLocalKey } from "localKey"
import Header from "components/header"
import styled from "styled-components"

const Wrapper = styled.div`
  padding: 20px;
  background: rgb(217, 217, 217);
`

const FormWrapper = styled.div`
  margin-bottom: 10px;
`

const Label = styled.label`
  font-size: 20px;
`

const Select = styled.select`
  font-size: 20px;
  width: 100%;
`

const MiniSentense = styled.p`
  margin: 10px 0 0 0;
  font-size: 15px;
  font-weight: bold;
`

const Btn = styled.button`
  font-size: 20px;
  width: 100%;
`

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
      <Wrapper>
        <FormWrapper>
          <Label>aタグを目立たせる</Label>
          <br />
          <Btn onClick={changeStyle}>ON</Btn>
        </FormWrapper>

        <FormWrapper>
          <Label htmlFor="add-blank">すべてのaタグにtarget="_blank"を付ける</Label>
          <br />
          <MiniSentense>rel=</MiniSentense>
          <Select name="add-blank" id="add-blank" onChange={(e) => setRel(e.target.value)}>
            <option value="">無し</option>
            <option value="noopener noreferrer">noopener noreferrer</option>
            <option value="noopener">noopener</option>
            <option value="noreferrer">noreferrer</option>
          </Select>
          <Btn onClick={AddBlank}>付ける</Btn>          
        </FormWrapper>

        <FormWrapper>
          <Label>すべてのaタグからtarget="_blank"を外す</Label>
          <br />
          <Btn onClick={removeBlank}>外す</Btn>          
        </FormWrapper>

        <FormWrapper>
          <Label>リセットする</Label>
          <br />
          <Btn onClick={resetStyle}>リセット</Btn>     
        </FormWrapper>
   
      </Wrapper>

    </div>
  )
}


export default IndexPopup
