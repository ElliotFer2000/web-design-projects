import "./../css/app.css";
import Swiper from 'swiper';
import {footerObserver} from  './ObserverFooter';


const swiperProducts = new Swiper('.products__slider', {
    slidesPerView: 'auto',
    spaceBetween: 10
});

const swiperProjects = new Swiper('.projects__slider', {
    slidesPerView: 'auto',
    spaceBetween: -100
});

footerObserver.observe(footer)

