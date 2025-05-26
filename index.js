import{a as c,S as d,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const m="50513820-fe52286b6fb0f12cd684dc96e";c.defaults.baseURL="https://pixabay.com/api/";const f=async a=>await c.get("",{params:{key:m,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o),u=document.querySelector(".gallery"),p=()=>u.innerHTML="Loading images, please wait...",l=()=>new Promise(a=>{setTimeout(()=>a("loaded"),800)}),y=()=>u.innerHTML="",g=({webformatURL:a,largeImageURL:t,tags:o,likes:i,views:e,comments:r,downloads:s})=>`
	<li class="gallery-item">
		<a href="${t}">
			<img src="${a}" data-src="${t}" alt="${o}" />
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
				${r}
			</p>
			<p>
				<b>Downloads</b>
				${s}
			</p>
		</div>
	</li>
	`,h=a=>{let t="";a.map(o=>t+=g(o)),document.querySelector(".gallery").innerHTML=t,new d(".gallery a",{captionsData:"alt",captionDelay:250})},b=document.querySelector(".form");b.addEventListener("submit",a=>{a.preventDefault();const t=a.target.elements["search-text"].value.trim()??"";if(t===""){n.error({title:"Error!",message:"Failed to load images"});return}p(),f(t).then(o=>{if(o.data.hits.length>0)l().then(()=>{h(o.data.hits)});else{y(),n.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!"});return}}).catch(o=>{n.error({title:"Error!",message:"Failed to load images"}),console.log("🚀 ~ error:",o)}).finally(l)});
//# sourceMappingURL=index.js.map
