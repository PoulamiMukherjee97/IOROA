import React from 'react';
import Info from '../../assets/Info.json';
import parse from 'html-react-parser';

const Retreat = () => {
    console.log(Info);
    return (<div className="container text-primary-color border-primary-color p-5 text-center mt-3">
        
            {Info.map(item => (
            <div className="mb-5">
                <h5>{item.title}</h5>
                {parse(item.desc)}
            </div>))}
    </div>)
};

export default Retreat;