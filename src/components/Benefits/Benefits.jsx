import React, { useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import Chart from 'chart.js/auto';
import "./style/Benefits.css";
import Button from '../UI/Button/Button.jsx';

const Benefits = () => {
  const { t } = useTranslation();

  const chartAnimationCallback = useCallback((chartId, animatedNumberId, fromValue, toValue, time, data1, data2) => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateValue(animatedNumberId, fromValue, toValue, time);

          const existingChart = Chart.getChart(chartId);
          if (existingChart) {
            existingChart.destroy();
          }

          const ctx = document.getElementById(chartId).getContext('2d');
          new Chart(ctx, {
            type: 'doughnut',
            data: {
              datasets: [{
                data: [data1, data2],
                backgroundColor: ['#B41D8A', 'rgba(0, 0, 0, 0.20)'],
                borderWidth: 0
              }]
            },
            options: {
              cutout: '80%',
              plugins: {
                tooltip: {
                  enabled: false
                },
              }
            }
          });

          observer.disconnect();
        }
      });
    });

    observer.observe(document.querySelector(`#${chartId}`));
  }, []);

  useEffect(() => {
    chartAnimationCallback('myChart1', 'animatedNumber', 450, 600, 1000, 70, 30);
    chartAnimationCallback('myChart2', 'animatedNumber2', 0, 20, 1000, 90, 10);
    chartAnimationCallback('myChart3', 'animatedNumber3', 0, 22, 1000, 80, 20);
    chartAnimationCallback('myChart4', 'animatedNumber4', 0, 10, 1000, 65, 35);
  }, [chartAnimationCallback]);

  const handleScrollToSection = (sectionId) => {
    if (!sectionId || sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const sectionRef = document.getElementById(sectionId);
    if (sectionRef) {
      sectionRef.scrollIntoView({ behavior: 'smooth' });
    }
  };

  function animateValue(id, start, end, duration) {
    const element = document.getElementById(id);
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const steps = Math.abs(range);
    const stepTime = duration / steps;

    function update() {
      start += increment;
      element.innerText = start;
      if (start !== end) {
        setTimeout(update, stepTime);
      }
    }

    update();
  }

  return (

    <div className="benefits">
      <h2 className="benefits__title secondary-title">
        <span className="title-slash"></span>{t('Benefits.title')}
      </h2>

      <div className="benefits__box">
        <div className="benefits__box-cart">
          <p className="benefits__box-title">{t('Benefits.subTiteSmall')}</p>
          <div className="benefits__box-chart">
            <canvas className="chart" id="myChart1"></canvas>
            <p className="chart__title"><span id="animatedNumber">0</span></p>
          </div>
          <p className="benefits__box-subtitle">{t('Benefits.subTite1')}</p>
        </div>

        <div className="benefits__box-cart">
          <p className="benefits__box-title">{t('Benefits.subTiteSmall')}</p>
          <div className="benefits__box-chart">
            <canvas className="chart" id="myChart2"></canvas>
            <p className="chart__title"><span id="animatedNumber2">0</span></p>
          </div>
          <p className="benefits__box-subtitle">{t('Benefits.subTite2')}</p>
        </div>

        <div className="benefits__box-cart" >
          <p className="benefits__box-title">{t('Benefits.subTiteSmall')}</p>
          <div className="benefits__box-chart">
            <canvas className="chart" id="myChart3"></canvas>
            <p className="chart__title"><span id="animatedNumber3">0</span></p>
          </div>
          <p className="benefits__box-subtitle  benefits__box-subtitle2">{t('Benefits.subTite3')}</p>
        </div>

        <div className="benefits__box-cart"  >
          <p className="benefits__box-title">{t('Benefits.subTiteSmall')}</p>
          <div className="benefits__box-chart">
            <canvas className="chart" id="myChart4"></canvas>
            <p className="chart__title"><span id="animatedNumber4">0</span></p>
          </div>
          <p className="benefits__box-subtitle">{t('Benefits.subTite4')}</p>
        </div>
      </div>

      <div className="benefits__buttons">


        <div onClick={() => handleScrollToSection('firstLesson')}>
          <Button id="btn-register-benefits" width={300} height={70} className="benefits__buttons-button" text={t('Benefits.button2')} />
        </div>
      </div>
    </div>
  );
}

export default Benefits;
