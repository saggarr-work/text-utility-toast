import React from 'react'

export default function About(props) {
return (
    <div className='container' style={{backgroundColor: props.mode === 'light' ? 'white' : '#141413' , color: props.mode === 'light' ? 'black' : 'white'}}>
        <h4>About Functionality</h4>
        <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={{backgroundColor: props.mode === 'light' ? 'white' : '#141413' , color: props.mode === 'light' ? 'black' : 'white'}}>
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor: props.mode === 'light' ? 'white' : '#343a40' , color: props.mode === 'light' ? 'black' : 'white'}}>
                <b>Total paragraph</b>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                This functionality works when you enter a new paragraph or give a gap between two lines.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={{backgroundColor: props.mode === 'light' ? 'white' : '#141413' , color: props.mode === 'light' ? 'black' : 'white'}}>
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor: props.mode === 'light' ? 'white' : '#343a40' , color: props.mode === 'light' ? 'black' : 'white'}}>
                <b>Total line</b>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                This functionality works when you give a fullstop between two lines or end of a line.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={{backgroundColor: props.mode === 'light' ? 'white' : '#141413' , color: props.mode === 'light' ? 'black' : 'white'}}>
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor: props.mode === 'light' ? 'white' : '#343a40' , color: props.mode === 'light' ? 'black' : 'white'}}>
                <b>Total word</b>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                This functionality works when it get any spaces. It counts when it find two spacees. the word is counted by this function between two spaces.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={{backgroundColor: props.mode === 'light' ? 'white' : '#141413' , color: props.mode === 'light' ? 'black' : 'white'}}>
            <h2 className="accordion-header" id="headingFour">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style={{backgroundColor: props.mode === 'light' ? 'white' : '#343a40' , color: props.mode === 'light' ? 'black' : 'white'}}>
                <b>Total character</b>
            </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                this functionality works when it find any character. whether is is a symbol or operator, the function treat it as a character. 
            </div>
            </div>
        </div>
        <div className="accordion-item" style={{backgroundColor: props.mode === 'light' ? 'white' : '#141413' , color: props.mode === 'light' ? 'black' : 'white'}}>
            <h2 className="accordion-header" id="headingFive">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" style={{backgroundColor: props.mode === 'light' ? 'white' : '#343a40' , color: props.mode === 'light' ? 'black' : 'white'}}>
                <b>Estimated time to read the text</b>
            </button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                This functionality works with a simple calculation, here i have done a simple calculation based on avarage reading ability of a person.
            </div>
            </div>
        </div>
        </div>
    </div>
)
}
