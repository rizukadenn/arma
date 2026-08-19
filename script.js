const $=s=>document.querySelector(s);
const $$=s=>document.querySelectorAll(s);

window.addEventListener("load",()=>setTimeout(()=>$("#loader").classList.add("hide"),2200));

/* cursor glow */
const glow=$(".cursor-glow");
window.addEventListener("pointermove",e=>{
  glow.style.left=e.clientX+"px"; glow.style.top=e.clientY+"px";
});

/* floating petals */
const petalBox=$("#petals");
const symbols=["♡","✦","✧","·","✿"];
function petal(){
  const p=document.createElement("span");
  p.className="petal";
  p.textContent=symbols[Math.floor(Math.random()*symbols.length)];
  p.style.left=Math.random()*100+"%";
  p.style.fontSize=(8+Math.random()*13)+"px";
  p.style.animationDuration=(9+Math.random()*9)+"s";
  petalBox.appendChild(p);
  setTimeout(()=>p.remove(),19000);
}
setInterval(petal,850);

/* envelope + music */
const envelope=$("#envelope"), intro=$("#intro"), main=$("#main-content");
const music=$("#birthdayMusic"), player=$("#musicPlayer"), toggle=$("#musicToggle"), icon=$("#musicIcon");
function playMusic(){
  player.classList.add("show");
  music.play().then(()=>{
    player.classList.add("playing"); icon.textContent="Ⅱ";
  }).catch(()=>{ icon.textContent="♪"; });
}
function openSite(){
  if(envelope.classList.contains("open")) return;
  envelope.classList.add("open");
  setTimeout(playMusic,850);
  setTimeout(()=>intro.style.opacity="0",1750);
  setTimeout(()=>{
    intro.style.display="none";
    main.classList.remove("hidden");
    requestAnimationFrame(()=>{
      main.classList.add("visible");
      initReveal();
    });
    window.scrollTo(0,0);
  },2900);
}
envelope.addEventListener("click",openSite);
envelope.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" ")openSite()});
toggle.addEventListener("click",()=>{
  if(music.paused){
    music.play().then(()=>{player.classList.add("playing");icon.textContent="Ⅱ"});
  }else{
    music.pause();player.classList.remove("playing");icon.textContent="♪";
  }
});

/* wishes */
const wishes=[
["More Happiness","May your days be filled with the kind of happiness that quietly stays in your heart."],
["Beautiful Moments","May this year give you countless little moments that become beautiful memories."],
["Peace","May your heart always find peace, even when life gets a little busy."],
["Good Health","May you always be surrounded by good health, energy and wonderful days."],
["More Smiles","May you have a thousand reasons to smile, laugh and enjoy the little things."],
["New Adventures","May this year bring exciting places, new experiences and stories worth remembering."],
["Self Love","May you remember to love yourself just as much as you love everyone around you."],
["Dreams","May the dreams you've been quietly carrying finally find their way toward you."],
["Confidence","May you always know your worth and walk through life with confidence."],
["Warm Days","May your days feel warm, soft and comforting like your favorite morning."],
["Little Surprises","May beautiful surprises find you when you least expect them."],
["Lovely People","May you always be surrounded by people who genuinely appreciate your heart."],
["Successful Days","May every effort you make slowly bloom into something you're proud of."],
["More Rest","May you have more moments where you can simply breathe, rest and enjoy life."],
["Sweet Memories","May this chapter be filled with memories that make you smile years from now."],
["Courage","May you always have the courage to choose what makes your heart happy."],
["Freedom","May you feel free to become whoever you want to be."],
["Good Luck","May luck gently follow you wherever life takes you."],
["Beautiful Growth","May every challenge turn into a lesson and every lesson help you bloom."],
["Cozy Nights","May you have peaceful nights, comfortable evenings and a heart full of gratitude."],
["More Love","May love find you in unexpected places and in the smallest moments."],
["Bright Future","May everything ahead of you feel brighter than everything you've left behind."],
["Gentle Days","May life be gentle with you this year."],
["Your Favorite Things","May you have more time for all the people, places and things you truly love."],
["Wonderful News","May this year bring you many reasons to say, I am so happy this happened."],
["A Happy Heart","May your heart stay soft, hopeful and full of beautiful things."],
["Endless Flowers","May your life keep blooming in ways you never expected."],
["More Time","May you have more time to slow down and appreciate how far you've come."],
["Magic","May ordinary days occasionally surprise you with a little bit of magic."],
["Everything You Deserve","May life return all the kindness, love and warmth you have given to others."],
["A Beautiful 31","May 31 be the beginning of one of your most beautiful chapters yet."]
];
const grid=$("#wishesGrid");
wishes.forEach((w,i)=>{
  const el=document.createElement("button");
  el.className="wish-item reveal";
  el.innerHTML=`<span class="wish-number">${i+1}</span><span class="wish-flower">✿</span>`;
  el.addEventListener("click",()=>openWish(i+1,w[0],w[1]));
  grid.appendChild(el);
});
function openWish(n,t,txt){
  $("#wishNumber").textContent=n;$("#wishTitle").textContent=t;$("#wishText").textContent=txt;
  $("#wishModal").classList.add("active");document.body.style.overflow="hidden";
}
function closeWishModal(){
  $("#wishModal").classList.remove("active");document.body.style.overflow="";
}
$("#wishModal .modal-overlay").addEventListener("click",closeWishModal);

/* garden */
const garden=document.querySelector(".garden"), bloom=$("#bloomButton");
bloom.addEventListener("click",()=>{
  garden.classList.add("bloomed"); bloom.textContent="✿ Your garden is blooming ♡"; bloom.disabled=true;
  for(let i=0;i<28;i++){
    const p=document.createElement("span");p.textContent=Math.random()>.5?"✿":"♡";
    Object.assign(p.style,{position:"fixed",left:Math.random()*100+"%",top:"62%",zIndex:100,pointerEvents:"none",color:"#ffe1e7",fontSize:(10+Math.random()*12)+"px"});
    document.body.appendChild(p);
    const a=p.animate([{transform:"translateY(0) scale(.2)",opacity:0},{transform:`translate(${Math.random()*180-90}px,-${180+Math.random()*350}px) rotate(300deg)`,opacity:1},{transform:`translate(${Math.random()*250-125}px,-${350+Math.random()*350}px) rotate(600deg)`,opacity:0}],{duration:1800+Math.random()*1600,easing:"cubic-bezier(.2,.8,.2,1)"});
    a.onfinish=()=>p.remove();
  }
});

/* message */
const messageModal=$("#messageModal");
$("#messageButton").addEventListener("click",()=>{messageModal.classList.add("active");document.body.style.overflow="hidden"});
$("#closeMessage").addEventListener("click",()=>{messageModal.classList.remove("active");document.body.style.overflow=""});
messageModal.querySelector(".modal-overlay").addEventListener("click",()=>{messageModal.classList.remove("active");document.body.style.overflow=""});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeWishModal();messageModal.classList.remove("active");document.body.style.overflow=""}});

/* reveal */
function initReveal(){
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },{threshold:.12});
  $$(".reveal").forEach((el,i)=>{
    el.style.transitionDelay=(Math.min(i%5,4)*70)+"ms";
    observer.observe(el);
  });
}
function scrollToSection(id){$("#"+id)?.scrollIntoView({behavior:"smooth"})}
