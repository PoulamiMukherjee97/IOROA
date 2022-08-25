import { useFormik } from 'formik';
import React, { useState } from 'react';
import axios from 'axios';
import { FocusError } from 'focus-formik-error';
import { phoneRegex } from '../../utils/ValidationRegex';
import './Registration.css';


const validate = (values) => {
  const errors = {};
  if (!values.name.trim()) {
    errors.name = "Please enter your name."
  }
  if (!values.spname.trim()) {
    errors.spname = "Please enter your Spouse's name."
  }
  if (!values.empId.trim()) {
    errors.empId = "Please enter your Employee Number."
  }
  if (!values.dob.trim()) {
    errors.dob = "Please enter your Date of Birth."
  } else if (new Date() < new Date(Date.parse(values.dob))) {
    errors.dob = "Please enter a valid date.";
  }
  if (!values.address.trim()) {
    errors.address = "Please enter your Address."
  }
  if (!values.dor.trim()) {
    errors.dor = "Please enter your Date of Retirement."
  }
  if (!values.unit.trim()) {
    errors.unit = "Please enter your Unit that you served last."
  }
  if (!values.period.trim()) {
    errors.period = "Please enter your Period of Employment."
  }
  if (!values.designation.trim()) {
    errors.designation = "Please enter your Designation on Retirement."
  }
  if (!values.transId.trim()) {
    errors.transId = "Please enter your Transaction ID."
  } if (!values.acknowledgement) {
    errors.acknowledgement = "Please tick the checkbox before submitting."
  }
  if (!values.payment.trim()) {
    errors.payment = "Please select your mode of payment."
  }
  if (!values.emailadd.trim()) {
    errors.emailadd = 'Please remember to enter your email address. This field is required.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailadd)) {
    errors.emailadd = 'Please enter your email address in the following format: johndoe@example.com. This field is required.';
  }
  if (!values.phone.trim()) {
    errors.phone = "Please enter your Mobile Number."
  } else if (!phoneRegex.test(values.phone)) {
    errors.phone = 'Please enter valid 10-digit primary phone number';
  }
  return errors;
};

const Registration = () => {
  const [error, setError] = useState({ status: '', message: '', show: false });
  const [isLoading, setIsLoading] = useState(false);
  const initialValues = {
    name: '',
    namePrefix: 'Shri',
    spNamePrefix: 'Shri',
    spname: '',
    empId: '',
    dob: '',
    address: '',
    dor: '',
    designation: '',
    unit: '',
    period: '',
    emailadd: '',
    phone: '',
    transId: '',
    acknowledgement: false,
    payment: 'netBanking',
  }
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {
      formPostCall(values);
    },
  });
  const formPostCall = (values) => {
    const payload = {
      MEMBER_NAME: `${values.namePrefix} ${values.name}`,
      SPOUSE_NAME: `${values.spNamePrefix} ${values.spname}`,
      EMP_ID: values.empId,
      EMAIL: values.emailadd,
      DATE_OF_BIRTH: values.dob,
      DESIGNATION_ON_RETIREMENT: values.designation,
      DATE_OF_RETIREMENT: values.dor,
      PERIOD_OF_SERVICE: values.period,
      UNIT_LAST_SERVED: values.unit,
      ADDRESS: values.address,
      PHONE_NUMBER: values.phone,
      TRANSACTION_ID: values.transId,
      MODE_OF_PAYMENT: values.payment,
      CONSENT: values.acknowledgement ? 'YES' : 'NO',
      DATE_OF_APPLICATION: new Date(),
    }
    setIsLoading(true);
    axios.post('https://zwtwvuqe3h.execute-api.ap-south-1.amazonaws.com/dev/registration', { body: payload }).then(res => {
      // const serviceResponse = res;
      setIsLoading(false);
      if (res.status === 200 || res.status === 201) {
        const errorObj = { show: true, status: 'success', message: 'Your response has been succesfully saved. Welcome to IOROA' };
        setError(errorObj);
      }
      else {
        const errorObj = { show: true, status: 'failure', message: 'Sorry your response was not registered. Please try again later' };
        setError(errorObj);
      }
    }).catch(err => {
      setIsLoading(false);
      const errorObj = { show: true, status: 'failure', message: 'Sorry your response was not registered. Please try again later' };
      setError(errorObj);
    });
  };
  return (
    !isLoading ? (<div className="container px-3">
      <form className="form p-3 my-3" onSubmit={formik.handleSubmit}>
        <FocusError formik={formik} />
        {error.show && <div className={error.status === 'success' ? 'text-center fw-bold alert alert-success' : "text-center fw-bold alert alert-danger"}>{error.message}</div>}
        <p className="fw-bold fst-italic p-2 text-danger note">Note: All fields marked * are mandatory</p>
        <div className="row mx-0 mb-3 p-2 ">
          <h4 className="mt-2 mb-3 fw-bold text-center text-decoration-underline">&nbsp;PERSONAL INFORMATION&nbsp;</h4>
          <div className="row mx-0 mb-3 justify-content-center">
            <select className="col-12 col-md-2 mt-4 mb-md-0 mb-3 height-fix" id="namePrefix" value={formik.values.namePrefix} onBlur={formik.handleBlur} onChange={formik.handleChange}>
              <option value="Shri">Shri</option>
              <option value="Smt">Smt</option>
            </select>
            <div className="col-12 col-md-10 px-0 px-md-3">
              <label htmlFor="name" className="mb-1">Name<span className="text-danger">&#42;</span></label>
              <input type="text" id="name" className="form-control" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              {formik.errors.name && formik.touched.name ? <p className="text-danger fw-bold mb-0">{formik.errors.name}</p> : ''}
            </div>
          </div>
          <div className="row mx-0 mb-3 justify-content-center">
            <select className="col-12 col-md-2 mt-md-4 mt-0 mb-md-0 mb-3 height-fix" id="spNamePrefix" value={formik.values.spNamePrefix} onBlur={formik.handleBlur} onChange={formik.handleChange}>
              <option value="Shri">Shri</option>
              <option value="Smt">Smt</option>
            </select>
            <div className="col-12 col-md-10 px-0 px-md-3">
              <label htmlFor="spname" className="mb-1">Name of Spouse<span className="text-danger">&#42;</span></label>
              <input type="text" id="spname" className="form-control" value={formik.values.spname} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              {formik.errors.spname && formik.touched.spname ? <p className="text-danger fw-bold mb-0">{formik.errors.spname}</p> : ''}
            </div>
          </div>
          <div className="row mx-0 mb-3 justify-content-center">
            <div className="col-12 col-md-7 px-0">
              <label htmlFor="empId" className="mb-1">Employee Number<span className="text-danger">&#42;</span></label>
              <input type="text" id="empId" className="form-control" value={formik.values.empId} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              {formik.errors.empId && formik.touched.empId ? <p className="text-danger fw-bold mb-0">{formik.errors.empId}</p> : ''}
            </div>
            <div className="col-12 col-md-5 px-0 px-md-2">
              <label htmlFor="dob" className="mb-1">Date of Birth<span className="text-danger">&#42;</span></label>
              <input type="date" id="dob" className="form-control" value={formik.values.dob} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              {formik.errors.dob && formik.touched.dob ? <p className="text-danger fw-bold mb-0">{formik.errors.dob}</p> : ''}
            </div>
          </div>
          <div className="row mx-0 justify-content-center mb-3">
            <div className="col-12 px-0">
              <label htmlFor="address" className="mb-1">Permanent Address<span className="text-danger">&#42;</span></label>
              <input type="text" id="address" className="form-control" value={formik.values.address} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              {formik.errors.address && formik.touched.address ? <p className="text-danger fw-bold mb-0">{formik.errors.address}</p> : ''}
            </div>
          </div>
          <div className="row mx-0 justify-content-center mb-3">
            <div className="col-12 col-md-4 px-0 mb-md-0 mb-3">
              <label htmlFor="dor" className="mb-1">Date of retirement<span className="text-danger">&#42;</span></label>
              <input type="date" id="dor" className="form-control" value={formik.values.dor} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              {formik.errors.dor && formik.touched.dor ? <p className="text-danger fw-bold mb-0">{formik.errors.dor}</p> : ''}

            </div>
            <div className="col-12 col-md-8 px-md-2 px-0">
              <label htmlFor="designation" className="mb-1">Designation on Superannuation<span className="text-danger">&#42;</span></label>
              <input type="text" id="designation" className="form-control" value={formik.values.designation} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              {formik.errors.designation && formik.touched.designation ? <p className="text-danger fw-bold mb-0">{formik.errors.designation}</p> : ''}

            </div>
          </div>
          <div className="row mx-0 justify-content-center mb-3">
            <div className="col-12 col-md-6 px-0 mb-3 mb-md-0">
              <label htmlFor="unit" className="mb-1">Unit last served<span className="text-danger">&#42;</span></label>
              <input type="text" id="unit" className="form-control" value={formik.values.unit} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              {formik.errors.unit && formik.touched.unit ? <p className="text-danger fw-bold mb-0">{formik.errors.unit}</p> : ''}

            </div>
            <div className="col-12 col-md-6 px-md-2 px-0">
              <label htmlFor="period" className="mb-1">Period of employment<span className="text-danger">&#42;</span></label>
              <input type="text" id="period" className="form-control" value={formik.values.period} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              {formik.errors.period && formik.touched.period ? <p className="text-danger fw-bold mb-0">{formik.errors.period}</p> : ''}

            </div>
          </div>
          <div className="row mx-0 justify-content-center mb-3">
            <div className="col-12 col-md-6 px-0 mb-3 mb-md-0">
              <label htmlFor="phone" className="mb-1">Mobile Number<span className="text-danger">&#42;</span></label>
              <input type="text" id="phone" className="form-control" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              {formik.errors.phone && formik.touched.phone ? <p className="text-danger fw-bold mb-0">{formik.errors.phone}</p> : ''}

            </div>
            <div className="col-12 col-md-6 px-md-2 px-0">
              <label htmlFor="emailadd" className="mb-1">Email ID<span className="text-danger">&#42;</span></label>
              <input type="text" id="emailadd" className="form-control" value={formik.values.emailadd} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              {formik.errors.emailadd && formik.touched.emailadd ? <p className="text-danger fw-bold mb-0">{formik.errors.emailadd}</p> : ''}
            </div>
          </div>
        </div>
        <div className="row mx-0 mb-3 p-2">
          <h4 className="px-md-2 px-0 mt-2 mb-3 fw-bold text-center text-decoration-underline">&nbsp;PAYMENT INFORMATION&nbsp;</h4>
          <div className="px-4 fw-bold">
            <p>I would like to be a member of Indian Oil Retired Officers' Association and would hereby pay a sum of Rs 3600/- (Three thousand and six hundred only) for my Life Membership to the said Association.</p>
          </div>
          <div className="px-4 mb-3">
            <p className="fw-bold">Please select your preferable mode of payment from the options below.</p>
            <div className="form-check py-2 px-5">
              <input className="form-check-input" type="radio" name="paymentRadios" id="netBanking" checked={formik.values.payment === 'netBanking'} value="netBanking" onClick={() => formik.setFieldValue('payment', 'netBanking')} onChange={formik.handleChange} />
              <label className="form-check-label" htmlFor="netBanking">
                Net Banking/ Account Transfer
                </label>
            </div>
            <div className="form-check py-2 px-5">
              <input className="form-check-input" type="radio" disabled name="paymentRadios" id="upiTransaction" value="upiTransaction" checked={formik.values.payment === 'upiTransaction'} onClick={() => formik.setFieldValue('payment', 'upiTransaction')} onChange={formik.handleChange} />
              <label className="form-check-label" htmlFor="upiTransaction">
                UPI Transaction
              </label>
            </div>
          </div>
          {formik.values.payment === 'netBanking' && (
            <div className="row mx-0 mb-3">
              <p className="fw-bold mb-3">Please find the following deatils to proceed with Net Banking/Account Transfer</p>
              <div className="col-md-6 col-12">
                <p><span>Account Number:</span><span className="fw-bold px-md-2 px-0 d-block d-md-inline">50170000644732</span></p>
              </div>
              <div className="col-md-6 col-12">
                <p><span>Account Holder's Name:</span><span className="fw-bold px-md-2 px-0 d-block d-md-inline">INDIAN OIL RETIRED OFFICERS ASSOCIATION</span></p>
              </div>
              <div className="col-md-6 col-12">
                <p><span>IFSC Code:</span><span className="fw-bold px-md-2 px-0 d-block d-md-inline">BDBL0001505</span></p>
              </div>
              <div className="col-md-6 col-12">
                <p><span>Bank Name:</span><span className="fw-bold px-md-2 px-0 d-block d-md-inline">BANDHAN BANK LTD. BELIAGHATA BR-KOLKATA.</span></p>
              </div>
            </div>
          )}
          {formik.values.payment === 'upiTransaction' && (
            <div className="row mx-0 mb-3">
              <p className="fw-bold">Please find the following deatils to proceed with UPI Transaction</p>
              <div className="col-md-6 col-12">
                <p><span>UPI Id:</span><span className="fw-bold px-md-2 px-0 d-block d-md-inline">gmkjee@.okaxis</span></p>
              </div>
              <div className="col-md-6 col-12">
                <p><span>Holder's Name:</span><span className="fw-bold px-md-2 px-0 d-block d-md-inline">Gautam Mukherjee</span></p>
              </div>
              <div className="col-md-6 col-12">
                <p><span>Phone Number</span><span className="fw-bold px-md-2 px-0 d-block d-md-inline">+91 6291967675</span></p>
              </div>
            </div>
          )}
          <div className="col-12 px-4 mb-3">
            <p className="fw-bold">Please provide the Transaction Id of the payment made</p>
            <div className="col-12 col-md-8">
              <label htmlFor="transId" className="mb-1">Transaction ID<span className="text-danger">&#42;</span></label>
              <input type="text" id="transId" className="form-control" value={formik.values.transId} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              {formik.errors.transId && formik.touched.transId ? <p className="text-danger fw-bold mb-0">{formik.errors.transId}</p> : ''}
            </div>
          </div>
          <div className="col-12 px-4">
            <div className="form-check">
              <input className="form-check-input" checked={formik.values.acknowledgement} type="checkbox" id="acknowledgement" onClick={(e) => formik.setFieldValue('acknowledgement', e.target.checked)} onChange={formik.handleChange} />
              <label className="form-check-label" htmlFor="acknowledgement">
                <p className="mb-1">I hereby acknowledge that all the information provided above is to the best of my knowledge and is correct.</p>
                {formik.errors.acknowledgement && formik.touched.acknowledgement ? <p className="text-danger fw-bold mb-0">{formik.errors.acknowledgement}</p> : ''}
              </label>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-lg btn-dark" type="submit">SUBMIT</button>
        </div>
      </form>
    </div>) : (<div className="text-center"><div className="spinner-border text-light" style={{ width: "3rem", height: "3rem" }} role="status">
      <span className="visually-hidden">Loading...</span>
    </div></div>)
  );
};

export default Registration;
