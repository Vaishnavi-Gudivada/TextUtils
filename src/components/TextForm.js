import React,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase!","success");
    }
    const handleLoClick=()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase!","success");
    }
    const handleClear = () =>{
        let newText = '';
        setText(newText);
        props.showAlert("Cleared the Text!","success");
    }
    const handleOnChange=(event)=>{
        //console.log("On change");
        setText(event.target.value);
        
    }

    const handleCopy = () =>{
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard!","success");
    }

    const handleExtraspaces = () =>{
        let newText = text.split(/[ ] +/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces have been removed!","success");
    }
    const [text,setText] = useState('Enter text here');
   
  return (
    <>
    <div className="container" style={{color:props.mode ==='dark'?'white':'#042743'}}>
       <h1> {props.heading}</h1>
       <div className="mb-3">
       <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark'?'grey':'white',color:props.mode ==='dark'?'white':'#042743'}} id="myBox" rows="3"></textarea>
       </div>
       <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
       <button type="button" className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
       <button type="button" className="btn btn-primary mx-1" onClick={handleClear}>ClearText</button>
       <button type="button" className="btn btn-primary mx-1" onClick={handleCopy}>CopyText</button>
       <button type="button" className="btn btn-primary mx-1" onClick={handleExtraspaces}>Remove Extra Spaces</button>
       

    </div>
    <div className= "container" style={{color:props.mode ==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
