import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
// import RoutesConfig from './Route';

const Homepage = lazy(() => import('../modules/homepage/Homepage'));
const Registration = lazy(() => import('../modules/registration/Registration'));
const KnowYourBenefits = lazy(() => import('../modules/knowyourbenefits/KnowYourBenefits'));
const AGM = lazy(() => import('../modules/agm/AGM'));
const Retreat = lazy(() => import('../modules/retreat/Retreat'));

const RouteComponent = () => {
  // console.log('routes', RoutesConfig);
  return (<Suspense fallback={<div className="text-center"><div className="spinner-border text-light" style={{ width: "3rem", height: "3rem" }} role="status">
    <span className="visually-hidden">Loading...</span>
  </div></div>}>
    <Routes>
      <Route
        path="/"
        exact
        element={<Homepage />}
        key={1}
      />
      <Route
        path="/registration"
        exact
        element={<Registration />}
        key={2}
      />
      <Route
        path="/knowyourbenefits"
        exact
        element={<KnowYourBenefits />}
        key={3}
      />
      <Route
        path="/agm"
        exact
        element={<AGM />}
        key={4}
      />
      <Route
        path="/info"
        exact
        element={<Retreat />}
        key={5}
      />
    </Routes>
  </Suspense>);
};

export default RouteComponent;