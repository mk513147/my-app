import React, { useState } from 'react'


export default function TextForm(props) {
    const upCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const lowCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    const altUpCase = () => {
        let newText = '';
        for (let i = 0; i < text.length; i++) {
            if (i % 2 === 0) {
                newText += text[i].toUpperCase();
            } else {
                newText += text[i].toLowerCase();
            }
        }
        setText(newText);
    };

    const invCase = () => {
        let newText = '';
        for (let i = 0; i < text.length; i++) {
            if (text[i] === text[i].toUpperCase()) {
                newText += text[i].toLowerCase();
            } else {
                newText += text[i].toUpperCase();
            }
        }
        setText(newText);
    };

    const firstLetterUpCase = () => {
        let result = '';
        let capitalizeNext = true;

        for (let i = 0; i < text.length; i++) {
            if (capitalizeNext && text[i] !== ' ') {
                result += text[i].toUpperCase();
                capitalizeNext = false;
            } else {
                result += text[i];
            }

            if (text[i] === '.') {
                capitalizeNext = true;
            }
        }
        setText(result);
    }

    const clear = () => {
        let newText = '';
        setText(newText);
    };

    const copyText = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");
    };

    const removeSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    };

    const handleOnChange = (e) => {
        setText(e.target.value);
    };

    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>{props.placeholder}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{
                        backgroundColor: props.mode === 'dark' ? '#464a4a' : 'white',
                        color: props.mode === 'dark' ? 'white' : 'black'
                    }}
                        id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-danger mx-1 my-1" onClick={clear}>Clear</button>
                <button className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy Text</button>
                <button className="btn btn-info mx-1 my-1" onClick={upCase}>TO UPPERCASE</button>
                <button className="btn btn-info mx-1 my-1" onClick={lowCase}>to lowercase</button>
                <button className="btn btn-info mx-1 my-1" onClick={invCase}>iNVERSE cASE</button>
                <button className="btn btn-info mx-1 my-1" onClick={firstLetterUpCase}>Sentence Case</button>
                <button className="btn btn-info mx-1 my-1" onClick={altUpCase}>AlTeRnAtE CaSe</button>
                <button className="btn btn-info mx-1 my-1" onClick={removeSpace}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h4>Text Summary:-</h4>
                <p>{text.length>0 ? text.trim().split(" ").length: 0} words and {text.length} characters</p>
                <p>Average time required to read - {0.008 * text.split(" ").length} Minutes</p>
                <h4>Text Preview -</h4>
                <p>{text.length > 0 ? text:"Enter to preview your text....."}</p>
            </div>
        </>
    )
}
