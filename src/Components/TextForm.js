import React,{useState} from 'react';

export default function TextForm(props) {

  const [Text, setText] = useState('Enter your Text');
  const [history,UpdateHistory] = useState([]);
  
  //for upper case
  const handleUpClick = () => {
    setText(Text.toUpperCase())
    props.showAlert("Success: Text has been converted to uppercase");
  }
  //for lower case
  const handleLoClick = () => {
    setText(Text.toLowerCase())
    props.showAlert("Success: Text has been converted to Lowercase");
  };
  //for clearing text
  const handleClear = () => {
    setText('');
  };

  //reverse
  const reverse = () => {
    let splitWord = Text.split("");

    let reverseWord = splitWord.reverse("");
    let joinedWords = reverseWord.join("");
    let newText = joinedWords

    setText(newText);
    props.showAlert("Text is reversed");
  };

  //copy text
  const handleCopy = () => {
    var Text = document.getElementById("TextArea");
    Text.select();
    navigator.clipboard.writeText(Text.value);
    props.showAlert("Text copied to clipboard");
  }

  //undo 
  const handleUndo =() => {
    if(history.length >1){
      const newHistory = [...history]
      newHistory.pop();
      UpdateHistory(newHistory);
      setText(newHistory[newHistory.length-1]);

    }
  }



  //for entering text
  const handleOnChange = (event) => {
    console.log("change me");
    setText(event.target.value)
    UpdateHistory((prevhistory)=>[...prevhistory,event.target.value]);
  }

  
  return (
    <>
   <div className="Container" style={{color:props.mode==='dark'?'white' : (props.gmode==='green'?'white' : 'black')}}>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" id="TextArea" value= {Text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#4f4f5e' : (props.gmode==='green'?'#a5d7c0' : 'white') , color: props.mode==='dark' ? 'white' : (props.gmode==='green'?'black' : 'black')}} rows="10"></textarea>
      </div>

      <button className="btn mx-2 my-2" style={{backgroundColor:props.mode==='dark'?'white' : (props.gmode==='green'?'white' : 'black') , color:props.mode==='dark'?'black' : (props.gmode==='green'?'black' : 'white')}} onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn mx-2 my-2" style={{backgroundColor:props.mode==='dark'?'white' : (props.gmode==='green'?'white' : 'black') , color:props.mode==='dark'?'black' : (props.gmode==='green'?'black' : 'white')}} onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn mx-2 my-2" style={{backgroundColor:props.mode==='dark'?'white' : (props.gmode==='green'?'white' : 'black') , color:props.mode==='dark'?'black' : (props.gmode==='green'?'black' : 'white')}} onClick={handleClear}>Clear Text</button>
      <button className="btn mx-2 my-2" style={{backgroundColor:props.mode==='dark'?'white' : (props.gmode==='green'?'white' : 'black') , color:props.mode==='dark'?'black' : (props.gmode==='green'?'black' : 'white')}} onClick={reverse} title='reverse'><i className="fa fa-backward"/></button>
      <button className="btn mx-2 my-2" style={{backgroundColor:props.mode==='dark'?'white' : (props.gmode==='green'?'white' : 'black') , color:props.mode==='dark'?'black' : (props.gmode==='green'?'black' : 'white')}} onClick={handleCopy}>Copy Text</button>
      <button className="btn mx-2 my-2" style={{backgroundColor:props.mode==='dark'?'white' : (props.gmode==='green'?'white' : 'black') , color:props.mode==='dark'?'black' : (props.gmode==='green'?'black' : 'white')}} onClick={handleUndo}>Undo</button>


    </div>
    <div className="Container my-4" style={{color:props.mode==='dark'?'white' : (props.gmode==='green'?'white' : 'black')}}>
      <h3>Your Text Summary</h3>
      <p>Your Text has {Text.split(" ").length} words and {Text.length} characters.</p>
      <p>{0.008 * Text.split(" ").length} minutes read</p>
      <h3>Preview of your entered text</h3>
      <p>{Text.length >0 ? Text : "Enter something in text box"}</p>
    </div>
   </>
  )
}
