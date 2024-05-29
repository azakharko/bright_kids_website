import React from 'react';
import LazyLoad from 'react-lazy-load';
import { useTranslation } from 'react-i18next';
import "./style/VideoSection.css";

const VideoHome = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className='video-section'>
            <LazyLoad width={"100%"} offset={100}>
                <div className="video-section__video">
                    {i18n.language === "uk" ? (
                        <iframe
                            style={{ zIndex: 2 }}
                            src="https://www.youtube.com/embed/zktQ3h81QZA?si=eHehtIC7CYREf4SY"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <iframe
                            style={{ zIndex: 2 }}
                            src="https://www.youtube.com/embed/KFLbLojyWWA?si=BJIo8F6d3oe9WkLs"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    )}
                </div>
            </LazyLoad>
        </div>
    );
}

export default VideoHome;
