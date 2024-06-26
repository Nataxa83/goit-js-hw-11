
import { searchImages } from "./js/pixabay-api";
import { markupGallery, formReset, showLoader, hideLoader } from "./js/render-functions";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


export const refs = {
  formSearch: document.querySelector('.form'),
  inputImgSearch: document.querySelector('.input-search'),
  imgGallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

refs.formSearch.addEventListener('submit', event => {
    event.preventDefault();
    const imgKeyWord = refs.inputImgSearch.value.trim();
    if (imgKeyWord === '') {
        iziToast.warning({
            title: 'warning',
            message: ' Enter a word for the query, please.',
            layout: 2,
            position: 'topRight',
            displayMode: 'once',
            color: '#ef4000',
            messageColor: '#fff',
            messageSize: '16',
        });
        return;
    }
    
    showLoader();
    refs.imgGallery.innerHTML = ' ';
    searchImages(imgKeyWord)
        .then(({ hits }) => {
      if (hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          layout: 2,
          position: 'topRight',
          displayMode: 'once',
          color: '#ef4040',
          messageColor: '#fff',
          messageSize: '16',
        });
        hideLoader();
        formReset();
        return;
      }
      hideLoader();
          markupGallery(hits);
      formReset();
    })
    .catch(error => {
      console.log(error);
    });

})