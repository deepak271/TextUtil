import React,{useState} from 'react'

export default function Home() {
    var x;
    const [text,setText]=useState('tetx');
    function getText(e){
        const x=e.target.value;
        setText(x);
    }
    function toUpper(e){
        let y = text.toUpperCase();
        setText(y);
    }
    function clearText(){
        setText('');
    }
  return (
    <div>
      <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Text</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={getText}></textarea>
</div>
<button className='btn btn-primary mx-2' onClick={toUpper}>ToUpper</button>
<button className='btn btn-primary' onClick={clearText}>clear</button>
    </div>
  )
}
