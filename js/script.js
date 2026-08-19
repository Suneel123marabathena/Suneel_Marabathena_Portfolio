const menuBtn=document.querySelector('.menu-btn');const nav=document.querySelector('.nav-links');
menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')})},{threshold:.08});
document.querySelectorAll('.project-card,.skill-grid article,.timeline-item,.cert-grid article').forEach(el=>{el.style.opacity='0';el.style.transform='translateY(18px)';el.style.transition='opacity .6s ease,transform .6s ease';observer.observe(el)});
document.addEventListener('scroll',()=>{document.querySelectorAll('.show').forEach(el=>{el.style.opacity='1';el.style.transform='translateY(0)'})},{passive:true});
window.dispatchEvent(new Event('scroll'));
