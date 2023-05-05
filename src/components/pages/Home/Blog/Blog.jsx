import React from 'react';
import QApicture from "../../../../assets/questions-answers.jpg"
import { Button, Container } from 'react-bootstrap';
import Pdf from "react-to-pdf";
const ref = React.createRef();
const Blog = () => {
    return (
        <Container>
            <div className='text-center '>
                <img className='w-50' style={{ height: "150px" }} src={QApicture} alt="" />
            </div>
           <div className='d-flex  
           justify-content-between 
           align-items-center'>

           <h5 className='mt-3 text-primary'>To genearate a pdf of the this page, please click on the Generate Pdf button. </h5>
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <Button variant='secondary' onClick={toPdf}>Generate Pdf</Button>}
            </Pdf>

           </div>
            <div ref={ref}>

                <div className='m-2'
                >
                    <div className='mt-4'>
                        <h4 >1. Tell the differences between uncontrolled and controlled components.</h4>
                        <p><strong>Ans:</strong> An uncontrolled functional component is a component that maintains its own internal state. More difficult to debug. More complex code. Data flows within the component.
                            A controlled functional component is a component that receives its current value and update callback via props. Easier to debug. Less complex code. Data flows from parent component to component. </p>
                    </div>

                    <div className='mt-4'>
                        <h4 >2. How to validate React props using PropTypes.</h4>
                        <p><strong>Ans:</strong> PropTypes is used for props validation. PropTypes is React’s internal mechanism for adding type checking to component props. React components use a special property called propTypes. When props are passed to a React component, they are checked against the type definitions configured in the propTypes property. When an invalid value is passed for a prop, a warning is displayed on the JavaScript. If default props are set for the React component, the values are first resolved before type checking against propTypes. Therefore, default values are also subject to the prop type definitions.</p>
                    </div>

                    <div className='mt-4'>
                        <h4 >3. Tell the difference between nodejs and express js.</h4>
                        <p><strong>Ans:</strong> NodeJS is open-source, cross-platform JavaScript code that runs on servers.
                            <ul>
                                <li>It has unmatchable speed due to its non-blocking architecture and event loop feature.
                                </li>
                                <li> It is highly scalable despite its single-threadedness.
                                </li>
                                <li>It makes debugging easy as it uses Google Chrome’s V8 JavaScript engine to execute code.</li>
                                <li>It has a large library of various JavaScript modules that simplifies the development of web applications using NodeJS to a great extent.</li>
                            </ul>
                            ExpressJS is a web application framework for NodeJS. It is easy to use and offers a robust set of features.
                            <ul>
                                <li>It has powerful routing APIs.
                                </li>
                                <li>It has an extendable and customizable architecture.
                                </li>
                                <li>
                                    It provides various HTTP utility methods and middleware.
                                </li>
                                <li>It can be easily integrated with databases like MongoDB, Redis, etc.</li>
                            </ul></p>
                    </div>


                    <div className='mt-4'>
                        <h4 >4. What is a custom hook, and why will you create a custom hook?</h4>
                        <p><strong>Ans:</strong> Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. A custom hook is a special JavaScript function whose name starts with ‘use’ and can be used to call other hooks.
                            Custom React JS hooks offer three major benefits over standard library hooks: Reusability, readability, and testability. Because of this, we create a custom hook. </p>
                    </div>
                </div>

            </div>

        </Container>
    );
};

export default Blog;