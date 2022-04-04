import React from "react";
import { useState } from "react";
export default function TextForm(props) {

  const handleUpClick = (e) => {
    // to handle uppercase button
    setText(text.toUpperCase());
    props.showAlert("Text is converted to Uppercase", "success");
  };
  const handleLowClick = (e) => {
    // to handle lower case button
    setText(text.toLowerCase());
    props.showAlert("Text is converted to Lowercase", "success");
  };
  const handleClear = (e) => {
    // to handle clear button
    setText("");
    props.showAlert("Textarea is cleared", "success");
  };
  const handleSentence = (e) => {
    // to handle sentence case button
    const textArr = text.split(" ");
    let newText = "";
    textArr.forEach((t) => {
      newText +=
        t.slice(0, 1).toUpperCase() + t.slice(1, t.length).toLowerCase() + " ";
    });
    // to remove extra space at last
    newText = newText.slice(0, newText.length - 1);
    setText(newText);
    props.showAlert("Text is converted to Sentencecase", "success");
  };
  const handleInverseCase = () => {
    // to handle inverse case button
    let newText = "";
    const textArr = text.split("");
    textArr.forEach((ch) => {
      if (ch === ch.toUpperCase()) {
        newText += ch.toLowerCase();
      } else {
        newText += ch.toUpperCase();
      }
    });
    setText(newText);
    props.showAlert("Text is converted to Inversecase", "success");
  };
  const handleRemoveSpaces = () => {
    console.log(text.split(' '));
    let newText = "";
    text.split(" ").forEach(w => {
      if (w !== "") {
        newText += w + " ";
      }
    })
    newText.slice(newText.length - 1);
    setText(newText)
    props.showAlert("Extra Spaces Removed", "success");

  }
  const handleCopy = () => {
    let textarea = document.getElementById("#text");
    textarea.select()
    navigator.clipboard.writeText(textarea.value);
    props.showAlert("Text is copied to Clipboard", "success");

  }
  const handleOnChnage = (e) => {
    // to handle value change of textarea, new values will be added here
    setText(e.target.value);
  };
  const [text, setText] = useState("Enter Text Here....");
  // number of words in textarea
  let words = 0;
  text.split(" ").forEach(t => {
    if (t !== "" || t !== "") {
      words += 1;
    }
  })
  // number of characters in textarea
  let characters = 0;
  text.split("").forEach(ch => {
    if (ch !== " ") {
      characters += 1;
    }
  })
  // amount if time required to read words in textarea
  const time = (0.5 / 125) * words;
  return (
    <>
      <div className="container text-center" style={{
        color: props.mode === 'dark' ? 'white' : 'black'
      }}>
        <h1>{props.heading}</h1>

        <textarea
          className="form-control"
          id="text"
          value={text}
          cols="80"
          rows="10"
          onChange={handleOnChnage}
          style={{
            backgroundColor: props.mode === 'dark' ? '#343a40' : 'white',
            color: props.mode === 'dark' ? 'white' : 'black'
          }}
        ></textarea>
        <button className={`btn btn-outline-${props.mode === 'light' ? 'primary' : 'light'} m-1`} onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button
          className={`btn btn-outline-${props.mode === 'light' ? 'primary' : 'light'} m-1`}
          onClick={handleLowClick}
        >
          Convert to LowerCase
        </button>
        <button
          className={`btn btn-outline-${props.mode === 'light' ? 'primary' : 'light'} m-1`}
          onClick={handleSentence}
        >
          Sentence Case
        </button>
        <button
          className={`btn btn-outline-${props.mode === 'light' ? 'primary' : 'light'} m-1`}
          onClick={handleInverseCase}
        >
          Inverse Case
        </button>
        <button
          className={`btn btn-outline-${props.mode === 'light' ? 'primary' : 'light'} m-1`}
          onClick={handleRemoveSpaces}
        >
          Remove Spaces
        </button>
        <button
          className={`btn btn-outline-${props.mode === 'light' ? 'primary' : 'light'} m-1`}
          onClick={handleCopy}
        >
          Copy Text
        </button>

        <button className={`btn btn-outline-${props.mode === 'light' ? 'primary' : 'light'} m-1`} onClick={handleClear}>
          Clear
        </button>
      </div>
      <div className="container" style={{
        color: props.mode === 'dark' ? 'white' : 'black'
      }}>
        <h1>Your Text Summary</h1>
        <p>
          {words} Words and {characters} Characters
        </p>
        <p>{time} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in textbox above to get Preview Here"}</p>
      </div>
    </>
  );
}
