import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import "./style/Gift.css";
import gif from "./img/gif-icon.svg";
import gifTextEn from "./img/gif_text_en.svg";
import gifTextUa from "./img/gif_text_ua.svg";

const Gif = ({setOpenGiftPopup}) => {
    const { t, i18n } = useTranslation();
    const [gifClass, setGifClass] = useState('gif'); 

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.getElementById('footer');
            if (footer) {
                const footerTop = footer.getBoundingClientRect().top;
                if (footerTop < window.innerHeight) {
                    setGifClass('gif gif__hidden'); 
                } else {
                    setGifClass('gif');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleOpenGift = () => {
        setOpenGiftPopup(true);
    }

    return (
		<div onClick={handleOpenGift} className={gifClass}>
			<div className="gif__text" style={{ backgroundImage: i18n.language === 'en' ? `url(${gifTextEn})` : `url(${gifTextUa})` }}></div>
			<div className="gif__background"></div>
			<div className="gif__background2">
				<img src={gif} alt="gif-icon" />
			</div>
		</div>
    );
}

export default Gif;
