import React ,{useState} from 'react'

export default function TextForm(props) {
   const[text,setText]=useState('enter text')
    const handle=()=>{
        // console.log("uppercase was clicked" + text);
        let newText=text.toUpperCase();

        setText(newText)
    }
    const handle1=()=>{
      // console.log("uppercase was clicked" + text);
      let newText=text.toLowerCase();

      setText(newText)
  }
  const handle2=()=>{
    // console.log("uppercase was clicked" + text);
    let newText=' ';

    setText(newText)
}
const handle4=()=>{
  var newtext=text.split(/[ ]+/);
  setText(newtext.join(" "))
}
const handle3=()=>{
  console.log('im copy');
  var text=document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
}
    const handleOnChange=(event)=>{
        // console.log("on change")
        setText(event.target.value);
    }
    
  return (
    <>
       <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
     <h2>{props.heading}</h2>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
           
 
  
</div>
<button className="btn btn-primary mx-2" onClick={handle}>Convert to uppercase</button>
<button className="btn btn-primary mx-2" onClick={handle1}>Convert to lowercase</button>
<button className="btn btn-primary mx-2" onClick={handle2}>Clear text</button>
<button className="btn btn-primary mx-2" onClick={handle3}>handle copy</button>
<button className="btn btn-primary mx-2" onClick={handle4}>handle spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters </p>
      <p>{0.008*text.split(" ").length} minutes read</p>
      <h2>preview</h2>
      <p>{text.length>0?text:"enter our text"}</p>
    </div>
    </>
  )

}
