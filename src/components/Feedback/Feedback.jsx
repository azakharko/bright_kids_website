import React from 'react'
import "./style/Feedback.css"

const Feedback = () => {
  return (
	<div className='feedback'>
	  <p className='feedback__title'>What our clients say</p>

	  <div className="feedback__box">
		<div className="feedback__box-message">
			<div className="feedback__photo feedback__photo-img1"></div>
			<div className="feedback__block feedback__block">
				<div className="feedback__block-icon">
					<svg xmlns="http://www.w3.org/2000/svg" width="58" height="55" viewBox="0 0 58 55" fill="none">
					<g filter="url(#filter0_i_84_27)">
						<path d="M55.6234 0H35.405C34.0924 0 33.0271 1.08587 33.0271 2.42626V23.275C33.0271 24.6152 34.0906 25.7013 35.405 25.7013H42.9869C42.635 35.3735 40.0879 40.2727 35.405 40.2727C34.0924 40.2727 33.0271 41.3586 33.0271 42.6989V52.5737C33.0271 53.9133 34.0906 55 35.405 55C39.0881 55 42.4009 54.1984 45.25 52.6233C48.0795 51.0539 50.4937 48.8058 52.4213 45.9357C54.2944 43.1451 55.7146 39.7788 56.6406 35.9261C57.5423 32.168 58 27.9124 58 23.275V2.426C58.0013 1.08587 56.9348 0 55.6234 0ZM22.5947 0H2.37634C1.06498 0 0 1.08587 0 2.42626V23.275C0 24.6152 1.06498 25.7013 2.37634 25.7013H9.85247C9.5036 35.3735 6.99307 40.2727 2.37634 40.2727C1.06498 40.2727 0 41.3586 0 42.6989V52.5737C0 53.9133 1.06498 55 2.37634 55C6.0592 55 9.37351 54.1984 12.2227 52.6233C15.0534 51.0539 17.4661 48.8058 19.3937 45.9357C21.2701 43.1451 22.6898 39.7788 23.616 35.9245C24.5164 32.168 24.9729 27.9124 24.9729 23.2769V2.426C24.9726 1.08587 23.9076 0 22.5947 0Z" fill="#333333"/>
					</g>
					<defs>
						<filter id="filter0_i_84_27" x="0" y="0" width="58" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix"/>
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="1"/>
						<feGaussianBlur stdDeviation="2.9"/>
						<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
						<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
						<feBlend mode="normal" in2="shape" result="effect1_innerShadow_84_27"/>
						</filter>
					</defs>
					</svg>

					<p>My daughter is attending the school and very happy! Thank you for organizing</p>
				</div>

				<p className='feedback__block-author'>Інна Тарасюк</p>
			</div>
		</div>


		<div className="feedback__box-message feedback__box-messageRight">
			<div className="feedback__block feedback__block">
				<div className="feedback__block-icon">
					<svg xmlns="http://www.w3.org/2000/svg" width="58" height="55" viewBox="0 0 58 55" fill="none">
					<g filter="url(#filter0_i_84_27)">
						<path d="M55.6234 0H35.405C34.0924 0 33.0271 1.08587 33.0271 2.42626V23.275C33.0271 24.6152 34.0906 25.7013 35.405 25.7013H42.9869C42.635 35.3735 40.0879 40.2727 35.405 40.2727C34.0924 40.2727 33.0271 41.3586 33.0271 42.6989V52.5737C33.0271 53.9133 34.0906 55 35.405 55C39.0881 55 42.4009 54.1984 45.25 52.6233C48.0795 51.0539 50.4937 48.8058 52.4213 45.9357C54.2944 43.1451 55.7146 39.7788 56.6406 35.9261C57.5423 32.168 58 27.9124 58 23.275V2.426C58.0013 1.08587 56.9348 0 55.6234 0ZM22.5947 0H2.37634C1.06498 0 0 1.08587 0 2.42626V23.275C0 24.6152 1.06498 25.7013 2.37634 25.7013H9.85247C9.5036 35.3735 6.99307 40.2727 2.37634 40.2727C1.06498 40.2727 0 41.3586 0 42.6989V52.5737C0 53.9133 1.06498 55 2.37634 55C6.0592 55 9.37351 54.1984 12.2227 52.6233C15.0534 51.0539 17.4661 48.8058 19.3937 45.9357C21.2701 43.1451 22.6898 39.7788 23.616 35.9245C24.5164 32.168 24.9729 27.9124 24.9729 23.2769V2.426C24.9726 1.08587 23.9076 0 22.5947 0Z" fill="#333333"/>
					</g>
					<defs>
						<filter id="filter0_i_84_27" x="0" y="0" width="58" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix"/>
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="1"/>
						<feGaussianBlur stdDeviation="2.9"/>
						<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
						<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
						<feBlend mode="normal" in2="shape" result="effect1_innerShadow_84_27"/>
						</filter>
					</defs>
					</svg>

					<p>Укроки прекрасні 👍👍 рекомендую.</p>
				</div>

				<p className='feedback__block-author'>Vlad Dvolitko</p>
			</div>
			<div className="feedback__photo feedback__photo-img2"></div>
		</div>


		<div className="feedback__box-message">
			<div className="feedback__photo feedback__photo-img3"></div>
			<div className="feedback__block feedback__block">
				<div className="feedback__block-icon">
					<svg xmlns="http://www.w3.org/2000/svg" width="58" height="55" viewBox="0 0 58 55" fill="none">
					<g filter="url(#filter0_i_84_27)">
						<path d="M55.6234 0H35.405C34.0924 0 33.0271 1.08587 33.0271 2.42626V23.275C33.0271 24.6152 34.0906 25.7013 35.405 25.7013H42.9869C42.635 35.3735 40.0879 40.2727 35.405 40.2727C34.0924 40.2727 33.0271 41.3586 33.0271 42.6989V52.5737C33.0271 53.9133 34.0906 55 35.405 55C39.0881 55 42.4009 54.1984 45.25 52.6233C48.0795 51.0539 50.4937 48.8058 52.4213 45.9357C54.2944 43.1451 55.7146 39.7788 56.6406 35.9261C57.5423 32.168 58 27.9124 58 23.275V2.426C58.0013 1.08587 56.9348 0 55.6234 0ZM22.5947 0H2.37634C1.06498 0 0 1.08587 0 2.42626V23.275C0 24.6152 1.06498 25.7013 2.37634 25.7013H9.85247C9.5036 35.3735 6.99307 40.2727 2.37634 40.2727C1.06498 40.2727 0 41.3586 0 42.6989V52.5737C0 53.9133 1.06498 55 2.37634 55C6.0592 55 9.37351 54.1984 12.2227 52.6233C15.0534 51.0539 17.4661 48.8058 19.3937 45.9357C21.2701 43.1451 22.6898 39.7788 23.616 35.9245C24.5164 32.168 24.9729 27.9124 24.9729 23.2769V2.426C24.9726 1.08587 23.9076 0 22.5947 0Z" fill="#333333"/>
					</g>
					<defs>
						<filter id="filter0_i_84_27" x="0" y="0" width="58" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix"/>
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="1"/>
						<feGaussianBlur stdDeviation="2.9"/>
						<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
						<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
						<feBlend mode="normal" in2="shape" result="effect1_innerShadow_84_27"/>
						</filter>
					</defs>
					</svg>

					<p>Надзвичайно цікаві уроки,  новчили багато нового і корисного!!! дякуємо</p>
				</div>

				<p className='feedback__block-author'>Lilia Balikova</p>
			</div>
		</div>


		<div className="feedback__box-message feedback__box-messageRight">
			<div className="feedback__block feedback__block">
				<div className="feedback__block-icon">
					<svg xmlns="http://www.w3.org/2000/svg" width="58" height="55" viewBox="0 0 58 55" fill="none">
					<g filter="url(#filter0_i_84_27)"> 
						<path d="M55.6234 0H35.405C34.0924 0 33.0271 1.08587 33.0271 2.42626V23.275C33.0271 24.6152 34.0906 25.7013 35.405 25.7013H42.9869C42.635 35.3735 40.0879 40.2727 35.405 40.2727C34.0924 40.2727 33.0271 41.3586 33.0271 42.6989V52.5737C33.0271 53.9133 34.0906 55 35.405 55C39.0881 55 42.4009 54.1984 45.25 52.6233C48.0795 51.0539 50.4937 48.8058 52.4213 45.9357C54.2944 43.1451 55.7146 39.7788 56.6406 35.9261C57.5423 32.168 58 27.9124 58 23.275V2.426C58.0013 1.08587 56.9348 0 55.6234 0ZM22.5947 0H2.37634C1.06498 0 0 1.08587 0 2.42626V23.275C0 24.6152 1.06498 25.7013 2.37634 25.7013H9.85247C9.5036 35.3735 6.99307 40.2727 2.37634 40.2727C1.06498 40.2727 0 41.3586 0 42.6989V52.5737C0 53.9133 1.06498 55 2.37634 55C6.0592 55 9.37351 54.1984 12.2227 52.6233C15.0534 51.0539 17.4661 48.8058 19.3937 45.9357C21.2701 43.1451 22.6898 39.7788 23.616 35.9245C24.5164 32.168 24.9729 27.9124 24.9729 23.2769V2.426C24.9726 1.08587 23.9076 0 22.5947 0Z" fill="#333333"/>
					</g>
					<defs>
						<filter id="filter0_i_84_27" x="0" y="0" width="58" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix"/>
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="1"/>
						<feGaussianBlur stdDeviation="2.9"/>
						<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
						<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
						<feBlend mode="normal" in2="shape" result="effect1_innerShadow_84_27"/>
						</filter>
					</defs>
					</svg>

					<p>Ми дуже задоволені цікавими урокими імпровізації. Дякую за організацію!</p>
				</div>

				<p className='feedback__block-author'>Iryna Archer</p>
			</div>
			<div className="feedback__photo feedback__photo-img4"></div>

		</div>


	  </div>
	</div>
  )
}

export default Feedback;
