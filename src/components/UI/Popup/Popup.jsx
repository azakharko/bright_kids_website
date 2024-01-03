import React from 'react'
import { MutatingDots } from 'react-loader-spinner'
import "./style/Popup.css"

const Popup = () => {
  return (
	<div className='popup'>
		<MutatingDots
			visible={true}
			height="150"
			width="150"
			color="#fff"
			secondaryColor="#01C4C2"
			radius="12"
			ariaLabel="mutating-dots-loading"
		/>
	</div>
  )
}

export default Popup;
