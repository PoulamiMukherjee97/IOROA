import React, { useState } from 'react';
import './AGM.css';
import AGMDetails from '../../assets/AGM.json';
import imageUrlCreation from '../../utils/Utiliy';

const AGM = () => {
    const [isClicked, setIsClicked] = useState([true]);
    const [isImageClicked, setIsImageClicked] = useState([true]);
    const [ind, setInd] = useState(0);

    const itemClickHandler = (index) => {
        const clicked = new Array(4);
        clicked.splice(index, 1, !isClicked[index]);
        setIsClicked(clicked);
        // console.log(index);
    }
    const imageClickHandler = (index) => {
        setInd(index);
        const clicked = new Array(4);
        clicked.splice(index, 1, true);
        setIsImageClicked(clicked);
    }
    const nextButtonHandler = () =>{
        let indCopy = ind;
        indCopy++;
        setInd(indCopy);
        const clicked = new Array(4);
        clicked.splice(indCopy, 1, true);
        setIsImageClicked(clicked);
    }
    const prevButtonHandler = () =>{
        let indCopy = ind;
        indCopy--;
        setInd(indCopy);
        const clicked = new Array(4);
        clicked.splice(indCopy, 1, true);
        setIsImageClicked(clicked);
    }
    return (
        <div className="container text-primary-color p-3">
            <ul className="px-0 border-primary-color py-2">
                {AGMDetails.map((item, index) => (<li className="p-2 d-flex justify-content-center flex-direction-column">
                    <button class="btn btn-lg btn-transperant text-primary-color btn-primary-color" onClick={() => itemClickHandler(index)}>{item.label}</button>
                    {isClicked[index] &&
                        <div className="d-flex justify-content-center p-1">
                            {ind!==0 && <button className="d-block d-md-none my-auto btn btn-lg btn-transperant px-0" onClick={prevButtonHandler}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="rgb(255, 165, 0)" className="bi bi-chevron-left" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                </svg>
                            </button>}
                            <div className="row mx-0">
                            {item.img.map((image, index) => (isImageClicked[index] ? <div className="d-flex justify-content-center col-12"><img src={imageUrlCreation(image)} alt="" className='d-block h-500-w-50' onClick={() => imageClickHandler(index)} /></div> : ''))}
                            <div className="d-none d-md-flex col-12 justify-content-center mt-3"><h4>Click on the page to view it</h4></div>
                            <div className="d-none d-md-flex mt-3 col-12 justify-content-center">{item.img.map((image, index) => (<div><img src={imageUrlCreation(image)} alt="" className='px-2 d-none d-md-flex h-250 my-auto blur mx-1' onClick={() => imageClickHandler(index)} />
                            <div className="page-num" onClick={() => imageClickHandler(index)}>{index+1}</div></div>
                        ))}
                        </div>
                        </div>
                            {ind!==item.img.length-1 && <button className="d-block d-md-none my-auto btn btn-lg btn-transperant px-0" onClick={nextButtonHandler}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="rgb(255, 165, 0)" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </button>}
                        </div>
                    }
                </li>
                ))}
            </ul>
        </div>
    );
};

export default AGM;