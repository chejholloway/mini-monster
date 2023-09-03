import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Package from '../../components/Package/Package';
// import ActionTypes from '../constants/actionTypes';
import { connect } from 'react-redux';

class PackageContainer extends PureComponent {
	constructor(props) {
		super(props);
		this.state = { package: {} };
	}

	componentDidMount() {
		fetch('./json/package.json', (json) => this.setState({ package: json }));
	}

	render() {
		return <Package {...this.state.package} />;
	}
}

export default PackageContainer;
