import{a as u,S as f,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="50513820-fe52286b6fb0f12cd684dc96e";u.defaults.baseURL="https://pixabay.com/api/";const y=async s=>(await u.get("",{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data,d=document.querySelector(".gallery");let l;const g=()=>d.querySelector(".loader").innerHTML="Loading images, please wait...",c=(s=!0)=>new Promise(r=>{setTimeout(()=>{p(),r("loaded")},s?800:100)}),p=()=>d.innerHTML='<span class="loader"></span>',h=({webformatURL:s,largeImageURL:r,tags:o,likes:i,views:e,comments:t,downloads:a})=>`
	<li class="gallery-item">
		<a href="${r}">
			<img src="${s}" data-src="${r}" alt="${o}" />
		</a>
		<div class="info">
			<p>
				<b>Likes</b>
				${i}
			</p>
			<p>
				<b>Views</b>
				${e}
			</p>
			<p>
				<b>Comments</b>
				${t}
			</p>
			<p>
				<b>Downloads</b>
				${a}
			</p>
		</div>
	</li>
	`,b=s=>{let r='<span class="loader"></span>';s.map(o=>r+=h(o)),document.querySelector(".gallery").innerHTML=r,l?l.refresh():l=new f(".gallery a",{captionsData:"alt",captionDelay:250})},L=document.querySelector(".form");L.addEventListener("submit",s=>{s.preventDefault();const r=s.target.elements["search-text"].value.trim()??"";if(r===""){n.error({title:"Error!",message:"Failed to load images"});return}p(),g(),y(r).then(o=>{o.hits.length>0?c().then(()=>b(o.hits)):c(!1).then(()=>{n.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!"})})}).catch(()=>{c(!1).then(()=>{n.error({title:"Error!",message:"Failed to load images"})})})});
//# sourceMappingURL=index.js.map
