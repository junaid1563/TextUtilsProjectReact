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
  const handleOnChnage = (e) => {
    // to handle value change of textarea, new values will be added here
    setText(e.target.value);
  };
  const [text, setText] = useState("Enter Text Here....");
  // number of words in textarea
  const words = text.split(" ").length;
  // number of characters in textarea
  const characters = text.length;
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
