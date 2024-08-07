
import React, { useState } from "react";

export default function About(props) {
//    const [myStyle, setMyStyle] = useState({
//         color: 'black',
//         backgroundColor: 'white',

//    });

   let myStyle={
    color:props.mode === 'dark'?'white':'#042743',
    backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
   }


//    const toggleStyle = () => {
//       if (myStyle.color === 'black') {
//         setMyStyle({
//             color: 'white',
//             backgroundColor: 'black',
//             border:'1px solid white'
//         });
//         setBtnText("Enable Light Mode");
//       } else {
//         setMyStyle({
//             color: 'black',
//             backgroundColor: 'white',
//         });
//         setBtnText("Enable Dark Mode");
//       }
//    };

   return (
    <div className="container" style={{ color: props.mode==='dark'?'white':'#042743'}}>
        <h1 className="my-3">About us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                        style={myStyle}
                    >
                      <strong> Analyze your text</strong> 
                    </button>
                </h2>
                <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body" style={myStyle}>
                       Textutils gives you a way to analyze your text quickly and efficiently.
                       Be it words count , character count or 
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                        style={myStyle}
                    >
                       <strong> Free to use</strong>
                    </button>
                </h2>
                <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body" style={myStyle}>
                        Textutils is a free character counter tool that provides instant character count 
                        and word count statistics for a given text.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                        style={myStyle}
                    >
                      <strong>Browser Compatible</strong>  
                    </button>
                </h2>
                <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body" style={myStyle}>
                        The word counter software works in a web browser such as chrome,Firefox,
                        Internet Explorer.It suits to count character in facebook, blog, books, excel document etc
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="container my-2">
            <button onClick={toggleStyle} type="button" className="btn btn-primary">
                {btnText}
            </button> */}
        {/* </div> */}
    </div>
  );
}
