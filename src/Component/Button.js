import React from 'react';
import './Button.scoped.css';

class Button extends React.Component {
	render() {
		return (
			<div className='button-design' style={{ maxWidth: this.props.maxWidth, ...this.props.style }}>
				<a href={this.props.link} className='button-link' target={this.props.target}>
					<p
						style={{
							minWidth: this.props.minWidth,
							fontSize: this.props.size,
							color: this.props.color,
							fontWeight: this.props.fontWeight,
							padding: this.props.padding,
						}}>
						{this.props.text}
					</p>
				</a>
			</div>
		);
	}
}
export default Button;
