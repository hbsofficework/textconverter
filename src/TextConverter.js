import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


function TextConverter() {
    const [inputText, setInputText] = useState("");
    const [result, setResult] = useState("");

    const handleTextChange = (event) => {
        setInputText(event.target.value);
    };

    const handleUpClick = () => {
        setResult(inputText.toUpperCase());
    };

    const handleLowClick = () => {
        setResult(inputText.toLowerCase());
    };

    const handleClearClick = () => {
        setInputText("");
        setResult("");
    };


    return (
        <div className='container main-div'>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>
                        <h1 className='label-text'>
                            <b>Enter the text for UPPER CASE & lowercase</b>
                        </h1>
                    </Form.Label>
                    <Form.Control as="textarea" value={inputText}
                        onChange={handleTextChange} rows={8} className="custom-textarea"
                        placeholder="Write Text" />
                </Form.Group>
                <Button className='sbutton' onClick={handleUpClick}
                    variant="primary">Convert to Uppercase</Button>
                <Button className='sbutton' onClick={handleLowClick}
                    variant="info">Convert to Lowercase</Button>
                <Button className='sbutton' onClick={handleClearClick}
                    variant="success">Clear Text</Button>
            </Form>
            <h3 className='result-text'>{result}</h3>
        </div>
    )
}

export default TextConverter
