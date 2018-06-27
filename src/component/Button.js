import React, { Component } from 'react';

class Button extends Component() {
	handleClick = () => {
		this.props.clickHandler(this.props.name);
	};

	render() {
		return (
			
		);
	}
}