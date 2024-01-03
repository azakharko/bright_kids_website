import React from 'react'
import { useTranslation } from 'react-i18next';
import "./style/Media.css"

const Media = () => {
	const { t } = useTranslation();
  return (
	<div className='media'>
	  <p className='media__title'>{t("MediaPage.title")}</p>

	  <div className="media__box">
		<a target='_blank' href="https://www.holosameryky.com/a/ukrainsky-onlain-schkoly-ssha/5774451.html">
			<div className="media__box-img media__box-img1"></div>
		</a>
		<a target='_blank' href="https://voyageaustin.com/interview/hidden-gems-meet-nadiya-zhurba-of-bright-kids-ukrainian-online-school/">
			<div className="media__box-img media__box-img2"></div>
		</a>
	  </div>

	</div>
  )
}

export default Media;
