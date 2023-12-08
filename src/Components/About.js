import React from 'react'

export default function About(props) {
  return (
    <div class="accordion" id="accordionPanelsStayOpenExample">
        <h1 style={{color:props.mode==='dark'?'white' : (props.gmode==='green'?'white' : 'black')}}>About Us</h1>
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                About Our Service
            </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
            <div class="accordion-body">
                <strong>It is a free service!</strong> You can manipulate your text in the way you want. Here we also provide you with green and dark modes to make your user expeirence comfortable.
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                Know about features.
            </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
            <div class="accordion-body">
                <strong>Know here about UpperCase, Lowercase, reverse, Undo,Clear Text and copy.</strong> On clicking on the following buttons they will respond you in the same way. They are interactive.
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                Thank You!
            </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
            <div class="accordion-body">
                <strong>Thank You for choosing us.</strong> Wish to get you back here soon.
            </div>
            </div>
        </div>
    </div>
  )
}
