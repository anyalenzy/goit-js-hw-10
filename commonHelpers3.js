import{f,i as m}from"./assets/vendor-651d7991.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const i=document.querySelector("[data-start]"),y=document.querySelector("span[data-days]"),h=document.querySelector("span[data-hours]"),p=document.querySelector("span[data-minutes]"),g=document.querySelector("span[data-seconds]");i.disabled=!0;let d;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(o){o[0]>new Date?(d=o[0],i.disabled=!1):(m.show({icon:"icon-error",backgroundColor:"#FC5A5A",message:"Please choose a date in the future",messageColor:"#FAFAFB",messageSize:"16px",position:"topCenter",close:!1}),i.disabled=!0)}};f("#datetime-picker",S);i.addEventListener("click",o=>{const n=setInterval(()=>{i.disabled=!0;const s=d-Date.now(),r=b(s);s<=0?clearInterval(n):(y.textContent=c(r.days),h.textContent=c(r.hours),p.textContent=c(r.minutes),g.textContent=c(r.seconds))},1e3)});function b(o){const t=Math.floor(o/864e5),a=Math.floor(o%864e5/36e5),u=Math.floor(o%864e5%36e5/6e4),l=Math.floor(o%864e5%36e5%6e4/1e3);return{days:t,hours:a,minutes:u,seconds:l}}function c(o){let n=String(o);return n.length<2?n.padStart(2,"0"):n}
//# sourceMappingURL=commonHelpers3.js.map
