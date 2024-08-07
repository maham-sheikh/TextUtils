import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');
    const [history, setHistory] = useState(['']);
    const [pointer, setPointer] = useState(0);

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        updateHistory(newText);
        props.showAlert("Converted to upper case!", "success");
    };

    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        updateHistory(newText);
        props.showAlert("Converted to lower case!", "success");
    };

    const handleOnChange = (event) => {
        let newText = event.target.value;
        setText(newText);
        updateHistory(newText);
    };

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!", "success");
    };

    const clearText = () => {
        let newText = '';
        setText(newText);
        updateHistory(newText);
        props.showAlert("Text Cleared!", "success");
    };

    const updateHistory = (newText) => {
        const newHistory = history.slice(0, pointer + 1);
        newHistory.push(newText);
        setHistory(newHistory);
        setPointer(newHistory.length - 1);
    };

    const handleRedo = () => {
        if (pointer < history.length - 1) {
            setPointer(pointer + 1);
            setText(history[pointer + 1]);
        }
    };

    const handleUndo = () => {
        if (pointer > 0) {
            setPointer(pointer - 1);
            setText(history[pointer - 1]);
        }
    };

    const removeExtraSpaces = () => {
        let newText = text.split(/\s+/).join(" ");
        setText(newText);
        updateHistory(newText);
        props.showAlert("Extra spaces removed!", "success");
    };

    const countWords = (str) => {
        const trimmedStr = str.trim();
        if (!trimmedStr) {
            return 0;
        }
        return trimmedStr.split(/\s+/).length;
    };

    return (
        <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} >
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    value={text}
                    onChange={handleOnChange}
                    style={{ backgroundColor: props.mode === 'dark' ? '#80808057' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}
                    id="myBox"
                    rows="10"
                ></textarea>
            </div>
            <div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-primary mx-1" onClick={handleLowerClick}>
                    Convert to Lowercase
                </button>
                <button className="btn btn-primary mx-1" onClick={removeExtraSpaces}>
                    Remove Extra Spaces
                </button>
                <button className="btn btn-primary mx-1" onClick={clearText}>
                    Clear Text
                </button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>
                    Copy Text
                </button>
                <button className="btn btn-secondary mx-1" onClick={handleUndo} disabled={pointer === 0}>
                    Undo
                </button>
                <button className="btn btn-secondary mx-1" onClick={handleRedo} disabled={pointer === history.length - 1}>
                    Redo
                </button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Your Text Summary</h1>
                <p>{countWords(text)} words and {text.length} characters</p>
                <p>{0.008 * countWords(text)} Minutes read</p>
                <h2>Preview</h2>
                <button>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
                </button>
            </div>
        </div>
    );
}
