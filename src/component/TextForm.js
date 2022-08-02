import React,{useState} from 'react'


export default function TextForm(props) {
    const handleExtraspace = ()=>{

   let newText = text.split(/[ ]+/);
   setText(newText.join (" "));
//    console.log("delete extra space");
   props.showAlert("Extra spaces are deleted","success");

    }
    const handleCopy = ()=>{
      
        let text = document.querySelector("textarea");
        text.select();

        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is copied to clipboard","success");

    }
   const handleupclick = () =>{
        console.log('button is clicked');
        let newText = text.toUpperCase();
        setText( newText);
        props.showAlert("text changed to uppercase","success");

    }
    
   const handleloclick = () =>{
    console.log('button is clicked');
    let newText = text.toLowerCase();
    setText( newText);
    props.showAlert("text changed to lowercase","success");

}
  const  handleonchange = (event) =>{
        console.log('changes have been made');
        setText(event.target.value);
    }
    const [text,setText] = useState('enter the text here');
    
    const wpm = ( ) =>{
        let time = text.split(" ").length*0.003;
        // let T = time;
        if (time<1) {
            let time = text.split(" ").length*0.2;
            let T = time+" seconds";
            console.log(time+"in sec");
            return T;
        }
        else{
            let time = text.split(" ").length*0.003;
            let T = time+" minutes";
            console.log(time+"in minutes");
            return T;
        }

          }
    return(
    <div >
        <h1>{props.heading}</h1>
        <div className ="textarea">
                <div className="input-group ">
                    <span className={`text-${props.mode==='light'?'dark':'light'} bg-${props.mode} input-group-text`}>With textarea</span>
                    <textarea className={`text-${props.mode==='light'?'dark':'light'} form-control bg-${props.mode} ` }value={text} onChange ={handleonchange} aria-label="With textarea" style={{backgroundColor: props.mode==='white'?'grey':'white'}}></textarea>
                </div>       
        </div>
        <h3>your text summary</h3>
        <button disabled={text.length===0} className="btn-primary btn" onClick = {handleupclick}>uppercase</button>
        <button disabled={text.length===0} className="btn-primary btn" onClick = {handleloclick}>lowercase</button>
        <button disabled={text.length===0} className="btn-primary btn" onClick = {handleCopy}>copy to clipboard</button>
        <button disabled={text.length===0} className="btn-primary btn" onClick = {handleExtraspace}>delete extra space</button>

        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words <br /> {text.length} char <br />
        it will take you {wpm()}</p>
        <p>priview- <br/> {text}</p>
        
    </div>
   
    )
};
