import React, { PureComponent } from "react";

import axios from 'axios';
import { connect } from 'react-redux';

class Package extends PureComponent {
  state = {
    packages: []
  }
  
  componentDidMount() {
    const query = 'angular/core';
    axios.get(`https://api.npms.io/v2/search/suggestions?${query}`)
      .then(res => {
        const packages = res.data;
        this.setState({ packages });
      })
  }

  render() {
    if (!packages.length) {
      return (
        <div>
          No Package
      </div>
      )
    }

    return (
      <div>
        {packages.map(package => {
          return (
            <Package package={package} key={Package._id} />
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    packages: state.packages
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);

export default Package;



