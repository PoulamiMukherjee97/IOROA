import React from 'react';
import './Homepage.css';
import Members from '../../assets/Members.xls';
import Carousel from '../../assets/Carousel.json';
import SocialWork from '../../assets/SocialWork.json';
import imageUrlCreation from '../../utils/Utiliy';

const Homepage = () => {
    // console.log();
    const officers = [{
        desg: 'President',
        name: 'Sri Amales Dutta',
        phn: '8336955992',
    },
    {
        desg: 'Vice President',
        name: 'Sri K.G. Ray',
        phn: '9432296528',
    },{
        desg: 'Vice President (Admin.)',
        name: 'Sri K. L. Pramanik',
        phn: '6291967675',
    },{
        desg: 'GENERAL SECRETARY',
        name: 'Sri C. K. Naha',
        phn: '9831059173',
    },{
        desg: 'Jt. Secretary',
        name: 'Sri J. K. Majumder',
        phn: '9836359320',
    },
    {
        desg: 'Treasurer',
        name: 'Sri Kapil Santra',
        phn: '9830970870',
    },
    {
        desg: 'Asstt. Secretary',
        name: 'Sri Gautam Mukherjee',
        phn: '9874451768',
    },
    {
        desg: 'Asstt. Secretary',
        name: 'Sri Alik Dey',
        phn: '9432669655',
    }
];
    const members = [{
        name: 'Shri R. K. Patra',
        phn: '9932024160',
    },
    {
        name: 'Shri Sankar Nag',
        phn: '8910619140',
    },{
        name: 'Shri Ajoy Roy',
        phn: '9477346487',
    },{
        name: 'Shri Subrata Dutta',
        phn: '9874217472',
    },{
        name: 'Shri Srikanta Santra',
        phn: '9434507353',
    },
    {
        name: 'Shri Dyal Nandi',
        phn: '7439834233',
    },
]
    return (
        <div className="homepage">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {Carousel.map((item) => <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={item.id} className={item.id === 0 ? 'active' : ''} aria-current={item.id === 0} aria-label={`Slide ${item.id + 1}`}></button>)}
                </div>
                <div className="carousel-inner">
                    {Carousel.map((item) => (<div className={`carousel-item ${item.id === 0 ? 'active': ''} h-500`}>
                        <img src={imageUrlCreation(item.src)} className="d-block w-100" alt="..." />
                    </div>))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="rgb(255, 165, 0)" className="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="rgb(255, 165, 0)" className="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="container text-primary-color p-3">
                <div className="row mx-0 mb-4">
                    <div className="col-12 col-md-8">
                        <h3 className="border-bottom-primary py-1">Our Organization</h3>
                        <ol type="a" className="p-3">
                            <li>A registered Organization having a registered office at Kolkata and associated member of APEX Body of Indian Oil  Retired Associations’  New Delhi, to communicate and negotiate with the Corporate office at New Delhi.</li>
                            <li>With the object to promote welfare among the retired officers and their families.</li>
                            <li>To redress the grievance of members arising out of their past or present connections with Indian Oil.</li>
                            <li>To pursue employer that is Indian Oil Corporation Ltd to deal with the members for the justice to our community.</li>
                            <li>To secure for the members the benefits which should have been accrued to them if discriminated against.</li>
                            <li>To help the members against sickness, Old age trouble, and procedure of medical treatment and its reimbursement from Corporation.</li>
                            <li>To make efforts at settlement disputes between Individual officer and his employer in an amicable way.</li>
                            <li>To obtain adequate time to time information regarding the Corporation.</li>
                            <li>To serve society and the downtrodden at the time of need in calamity or crisis in education.</li>
                            <li>At the dire need of members' financial assistance a Trust has been created at All India Level by our APEX body.</li>
                        </ol>
                        <h5 className="mt-4">Basic Information</h5>
                        <p><span className="fw-bold">ADDRESS: 15/C, Surah Cross Lane, Tricon Park, Kolkata-700010 </span><span></span></p>
                        <p><span className="fw-bold">CONTACT INFO: 6291967675 </span><span></span></p>
                        <p><span className="fw-bold">EMAIL: ioclretirees.er@gmail.com </span><span></span></p>
                        <p><span className="fw-bold">PAN CARD NUMBER: AAAAI2835E </span><span></span></p>
                        <p><span className="fw-bold">REGISTRATION ID: SO086554 of 1997-1998 </span><span></span></p>
                    </div>
                    <div className="col-12 col-md-4 text-dark bg-card p-3">
                        <h4>OFFICE BEARERS 2022</h4>
                        <ol className="fw-bold">
                            {officers.map( officer => (<li className="mb-2">{`${officer.desg} : ${officer.name} (M: ${officer.phn})`}</li>))}
                        </ol>
                        <h4>MEMBERS</h4>
                        <ol>
                            {members.map(member => (<li className="mb-2">{`${member.name} (M: ${member.phn})`}</li>))}
                        </ol>
                    </div>
                </div>
                <div className="quote row mx-0 border-primary-color mt-5 p-4">
                    <div className="col-12 p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="rgb(255, 165, 0)" className="bi bi-quote" viewBox="0 0 16 16">
                            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                        </svg>
                        <p className="px-4">On behalf of the Governing Body, I welcome all the members who joined in the near past to this Retired Association. Hope you will also come forward with your possible new ideas to serve better for IOCL, ER retired Officers.</p>
                        <div className="d-flex justify-content-end fw-bold">- C.K Naha<br />General Secretary</div>
                    </div>
                </div>
                <div className="mt-5">
                    <h4 className="mb-3">View the Updated Member's List</h4>
                    <a href={Members} download className="mt-2 text-decoration-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="rgb(255, 165, 0)" className="bi bi-filetype-xls" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM6.472 15.29a1.176 1.176 0 0 1-.111-.449h.765a.578.578 0 0 0 .254.384c.07.049.154.087.25.114.095.028.202.041.319.041.164 0 .302-.023.413-.07a.559.559 0 0 0 .255-.193.507.507 0 0 0 .085-.29.387.387 0 0 0-.153-.326c-.101-.08-.255-.144-.462-.193l-.619-.143a1.72 1.72 0 0 1-.539-.214 1.001 1.001 0 0 1-.351-.367 1.068 1.068 0 0 1-.123-.524c0-.244.063-.457.19-.639.127-.181.303-.322.527-.422.225-.1.484-.149.777-.149.305 0 .564.05.78.152.216.102.383.239.5.41.12.17.186.359.2.566h-.75a.56.56 0 0 0-.12-.258.625.625 0 0 0-.247-.181.923.923 0 0 0-.369-.068c-.217 0-.388.05-.513.152a.472.472 0 0 0-.184.384c0 .121.048.22.143.3a.97.97 0 0 0 .405.175l.62.143c.217.05.406.12.566.211a1 1 0 0 1 .375.358c.09.148.135.335.135.56 0 .247-.063.466-.188.656a1.216 1.216 0 0 1-.539.439c-.234.105-.52.158-.858.158-.254 0-.476-.03-.665-.09a1.404 1.404 0 0 1-.478-.252 1.13 1.13 0 0 1-.29-.375Zm-2.945-3.358h-.893L1.81 13.37h-.036l-.832-1.438h-.93l1.227 1.983L0 15.931h.861l.853-1.415h.035l.85 1.415h.908L2.253 13.94l1.274-2.007Zm2.727 3.325H4.557v-3.325h-.79v4h2.487v-.675Z" />
                        </svg>
                        <span className="px-2 text-primary-color">Member's List</span>
                    </a>
                </div>
                <div className="mt-5">
                <h4 className="mb-3">Our Social Work</h4>
                {SocialWork.map((work) => (work.id / 2 ===0?<div className="row mx-0 border-primary-color mb-3">
                    <div className="col-md-8 p-5 d-flex justify-content-center align-items-center">
                        <h5>{work.text}</h5>
                    </div>
                    <div className="col-md-4 d-flex achievements-img px-0">
                        <img src={imageUrlCreation(work.src)} width="300px" height="300px" />
                    </div>
                </div> : <div className="row mx-0 border-primary-color mb-3 even">
                    <div className="col-md-4 d-flex achievements-img-evn px-0">
                        <img src={imageUrlCreation(work.src)} width="300px" height="300px" />
                    </div>
                    <div className="col-md-8 p-5 d-flex justify-content-center align-items-center">
                        <h5>{work.text}</h5>
                    </div>
                </div>
                ))}
                </div>
            </div>

        </div>
    );
};

export default Homepage;