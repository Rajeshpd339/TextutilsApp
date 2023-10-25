import React, { useState } from 'react';

export default function TextForm(props) {
  // Initialize the state for the text input
  const [text, setText] = useState("Enter text here");

  // Function to handle converting the text to uppercase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!","success")
  }

  // Function to handle converting the text to lowercase
  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!","success")
  }

  // Function to clear the text in the input field
  const clearTextField = () => {
    setText(''); // Clear the text by setting it to an empty string
    props.showAlert("TextClear!","success")
  }

  // Function to handle the onchange event of the text input
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const handleCopy=()=>{
    var text=document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied!","success")
    document.getSelection().removeAllRanges()
  }

  const handleExtraSpace=()=>{
    let newText=text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Remove!","success")
  }
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark' ? "white" : "#04027e"}}>
      <h1>{props.heading}</h1> {/* Display the heading from props */}
      <div className="mb-3" >
        <label htmlFor="myBox" className="form-label"></label> {/* Use "htmlFor" instead of "for" */}
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{background: props.mode === 'dark' ? "#746262" : "white",color:props.mode === 'dark' ? "white" : "#04027e"}} id="myBox" rows="8"></textarea>
      </div>
      <button className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button> {/* Updated button label */}
      <button className='btn btn-primary mx-1 my-1' onClick={handleLowerClick}>Convert to Lowercase</button> {/* Updated button label */}
      <button className='btn btn-primary mx-1 my-1' onClick={clearTextField}>Clear TextField</button> {/* Updated button click handler */}
      <button className='btn btn-primary mx-1 my-1' onClick={handleCopy}><i className="fa-regular fa-clipboard"></i>Copy</button>
      <button className='btn btn-primary mx-1 my-1' onClick={handleExtraSpace}>Remove Space</button> {/*mx-1 is used for give the space between two button*/}
      </div>
    <div className='container my-3' style={{color: props.mode === 'dark' ? "white" : "#04027e"}}>
    <h1>Your text summary</h1>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word and {text.length} characters</p>
    <p>{0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length } Minutes Read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it here...."}</p>
    </div>
    </>
  );
}
