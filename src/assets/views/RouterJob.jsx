import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutJob from '../components/CreateJob/AboutJob';
import ApplicantJob from '../components/CreateJob/ApplicantJob';
import DateRangeJob from '../components/CreateJob/DateRangeJob';

function RouterJob() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={AboutJob} />
        <Route path="/ApplicantJob" component={ApplicantJob} />
        <Route path="/DateRangeJob" component={DateRangeJob} />
      </Router>
    </div>
  );
}

export default RouterJob;
