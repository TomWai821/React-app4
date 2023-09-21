import React from 'react'

const About = () => {

    return (
        <div>
            <h1>About</h1>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           <strong>Why did you want to make this website?</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Because I want to mark some notes daily and I want to learn how to create a login and signup system in a website.
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Which function components you used in this website?</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        <p>I use 7 function components in this website</p>
                        <p><strong>useState</strong> to set some state to input field(alert message, user email and password etc.)</p>
                        <p><strong>useLocation</strong> to get component file is in location or not</p>
                        <p><strong>useNavigate</strong> to change website route</p>
                        <p><strong>useContext</strong> to create context (notes)</p>
                        <p><strong>useEffect</strong> to render data the website</p>
                        <p><strong>Router, Routes and Route</strong> to create a router domain and set the website location</p>
                        <p><strong>Link</strong> to change website to another page from current page</p>
                        </div>
                    </div>
                </div>


                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>What Client and stack you used in this website?</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>I use <strong>MERN Stack</strong> and <strong>Thunder client</strong></p>
                            <p><strong>MERN</strong> using same programming language (There are 3 framework using javascript and <strong>mongoDB</strong> is noSQL which is fast, scalable and flexible)</p>
                            <p><strong>Thunder Client</strong> can generates requests to retrieve responses quickly and smoothly</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About