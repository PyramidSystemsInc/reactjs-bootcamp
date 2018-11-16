import React from 'react';
import { hot } from 'react-hot-loader';
import './search-applicant.scss';

class SearchApplicant extends React.Component {
  render() {
    return (
      <div className="nass-search-applicant-component">
        <span>Hello from Search Applicant</span>
      </div>
    );
  }
}

export default hot(module)(SearchApplicant);
