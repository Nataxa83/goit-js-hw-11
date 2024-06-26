import{s as u,i as l}from"./assets/vendor-1d1bb5a2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function m(n){const o="https://pixabay.com",r="/api/",i=new URLSearchParams({key:"44578932-6e2bdfbc9295001d2a495ef0a",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${o}${r}?${i}`;return fetch(e).then(t=>t.json())}const d=new u(".gallery a",{captionsData:"alt",captionDelay:250});function g(n){const o=n.map(r=>`<li class="gallery-item">
        <a class="gallery-link" href="${r.largeImageURL}">
            <img
                width=360;
                height=200;
                class="gallery-image"
                src="${r.webformatURL}"
                alt="${r.tags} " />
        </a>
                <div class="image-info">
                <p class = "info-item"><strong>LIKES:</strong> ${r.likes}</p>
                <p class = "info-item"><strong>VIEWS:</strong> ${r.views}</p>
                <p class = "info-item"><strong>COMMENTS:</strong> ${r.comments}</p>
                <p class = "info-item"><strong>DOWNLOADS: </strong>${r.downloads}</p>
                </div>
        </li>
        `).join("");s.imgGallery.innerHTML=o,d.refresh()}function c(){s.formSearch.reset()}function p(){s.loader.classList.remove("hidden")}function f(){s.loader.classList.add("hidden")}const s={formSearch:document.querySelector(".form"),inputImgSearch:document.querySelector(".input-search"),imgGallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};s.formSearch.addEventListener("submit",n=>{n.preventDefault();const o=s.inputImgSearch.value.trim();if(o===""){l.warning({title:"warning",message:" Enter a word for the query, please.",layout:2,position:"topRight",displayMode:"once",color:"#ef4000",messageColor:"#fff",messageSize:"16"});return}p(),s.imgGallery.innerHTML=" ",m(o).then(({hits:r})=>{if(r.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",displayMode:"once",color:"#ef4040",messageColor:"#fff",messageSize:"16",layout:2}),f(),c();return}f(),g(r),c()}).catch(r=>{console.log(r)})});
//# sourceMappingURL=commonHelpers.js.map
