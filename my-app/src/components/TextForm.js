import React, {useState} from 'react'


export default function TextForm(props) {
  
  const handleUpClick=()=>{
    let newText= text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase!", "success")
  }

  const handleOnChange=(event)=>{
    setText(event.target.value)
  }

  const handleLowpClick=()=>{
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase!", "success")
  }

  const handleColorClick=()=>{
    let c= Math.random()
    let newColor
    if(c<=1/3){
      newColor = 'blue'
    }else if(c>1/3 && c<2/3){
      newColor= 'red'
    }else{
      newColor='black'
    }
    setColor(newColor)
    props.showAlert("Changed Color", "success")
  }
  const handleClear=()=>{
    let newText=''
    setText(newText)
    props.showAlert("Cleared Text", "success")
  }
  const handleCopy=()=>{
    navigator.clipboard.writeText(text)
    props.showAlert("Copied to Clipboard", "success")
  }
  const [text, setText]= useState('');
  const [color, setColor]= useState('black');
  
  
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'? 'white': 'black'}}>
          <h1>{props.heading} </h1>
          <div className="mb-3">
          <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{color:color, backgroundColor:props.mode==='dark' ?'#13466e':'white'}}></textarea>
    </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowpClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleColorClick}>Change Color</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear Text</button>
    </div>
    <div className="my-2 mx-3">
    <button disabled={text.length===0}  className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'? 'white': 'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(/\s+/).filter((element) => element.length !== 0).length} Words and {text.length} characters</p>
      <p>{0.008 * text.split(/\s+/).filter((element) => element.length !== 0).length} <b>minutes-Time to read</b></p>
      <h3>Preview</h3>
      <p>{text.length>0? text: 'Nothing to preview'}</p>
    </div>
    </>
  )
}
