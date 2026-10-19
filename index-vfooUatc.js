(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Ae={recipient:"晓",signature:"榕",hero:{title:"壹‌年",dedication:"anniversary",recipient:"壹‌年",anniversary:"致晓",line:"槐序 怀煦 樱海",scroll:"向下，翻开这一年",footnote:"Our world"},navigation:[{href:"#light",label:"光亮"},{href:"#world",label:"小天地"},{href:"#letter",label:"一封信"}],chapters:[{href:"#start",label:"月下相遇"},{href:"#light",label:"一年里的光亮"},{href:"#world",label:"我们的小天地"},{href:"#letter",label:"留给晓的一封信"}],light:{eyebrow:"01 · Moments",title:"一年里的光亮",introduction:["一首喜欢的歌，一片偶然抬头看见的天空。","平常的日子，因你多了微光。"],music:["有时是一段轻柔的旋律，","有时，是一句「你看」。"],moon:["从眼前的碎末，到遥远的星空。","你的一切，都值得被听见。"],water:["世界很大，","一起发现的时候，","它又近了一点。"],ending:"一路遇见的美好，慢慢收进这一年。",collection:{eyebrow:"喜欢的风景，喜欢的梦",title:"一起分享，喜欢的世界。",introduction:"有些光来自远方，有些光藏在一个小小的念头里。",pages:"一首小词，一点暖色，一束动人的光影。",reelLabel:"收藏的樱花夜景、海面光影与日出",paperLabel:"收藏的诗歌、插画与太阳神鸟"}},sky:{eyebrow:"Something more...",line:"星空 碧海 流光",small:"还有很多风景，待一同见证。"},world:{eyebrow:"02 · 在另一个世界里",title:"我们的小天地",introduction:["一块方块，一盏灯、一扇窗。","一砖一瓦，砌成我们的小天地"],note:"樱花旁，有一间我们的小屋。",railLabel:"Together, in a small world.",railHint:"Shared moments",ending:"Dreamland"},letter:{eyebrow:"A letter",title:"Some words for you",to:"晓 亲启",openLabel:"轻展",closeLabel:"收起",greeting:"晓：",paragraphs:["与你相处的这一年，好多平平无奇的日子，都偷偷藏了一颗小星星","愿你饿的时候有好东西吃，喜欢的事有比心回响，累了就窝进软乎乎的被窝，平常的日子里常有惊喜.","大烦恼变小，小快乐变大","新的一页，也请多多关照呀！(๑•̀ㅂ•́)و✧"]},closing:{line:"风带来故事的种子，时间使之发芽",small:"The story continues, and the story is still being written.",returnLabel:"再看一眼月光"},gallery:{open:"放大欣赏",close:"关闭图片",previous:"上一张图片",next:"下一张图片",zoomIn:"放大图片",zoomOut:"恢复图片大小",hint:"左右切换 · Esc 关闭"}},ct=(n,e,t,i,r,s)=>({src:`/${n}.webp`,srcSmall:`/${n}-small.webp`,width:e,height:t,alt:i,caption:r,title:s}),Pn=[ct("cherry-blossoms",1702,1276,"浅粉樱花的枝条铺展在澄澈的蓝天下","樱和树枝分割的天空","樱绽"),ct("lake-and-sky",5824,4368,"蓝色天空和湖水在远处相接，水鸟停留在浅滩","天空和湖水，被同一支画笔涂抹","湖天一色"),ct("willow-light",1702,1276,"扬州荷花池公园里，金色阳光穿过柳枝落在草地上","平常的日子","树间晨光"),ct("guangling-sunset",1440,1080,"广陵古城的屋檐下，夕阳将建筑染成金色","让黄昏再慢一点","广陵夕阳"),ct("jinji-lake",1440,1080,"苏州金鸡湖上方铺着蓝紫色晚霞，湖面倒映着天光","霞、水和你","湖畔晚霞"),ct("moon-above-clouds",1080,1440,"舷窗外，明亮的月光照在层叠的云海上","愿你的潮汐自有节奏，愿你的深邃自有安宁，愿你的辉光永不黯浊。","舷窗外的月亮")],ns=[ct("minecraft-cherry-house",1441,1080,"我的世界中，樱花树旁的粉白色双层小屋","一块一块，搭起属于我们的天地。","樱花小屋"),ct("minecraft-cherry-balcony",2557,1447,"我的世界中，晓站在挂着青色灯笼的樱花小屋阳台上","有你在，小屋就有了家的模样。","晓与樱花小屋"),ct("minecraft-cherry-pavilion",1833,1280,"我的世界中，樱花山坡下的粉白色亭台","一点心意，放在樱花盛开的地方。","樱花祭坛"),ct("minecraft-pink-figure",1441,1080,"我的世界中，用粉色方块搭建的大型角色手办","一起做些可爱、认真又天马行空的事。","小小的大手办"),ct("melody-house",2559,1486,"从高处看，草地上用粉白方块搭成的美乐蒂造型小屋","爱是谜题也是谜底。","美乐蒂小屋"),ct("flowers-in-another-world",1260,831,"方块世界里并肩生长的粉色花与蓝色花，画面写着另一个世界里的我们","一起盛开在另一个小小的世界。","世界里的我们"),ct("playing-together",1121,665,"王者荣耀里一起组队后的好友协作画面","一起出发，就很开心。","一起组队")],ti=[ct("cherry-night",1252,704,"樱花夜景插画中，两个人并肩望向盛开的樱花树","把喜欢的风景，留在这一页。","爱与樱花"),ct("sea-of-light",1741,980,"夜色中，海面反射出一片温暖的金色光芒","是爱也，动太阳而移群星。","光海"),ct("sunrise-city",2559,1427,"日出插画中，金色阳光照亮远处的城市","明天还有新的光。","日出"),ct("moonlit-dream",2228,1054,"蓝色月夜插画中，少女坐在辽阔的夜色下","留一片星空天马行空。","月下的梦"),ct("poem-page",1280,1790,"一页印着诗歌与线描插图的书","有些诗词，读着读着就想与你分享。","诗歌的一页"),ct("sun-bird",1280,1280,"黑暗中，一轮明亮的太阳神鸟图案","炽热而永恒。","太阳神鸟"),ct("illustrated-girl",928,1232,"暖金色插画中，女孩坐在咖啡馆的窗边","每一天都有柔软的片刻。","暖色的片刻")],cr={title:"MONACA · きっと彼女は_（她一定是。）· Inst.",caption:"MONACA · 她一定是。",sources:[{src:"/monaca-kitto-kanojo-wa.m4a",type:"audio/mp4"},{src:"/monaca-kitto-kanojo-wa.ogg",type:"audio/ogg"}],volume:.38};function $o(){return`<aside class="music-player" aria-label="背景音乐">
    <p class="music-track" id="music-track">${cr.caption}</p>
    <button class="music-toggle" type="button" aria-label="播放背景音乐" aria-pressed="false" aria-describedby="music-track" title="${cr.title}">
      <span class="music-orbit" aria-hidden="true"><span class="music-bars"><span></span><span></span><span></span><span></span></span></span>
      <span class="music-label">听听这一年</span><span class="music-spark" aria-hidden="true">✦</span>
    </button>
    <span class="music-status" role="status" aria-live="polite"></span>
    <audio class="background-music" preload="auto" autoplay loop>${cr.sources.map(n=>`<source src="${n.src}" type="${n.type}">`).join("")}</audio>
  </aside>`}function Ko(){const n=document.querySelector(".background-music"),e=document.querySelector(".music-toggle"),t=document.querySelector(".music-player"),i=document.querySelector(".music-label"),r=document.querySelector(".music-status");if(!n||!e||!t||!i||!r)return()=>{};let s=!1,a=!1,o=0,c=0,l=!1,d=!1;const u=()=>{window.cancelAnimationFrame(c),c=0},f=(A=!1)=>{const C=s&&!n.paused;t.classList.toggle("is-playing",C),t.classList.toggle("is-loading",A),e.setAttribute("aria-pressed",String(s)),e.setAttribute("aria-label",s?"暂停背景音乐":"播放背景音乐"),i.textContent=l?"轻点重试":A?"音乐载入中":C?"音乐播放中":d?"轻触聆听":"听听这一年"},p=()=>{u();const A=performance.now(),C=D=>{if(a||n.paused||!s)return;const S=Math.min(1,(D-A)/1600);n.volume=cr.volume*S*(2-S),S<1?c=window.requestAnimationFrame(C):c=0};c=window.requestAnimationFrame(C)},g=()=>{document.removeEventListener("pointerdown",x),document.removeEventListener("keydown",x)},x=A=>{A.target instanceof Element&&A.target.closest(".music-player")||A instanceof KeyboardEvent&&["Tab","Shift","Control","Alt","Meta","Escape"].includes(A.key)||(g(),m())},m=async()=>{o++;const A=o,C=l||!!n.error;l=!1,d=!1,g(),r.textContent="",C&&n.load(),s=!0,n.volume=0,f(!0);try{if(await n.play(),a||A!==o||!s)return;f(),p()}catch(D){if(a||A!==o)return;s=!1;const S=D instanceof DOMException&&D.name==="NotAllowedError";l=!S&&!(D instanceof DOMException&&D.name==="AbortError"),d=S,S&&(document.addEventListener("pointerdown",x),document.addEventListener("keydown",x)),r.textContent=S?"轻触页面，即可开始背景音乐。":l?"音乐暂时未能播放，请轻点音乐按钮重试。":"",f()}},h=()=>{s||!n.paused?(o++,s=!1,d=!1,g(),u(),n.pause(),f()):m()},w=()=>f(),b=()=>{s&&f(!0)},M=()=>{n.paused&&(s=!1,u(),f())},R=()=>{n.error&&(s=!1,l=!0,u(),r.textContent="音乐暂时未能播放，请轻点音乐按钮重试。",f())};return e.addEventListener("click",h),n.addEventListener("playing",w),n.addEventListener("waiting",b),n.addEventListener("pause",M),n.addEventListener("error",R),m(),()=>{a=!0,u(),g(),e.removeEventListener("click",h),n.removeEventListener("playing",w),n.removeEventListener("waiting",b),n.removeEventListener("pause",M),n.removeEventListener("error",R),n.pause(),n.removeAttribute("src"),n.querySelectorAll("source").forEach(A=>A.removeAttribute("src")),n.load()}}const Si=[...Pn,...ti,...ns],Oi='<svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M20 19C10 15 13 5 20 7C27 5 30 15 20 19ZM21 20C23 9 34 10 33 17C37 23 28 29 21 20ZM20 21C31 21 33 32 26 33C21 39 13 31 20 21ZM19 21C22 31 12 36 9 30C2 27 8 17 19 21ZM18 20C9 27 1 19 6 14C7 6 18 9 18 20Z" stroke="currentColor" stroke-width=".8"/><circle cx="20" cy="20" r="1.6" fill="currentColor"/></svg>',Zo='<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h15m-5-5 5 5-5 5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',Mi=n=>n.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]??e),pi=n=>n.map(Mi).join("<br>");function Pt(n,e="",t="(max-width: 700px) 88vw, 55vw"){const i=Si.indexOf(n);return`<figure class="memory-photo ${e}" data-reveal>
    <button class="photo-button" type="button" data-image-index="${i}" aria-label="${Mi(`${Ae.gallery.open}：${n.title??n.alt}`)}">
      <img class="photo-image" src="${n.srcSmall}" srcset="${n.srcSmall} ${Math.min(800,n.width)}w, ${n.src} ${Math.min(1800,n.width)}w" sizes="${t}" width="${n.width}" height="${n.height}" alt="${Mi(n.alt)}" loading="lazy" decoding="async">
      <span class="image-open" aria-hidden="true"><span>＋</span> ${Ae.gallery.open}</span>
    </button>
    <figcaption><span class="photo-title">${Mi(n.title??"")}</span><span class="photo-caption">${Mi(n.caption)}</span></figcaption>
  </figure>`}function jo(){return`
    <a class="skip-link" href="#light">跳到正文</a>
    <div id="scene" class="scene-backdrop" aria-hidden="true"></div>
    <div class="scene-vignette" aria-hidden="true"></div>
    <div id="atmosphere" class="atmosphere" aria-hidden="true"></div>
    <div class="ambient-grain" aria-hidden="true"></div>
    <header class="site-header">
      <a class="dedication-mark" href="#start" aria-label="回到月下相遇">${Oi}<span>致 晓</span></a>
      <nav class="top-nav" aria-label="章节导航">${Ae.navigation.map(n=>`<a href="${n.href}">${n.label}</a>`).join("")}</nav>
    </header>
    <nav class="chapter-nav" aria-label="章节位置">${Ae.chapters.map((n,e)=>`<a href="${n.href}" class="chapter-link${e===0?" is-active":""}" ${e===0?'aria-current="true"':""} aria-label="${n.label}"><span class="chapter-dot"></span><span class="chapter-label">${n.label}</span></a>`).join("")}</nav>
    <main>
      <section id="start" class="hero" aria-labelledby="hero-title">
        <div class="hero-copy">
          <p class="eyebrow hero-eyebrow">${Ae.hero.dedication}</p>
          <h1 id="hero-title" aria-label="${Ae.hero.title}"><span class="hero-recipient">${Ae.hero.recipient}</span> <span class="hero-anniversary"><span aria-hidden="true">·</span> ${Ae.hero.anniversary}</span></h1>
          <p class="hero-line">${Ae.hero.line}</p>
          <span class="hero-rule" aria-hidden="true"></span>
        </div>
        <a class="scroll-invitation" href="#light"><span class="scroll-line" aria-hidden="true"></span><span>${Ae.hero.scroll}</span></a>
        <p class="hero-footnote">${Ae.hero.footnote}</p>
      </section>

      <section id="light" class="story-section memory-section" aria-labelledby="light-title">
        <div class="section-shell">
          <div class="section-heading memory-heading" data-reveal>
            <p class="eyebrow">${Ae.light.eyebrow}</p>
            <h2 id="light-title">${Ae.light.title}</h2>
            <p class="section-introduction">${pi(Ae.light.introduction)}</p>
          </div>
          <div class="memory-opening">
            <div class="memory-spring">
              ${Pt(Pn[0],"photo-cherry")}
              <p class="small-poem music-note" data-reveal><span class="poem-rule" aria-hidden="true"></span>${pi(Ae.light.music)}</p>
            </div>
            <div class="memory-moon">
              ${Pt(Pn[5],"photo-moon","(max-width: 700px) 55vw, 25vw")}
              <p class="quiet-caption" data-reveal>${pi(Ae.light.moon)}</p>
            </div>
          </div>
          <div class="memory-water">
            <p class="small-poem water-note" data-reveal>${pi(Ae.light.water)}</p>
            ${Pt(Pn[1],"photo-lake","(max-width: 700px) 88vw, 65vw")}
          </div>
          <div class="memory-trio">
            ${Pt(Pn[2],"photo-willow","(max-width: 700px) 72vw, 29vw")}
            ${Pt(Pn[3],"photo-sunset","(max-width: 700px) 72vw, 29vw")}
            ${Pt(Pn[4],"photo-evening","(max-width: 700px) 72vw, 29vw")}
          </div>
          <p class="section-coda" data-reveal>${Ae.light.ending}</p>
          <div class="shared-worlds">
            <div class="shared-worlds-heading" data-reveal>
              <p class="eyebrow">${Ae.light.collection.eyebrow}</p>
              <h3>${Ae.light.collection.title}</h3>
              <p class="section-introduction">${Ae.light.collection.introduction}</p>
            </div>
            ${Pt(ti[3],"dream-panorama","(max-width: 700px) 88vw, 82vw")}
            <div class="light-reel" aria-label="${Ae.light.collection.reelLabel}" tabindex="0">
              ${ti.slice(0,3).map(n=>Pt(n,"reel-photo","(max-width: 700px) 78vw, 31vw")).join("")}
            </div>
            <div class="paper-collection" aria-label="${Ae.light.collection.paperLabel}">
              ${Pt(ti[4],"collection-poem","(max-width: 700px) 75vw, 29vw")}
              <div class="collection-warmth">
                <p class="small-poem collection-note" data-reveal>${Ae.light.collection.pages}</p>
                ${Pt(ti[6],"collection-girl","(max-width: 700px) 55vw, 24vw")}
              </div>
              ${Pt(ti[5],"collection-sunbird","(max-width: 700px) 40vw, 17vw")}
            </div>
          </div>
        </div>
      </section>

      <section class="star-interlude" aria-label="${Ae.sky.eyebrow}">
        <div id="star-sky" aria-hidden="true"></div>
        <div class="star-interlude-copy" data-reveal>
          <p class="eyebrow">${Ae.sky.eyebrow}</p>
          <p class="star-interlude-line">${Ae.sky.line}</p>
          <p class="star-interlude-small">${Ae.sky.small}</p>
        </div>
      </section>

      <section id="world" class="story-section world-section" aria-labelledby="world-title">
        <div class="section-shell">
          <div class="section-heading world-heading" data-reveal>
            <p class="eyebrow">${Ae.world.eyebrow}</p>
            <h2 id="world-title">${Ae.world.title}</h2>
            <p class="section-introduction">${pi(Ae.world.introduction)}</p>
          </div>
          <div class="world-feature">
            <span class="world-annotation" data-reveal>${Ae.world.note}</span>
            ${Pt(ns[0],"world-main-photo","(max-width: 700px) 88vw, 80vw")}
          </div>
          <div class="world-rail" aria-label="${Ae.world.railLabel}" tabindex="0">
            ${ns.slice(1).map(n=>Pt(n,"world-small-photo","(max-width: 700px) 78vw, 30vw")).join("")}
          </div>
          <p class="world-rail-hint"><span aria-hidden="true">←</span>${Ae.world.railHint}<span aria-hidden="true">→</span></p>
          <p class="section-coda" data-reveal>${Ae.world.ending}</p>
        </div>
      </section>

      <section id="letter" class="story-section letter-section" aria-labelledby="letter-title">
        <div class="section-shell letter-shell">
          <div class="section-heading letter-heading" data-reveal>
            <p class="eyebrow">${Ae.letter.eyebrow}</p>
            <h2 id="letter-title">${Ae.letter.title}</h2>
          </div>
          <article class="letter-card" data-reveal>
            <span class="paper-corner paper-corner--left" aria-hidden="true"></span><span class="paper-corner paper-corner--right" aria-hidden="true"></span>
            <button class="letter-toggle" type="button" aria-expanded="false" aria-controls="letter-body">
              <span class="letter-address">${Ae.letter.to}</span>
              <span class="letter-seal" aria-hidden="true">${Oi}</span>
              <span class="letter-action"><span data-letter-action>${Ae.letter.openLabel}</span>${Zo}</span>
            </button>
            <div id="letter-body" class="letter-body" hidden>
              <div class="letter-inner">
                <p class="letter-greeting">${Ae.letter.greeting}</p>
                ${Ae.letter.paragraphs.map(n=>`<p>${n}</p>`).join("")}
                <p class="letter-signature"><span>${Ae.signature}</span><span class="signature-flower" aria-hidden="true">${Oi}</span></p>
              </div>
            </div>
            <span class="paper-bottom-rule" aria-hidden="true"></span>
          </article>
        </div>
      </section>

      <section class="closing" aria-label="下一页">
        <div class="closing-copy" data-reveal>
          <span class="closing-flower" aria-hidden="true">${Oi}</span>
          <p class="closing-line">${Ae.closing.line}</p>
          <p class="closing-small">${Ae.closing.small}</p>
          <a class="return-link" href="#start">${Ae.closing.returnLabel}<span aria-hidden="true">↑</span></a>
        </div>
        <footer class="site-footer"><span>致 ${Ae.recipient}</span><span class="footer-line" aria-hidden="true"></span><span>${Ae.signature}</span></footer>
      </section>
    </main>

    ${$o()}
    <dialog class="lightbox" aria-label="照片画廊" aria-describedby="lightbox-caption">
      <div class="lightbox-shell">
        <div class="lightbox-top"><span class="lightbox-title"></span><button class="lightbox-close" type="button" aria-label="${Ae.gallery.close}"><span aria-hidden="true">×</span></button></div>
        <div class="lightbox-image-wrap"><img class="lightbox-image" alt=""></div>
        <div class="lightbox-bottom"><p id="lightbox-caption" class="lightbox-caption"></p><div class="lightbox-controls"><button type="button" data-lightbox-prev aria-label="${Ae.gallery.previous}">←</button><span class="lightbox-counter" aria-live="polite"></span><button type="button" data-lightbox-next aria-label="${Ae.gallery.next}">→</button><span class="control-divider" aria-hidden="true"></span><button type="button" data-lightbox-zoom-in aria-label="${Ae.gallery.zoomIn}">＋</button><button type="button" data-lightbox-zoom-out aria-label="${Ae.gallery.zoomOut}">−</button></div></div>
        <p class="lightbox-hint">${Ae.gallery.hint}</p>
      </div>
    </dialog>`}function Jo(){const n=[],e=window.matchMedia("(prefers-reduced-motion: reduce)"),t=document.querySelectorAll("[data-reveal]");let i;const r=()=>{const re=!e.matches&&"IntersectionObserver"in window;document.documentElement.classList.toggle("has-motion",re),re||t.forEach(Te=>Te.classList.add("is-visible"))};r(),e.addEventListener("change",r),n.push(()=>e.removeEventListener("change",r)),"IntersectionObserver"in window&&(i=new IntersectionObserver(re=>{re.forEach(Te=>{Te.isIntersecting&&(Te.target.classList.add("is-visible"),i?.unobserve(Te.target))})},{threshold:.08,rootMargin:"0px 0px -24px 0px"}),t.forEach(re=>i?.observe(re)));let s;"IntersectionObserver"in window&&(s=new IntersectionObserver(re=>{re.forEach(Te=>{Te.isIntersecting&&document.querySelectorAll(".chapter-link").forEach(Ce=>{const X=Ce.hash===`#${Te.target.id}`;Ce.classList.toggle("is-active",X),X?Ce.setAttribute("aria-current","true"):Ce.removeAttribute("aria-current")})})},{rootMargin:"-25% 0px -65% 0px"}),document.querySelectorAll("main section[id]").forEach(re=>s?.observe(re)));const a=document.querySelector(".letter-toggle"),o=document.querySelector(".letter-body"),c=document.querySelector(".letter-card"),l=document.querySelector("[data-letter-action]"),d=()=>{if(!a||!o||!c)return;const re=a.getAttribute("aria-expanded")!=="true";a.setAttribute("aria-expanded",String(re)),o.hidden=!re,c.classList.toggle("is-open",re),l&&(l.textContent=re?Ae.letter.closeLabel:Ae.letter.openLabel)};a?.addEventListener("click",d),n.push(()=>a?.removeEventListener("click",d));const u=document.querySelector(".lightbox"),f=document.querySelector(".lightbox-image"),p=document.querySelector(".lightbox-title"),g=document.querySelector(".lightbox-caption"),x=document.querySelector(".lightbox-counter"),m=document.querySelector(".lightbox-image-wrap"),h=document.querySelector(".lightbox-close"),w=document.querySelector("[data-lightbox-prev]"),b=document.querySelector("[data-lightbox-next]"),M=document.querySelector("[data-lightbox-zoom-in]"),R=document.querySelector("[data-lightbox-zoom-out]");let A=0,C=null,D=0,S=0;const E=re=>{u?.classList.toggle("is-zoomed",re),M&&(M.disabled=re),R&&(R.disabled=!re),m&&m.scrollTo(0,0)},P=re=>{A=(re+Si.length)%Si.length;const Te=Si[A];f&&(f.src=Te.src,f.alt=Te.alt,f.width=Te.width,f.height=Te.height,p&&(p.textContent=Te.title??""),g&&(g.textContent=Te.caption),x&&(x.textContent=`${String(A+1).padStart(2,"0")} / ${String(Si.length).padStart(2,"0")}`),E(!1))},O=re=>{u&&(C=document.activeElement instanceof HTMLElement?document.activeElement:null,P(re),document.documentElement.classList.add("gallery-open"),u.showModal(),h?.focus({preventScroll:!0}))},G=()=>{u?.close()},Y=()=>{document.documentElement.classList.remove("gallery-open"),E(!1),C?.focus({preventScroll:!0})},V=()=>P(A-1),H=()=>P(A+1),$=()=>E(!0),I=()=>E(!1),J=re=>{u?.open&&(re.key==="ArrowLeft"&&(re.preventDefault(),V()),re.key==="ArrowRight"&&(re.preventDefault(),H()))},ee=re=>{re.target===u&&G()},oe=re=>{D=re.clientX,S=re.clientY},xe=re=>{if(re.pointerType==="mouse"||u?.classList.contains("is-zoomed"))return;const Te=re.clientX-D,Ce=re.clientY-S;Math.abs(Te)>48&&Math.abs(Te)>Math.abs(Ce)*1.4&&(Te<0?H():V())};return document.querySelectorAll("[data-image-index]").forEach(re=>{const Te=()=>O(Number(re.dataset.imageIndex));re.addEventListener("click",Te),n.push(()=>re.removeEventListener("click",Te))}),h?.addEventListener("click",G),w?.addEventListener("click",V),b?.addEventListener("click",H),M?.addEventListener("click",$),R?.addEventListener("click",I),u?.addEventListener("close",Y),u?.addEventListener("click",ee),m?.addEventListener("pointerdown",oe),m?.addEventListener("pointerup",xe),document.addEventListener("keydown",J),()=>{i?.disconnect(),s?.disconnect(),n.forEach(re=>re()),h?.removeEventListener("click",G),w?.removeEventListener("click",V),b?.removeEventListener("click",H),M?.removeEventListener("click",$),R?.removeEventListener("click",I),u?.removeEventListener("close",Y),u?.removeEventListener("click",ee),m?.removeEventListener("pointerdown",oe),m?.removeEventListener("pointerup",xe),document.removeEventListener("keydown",J),document.documentElement.classList.remove("has-motion","gallery-open")}}const Ys="180",Qo=0,ca=1,el=2,co=1,tl=2,rn=3,Mn=0,At=1,sn=2,xn=0,ri=1,ua=2,da=3,fa=4,nl=5,Un=100,il=101,rl=102,sl=103,al=104,ol=200,ll=201,cl=202,ul=203,is=204,rs=205,dl=206,fl=207,hl=208,pl=209,ml=210,gl=211,_l=212,vl=213,xl=214,ss=0,as=1,os=2,ai=3,ls=4,cs=5,us=6,ds=7,uo=0,Sl=1,Ml=2,Sn=0,El=1,yl=2,Tl=3,bl=4,Al=5,wl=6,Rl=7,fo=300,oi=301,li=302,fs=303,hs=304,vr=306,ps=1e3,Nn=1001,ms=1002,Xt=1003,Cl=1004,Bi=1005,Gt=1006,yr=1007,Fn=1008,ln=1009,ho=1010,po=1011,yi=1012,$s=1013,Bn=1014,an=1015,Ri=1016,Ks=1017,Zs=1018,Ti=1020,mo=35902,go=35899,_o=1021,vo=1022,Vt=1023,bi=1026,Ai=1027,xo=1028,js=1029,So=1030,Js=1031,Qs=1033,ur=33776,dr=33777,fr=33778,hr=33779,gs=35840,_s=35841,vs=35842,xs=35843,Ss=36196,Ms=37492,Es=37496,ys=37808,Ts=37809,bs=37810,As=37811,ws=37812,Rs=37813,Cs=37814,Ps=37815,Ls=37816,Ds=37817,Us=37818,Is=37819,Ns=37820,Fs=37821,Os=36492,Bs=36494,zs=36495,Hs=36283,ks=36284,Gs=36285,Vs=36286,Pl=3200,Ll=3201,Dl=0,Ul=1,vn="",Tt="srgb",ci="srgb-linear",mr="linear",Ze="srgb",kn=7680,ha=519,Il=512,Nl=513,Fl=514,Mo=515,Ol=516,Bl=517,zl=518,Hl=519,pa=35044,ma="300 es",$t=2e3,gr=2001;class di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tr=Math.PI/180,Ws=180/Math.PI;function Ci(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gt[n&255]+gt[n>>8&255]+gt[n>>16&255]+gt[n>>24&255]+"-"+gt[e&255]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[t&63|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[i&255]+gt[i>>8&255]+gt[i>>16&255]+gt[i>>24&255]).toLowerCase()}function We(n,e,t){return Math.max(e,Math.min(t,n))}function kl(n,e){return(n%e+e)%e}function br(n,e,t){return(1-t)*n+t*e}function mi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function yt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],d=i[r+2],u=i[r+3];const f=s[a+0],p=s[a+1],g=s[a+2],x=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(u!==x||c!==f||l!==p||d!==g){let m=1-o;const h=c*f+l*p+d*g+u*x,w=h>=0?1:-1,b=1-h*h;if(b>Number.EPSILON){const R=Math.sqrt(b),A=Math.atan2(R,h*w);m=Math.sin(m*A)/R,o=Math.sin(o*A)/R}const M=o*w;if(c=c*m+f*M,l=l*m+p*M,d=d*m+g*M,u=u*m+x*M,m===1-o){const R=1/Math.sqrt(c*c+l*l+d*d+u*u);c*=R,l*=R,d*=R,u*=R}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],d=i[r+3],u=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+d*u+c*p-l*f,e[t+1]=c*g+d*f+l*u-o*p,e[t+2]=l*g+d*p+o*f-c*u,e[t+3]=d*g-o*u-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),d=o(r/2),u=o(s/2),f=c(i/2),p=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=f*d*u+l*p*g,this._y=l*p*u-f*d*g,this._z=l*d*g+f*p*u,this._w=l*d*u-f*p*g;break;case"YXZ":this._x=f*d*u+l*p*g,this._y=l*p*u-f*d*g,this._z=l*d*g-f*p*u,this._w=l*d*u+f*p*g;break;case"ZXY":this._x=f*d*u-l*p*g,this._y=l*p*u+f*d*g,this._z=l*d*g+f*p*u,this._w=l*d*u-f*p*g;break;case"ZYX":this._x=f*d*u-l*p*g,this._y=l*p*u+f*d*g,this._z=l*d*g-f*p*u,this._w=l*d*u+f*p*g;break;case"YZX":this._x=f*d*u+l*p*g,this._y=l*p*u+f*d*g,this._z=l*d*g-f*p*u,this._w=l*d*u-f*p*g;break;case"XZY":this._x=f*d*u-l*p*g,this._y=l*p*u-f*d*g,this._z=l*d*g+f*p*u,this._w=l*d*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],d=t[6],u=t[10],f=i+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(i>o&&i>u){const p=2*Math.sqrt(1+i-o-u);this._w=(d-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>u){const p=2*Math.sqrt(1+o-i-u);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+d)/p}else{const p=2*Math.sqrt(1+u-i-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=i*d+a*o+r*l-s*c,this._y=r*d+a*c+s*o-i*l,this._z=s*d+a*l+i*c-r*o,this._w=a*d-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,o),u=Math.sin((1-t)*d)/l,f=Math.sin(t*d)/l;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ga.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ga.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),d=2*(o*t-s*r),u=2*(s*i-a*t);return this.x=t+c*l+a*u-o*d,this.y=i+c*d+o*l-s*u,this.z=r+c*u+s*d-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ar.copy(this).projectOnVector(e),this.sub(Ar)}reflect(e){return this.sub(Ar.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ar=new B,ga=new Pi;class ze{constructor(e,t,i,r,s,a,o,c,l){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=s,d[5]=c,d[6]=i,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],d=i[4],u=i[7],f=i[2],p=i[5],g=i[8],x=r[0],m=r[3],h=r[6],w=r[1],b=r[4],M=r[7],R=r[2],A=r[5],C=r[8];return s[0]=a*x+o*w+c*R,s[3]=a*m+o*b+c*A,s[6]=a*h+o*M+c*C,s[1]=l*x+d*w+u*R,s[4]=l*m+d*b+u*A,s[7]=l*h+d*M+u*C,s[2]=f*x+p*w+g*R,s[5]=f*m+p*b+g*A,s[8]=f*h+p*M+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*a*d-t*o*l-i*s*d+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],u=d*a-o*l,f=o*c-d*s,p=l*s-a*c,g=t*u+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=u*x,e[1]=(r*l-d*i)*x,e[2]=(o*i-r*a)*x,e[3]=f*x,e[4]=(d*t-r*c)*x,e[5]=(r*s-o*t)*x,e[6]=p*x,e[7]=(i*c-l*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(wr.makeScale(e,t)),this}rotate(e){return this.premultiply(wr.makeRotation(-e)),this}translate(e,t){return this.premultiply(wr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wr=new ze;function Eo(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function _r(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Gl(){const n=_r("canvas");return n.style.display="block",n}const _a={};function wi(n){n in _a||(_a[n]=!0,console.warn(n))}function Vl(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const va=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xa=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wl(){const n={enabled:!0,workingColorSpace:ci,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Ze&&(r.r=on(r.r),r.g=on(r.g),r.b=on(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ze&&(r.r=si(r.r),r.g=si(r.g),r.b=si(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===vn?mr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return wi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return wi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ci]:{primaries:e,whitePoint:i,transfer:mr,toXYZ:va,fromXYZ:xa,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:i,transfer:Ze,toXYZ:va,fromXYZ:xa,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),n}const qe=Wl();function on(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function si(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Gn;class Xl{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Gn===void 0&&(Gn=_r("canvas")),Gn.width=e.width,Gn.height=e.height;const r=Gn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Gn}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_r("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=on(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(on(t[i]/255)*255):t[i]=on(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ql=0;class ea{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ql++}),this.uuid=Ci(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Rr(r[a].image)):s.push(Rr(r[a]))}else s=Rr(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Rr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Xl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yl=0;const Cr=new B;class Mt extends di{constructor(e=Mt.DEFAULT_IMAGE,t=Mt.DEFAULT_MAPPING,i=Nn,r=Nn,s=Gt,a=Fn,o=Vt,c=ln,l=Mt.DEFAULT_ANISOTROPY,d=vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yl++}),this.uuid=Ci(),this.name="",this.source=new ea(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Cr).x}get height(){return this.source.getSize(Cr).y}get depth(){return this.source.getSize(Cr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ps:e.x=e.x-Math.floor(e.x);break;case Nn:e.x=e.x<0?0:1;break;case ms:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ps:e.y=e.y-Math.floor(e.y);break;case Nn:e.y=e.y<0?0:1;break;case ms:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=fo;Mt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,i=0,r=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],d=c[4],u=c[8],f=c[1],p=c[5],g=c[9],x=c[2],m=c[6],h=c[10];if(Math.abs(d-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,M=(p+1)/2,R=(h+1)/2,A=(d+f)/4,C=(u+x)/4,D=(g+m)/4;return b>M&&b>R?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=A/i,s=C/i):M>R?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=D/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=C/s,r=D/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-d)*(f-d));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-x)/w,this.z=(f-d)/w,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $l extends di{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Mt(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new ea(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends $l{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class yo extends Mt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kl extends Mt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Li{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ot.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ot.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ot.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ot):Ot.fromBufferAttribute(s,a),Ot.applyMatrix4(e.matrixWorld),this.expandByPoint(Ot);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zi.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),zi.copy(i.boundingBox)),zi.applyMatrix4(e.matrixWorld),this.union(zi)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ot),Ot.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gi),Hi.subVectors(this.max,gi),Vn.subVectors(e.a,gi),Wn.subVectors(e.b,gi),Xn.subVectors(e.c,gi),fn.subVectors(Wn,Vn),hn.subVectors(Xn,Wn),Tn.subVectors(Vn,Xn);let t=[0,-fn.z,fn.y,0,-hn.z,hn.y,0,-Tn.z,Tn.y,fn.z,0,-fn.x,hn.z,0,-hn.x,Tn.z,0,-Tn.x,-fn.y,fn.x,0,-hn.y,hn.x,0,-Tn.y,Tn.x,0];return!Pr(t,Vn,Wn,Xn,Hi)||(t=[1,0,0,0,1,0,0,0,1],!Pr(t,Vn,Wn,Xn,Hi))?!1:(ki.crossVectors(fn,hn),t=[ki.x,ki.y,ki.z],Pr(t,Vn,Wn,Xn,Hi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ot).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ot).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const jt=[new B,new B,new B,new B,new B,new B,new B,new B],Ot=new B,zi=new Li,Vn=new B,Wn=new B,Xn=new B,fn=new B,hn=new B,Tn=new B,gi=new B,Hi=new B,ki=new B,bn=new B;function Pr(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){bn.fromArray(n,s);const o=r.x*Math.abs(bn.x)+r.y*Math.abs(bn.y)+r.z*Math.abs(bn.z),c=e.dot(bn),l=t.dot(bn),d=i.dot(bn);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const Zl=new Li,_i=new B,Lr=new B;class xr{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Zl.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_i.subVectors(e,this.center);const t=_i.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(_i,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_i.copy(e.center).add(Lr)),this.expandByPoint(_i.copy(e.center).sub(Lr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Jt=new B,Dr=new B,Gi=new B,pn=new B,Ur=new B,Vi=new B,Ir=new B;class To{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jt.copy(this.origin).addScaledVector(this.direction,t),Jt.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Dr.copy(e).add(t).multiplyScalar(.5),Gi.copy(t).sub(e).normalize(),pn.copy(this.origin).sub(Dr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Gi),o=pn.dot(this.direction),c=-pn.dot(Gi),l=pn.lengthSq(),d=Math.abs(1-a*a);let u,f,p,g;if(d>0)if(u=a*c-o,f=a*o-c,g=s*d,u>=0)if(f>=-g)if(f<=g){const x=1/d;u*=x,f*=x,p=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=s,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-c),s),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-c),s),p=-u*u+f*(f+2*c)+l);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Dr).addScaledVector(Gi,f),p}intersectSphere(e,t){Jt.subVectors(e.center,this.origin);const i=Jt.dot(this.direction),r=Jt.dot(Jt)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),d>=0?(s=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Jt)!==null}intersectTriangle(e,t,i,r,s){Ur.subVectors(t,e),Vi.subVectors(i,e),Ir.crossVectors(Ur,Vi);let a=this.direction.dot(Ir),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pn.subVectors(this.origin,e);const c=o*this.direction.dot(Vi.crossVectors(pn,Vi));if(c<0)return null;const l=o*this.direction.dot(Ur.cross(pn));if(l<0||c+l>a)return null;const d=-o*pn.dot(Ir);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,i,r,s,a,o,c,l,d,u,f,p,g,x,m){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,d,u,f,p,g,x,m)}set(e,t,i,r,s,a,o,c,l,d,u,f,p,g,x,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=d,h[10]=u,h[14]=f,h[3]=p,h[7]=g,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/qn.setFromMatrixColumn(e,0).length(),s=1/qn.setFromMatrixColumn(e,1).length(),a=1/qn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),d=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=a*d,p=a*u,g=o*d,x=o*u;t[0]=c*d,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=f-x*l,t[9]=-o*c,t[2]=x-f*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*d,p=c*u,g=l*d,x=l*u;t[0]=f+x*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*u,t[5]=a*d,t[9]=-o,t[2]=p*o-g,t[6]=x+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*d,p=c*u,g=l*d,x=l*u;t[0]=f-x*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*d,t[9]=x-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*d,p=a*u,g=o*d,x=o*u;t[0]=c*d,t[4]=g*l-p,t[8]=f*l+x,t[1]=c*u,t[5]=x*l+f,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,p=a*l,g=o*c,x=o*l;t[0]=c*d,t[4]=x-f*u,t[8]=g*u+p,t[1]=u,t[5]=a*d,t[9]=-o*d,t[2]=-l*d,t[6]=p*u+g,t[10]=f-x*u}else if(e.order==="XZY"){const f=a*c,p=a*l,g=o*c,x=o*l;t[0]=c*d,t[4]=-u,t[8]=l*d,t[1]=f*u+x,t[5]=a*d,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*d,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jl,e,Jl)}lookAt(e,t,i){const r=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),mn.crossVectors(i,Lt),mn.lengthSq()===0&&(Math.abs(i.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),mn.crossVectors(i,Lt)),mn.normalize(),Wi.crossVectors(Lt,mn),r[0]=mn.x,r[4]=Wi.x,r[8]=Lt.x,r[1]=mn.y,r[5]=Wi.y,r[9]=Lt.y,r[2]=mn.z,r[6]=Wi.z,r[10]=Lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],d=i[1],u=i[5],f=i[9],p=i[13],g=i[2],x=i[6],m=i[10],h=i[14],w=i[3],b=i[7],M=i[11],R=i[15],A=r[0],C=r[4],D=r[8],S=r[12],E=r[1],P=r[5],O=r[9],G=r[13],Y=r[2],V=r[6],H=r[10],$=r[14],I=r[3],J=r[7],ee=r[11],oe=r[15];return s[0]=a*A+o*E+c*Y+l*I,s[4]=a*C+o*P+c*V+l*J,s[8]=a*D+o*O+c*H+l*ee,s[12]=a*S+o*G+c*$+l*oe,s[1]=d*A+u*E+f*Y+p*I,s[5]=d*C+u*P+f*V+p*J,s[9]=d*D+u*O+f*H+p*ee,s[13]=d*S+u*G+f*$+p*oe,s[2]=g*A+x*E+m*Y+h*I,s[6]=g*C+x*P+m*V+h*J,s[10]=g*D+x*O+m*H+h*ee,s[14]=g*S+x*G+m*$+h*oe,s[3]=w*A+b*E+M*Y+R*I,s[7]=w*C+b*P+M*V+R*J,s[11]=w*D+b*O+M*H+R*ee,s[15]=w*S+b*G+M*$+R*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],d=e[2],u=e[6],f=e[10],p=e[14],g=e[3],x=e[7],m=e[11],h=e[15];return g*(+s*c*u-r*l*u-s*o*f+i*l*f+r*o*p-i*c*p)+x*(+t*c*p-t*l*f+s*a*f-r*a*p+r*l*d-s*c*d)+m*(+t*l*u-t*o*p-s*a*u+i*a*p+s*o*d-i*l*d)+h*(-r*o*d-t*c*u+t*o*f+r*a*u-i*a*f+i*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],u=e[9],f=e[10],p=e[11],g=e[12],x=e[13],m=e[14],h=e[15],w=u*m*l-x*f*l+x*c*p-o*m*p-u*c*h+o*f*h,b=g*f*l-d*m*l-g*c*p+a*m*p+d*c*h-a*f*h,M=d*x*l-g*u*l+g*o*p-a*x*p-d*o*h+a*u*h,R=g*u*c-d*x*c-g*o*f+a*x*f+d*o*m-a*u*m,A=t*w+i*b+r*M+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=w*C,e[1]=(x*f*s-u*m*s-x*r*p+i*m*p+u*r*h-i*f*h)*C,e[2]=(o*m*s-x*c*s+x*r*l-i*m*l-o*r*h+i*c*h)*C,e[3]=(u*c*s-o*f*s-u*r*l+i*f*l+o*r*p-i*c*p)*C,e[4]=b*C,e[5]=(d*m*s-g*f*s+g*r*p-t*m*p-d*r*h+t*f*h)*C,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*h-t*c*h)*C,e[7]=(a*f*s-d*c*s+d*r*l-t*f*l-a*r*p+t*c*p)*C,e[8]=M*C,e[9]=(g*u*s-d*x*s-g*i*p+t*x*p+d*i*h-t*u*h)*C,e[10]=(a*x*s-g*o*s+g*i*l-t*x*l-a*i*h+t*o*h)*C,e[11]=(d*o*s-a*u*s-d*i*l+t*u*l+a*i*p-t*o*p)*C,e[12]=R*C,e[13]=(d*x*r-g*u*r+g*i*f-t*x*f-d*i*m+t*u*m)*C,e[14]=(g*o*r-a*x*r-g*i*c+t*x*c+a*i*m-t*o*m)*C,e[15]=(a*u*r-d*o*r+d*i*c-t*u*c-a*i*f+t*o*f)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,d=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,d*o+i,d*c-r*a,0,l*c-r*o,d*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,d=a+a,u=o+o,f=s*l,p=s*d,g=s*u,x=a*d,m=a*u,h=o*u,w=c*l,b=c*d,M=c*u,R=i.x,A=i.y,C=i.z;return r[0]=(1-(x+h))*R,r[1]=(p+M)*R,r[2]=(g-b)*R,r[3]=0,r[4]=(p-M)*A,r[5]=(1-(f+h))*A,r[6]=(m+w)*A,r[7]=0,r[8]=(g+b)*C,r[9]=(m-w)*C,r[10]=(1-(f+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=qn.set(r[0],r[1],r[2]).length();const a=qn.set(r[4],r[5],r[6]).length(),o=qn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bt.copy(this);const l=1/s,d=1/a,u=1/o;return Bt.elements[0]*=l,Bt.elements[1]*=l,Bt.elements[2]*=l,Bt.elements[4]*=d,Bt.elements[5]*=d,Bt.elements[6]*=d,Bt.elements[8]*=u,Bt.elements[9]*=u,Bt.elements[10]*=u,t.setFromRotationMatrix(Bt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=$t,c=!1){const l=this.elements,d=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),p=(i+r)/(i-r);let g,x;if(c)g=s/(a-s),x=a*s/(a-s);else if(o===$t)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===gr)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=$t,c=!1){const l=this.elements,d=2/(t-e),u=2/(i-r),f=-(t+e)/(t-e),p=-(i+r)/(i-r);let g,x;if(c)g=1/(a-s),x=a/(a-s);else if(o===$t)g=-2/(a-s),x=-(a+s)/(a-s);else if(o===gr)g=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const qn=new B,Bt=new ut,jl=new B(0,0,0),Jl=new B(1,1,1),mn=new B,Wi=new B,Lt=new B,Sa=new ut,Ma=new Pi;class cn{constructor(e=0,t=0,i=0,r=cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],d=r[9],u=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Sa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sa,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ma.setFromEuler(this),this.setFromQuaternion(Ma,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cn.DEFAULT_ORDER="XYZ";class bo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ql=0;const Ea=new B,Yn=new Pi,Qt=new ut,Xi=new B,vi=new B,ec=new B,tc=new Pi,ya=new B(1,0,0),Ta=new B(0,1,0),ba=new B(0,0,1),Aa={type:"added"},nc={type:"removed"},$n={type:"childadded",child:null},Nr={type:"childremoved",child:null};class wt extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ql++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new B,t=new cn,i=new Pi,r=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new ze}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yn.setFromAxisAngle(e,t),this.quaternion.multiply(Yn),this}rotateOnWorldAxis(e,t){return Yn.setFromAxisAngle(e,t),this.quaternion.premultiply(Yn),this}rotateX(e){return this.rotateOnAxis(ya,e)}rotateY(e){return this.rotateOnAxis(Ta,e)}rotateZ(e){return this.rotateOnAxis(ba,e)}translateOnAxis(e,t){return Ea.copy(e).applyQuaternion(this.quaternion),this.position.add(Ea.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ya,e)}translateY(e){return this.translateOnAxis(Ta,e)}translateZ(e){return this.translateOnAxis(ba,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qt.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Xi.copy(e):Xi.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),vi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qt.lookAt(vi,Xi,this.up):Qt.lookAt(Xi,vi,this.up),this.quaternion.setFromRotationMatrix(Qt),r&&(Qt.extractRotation(r.matrixWorld),Yn.setFromRotationMatrix(Qt),this.quaternion.premultiply(Yn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Aa),$n.child=e,this.dispatchEvent($n),$n.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nc),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Aa),$n.child=e,this.dispatchEvent($n),$n.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vi,e,ec),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vi,tc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),d=a(e.images),u=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}wt.DEFAULT_UP=new B(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zt=new B,en=new B,Fr=new B,tn=new B,Kn=new B,Zn=new B,wa=new B,Or=new B,Br=new B,zr=new B,Hr=new ot,kr=new ot,Gr=new ot;class kt{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),zt.subVectors(e,t),r.cross(zt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){zt.subVectors(r,t),en.subVectors(i,t),Fr.subVectors(e,t);const a=zt.dot(zt),o=zt.dot(en),c=zt.dot(Fr),l=en.dot(en),d=en.dot(Fr),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,p=(l*c-o*d)*f,g=(a*d-o*c)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,tn)===null?!1:tn.x>=0&&tn.y>=0&&tn.x+tn.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,tn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,tn.x),c.addScaledVector(a,tn.y),c.addScaledVector(o,tn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return Hr.setScalar(0),kr.setScalar(0),Gr.setScalar(0),Hr.fromBufferAttribute(e,t),kr.fromBufferAttribute(e,i),Gr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Hr,s.x),a.addScaledVector(kr,s.y),a.addScaledVector(Gr,s.z),a}static isFrontFacing(e,t,i,r){return zt.subVectors(i,t),en.subVectors(e,t),zt.cross(en).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zt.subVectors(this.c,this.b),en.subVectors(this.a,this.b),zt.cross(en).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return kt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Kn.subVectors(r,i),Zn.subVectors(s,i),Or.subVectors(e,i);const c=Kn.dot(Or),l=Zn.dot(Or);if(c<=0&&l<=0)return t.copy(i);Br.subVectors(e,r);const d=Kn.dot(Br),u=Zn.dot(Br);if(d>=0&&u<=d)return t.copy(r);const f=c*u-d*l;if(f<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(i).addScaledVector(Kn,a);zr.subVectors(e,s);const p=Kn.dot(zr),g=Zn.dot(zr);if(g>=0&&p<=g)return t.copy(s);const x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Zn,o);const m=d*g-p*u;if(m<=0&&u-d>=0&&p-g>=0)return wa.subVectors(s,r),o=(u-d)/(u-d+(p-g)),t.copy(r).addScaledVector(wa,o);const h=1/(m+x+f);return a=x*h,o=f*h,t.copy(i).addScaledVector(Kn,a).addScaledVector(Zn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ao={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gn={h:0,s:0,l:0},qi={h:0,s:0,l:0};function Vr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,qe.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=qe.workingColorSpace){if(e=kl(e,1),t=We(t,0,1),i=We(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Vr(a,s,e+1/3),this.g=Vr(a,s,e),this.b=Vr(a,s,e-1/3)}return qe.colorSpaceToWorking(this,r),this}setStyle(e,t=Tt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){const i=Ao[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=on(e.r),this.g=on(e.g),this.b=on(e.b),this}copyLinearToSRGB(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return qe.workingToColorSpace(_t.copy(this),e),Math.round(We(_t.r*255,0,255))*65536+Math.round(We(_t.g*255,0,255))*256+Math.round(We(_t.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(_t.copy(this),t);const i=_t.r,r=_t.g,s=_t.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const d=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=d<=.5?u/(a+o):u/(2-a-o),a){case i:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-i)/u+2;break;case s:c=(i-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(_t.copy(this),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=Tt){qe.workingToColorSpace(_t.copy(this),e);const t=_t.r,i=_t.g,r=_t.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(gn),this.setHSL(gn.h+e,gn.s+t,gn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(gn),e.getHSL(qi);const i=br(gn.h,qi.h,t),r=br(gn.s,qi.s,t),s=br(gn.l,qi.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _t=new $e;$e.NAMES=Ao;let ic=0;class Di extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ic++}),this.uuid=Ci(),this.name="",this.type="Material",this.blending=ri,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=is,this.blendDst=rs,this.blendEquation=Un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=ai,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ha,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kn,this.stencilZFail=kn,this.stencilZPass=kn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ri&&(i.blending=this.blending),this.side!==Mn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==is&&(i.blendSrc=this.blendSrc),this.blendDst!==rs&&(i.blendDst=this.blendDst),this.blendEquation!==Un&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ai&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ha&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==kn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==kn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ta extends Di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new B,Yi=new je;let rc=0;class bt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=pa,this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Yi.fromBufferAttribute(this,t),Yi.applyMatrix3(e),this.setXY(t,Yi.x,Yi.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=mi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=yt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),r=yt(r,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pa&&(e.usage=this.usage),e}}class wo extends bt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ro extends bt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class On extends bt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let sc=0;const Ft=new ut,Wr=new wt,jn=new B,Dt=new Li,xi=new Li,mt=new B;class un extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sc++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Eo(e)?Ro:wo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,i){return Ft.makeTranslation(e,t,i),this.applyMatrix4(Ft),this}scale(e,t,i){return Ft.makeScale(e,t,i),this.applyMatrix4(Ft),this}lookAt(e){return Wr.lookAt(e),Wr.updateMatrix(),this.applyMatrix4(Wr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jn).negate(),this.translate(jn.x,jn.y,jn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new On(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Dt.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];xi.setFromBufferAttribute(o),this.morphTargetsRelative?(mt.addVectors(Dt.min,xi.min),Dt.expandByPoint(mt),mt.addVectors(Dt.max,xi.max),Dt.expandByPoint(mt)):(Dt.expandByPoint(xi.min),Dt.expandByPoint(xi.max))}Dt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(mt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)mt.fromBufferAttribute(o,l),c&&(jn.fromBufferAttribute(e,l),mt.add(jn)),r=Math.max(r,i.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<i.count;D++)o[D]=new B,c[D]=new B;const l=new B,d=new B,u=new B,f=new je,p=new je,g=new je,x=new B,m=new B;function h(D,S,E){l.fromBufferAttribute(i,D),d.fromBufferAttribute(i,S),u.fromBufferAttribute(i,E),f.fromBufferAttribute(s,D),p.fromBufferAttribute(s,S),g.fromBufferAttribute(s,E),d.sub(l),u.sub(l),p.sub(f),g.sub(f);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(x.copy(d).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(P),o[D].add(x),o[S].add(x),o[E].add(x),c[D].add(m),c[S].add(m),c[E].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let D=0,S=w.length;D<S;++D){const E=w[D],P=E.start,O=E.count;for(let G=P,Y=P+O;G<Y;G+=3)h(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const b=new B,M=new B,R=new B,A=new B;function C(D){R.fromBufferAttribute(r,D),A.copy(R);const S=o[D];b.copy(S),b.sub(R.multiplyScalar(R.dot(S))).normalize(),M.crossVectors(A,S);const P=M.dot(c[D])<0?-1:1;a.setXYZW(D,b.x,b.y,b.z,P)}for(let D=0,S=w.length;D<S;++D){const E=w[D],P=E.start,O=E.count;for(let G=P,Y=P+O;G<Y;G+=3)C(e.getX(G+0)),C(e.getX(G+1)),C(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new B,s=new B,a=new B,o=new B,c=new B,l=new B,d=new B,u=new B;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),d.subVectors(a,s),u.subVectors(r,s),d.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),o.add(d),c.add(d),l.add(d),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),d.subVectors(a,s),u.subVectors(r,s),d.cross(u),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,u=o.normalized,f=new l.constructor(c.length*d);let p=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*d;for(let h=0;h<d;h++)f[g++]=l[p++]}return new bt(f,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new un,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let d=0,u=l.length;d<u;d++){const f=l[d],p=e(f,i);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let u=0,f=l.length;u<f;u++){const p=l[u];d.push(p.toJSON(e.data))}d.length>0&&(r[c]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const d=r[l];this.setAttribute(l,d.clone(t))}const s=e.morphAttributes;for(const l in s){const d=[],u=s[l];for(let f=0,p=u.length;f<p;f++)d.push(u[f].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,d=a.length;l<d;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ra=new ut,An=new To,$i=new xr,Ca=new B,Ki=new B,Zi=new B,ji=new B,Xr=new B,Ji=new B,Pa=new B,Qi=new B;class Wt extends wt{constructor(e=new un,t=new ta){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ji.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const d=o[c],u=s[c];d!==0&&(Xr.fromBufferAttribute(u,e),a?Ji.addScaledVector(Xr,d):Ji.addScaledVector(Xr.sub(t),d))}t.add(Ji)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$i.copy(i.boundingSphere),$i.applyMatrix4(s),An.copy(e.ray).recast(e.near),!($i.containsPoint(An.origin)===!1&&(An.intersectSphere($i,Ca)===null||An.origin.distanceToSquared(Ca)>(e.far-e.near)**2))&&(Ra.copy(s).invert(),An.copy(e.ray).applyMatrix4(Ra),!(i.boundingBox!==null&&An.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,An)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const m=f[g],h=a[m.materialIndex],w=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=w,R=b;M<R;M+=3){const A=o.getX(M),C=o.getX(M+1),D=o.getX(M+2);r=er(this,h,e,i,l,d,u,A,C,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,h=x;m<h;m+=3){const w=o.getX(m),b=o.getX(m+1),M=o.getX(m+2);r=er(this,a,e,i,l,d,u,w,b,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const m=f[g],h=a[m.materialIndex],w=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=w,R=b;M<R;M+=3){const A=M,C=M+1,D=M+2;r=er(this,h,e,i,l,d,u,A,C,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,h=x;m<h;m+=3){const w=m,b=m+1,M=m+2;r=er(this,a,e,i,l,d,u,w,b,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function ac(n,e,t,i,r,s,a,o){let c;if(e.side===At?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Mn,o),c===null)return null;Qi.copy(o),Qi.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Qi);return l<t.near||l>t.far?null:{distance:l,point:Qi.clone(),object:n}}function er(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,Ki),n.getVertexPosition(c,Zi),n.getVertexPosition(l,ji);const d=ac(n,e,t,i,Ki,Zi,ji,Pa);if(d){const u=new B;kt.getBarycoord(Pa,Ki,Zi,ji,u),r&&(d.uv=kt.getInterpolatedAttribute(r,o,c,l,u,new je)),s&&(d.uv1=kt.getInterpolatedAttribute(s,o,c,l,u,new je)),a&&(d.normal=kt.getInterpolatedAttribute(a,o,c,l,u,new B),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new B,materialIndex:0};kt.getNormal(Ki,Zi,ji,f.normal),d.face=f,d.barycoord=u}return d}class Ui extends un{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],d=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new On(l,3)),this.setAttribute("normal",new On(d,3)),this.setAttribute("uv",new On(u,2));function g(x,m,h,w,b,M,R,A,C,D,S){const E=M/C,P=R/D,O=M/2,G=R/2,Y=A/2,V=C+1,H=D+1;let $=0,I=0;const J=new B;for(let ee=0;ee<H;ee++){const oe=ee*P-G;for(let xe=0;xe<V;xe++){const re=xe*E-O;J[x]=re*w,J[m]=oe*b,J[h]=Y,l.push(J.x,J.y,J.z),J[x]=0,J[m]=0,J[h]=A>0?1:-1,d.push(J.x,J.y,J.z),u.push(xe/C),u.push(1-ee/D),$+=1}}for(let ee=0;ee<D;ee++)for(let oe=0;oe<C;oe++){const xe=f+oe+V*ee,re=f+oe+V*(ee+1),Te=f+(oe+1)+V*(ee+1),Ce=f+(oe+1)+V*ee;c.push(xe,re,Ce),c.push(re,Te,Ce),I+=6}o.addGroup(p,I,S),p+=I,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ui(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ui(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function St(n){const e={};for(let t=0;t<n.length;t++){const i=ui(n[t]);for(const r in i)e[r]=i[r]}return e}function oc(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Co(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const lc={clone:ui,merge:St};var cc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kt extends Di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cc,this.fragmentShader=uc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ui(e.uniforms),this.uniformsGroups=oc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Po extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=$t,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _n=new B,La=new je,Da=new je;class Ht extends Po{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(Tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){_n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_n.x,_n.y).multiplyScalar(-e/_n.z),_n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_n.x,_n.y).multiplyScalar(-e/_n.z)}getViewSize(e,t){return this.getViewBounds(e,La,Da),t.subVectors(Da,La)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Tr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Jn=-90,Qn=1;class dc extends wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ht(Jn,Qn,e,t);r.layers=this.layers,this.add(r);const s=new Ht(Jn,Qn,e,t);s.layers=this.layers,this.add(s);const a=new Ht(Jn,Qn,e,t);a.layers=this.layers,this.add(a);const o=new Ht(Jn,Qn,e,t);o.layers=this.layers,this.add(o);const c=new Ht(Jn,Qn,e,t);c.layers=this.layers,this.add(c);const l=new Ht(Jn,Qn,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===$t)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===gr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,d]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,d),e.setRenderTarget(u,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Lo extends Mt{constructor(e=[],t=oi,i,r,s,a,o,c,l,d){super(e,t,i,r,s,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fc extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Lo(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ui(5,5,5),s=new Kt({name:"CubemapFromEquirect",uniforms:ui(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:At,blending:xn});s.uniforms.tEquirect.value=t;const a=new Wt(r,s),o=t.minFilter;return t.minFilter===Fn&&(t.minFilter=Gt),new dc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class tr extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hc={type:"move"};class qr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),h=this._getHandJoint(l,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const d=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=d.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hc)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new tr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class pc extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Yr=new B,mc=new B,gc=new ze;class Ln{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Yr.subVectors(i,t).cross(mc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Yr),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||gc.getNormalMatrix(e),r=this.coplanarPoint(Yr).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wn=new xr,_c=new je(.5,.5),nr=new B;class Do{constructor(e=new Ln,t=new Ln,i=new Ln,r=new Ln,s=new Ln,a=new Ln){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=$t,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],d=s[4],u=s[5],f=s[6],p=s[7],g=s[8],x=s[9],m=s[10],h=s[11],w=s[12],b=s[13],M=s[14],R=s[15];if(r[0].setComponents(l-a,p-d,h-g,R-w).normalize(),r[1].setComponents(l+a,p+d,h+g,R+w).normalize(),r[2].setComponents(l+o,p+u,h+x,R+b).normalize(),r[3].setComponents(l-o,p-u,h-x,R-b).normalize(),i)r[4].setComponents(c,f,m,M).normalize(),r[5].setComponents(l-c,p-f,h-m,R-M).normalize();else if(r[4].setComponents(l-c,p-f,h-m,R-M).normalize(),t===$t)r[5].setComponents(l+c,p+f,h+m,R+M).normalize();else if(t===gr)r[5].setComponents(c,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wn)}intersectsSprite(e){wn.center.set(0,0,0);const t=_c.distanceTo(e.center);return wn.radius=.7071067811865476+t,wn.applyMatrix4(e.matrixWorld),this.intersectsSphere(wn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(nr.x=r.normal.x>0?e.max.x:e.min.x,nr.y=r.normal.y>0?e.max.y:e.min.y,nr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(nr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vc extends Di{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ua=new ut,Xs=new To,ir=new xr,rr=new B;class xc extends wt{constructor(e=new un,t=new vc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ir.copy(i.boundingSphere),ir.applyMatrix4(r),ir.radius+=s,e.ray.intersectsSphere(ir)===!1)return;Ua.copy(r).invert(),Xs.copy(e.ray).applyMatrix4(Ua);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,u=i.attributes.position;if(l!==null){const f=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=f,x=p;g<x;g++){const m=l.getX(g);rr.fromBufferAttribute(u,m),Ia(rr,m,c,r,e,t,this)}}else{const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,x=p;g<x;g++)rr.fromBufferAttribute(u,g),Ia(rr,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ia(n,e,t,i,r,s,a){const o=Xs.distanceSqToPoint(n);if(o<t){const c=new B;Xs.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Sc extends Mt{constructor(e,t,i,r,s,a,o,c,l){super(e,t,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Uo extends Mt{constructor(e,t,i=Bn,r,s,a,o=Xt,c=Xt,l,d=bi,u=1){if(d!==bi&&d!==Ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,r,s,a,o,c,d,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ea(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Io extends Mt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ii extends un{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,d=c+1,u=e/o,f=t/c,p=[],g=[],x=[],m=[];for(let h=0;h<d;h++){const w=h*f-a;for(let b=0;b<l;b++){const M=b*u-s;g.push(M,-w,0),x.push(0,0,1),m.push(b/o),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let w=0;w<o;w++){const b=w+l*h,M=w+l*(h+1),R=w+1+l*(h+1),A=w+1+l*h;p.push(b,M,A),p.push(M,R,A)}this.setIndex(p),this.setAttribute("position",new On(g,3)),this.setAttribute("normal",new On(x,3)),this.setAttribute("uv",new On(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.width,e.height,e.widthSegments,e.heightSegments)}}class Mc extends Di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ec extends Di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class No extends Po{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class yc extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Na(n,e,t,i){const r=Tc(i);switch(t){case _o:return n*e;case xo:return n*e/r.components*r.byteLength;case js:return n*e/r.components*r.byteLength;case So:return n*e*2/r.components*r.byteLength;case Js:return n*e*2/r.components*r.byteLength;case vo:return n*e*3/r.components*r.byteLength;case Vt:return n*e*4/r.components*r.byteLength;case Qs:return n*e*4/r.components*r.byteLength;case ur:case dr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case fr:case hr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _s:case xs:return Math.max(n,16)*Math.max(e,8)/4;case gs:case vs:return Math.max(n,8)*Math.max(e,8)/2;case Ss:case Ms:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Es:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ys:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ts:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case bs:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case As:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ws:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Rs:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Cs:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ps:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ls:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ds:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Us:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Is:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ns:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Fs:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Os:case Bs:case zs:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Hs:case ks:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Gs:case Vs:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tc(n){switch(n){case ln:case ho:return{byteLength:1,components:1};case yi:case po:case Ri:return{byteLength:2,components:1};case Ks:case Zs:return{byteLength:2,components:4};case Bn:case $s:case an:return{byteLength:4,components:1};case mo:case go:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ys}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ys);function Fo(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function bc(n){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,u=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,d),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){const d=c.array,u=c.updateRanges;if(n.bindBuffer(l,o),u.length===0)n.bufferSubData(l,0,d);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const x=u[p];n.bufferSubData(l,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Ac=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Rc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Uc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ic=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Nc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Oc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Gc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$c=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Kc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jc=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Jc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nu="gl_FragColor = linearToOutputTexel( gl_FragColor );",iu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ru=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,su=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,au=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ou=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,du=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_u=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Su=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Tu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Au=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ru=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Du=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Uu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Iu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Nu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ou=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ku=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Gu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Wu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$u=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ku=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ju=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ju=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ed=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,td=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,id=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ad=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,od=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ld=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ud=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,md=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_d=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Md=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ed=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Td=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ad=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ld=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Dd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ud=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Id=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Nd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Od=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Hd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Wd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$d=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ef=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:Ac,alphahash_pars_fragment:wc,alphamap_fragment:Rc,alphamap_pars_fragment:Cc,alphatest_fragment:Pc,alphatest_pars_fragment:Lc,aomap_fragment:Dc,aomap_pars_fragment:Uc,batching_pars_vertex:Ic,batching_vertex:Nc,begin_vertex:Fc,beginnormal_vertex:Oc,bsdfs:Bc,iridescence_fragment:zc,bumpmap_pars_fragment:Hc,clipping_planes_fragment:kc,clipping_planes_pars_fragment:Gc,clipping_planes_pars_vertex:Vc,clipping_planes_vertex:Wc,color_fragment:Xc,color_pars_fragment:qc,color_pars_vertex:Yc,color_vertex:$c,common:Kc,cube_uv_reflection_fragment:Zc,defaultnormal_vertex:jc,displacementmap_pars_vertex:Jc,displacementmap_vertex:Qc,emissivemap_fragment:eu,emissivemap_pars_fragment:tu,colorspace_fragment:nu,colorspace_pars_fragment:iu,envmap_fragment:ru,envmap_common_pars_fragment:su,envmap_pars_fragment:au,envmap_pars_vertex:ou,envmap_physical_pars_fragment:vu,envmap_vertex:lu,fog_vertex:cu,fog_pars_vertex:uu,fog_fragment:du,fog_pars_fragment:fu,gradientmap_pars_fragment:hu,lightmap_pars_fragment:pu,lights_lambert_fragment:mu,lights_lambert_pars_fragment:gu,lights_pars_begin:_u,lights_toon_fragment:xu,lights_toon_pars_fragment:Su,lights_phong_fragment:Mu,lights_phong_pars_fragment:Eu,lights_physical_fragment:yu,lights_physical_pars_fragment:Tu,lights_fragment_begin:bu,lights_fragment_maps:Au,lights_fragment_end:wu,logdepthbuf_fragment:Ru,logdepthbuf_pars_fragment:Cu,logdepthbuf_pars_vertex:Pu,logdepthbuf_vertex:Lu,map_fragment:Du,map_pars_fragment:Uu,map_particle_fragment:Iu,map_particle_pars_fragment:Nu,metalnessmap_fragment:Fu,metalnessmap_pars_fragment:Ou,morphinstance_vertex:Bu,morphcolor_vertex:zu,morphnormal_vertex:Hu,morphtarget_pars_vertex:ku,morphtarget_vertex:Gu,normal_fragment_begin:Vu,normal_fragment_maps:Wu,normal_pars_fragment:Xu,normal_pars_vertex:qu,normal_vertex:Yu,normalmap_pars_fragment:$u,clearcoat_normal_fragment_begin:Ku,clearcoat_normal_fragment_maps:Zu,clearcoat_pars_fragment:ju,iridescence_pars_fragment:Ju,opaque_fragment:Qu,packing:ed,premultiplied_alpha_fragment:td,project_vertex:nd,dithering_fragment:id,dithering_pars_fragment:rd,roughnessmap_fragment:sd,roughnessmap_pars_fragment:ad,shadowmap_pars_fragment:od,shadowmap_pars_vertex:ld,shadowmap_vertex:cd,shadowmask_pars_fragment:ud,skinbase_vertex:dd,skinning_pars_vertex:fd,skinning_vertex:hd,skinnormal_vertex:pd,specularmap_fragment:md,specularmap_pars_fragment:gd,tonemapping_fragment:_d,tonemapping_pars_fragment:vd,transmission_fragment:xd,transmission_pars_fragment:Sd,uv_pars_fragment:Md,uv_pars_vertex:Ed,uv_vertex:yd,worldpos_vertex:Td,background_vert:bd,background_frag:Ad,backgroundCube_vert:wd,backgroundCube_frag:Rd,cube_vert:Cd,cube_frag:Pd,depth_vert:Ld,depth_frag:Dd,distanceRGBA_vert:Ud,distanceRGBA_frag:Id,equirect_vert:Nd,equirect_frag:Fd,linedashed_vert:Od,linedashed_frag:Bd,meshbasic_vert:zd,meshbasic_frag:Hd,meshlambert_vert:kd,meshlambert_frag:Gd,meshmatcap_vert:Vd,meshmatcap_frag:Wd,meshnormal_vert:Xd,meshnormal_frag:qd,meshphong_vert:Yd,meshphong_frag:$d,meshphysical_vert:Kd,meshphysical_frag:Zd,meshtoon_vert:jd,meshtoon_frag:Jd,points_vert:Qd,points_frag:ef,shadow_vert:tf,shadow_frag:nf,sprite_vert:rf,sprite_frag:sf},le={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Yt={basic:{uniforms:St([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:St([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new $e(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:St([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:St([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:St([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new $e(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:St([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:St([le.points,le.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:St([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:St([le.common,le.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:St([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:St([le.sprite,le.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:St([le.common,le.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:St([le.lights,le.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Yt.physical={uniforms:St([Yt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const sr={r:0,b:0,g:0},Rn=new cn,af=new ut;function of(n,e,t,i,r,s,a){const o=new $e(0);let c=s===!0?0:1,l,d,u=null,f=0,p=null;function g(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function x(b){let M=!1;const R=g(b);R===null?h(o,c):R&&R.isColor&&(h(R,1),M=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,M){const R=g(M);R&&(R.isCubeTexture||R.mapping===vr)?(d===void 0&&(d=new Wt(new Ui(1,1,1),new Kt({name:"BackgroundCubeMaterial",uniforms:ui(Yt.backgroundCube.uniforms),vertexShader:Yt.backgroundCube.vertexShader,fragmentShader:Yt.backgroundCube.fragmentShader,side:At,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Rn.copy(M.backgroundRotation),Rn.x*=-1,Rn.y*=-1,Rn.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Rn.y*=-1,Rn.z*=-1),d.material.uniforms.envMap.value=R,d.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(af.makeRotationFromEuler(Rn)),d.material.toneMapped=qe.getTransfer(R.colorSpace)!==Ze,(u!==R||f!==R.version||p!==n.toneMapping)&&(d.material.needsUpdate=!0,u=R,f=R.version,p=n.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new Wt(new Ii(2,2),new Kt({name:"BackgroundMaterial",uniforms:ui(Yt.background.uniforms),vertexShader:Yt.background.vertexShader,fragmentShader:Yt.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=qe.getTransfer(R.colorSpace)!==Ze,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||f!==R.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,u=R,f=R.version,p=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function h(b,M){b.getRGB(sr,Co(n)),i.buffers.color.setClear(sr.r,sr.g,sr.b,M,a)}function w(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,M=1){o.set(b),c=M,h(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,h(o,c)},render:x,addToRenderList:m,dispose:w}}function lf(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(E,P,O,G,Y){let V=!1;const H=u(G,O,P);s!==H&&(s=H,l(s.object)),V=p(E,G,O,Y),V&&g(E,G,O,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,M(E,P,O,G),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return n.createVertexArray()}function l(E){return n.bindVertexArray(E)}function d(E){return n.deleteVertexArray(E)}function u(E,P,O){const G=O.wireframe===!0;let Y=i[E.id];Y===void 0&&(Y={},i[E.id]=Y);let V=Y[P.id];V===void 0&&(V={},Y[P.id]=V);let H=V[G];return H===void 0&&(H=f(c()),V[G]=H),H}function f(E){const P=[],O=[],G=[];for(let Y=0;Y<t;Y++)P[Y]=0,O[Y]=0,G[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:G,object:E,attributes:{},index:null}}function p(E,P,O,G){const Y=s.attributes,V=P.attributes;let H=0;const $=O.getAttributes();for(const I in $)if($[I].location>=0){const ee=Y[I];let oe=V[I];if(oe===void 0&&(I==="instanceMatrix"&&E.instanceMatrix&&(oe=E.instanceMatrix),I==="instanceColor"&&E.instanceColor&&(oe=E.instanceColor)),ee===void 0||ee.attribute!==oe||oe&&ee.data!==oe.data)return!0;H++}return s.attributesNum!==H||s.index!==G}function g(E,P,O,G){const Y={},V=P.attributes;let H=0;const $=O.getAttributes();for(const I in $)if($[I].location>=0){let ee=V[I];ee===void 0&&(I==="instanceMatrix"&&E.instanceMatrix&&(ee=E.instanceMatrix),I==="instanceColor"&&E.instanceColor&&(ee=E.instanceColor));const oe={};oe.attribute=ee,ee&&ee.data&&(oe.data=ee.data),Y[I]=oe,H++}s.attributes=Y,s.attributesNum=H,s.index=G}function x(){const E=s.newAttributes;for(let P=0,O=E.length;P<O;P++)E[P]=0}function m(E){h(E,0)}function h(E,P){const O=s.newAttributes,G=s.enabledAttributes,Y=s.attributeDivisors;O[E]=1,G[E]===0&&(n.enableVertexAttribArray(E),G[E]=1),Y[E]!==P&&(n.vertexAttribDivisor(E,P),Y[E]=P)}function w(){const E=s.newAttributes,P=s.enabledAttributes;for(let O=0,G=P.length;O<G;O++)P[O]!==E[O]&&(n.disableVertexAttribArray(O),P[O]=0)}function b(E,P,O,G,Y,V,H){H===!0?n.vertexAttribIPointer(E,P,O,Y,V):n.vertexAttribPointer(E,P,O,G,Y,V)}function M(E,P,O,G){x();const Y=G.attributes,V=O.getAttributes(),H=P.defaultAttributeValues;for(const $ in V){const I=V[$];if(I.location>=0){let J=Y[$];if(J===void 0&&($==="instanceMatrix"&&E.instanceMatrix&&(J=E.instanceMatrix),$==="instanceColor"&&E.instanceColor&&(J=E.instanceColor)),J!==void 0){const ee=J.normalized,oe=J.itemSize,xe=e.get(J);if(xe===void 0)continue;const re=xe.buffer,Te=xe.type,Ce=xe.bytesPerElement,X=Te===n.INT||Te===n.UNSIGNED_INT||J.gpuType===$s;if(J.isInterleavedBufferAttribute){const Z=J.data,he=Z.stride,Ue=J.offset;if(Z.isInstancedInterleavedBuffer){for(let Se=0;Se<I.locationSize;Se++)h(I.location+Se,Z.meshPerAttribute);E.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Se=0;Se<I.locationSize;Se++)m(I.location+Se);n.bindBuffer(n.ARRAY_BUFFER,re);for(let Se=0;Se<I.locationSize;Se++)b(I.location+Se,oe/I.locationSize,Te,ee,he*Ce,(Ue+oe/I.locationSize*Se)*Ce,X)}else{if(J.isInstancedBufferAttribute){for(let Z=0;Z<I.locationSize;Z++)h(I.location+Z,J.meshPerAttribute);E.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Z=0;Z<I.locationSize;Z++)m(I.location+Z);n.bindBuffer(n.ARRAY_BUFFER,re);for(let Z=0;Z<I.locationSize;Z++)b(I.location+Z,oe/I.locationSize,Te,ee,oe*Ce,oe/I.locationSize*Z*Ce,X)}}else if(H!==void 0){const ee=H[$];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(I.location,ee);break;case 3:n.vertexAttrib3fv(I.location,ee);break;case 4:n.vertexAttrib4fv(I.location,ee);break;default:n.vertexAttrib1fv(I.location,ee)}}}}w()}function R(){D();for(const E in i){const P=i[E];for(const O in P){const G=P[O];for(const Y in G)d(G[Y].object),delete G[Y];delete P[O]}delete i[E]}}function A(E){if(i[E.id]===void 0)return;const P=i[E.id];for(const O in P){const G=P[O];for(const Y in G)d(G[Y].object),delete G[Y];delete P[O]}delete i[E.id]}function C(E){for(const P in i){const O=i[P];if(O[E.id]===void 0)continue;const G=O[E.id];for(const Y in G)d(G[Y].object),delete G[Y];delete O[E.id]}}function D(){S(),a=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:D,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:w}}function cf(n,e,t){let i;function r(l){i=l}function s(l,d){n.drawArrays(i,l,d),t.update(d,i,1)}function a(l,d,u){u!==0&&(n.drawArraysInstanced(i,l,d,u),t.update(d,i,u))}function o(l,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,d,0,u);let p=0;for(let g=0;g<u;g++)p+=d[g];t.update(p,i,1)}function c(l,d,u,f){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],d[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,d,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=d[x]*f[x];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function uf(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Vt&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const D=C===Ri&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ln&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==an&&!D)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:R,maxSamples:A}}function df(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Ln,o=new ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||i!==0||r;return r=f,i=u.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=d(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,h=n.get(u);if(!r||g===null||g.length===0||s&&!m)s?d(null):l();else{const w=s?0:i,b=w*4;let M=h.clippingState||null;c.value=M,M=d(g,f,b,p);for(let R=0;R!==b;++R)M[R]=t[R];h.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(u,f,p,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const h=p+x*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<h)&&(m=new Float32Array(h));for(let b=0,M=p;b!==x;++b,M+=4)a.copy(u[b]).applyMatrix4(w,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function ff(n){let e=new WeakMap;function t(a,o){return o===fs?a.mapping=oi:o===hs&&(a.mapping=li),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===fs||o===hs)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new fc(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const ni=4,Fa=[.125,.215,.35,.446,.526,.582],In=20,$r=new No,Oa=new $e;let Kr=null,Zr=0,jr=0,Jr=!1;const Dn=(1+Math.sqrt(5))/2,ei=1/Dn,Ba=[new B(-Dn,ei,0),new B(Dn,ei,0),new B(-ei,0,Dn),new B(ei,0,Dn),new B(0,Dn,-ei),new B(0,Dn,ei),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],hf=new B;class za{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=hf}=s;Kr=this._renderer.getRenderTarget(),Zr=this._renderer.getActiveCubeFace(),jr=this._renderer.getActiveMipmapLevel(),Jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ga(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ka(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Kr,Zr,jr),this._renderer.xr.enabled=Jr,e.scissorTest=!1,ar(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===oi||e.mapping===li?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kr=this._renderer.getRenderTarget(),Zr=this._renderer.getActiveCubeFace(),jr=this._renderer.getActiveMipmapLevel(),Jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:Ri,format:Vt,colorSpace:ci,depthBuffer:!1},r=Ha(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ha(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pf(s)),this._blurMaterial=mf(s,e,t)}return r}_compileMaterial(e){const t=new Wt(this._lodPlanes[0],e);this._renderer.compile(t,$r)}_sceneToCubeUV(e,t,i,r,s){const c=new Ht(90,1,t,i),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(Oa),u.toneMapping=Sn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));const x=new ta({name:"PMREM.Background",side:At,depthWrite:!1,depthTest:!1}),m=new Wt(new Ui,x);let h=!1;const w=e.background;w?w.isColor&&(x.color.copy(w),e.background=null,h=!0):(x.color.copy(Oa),h=!0);for(let b=0;b<6;b++){const M=b%3;M===0?(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+d[b],s.y,s.z)):M===1?(c.up.set(0,0,l[b]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+d[b],s.z)):(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+d[b]));const R=this._cubeSize;ar(r,M*R,b>2?R:0,R,R),u.setRenderTarget(r),h&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=w}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===oi||e.mapping===li;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ga()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ka());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Wt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;ar(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,$r)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ba[(r-s-1)%Ba.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new Wt(this._lodPlanes[r],l),f=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*In-1),x=s/g,m=isFinite(s)?1+Math.floor(d*x):In;m>In&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${In}`);const h=[];let w=0;for(let C=0;C<In;++C){const D=C/x,S=Math.exp(-D*D/2);h.push(S),C===0?w+=S:C<m&&(w+=2*S)}for(let C=0;C<h.length;C++)h[C]=h[C]/w;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-i;const M=this._sizeLods[r],R=3*M*(r>b-ni?r-b+ni:0),A=4*(this._cubeSize-M);ar(t,R,A,3*M,2*M),c.setRenderTarget(t),c.render(u,$r)}}function pf(n){const e=[],t=[],i=[];let r=n;const s=n-ni+1+Fa.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>n-ni?c=Fa[a-n+ni-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),d=-l,u=1+l,f=[d,d,u,d,u,u,d,d,u,u,d,u],p=6,g=6,x=3,m=2,h=1,w=new Float32Array(x*g*p),b=new Float32Array(m*g*p),M=new Float32Array(h*g*p);for(let A=0;A<p;A++){const C=A%3*2/3-1,D=A>2?0:-1,S=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];w.set(S,x*g*A),b.set(f,m*g*A);const E=[A,A,A,A,A,A];M.set(E,h*g*A)}const R=new un;R.setAttribute("position",new bt(w,x)),R.setAttribute("uv",new bt(b,m)),R.setAttribute("faceIndex",new bt(M,h)),e.push(R),r>ni&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ha(n,e,t){const i=new zn(n,e,t);return i.texture.mapping=vr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ar(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function mf(n,e,t){const i=new Float32Array(In),r=new B(0,1,0);return new Kt({name:"SphericalGaussianBlur",defines:{n:In,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function ka(){return new Kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Ga(){return new Kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function na(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gf(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===fs||c===hs,d=c===oi||c===li;if(l||d){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new za(n)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return l&&p&&p.height>0||d&&p&&r(p)?(t===null&&(t=new za(n)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let c=0;const l=6;for(let d=0;d<l;d++)o[d]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function _f(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&wi("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function vf(n,e,t,i){const r={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function l(u){const f=[],p=u.index,g=u.attributes.position;let x=0;if(p!==null){const w=p.array;x=p.version;for(let b=0,M=w.length;b<M;b+=3){const R=w[b+0],A=w[b+1],C=w[b+2];f.push(R,A,A,C,C,R)}}else if(g!==void 0){const w=g.array;x=g.version;for(let b=0,M=w.length/3-1;b<M;b+=3){const R=b+0,A=b+1,C=b+2;f.push(R,A,A,C,C,R)}}else return;const m=new(Eo(f)?Ro:wo)(f,1);m.version=x;const h=s.get(u);h&&e.remove(h),s.set(u,m)}function d(u){const f=s.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:d}}function xf(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,p){n.drawElements(i,p,s,f*a),t.update(p,i,1)}function l(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,f*a,g),t.update(p,i,g))}function d(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];t.update(m,i,1)}function u(f,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)l(f[h]/a,p[h],x[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,x,0,g);let h=0;for(let w=0;w<g;w++)h+=p[w]*x[w];t.update(h,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function Sf(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Mf(n,e,t){const i=new WeakMap,r=new ot;function s(a,o,c){const l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0;let f=i.get(o);if(f===void 0||f.count!==u){let E=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",E)};var p=E;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),x===!0&&(M=2),m===!0&&(M=3);let R=o.attributes.position.count*M,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const C=new Float32Array(R*A*4*u),D=new yo(C,R,A,u);D.type=an,D.needsUpdate=!0;const S=M*4;for(let P=0;P<u;P++){const O=h[P],G=w[P],Y=b[P],V=R*A*4*P;for(let H=0;H<O.count;H++){const $=H*S;g===!0&&(r.fromBufferAttribute(O,H),C[V+$+0]=r.x,C[V+$+1]=r.y,C[V+$+2]=r.z,C[V+$+3]=0),x===!0&&(r.fromBufferAttribute(G,H),C[V+$+4]=r.x,C[V+$+5]=r.y,C[V+$+6]=r.z,C[V+$+7]=0),m===!0&&(r.fromBufferAttribute(Y,H),C[V+$+8]=r.x,C[V+$+9]=r.y,C[V+$+10]=r.z,C[V+$+11]=Y.itemSize===4?r.w:1)}}f={count:u,texture:D,size:new je(R,A)},i.set(o,f),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const x=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function Ef(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return u}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const Oo=new Mt,Va=new Uo(1,1),Bo=new yo,zo=new Kl,Ho=new Lo,Wa=[],Xa=[],qa=new Float32Array(16),Ya=new Float32Array(9),$a=new Float32Array(4);function fi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Wa[r];if(s===void 0&&(s=new Float32Array(r),Wa[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ht(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Sr(n,e){let t=Xa[e];t===void 0&&(t=new Int32Array(e),Xa[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function yf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Tf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;n.uniform2fv(this.addr,e),ht(t,e)}}function bf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;n.uniform3fv(this.addr,e),ht(t,e)}}function Af(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;n.uniform4fv(this.addr,e),ht(t,e)}}function wf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(ft(t,i))return;$a.set(i),n.uniformMatrix2fv(this.addr,!1,$a),ht(t,i)}}function Rf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(ft(t,i))return;Ya.set(i),n.uniformMatrix3fv(this.addr,!1,Ya),ht(t,i)}}function Cf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(ft(t,i))return;qa.set(i),n.uniformMatrix4fv(this.addr,!1,qa),ht(t,i)}}function Pf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Lf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;n.uniform2iv(this.addr,e),ht(t,e)}}function Df(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;n.uniform3iv(this.addr,e),ht(t,e)}}function Uf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;n.uniform4iv(this.addr,e),ht(t,e)}}function If(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Nf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;n.uniform2uiv(this.addr,e),ht(t,e)}}function Ff(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;n.uniform3uiv(this.addr,e),ht(t,e)}}function Of(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;n.uniform4uiv(this.addr,e),ht(t,e)}}function Bf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Va.compareFunction=Mo,s=Va):s=Oo,t.setTexture2D(e||s,r)}function zf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||zo,r)}function Hf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ho,r)}function kf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Bo,r)}function Gf(n){switch(n){case 5126:return yf;case 35664:return Tf;case 35665:return bf;case 35666:return Af;case 35674:return wf;case 35675:return Rf;case 35676:return Cf;case 5124:case 35670:return Pf;case 35667:case 35671:return Lf;case 35668:case 35672:return Df;case 35669:case 35673:return Uf;case 5125:return If;case 36294:return Nf;case 36295:return Ff;case 36296:return Of;case 35678:case 36198:case 36298:case 36306:case 35682:return Bf;case 35679:case 36299:case 36307:return zf;case 35680:case 36300:case 36308:case 36293:return Hf;case 36289:case 36303:case 36311:case 36292:return kf}}function Vf(n,e){n.uniform1fv(this.addr,e)}function Wf(n,e){const t=fi(e,this.size,2);n.uniform2fv(this.addr,t)}function Xf(n,e){const t=fi(e,this.size,3);n.uniform3fv(this.addr,t)}function qf(n,e){const t=fi(e,this.size,4);n.uniform4fv(this.addr,t)}function Yf(n,e){const t=fi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function $f(n,e){const t=fi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Kf(n,e){const t=fi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Zf(n,e){n.uniform1iv(this.addr,e)}function jf(n,e){n.uniform2iv(this.addr,e)}function Jf(n,e){n.uniform3iv(this.addr,e)}function Qf(n,e){n.uniform4iv(this.addr,e)}function eh(n,e){n.uniform1uiv(this.addr,e)}function th(n,e){n.uniform2uiv(this.addr,e)}function nh(n,e){n.uniform3uiv(this.addr,e)}function ih(n,e){n.uniform4uiv(this.addr,e)}function rh(n,e,t){const i=this.cache,r=e.length,s=Sr(t,r);ft(i,s)||(n.uniform1iv(this.addr,s),ht(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Oo,s[a])}function sh(n,e,t){const i=this.cache,r=e.length,s=Sr(t,r);ft(i,s)||(n.uniform1iv(this.addr,s),ht(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||zo,s[a])}function ah(n,e,t){const i=this.cache,r=e.length,s=Sr(t,r);ft(i,s)||(n.uniform1iv(this.addr,s),ht(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Ho,s[a])}function oh(n,e,t){const i=this.cache,r=e.length,s=Sr(t,r);ft(i,s)||(n.uniform1iv(this.addr,s),ht(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Bo,s[a])}function lh(n){switch(n){case 5126:return Vf;case 35664:return Wf;case 35665:return Xf;case 35666:return qf;case 35674:return Yf;case 35675:return $f;case 35676:return Kf;case 5124:case 35670:return Zf;case 35667:case 35671:return jf;case 35668:case 35672:return Jf;case 35669:case 35673:return Qf;case 5125:return eh;case 36294:return th;case 36295:return nh;case 36296:return ih;case 35678:case 36198:case 36298:case 36306:case 35682:return rh;case 35679:case 36299:case 36307:return sh;case 35680:case 36300:case 36308:case 36293:return ah;case 36289:case 36303:case 36311:case 36292:return oh}}class ch{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Gf(t.type)}}class uh{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lh(t.type)}}class dh{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Qr=/(\w+)(\])?(\[|\.)?/g;function Ka(n,e){n.seq.push(e),n.map[e.id]=e}function fh(n,e,t){const i=n.name,r=i.length;for(Qr.lastIndex=0;;){const s=Qr.exec(i),a=Qr.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Ka(t,l===void 0?new ch(o,n,e):new uh(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new dh(o),Ka(t,u)),t=u}}}class pr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);fh(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Za(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const hh=37297;let ph=0;function mh(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const ja=new ze;function gh(n){qe._getMatrix(ja,qe.workingColorSpace,n);const e=`mat3( ${ja.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(n)){case mr:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ja(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+mh(n.getShaderSource(e),o)}else return s}function _h(n,e){const t=gh(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function vh(n,e){let t;switch(e){case El:t="Linear";break;case yl:t="Reinhard";break;case Tl:t="Cineon";break;case bl:t="ACESFilmic";break;case wl:t="AgX";break;case Rl:t="Neutral";break;case Al:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const or=new B;function xh(){qe.getLuminanceCoefficients(or);const n=or.x.toFixed(4),e=or.y.toFixed(4),t=or.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sh(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ei).join(`
`)}function Mh(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Eh(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ei(n){return n!==""}function Qa(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function eo(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yh=/^[ \t]*#include +<([\w\d./]+)>/gm;function qs(n){return n.replace(yh,bh)}const Th=new Map;function bh(n,e){let t=ke[e];if(t===void 0){const i=Th.get(e);if(i!==void 0)t=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return qs(t)}const Ah=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function to(n){return n.replace(Ah,wh)}function wh(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function no(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Rh(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===co?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===tl?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===rn&&(e="SHADOWMAP_TYPE_VSM"),e}function Ch(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case oi:case li:e="ENVMAP_TYPE_CUBE";break;case vr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ph(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===li&&(e="ENVMAP_MODE_REFRACTION"),e}function Lh(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case uo:e="ENVMAP_BLENDING_MULTIPLY";break;case Sl:e="ENVMAP_BLENDING_MIX";break;case Ml:e="ENVMAP_BLENDING_ADD";break}return e}function Dh(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Uh(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Rh(t),l=Ch(t),d=Ph(t),u=Lh(t),f=Dh(t),p=Sh(t),g=Mh(s),x=r.createProgram();let m,h,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ei).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ei).join(`
`),h.length>0&&(h+=`
`)):(m=[no(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ei).join(`
`),h=[no(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sn?"#define TONE_MAPPING":"",t.toneMapping!==Sn?ke.tonemapping_pars_fragment:"",t.toneMapping!==Sn?vh("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,_h("linearToOutputTexel",t.outputColorSpace),xh(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ei).join(`
`)),a=qs(a),a=Qa(a,t),a=eo(a,t),o=qs(o),o=Qa(o,t),o=eo(o,t),a=to(a),o=to(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===ma?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ma?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=w+m+a,M=w+h+o,R=Za(r,r.VERTEX_SHADER,b),A=Za(r,r.FRAGMENT_SHADER,M);r.attachShader(x,R),r.attachShader(x,A),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(P){if(n.debug.checkShaderErrors){const O=r.getProgramInfoLog(x)||"",G=r.getShaderInfoLog(R)||"",Y=r.getShaderInfoLog(A)||"",V=O.trim(),H=G.trim(),$=Y.trim();let I=!0,J=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(I=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,R,A);else{const ee=Ja(r,R,"vertex"),oe=Ja(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+ee+`
`+oe)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(H===""||$==="")&&(J=!1);J&&(P.diagnostics={runnable:I,programLog:V,vertexShader:{log:H,prefix:m},fragmentShader:{log:$,prefix:h}})}r.deleteShader(R),r.deleteShader(A),D=new pr(r,x),S=Eh(r,x)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(x,hh)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ph++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=A,this}let Ih=0;class Nh{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Fh(e),t.set(e,i)),i}}class Fh{constructor(e){this.id=Ih++,this.code=e,this.usedTimes=0}}function Oh(n,e,t,i,r,s,a){const o=new bo,c=new Nh,l=new Set,d=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,E,P,O,G){const Y=O.fog,V=G.geometry,H=S.isMeshStandardMaterial?O.environment:null,$=(S.isMeshStandardMaterial?t:e).get(S.envMap||H),I=$&&$.mapping===vr?$.image.height:null,J=g[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ee=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,oe=ee!==void 0?ee.length:0;let xe=0;V.morphAttributes.position!==void 0&&(xe=1),V.morphAttributes.normal!==void 0&&(xe=2),V.morphAttributes.color!==void 0&&(xe=3);let re,Te,Ce,X;if(J){const Ye=Yt[J];re=Ye.vertexShader,Te=Ye.fragmentShader}else re=S.vertexShader,Te=S.fragmentShader,c.update(S),Ce=c.getVertexShaderID(S),X=c.getFragmentShaderID(S);const Z=n.getRenderTarget(),he=n.state.buffers.depth.getReversed(),Ue=G.isInstancedMesh===!0,Se=G.isBatchedMesh===!0,Ge=!!S.map,dt=!!S.matcap,T=!!$,Fe=!!S.aoMap,Pe=!!S.lightMap,Re=!!S.bumpMap,pe=!!S.normalMap,nt=!!S.displacementMap,ve=!!S.emissiveMap,He=!!S.metalnessMap,pt=!!S.roughnessMap,at=S.anisotropy>0,y=S.clearcoat>0,_=S.dispersion>0,F=S.iridescence>0,q=S.sheen>0,j=S.transmission>0,W=at&&!!S.anisotropyMap,be=y&&!!S.clearcoatMap,se=y&&!!S.clearcoatNormalMap,Me=y&&!!S.clearcoatRoughnessMap,Ee=F&&!!S.iridescenceMap,ne=F&&!!S.iridescenceThicknessMap,de=q&&!!S.sheenColorMap,Ie=q&&!!S.sheenRoughnessMap,ye=!!S.specularMap,ce=!!S.specularColorMap,Be=!!S.specularIntensityMap,L=j&&!!S.transmissionMap,ie=j&&!!S.thicknessMap,ae=!!S.gradientMap,me=!!S.alphaMap,Q=S.alphaTest>0,K=!!S.alphaHash,_e=!!S.extensions;let Oe=Sn;S.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Oe=n.toneMapping);const et={shaderID:J,shaderType:S.type,shaderName:S.name,vertexShader:re,fragmentShader:Te,defines:S.defines,customVertexShaderID:Ce,customFragmentShaderID:X,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Se,batchingColor:Se&&G._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&G.instanceColor!==null,instancingMorph:Ue&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ci,alphaToCoverage:!!S.alphaToCoverage,map:Ge,matcap:dt,envMap:T,envMapMode:T&&$.mapping,envMapCubeUVHeight:I,aoMap:Fe,lightMap:Pe,bumpMap:Re,normalMap:pe,displacementMap:f&&nt,emissiveMap:ve,normalMapObjectSpace:pe&&S.normalMapType===Ul,normalMapTangentSpace:pe&&S.normalMapType===Dl,metalnessMap:He,roughnessMap:pt,anisotropy:at,anisotropyMap:W,clearcoat:y,clearcoatMap:be,clearcoatNormalMap:se,clearcoatRoughnessMap:Me,dispersion:_,iridescence:F,iridescenceMap:Ee,iridescenceThicknessMap:ne,sheen:q,sheenColorMap:de,sheenRoughnessMap:Ie,specularMap:ye,specularColorMap:ce,specularIntensityMap:Be,transmission:j,transmissionMap:L,thicknessMap:ie,gradientMap:ae,opaque:S.transparent===!1&&S.blending===ri&&S.alphaToCoverage===!1,alphaMap:me,alphaTest:Q,alphaHash:K,combine:S.combine,mapUv:Ge&&x(S.map.channel),aoMapUv:Fe&&x(S.aoMap.channel),lightMapUv:Pe&&x(S.lightMap.channel),bumpMapUv:Re&&x(S.bumpMap.channel),normalMapUv:pe&&x(S.normalMap.channel),displacementMapUv:nt&&x(S.displacementMap.channel),emissiveMapUv:ve&&x(S.emissiveMap.channel),metalnessMapUv:He&&x(S.metalnessMap.channel),roughnessMapUv:pt&&x(S.roughnessMap.channel),anisotropyMapUv:W&&x(S.anisotropyMap.channel),clearcoatMapUv:be&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:se&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:de&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&x(S.sheenRoughnessMap.channel),specularMapUv:ye&&x(S.specularMap.channel),specularColorMapUv:ce&&x(S.specularColorMap.channel),specularIntensityMapUv:Be&&x(S.specularIntensityMap.channel),transmissionMapUv:L&&x(S.transmissionMap.channel),thicknessMapUv:ie&&x(S.thicknessMap.channel),alphaMapUv:me&&x(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(pe||at),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!V.attributes.uv&&(Ge||me),fog:!!Y,useFog:S.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:he,skinning:G.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:xe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Ge&&S.map.isVideoTexture===!0&&qe.getTransfer(S.map.colorSpace)===Ze,decodeVideoTextureEmissive:ve&&S.emissiveMap.isVideoTexture===!0&&qe.getTransfer(S.emissiveMap.colorSpace)===Ze,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===sn,flipSided:S.side===At,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:_e&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&S.extensions.multiDraw===!0||Se)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return et.vertexUv1s=l.has(1),et.vertexUv2s=l.has(2),et.vertexUv3s=l.has(3),l.clear(),et}function h(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)E.push(P),E.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(w(E,S),b(E,S),E.push(n.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function w(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function b(S,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),E.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),S.push(o.mask)}function M(S){const E=g[S.type];let P;if(E){const O=Yt[E];P=lc.clone(O.uniforms)}else P=S.uniforms;return P}function R(S,E){let P;for(let O=0,G=d.length;O<G;O++){const Y=d[O];if(Y.cacheKey===E){P=Y,++P.usedTimes;break}}return P===void 0&&(P=new Uh(n,E,S,s),d.push(P)),P}function A(S){if(--S.usedTimes===0){const E=d.indexOf(S);d[E]=d[d.length-1],d.pop(),S.destroy()}}function C(S){c.remove(S)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:M,acquireProgram:R,releaseProgram:A,releaseShaderCache:C,programs:d,dispose:D}}function Bh(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function zh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function io(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ro(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(u,f,p,g,x,m){let h=n[e];return h===void 0?(h={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},n[e]=h):(h.id=u.id,h.object=u,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=u.renderOrder,h.z=x,h.group=m),e++,h}function o(u,f,p,g,x,m){const h=a(u,f,p,g,x,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function c(u,f,p,g,x,m){const h=a(u,f,p,g,x,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function l(u,f){t.length>1&&t.sort(u||zh),i.length>1&&i.sort(f||io),r.length>1&&r.sort(f||io)}function d(){for(let u=e,f=n.length;u<f;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:d,sort:l}}function Hh(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new ro,n.set(i,[a])):r>=s.length?(a=new ro,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function kh(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new $e};break;case"SpotLight":t={position:new B,direction:new B,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function Gh(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Vh=0;function Wh(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Xh(n){const e=new kh,t=Gh(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new B);const r=new B,s=new ut,a=new ut;function o(l){let d=0,u=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,x=0,m=0,h=0,w=0,b=0,M=0,R=0,A=0,C=0;l.sort(Wh);for(let S=0,E=l.length;S<E;S++){const P=l[S],O=P.color,G=P.intensity,Y=P.distance,V=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=O.r*G,u+=O.g*G,f+=O.b*G;else if(P.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(P.sh.coefficients[H],G);C++}else if(P.isDirectionalLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const $=P.shadow,I=t.get(P);I.shadowIntensity=$.intensity,I.shadowBias=$.bias,I.shadowNormalBias=$.normalBias,I.shadowRadius=$.radius,I.shadowMapSize=$.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=V,i.directionalShadowMatrix[p]=P.shadow.matrix,w++}i.directional[p]=H,p++}else if(P.isSpotLight){const H=e.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(O).multiplyScalar(G),H.distance=Y,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,i.spot[x]=H;const $=P.shadow;if(P.map&&(i.spotLightMap[R]=P.map,R++,$.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[x]=$.matrix,P.castShadow){const I=t.get(P);I.shadowIntensity=$.intensity,I.shadowBias=$.bias,I.shadowNormalBias=$.normalBias,I.shadowRadius=$.radius,I.shadowMapSize=$.mapSize,i.spotShadow[x]=I,i.spotShadowMap[x]=V,M++}x++}else if(P.isRectAreaLight){const H=e.get(P);H.color.copy(O).multiplyScalar(G),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=H,m++}else if(P.isPointLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const $=P.shadow,I=t.get(P);I.shadowIntensity=$.intensity,I.shadowBias=$.bias,I.shadowNormalBias=$.normalBias,I.shadowRadius=$.radius,I.shadowMapSize=$.mapSize,I.shadowCameraNear=$.camera.near,I.shadowCameraFar=$.camera.far,i.pointShadow[g]=I,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=P.shadow.matrix,b++}i.point[g]=H,g++}else if(P.isHemisphereLight){const H=e.get(P);H.skyColor.copy(P.color).multiplyScalar(G),H.groundColor.copy(P.groundColor).multiplyScalar(G),i.hemi[h]=H,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=f;const D=i.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==h||D.numDirectionalShadows!==w||D.numPointShadows!==b||D.numSpotShadows!==M||D.numSpotMaps!==R||D.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=M+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,D.directionalLength=p,D.pointLength=g,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=h,D.numDirectionalShadows=w,D.numPointShadows=b,D.numSpotShadows=M,D.numSpotMaps=R,D.numLightProbes=C,i.version=Vh++)}function c(l,d){let u=0,f=0,p=0,g=0,x=0;const m=d.matrixWorldInverse;for(let h=0,w=l.length;h<w;h++){const b=l[h];if(b.isDirectionalLight){const M=i.directional[u];M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),u++}else if(b.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:i}}function so(n){const e=new Xh(n),t=[],i=[];function r(d){l.camera=d,t.length=0,i.length=0}function s(d){t.push(d)}function a(d){i.push(d)}function o(){e.setup(t)}function c(d){e.setupView(t,d)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function qh(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new so(n),e.set(r,[o])):s>=a.length?(o=new so(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Yh=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$h=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Kh(n,e,t){let i=new Do;const r=new je,s=new je,a=new ot,o=new Mc({depthPacking:Ll}),c=new Ec,l={},d=t.maxTextureSize,u={[Mn]:At,[At]:Mn,[sn]:sn},f=new Kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:Yh,fragmentShader:$h}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new un;g.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Wt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=co;let h=this.type;this.render=function(A,C,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=n.getRenderTarget(),E=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),O=n.state;O.setBlending(xn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const G=h!==rn&&this.type===rn,Y=h===rn&&this.type!==rn;for(let V=0,H=A.length;V<H;V++){const $=A[V],I=$.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const J=I.getFrameExtents();if(r.multiply(J),s.copy(I.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/J.x),r.x=s.x*J.x,I.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/J.y),r.y=s.y*J.y,I.mapSize.y=s.y)),I.map===null||G===!0||Y===!0){const oe=this.type!==rn?{minFilter:Xt,magFilter:Xt}:{};I.map!==null&&I.map.dispose(),I.map=new zn(r.x,r.y,oe),I.map.texture.name=$.name+".shadowMap",I.camera.updateProjectionMatrix()}n.setRenderTarget(I.map),n.clear();const ee=I.getViewportCount();for(let oe=0;oe<ee;oe++){const xe=I.getViewport(oe);a.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),O.viewport(a),I.updateMatrices($,oe),i=I.getFrustum(),M(C,D,I.camera,$,this.type)}I.isPointLightShadow!==!0&&this.type===rn&&w(I,D),I.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(S,E,P)};function w(A,C){const D=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new zn(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,D,f,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,D,p,x,null)}function b(A,C,D,S){let E=null;const P=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)E=P;else if(E=D.isPointLight===!0?c:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=E.uuid,G=C.uuid;let Y=l[O];Y===void 0&&(Y={},l[O]=Y);let V=Y[G];V===void 0&&(V=E.clone(),Y[G]=V,C.addEventListener("dispose",R)),E=V}if(E.visible=C.visible,E.wireframe=C.wireframe,S===rn?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:u[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const O=n.properties.get(E);O.light=D}return E}function M(A,C,D,S,E){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===rn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const G=e.update(A),Y=A.material;if(Array.isArray(Y)){const V=G.groups;for(let H=0,$=V.length;H<$;H++){const I=V[H],J=Y[I.materialIndex];if(J&&J.visible){const ee=b(A,J,S,E);A.onBeforeShadow(n,A,C,D,G,ee,I),n.renderBufferDirect(D,null,G,ee,A,I),A.onAfterShadow(n,A,C,D,G,ee,I)}}}else if(Y.visible){const V=b(A,Y,S,E);A.onBeforeShadow(n,A,C,D,G,V,null),n.renderBufferDirect(D,null,G,V,A,null),A.onAfterShadow(n,A,C,D,G,V,null)}}const O=A.children;for(let G=0,Y=O.length;G<Y;G++)M(O[G],C,D,S,E)}function R(A){A.target.removeEventListener("dispose",R);for(const D in l){const S=l[D],E=A.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}const Zh={[ss]:as,[os]:us,[ls]:ds,[ai]:cs,[as]:ss,[us]:os,[ds]:ls,[cs]:ai};function jh(n,e){function t(){let L=!1;const ie=new ot;let ae=null;const me=new ot(0,0,0,0);return{setMask:function(Q){ae!==Q&&!L&&(n.colorMask(Q,Q,Q,Q),ae=Q)},setLocked:function(Q){L=Q},setClear:function(Q,K,_e,Oe,et){et===!0&&(Q*=Oe,K*=Oe,_e*=Oe),ie.set(Q,K,_e,Oe),me.equals(ie)===!1&&(n.clearColor(Q,K,_e,Oe),me.copy(ie))},reset:function(){L=!1,ae=null,me.set(-1,0,0,0)}}}function i(){let L=!1,ie=!1,ae=null,me=null,Q=null;return{setReversed:function(K){if(ie!==K){const _e=e.get("EXT_clip_control");K?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),ie=K;const Oe=Q;Q=null,this.setClear(Oe)}},getReversed:function(){return ie},setTest:function(K){K?Z(n.DEPTH_TEST):he(n.DEPTH_TEST)},setMask:function(K){ae!==K&&!L&&(n.depthMask(K),ae=K)},setFunc:function(K){if(ie&&(K=Zh[K]),me!==K){switch(K){case ss:n.depthFunc(n.NEVER);break;case as:n.depthFunc(n.ALWAYS);break;case os:n.depthFunc(n.LESS);break;case ai:n.depthFunc(n.LEQUAL);break;case ls:n.depthFunc(n.EQUAL);break;case cs:n.depthFunc(n.GEQUAL);break;case us:n.depthFunc(n.GREATER);break;case ds:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=K}},setLocked:function(K){L=K},setClear:function(K){Q!==K&&(ie&&(K=1-K),n.clearDepth(K),Q=K)},reset:function(){L=!1,ae=null,me=null,Q=null,ie=!1}}}function r(){let L=!1,ie=null,ae=null,me=null,Q=null,K=null,_e=null,Oe=null,et=null;return{setTest:function(Ye){L||(Ye?Z(n.STENCIL_TEST):he(n.STENCIL_TEST))},setMask:function(Ye){ie!==Ye&&!L&&(n.stencilMask(Ye),ie=Ye)},setFunc:function(Ye,Zt,qt){(ae!==Ye||me!==Zt||Q!==qt)&&(n.stencilFunc(Ye,Zt,qt),ae=Ye,me=Zt,Q=qt)},setOp:function(Ye,Zt,qt){(K!==Ye||_e!==Zt||Oe!==qt)&&(n.stencilOp(Ye,Zt,qt),K=Ye,_e=Zt,Oe=qt)},setLocked:function(Ye){L=Ye},setClear:function(Ye){et!==Ye&&(n.clearStencil(Ye),et=Ye)},reset:function(){L=!1,ie=null,ae=null,me=null,Q=null,K=null,_e=null,Oe=null,et=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let d={},u={},f=new WeakMap,p=[],g=null,x=!1,m=null,h=null,w=null,b=null,M=null,R=null,A=null,C=new $e(0,0,0),D=0,S=!1,E=null,P=null,O=null,G=null,Y=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const I=n.getParameter(n.VERSION);I.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(I)[1]),H=$>=1):I.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),H=$>=2);let J=null,ee={};const oe=n.getParameter(n.SCISSOR_BOX),xe=n.getParameter(n.VIEWPORT),re=new ot().fromArray(oe),Te=new ot().fromArray(xe);function Ce(L,ie,ae,me){const Q=new Uint8Array(4),K=n.createTexture();n.bindTexture(L,K),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let _e=0;_e<ae;_e++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ie,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,Q):n.texImage2D(ie+_e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Q);return K}const X={};X[n.TEXTURE_2D]=Ce(n.TEXTURE_2D,n.TEXTURE_2D,1),X[n.TEXTURE_CUBE_MAP]=Ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[n.TEXTURE_2D_ARRAY]=Ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),X[n.TEXTURE_3D]=Ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(n.DEPTH_TEST),a.setFunc(ai),Re(!1),pe(ca),Z(n.CULL_FACE),Fe(xn);function Z(L){d[L]!==!0&&(n.enable(L),d[L]=!0)}function he(L){d[L]!==!1&&(n.disable(L),d[L]=!1)}function Ue(L,ie){return u[L]!==ie?(n.bindFramebuffer(L,ie),u[L]=ie,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ie),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ie),!0):!1}function Se(L,ie){let ae=p,me=!1;if(L){ae=f.get(ie),ae===void 0&&(ae=[],f.set(ie,ae));const Q=L.textures;if(ae.length!==Q.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let K=0,_e=Q.length;K<_e;K++)ae[K]=n.COLOR_ATTACHMENT0+K;ae.length=Q.length,me=!0}}else ae[0]!==n.BACK&&(ae[0]=n.BACK,me=!0);me&&n.drawBuffers(ae)}function Ge(L){return g!==L?(n.useProgram(L),g=L,!0):!1}const dt={[Un]:n.FUNC_ADD,[il]:n.FUNC_SUBTRACT,[rl]:n.FUNC_REVERSE_SUBTRACT};dt[sl]=n.MIN,dt[al]=n.MAX;const T={[ol]:n.ZERO,[ll]:n.ONE,[cl]:n.SRC_COLOR,[is]:n.SRC_ALPHA,[ml]:n.SRC_ALPHA_SATURATE,[hl]:n.DST_COLOR,[dl]:n.DST_ALPHA,[ul]:n.ONE_MINUS_SRC_COLOR,[rs]:n.ONE_MINUS_SRC_ALPHA,[pl]:n.ONE_MINUS_DST_COLOR,[fl]:n.ONE_MINUS_DST_ALPHA,[gl]:n.CONSTANT_COLOR,[_l]:n.ONE_MINUS_CONSTANT_COLOR,[vl]:n.CONSTANT_ALPHA,[xl]:n.ONE_MINUS_CONSTANT_ALPHA};function Fe(L,ie,ae,me,Q,K,_e,Oe,et,Ye){if(L===xn){x===!0&&(he(n.BLEND),x=!1);return}if(x===!1&&(Z(n.BLEND),x=!0),L!==nl){if(L!==m||Ye!==S){if((h!==Un||M!==Un)&&(n.blendEquation(n.FUNC_ADD),h=Un,M=Un),Ye)switch(L){case ri:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ua:n.blendFunc(n.ONE,n.ONE);break;case da:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fa:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ri:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ua:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case da:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fa:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}w=null,b=null,R=null,A=null,C.set(0,0,0),D=0,m=L,S=Ye}return}Q=Q||ie,K=K||ae,_e=_e||me,(ie!==h||Q!==M)&&(n.blendEquationSeparate(dt[ie],dt[Q]),h=ie,M=Q),(ae!==w||me!==b||K!==R||_e!==A)&&(n.blendFuncSeparate(T[ae],T[me],T[K],T[_e]),w=ae,b=me,R=K,A=_e),(Oe.equals(C)===!1||et!==D)&&(n.blendColor(Oe.r,Oe.g,Oe.b,et),C.copy(Oe),D=et),m=L,S=!1}function Pe(L,ie){L.side===sn?he(n.CULL_FACE):Z(n.CULL_FACE);let ae=L.side===At;ie&&(ae=!ae),Re(ae),L.blending===ri&&L.transparent===!1?Fe(xn):Fe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const me=L.stencilWrite;o.setTest(me),me&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ve(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):he(n.SAMPLE_ALPHA_TO_COVERAGE)}function Re(L){E!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),E=L)}function pe(L){L!==Qo?(Z(n.CULL_FACE),L!==P&&(L===ca?n.cullFace(n.BACK):L===el?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):he(n.CULL_FACE),P=L}function nt(L){L!==O&&(H&&n.lineWidth(L),O=L)}function ve(L,ie,ae){L?(Z(n.POLYGON_OFFSET_FILL),(G!==ie||Y!==ae)&&(n.polygonOffset(ie,ae),G=ie,Y=ae)):he(n.POLYGON_OFFSET_FILL)}function He(L){L?Z(n.SCISSOR_TEST):he(n.SCISSOR_TEST)}function pt(L){L===void 0&&(L=n.TEXTURE0+V-1),J!==L&&(n.activeTexture(L),J=L)}function at(L,ie,ae){ae===void 0&&(J===null?ae=n.TEXTURE0+V-1:ae=J);let me=ee[ae];me===void 0&&(me={type:void 0,texture:void 0},ee[ae]=me),(me.type!==L||me.texture!==ie)&&(J!==ae&&(n.activeTexture(ae),J=ae),n.bindTexture(L,ie||X[L]),me.type=L,me.texture=ie)}function y(){const L=ee[J];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{n.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{n.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{n.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{n.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{n.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{n.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{n.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(L){re.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),re.copy(L))}function Ie(L){Te.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Te.copy(L))}function ye(L,ie){let ae=l.get(ie);ae===void 0&&(ae=new WeakMap,l.set(ie,ae));let me=ae.get(L);me===void 0&&(me=n.getUniformBlockIndex(ie,L.name),ae.set(L,me))}function ce(L,ie){const me=l.get(ie).get(L);c.get(ie)!==me&&(n.uniformBlockBinding(ie,me,L.__bindingPointIndex),c.set(ie,me))}function Be(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},J=null,ee={},u={},f=new WeakMap,p=[],g=null,x=!1,m=null,h=null,w=null,b=null,M=null,R=null,A=null,C=new $e(0,0,0),D=0,S=!1,E=null,P=null,O=null,G=null,Y=null,re.set(0,0,n.canvas.width,n.canvas.height),Te.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Z,disable:he,bindFramebuffer:Ue,drawBuffers:Se,useProgram:Ge,setBlending:Fe,setMaterial:Pe,setFlipSided:Re,setCullFace:pe,setLineWidth:nt,setPolygonOffset:ve,setScissorTest:He,activeTexture:pt,bindTexture:at,unbindTexture:y,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:Ee,texImage3D:ne,updateUBOMapping:ye,uniformBlockBinding:ce,texStorage2D:se,texStorage3D:Me,texSubImage2D:q,texSubImage3D:j,compressedTexSubImage2D:W,compressedTexSubImage3D:be,scissor:de,viewport:Ie,reset:Be}}function Jh(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new je,d=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,_){return p?new OffscreenCanvas(y,_):_r("canvas")}function x(y,_,F){let q=1;const j=at(y);if((j.width>F||j.height>F)&&(q=F/Math.max(j.width,j.height)),q<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const W=Math.floor(q*j.width),be=Math.floor(q*j.height);u===void 0&&(u=g(W,be));const se=_?g(W,be):u;return se.width=W,se.height=be,se.getContext("2d").drawImage(y,0,0,W,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+W+"x"+be+")."),se}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),y;return y}function m(y){return y.generateMipmaps}function h(y){n.generateMipmap(y)}function w(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(y,_,F,q,j=!1){if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let W=_;if(_===n.RED&&(F===n.FLOAT&&(W=n.R32F),F===n.HALF_FLOAT&&(W=n.R16F),F===n.UNSIGNED_BYTE&&(W=n.R8)),_===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.R8UI),F===n.UNSIGNED_SHORT&&(W=n.R16UI),F===n.UNSIGNED_INT&&(W=n.R32UI),F===n.BYTE&&(W=n.R8I),F===n.SHORT&&(W=n.R16I),F===n.INT&&(W=n.R32I)),_===n.RG&&(F===n.FLOAT&&(W=n.RG32F),F===n.HALF_FLOAT&&(W=n.RG16F),F===n.UNSIGNED_BYTE&&(W=n.RG8)),_===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.RG8UI),F===n.UNSIGNED_SHORT&&(W=n.RG16UI),F===n.UNSIGNED_INT&&(W=n.RG32UI),F===n.BYTE&&(W=n.RG8I),F===n.SHORT&&(W=n.RG16I),F===n.INT&&(W=n.RG32I)),_===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.RGB8UI),F===n.UNSIGNED_SHORT&&(W=n.RGB16UI),F===n.UNSIGNED_INT&&(W=n.RGB32UI),F===n.BYTE&&(W=n.RGB8I),F===n.SHORT&&(W=n.RGB16I),F===n.INT&&(W=n.RGB32I)),_===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),F===n.UNSIGNED_INT&&(W=n.RGBA32UI),F===n.BYTE&&(W=n.RGBA8I),F===n.SHORT&&(W=n.RGBA16I),F===n.INT&&(W=n.RGBA32I)),_===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(W=n.R11F_G11F_B10F)),_===n.RGBA){const be=j?mr:qe.getTransfer(q);F===n.FLOAT&&(W=n.RGBA32F),F===n.HALF_FLOAT&&(W=n.RGBA16F),F===n.UNSIGNED_BYTE&&(W=be===Ze?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function M(y,_){let F;return y?_===null||_===Bn||_===Ti?F=n.DEPTH24_STENCIL8:_===an?F=n.DEPTH32F_STENCIL8:_===yi&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Bn||_===Ti?F=n.DEPTH_COMPONENT24:_===an?F=n.DEPTH_COMPONENT32F:_===yi&&(F=n.DEPTH_COMPONENT16),F}function R(y,_){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==Xt&&y.minFilter!==Gt?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function A(y){const _=y.target;_.removeEventListener("dispose",A),D(_),_.isVideoTexture&&d.delete(_)}function C(y){const _=y.target;_.removeEventListener("dispose",C),E(_)}function D(y){const _=i.get(y);if(_.__webglInit===void 0)return;const F=y.source,q=f.get(F);if(q){const j=q[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&S(y),Object.keys(q).length===0&&f.delete(F)}i.remove(y)}function S(y){const _=i.get(y);n.deleteTexture(_.__webglTexture);const F=y.source,q=f.get(F);delete q[_.__cacheKey],a.memory.textures--}function E(y){const _=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let j=0;j<_.__webglFramebuffer[q].length;j++)n.deleteFramebuffer(_.__webglFramebuffer[q][j]);else n.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)n.deleteFramebuffer(_.__webglFramebuffer[q]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=y.textures;for(let q=0,j=F.length;q<j;q++){const W=i.get(F[q]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),a.memory.textures--),i.remove(F[q])}i.remove(y)}let P=0;function O(){P=0}function G(){const y=P;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),P+=1,y}function Y(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.wrapR||0),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.colorSpace),_.join()}function V(y,_){const F=i.get(y);if(y.isVideoTexture&&He(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&F.__version!==y.version){const q=y.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(F,y,_);return}}else y.isExternalTexture&&(F.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+_)}function H(y,_){const F=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){X(F,y,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+_)}function $(y,_){const F=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){X(F,y,_);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+_)}function I(y,_){const F=i.get(y);if(y.version>0&&F.__version!==y.version){Z(F,y,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+_)}const J={[ps]:n.REPEAT,[Nn]:n.CLAMP_TO_EDGE,[ms]:n.MIRRORED_REPEAT},ee={[Xt]:n.NEAREST,[Cl]:n.NEAREST_MIPMAP_NEAREST,[Bi]:n.NEAREST_MIPMAP_LINEAR,[Gt]:n.LINEAR,[yr]:n.LINEAR_MIPMAP_NEAREST,[Fn]:n.LINEAR_MIPMAP_LINEAR},oe={[Il]:n.NEVER,[Hl]:n.ALWAYS,[Nl]:n.LESS,[Mo]:n.LEQUAL,[Fl]:n.EQUAL,[zl]:n.GEQUAL,[Ol]:n.GREATER,[Bl]:n.NOTEQUAL};function xe(y,_){if(_.type===an&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Gt||_.magFilter===yr||_.magFilter===Bi||_.magFilter===Fn||_.minFilter===Gt||_.minFilter===yr||_.minFilter===Bi||_.minFilter===Fn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,J[_.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,J[_.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,J[_.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,ee[_.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,ee[_.minFilter]),_.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,oe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Xt||_.minFilter!==Bi&&_.minFilter!==Fn||_.type===an&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(y,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function re(y,_){let F=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",A));const q=_.source;let j=f.get(q);j===void 0&&(j={},f.set(q,j));const W=Y(_);if(W!==y.__cacheKey){j[W]===void 0&&(j[W]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),j[W].usedTimes++;const be=j[y.__cacheKey];be!==void 0&&(j[y.__cacheKey].usedTimes--,be.usedTimes===0&&S(_)),y.__cacheKey=W,y.__webglTexture=j[W].texture}return F}function Te(y,_,F){return Math.floor(Math.floor(y/F)/_)}function Ce(y,_,F,q){const W=y.updateRanges;if(W.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,F,q,_.data);else{W.sort((ne,de)=>ne.start-de.start);let be=0;for(let ne=1;ne<W.length;ne++){const de=W[be],Ie=W[ne],ye=de.start+de.count,ce=Te(Ie.start,_.width,4),Be=Te(de.start,_.width,4);Ie.start<=ye+1&&ce===Be&&Te(Ie.start+Ie.count-1,_.width,4)===ce?de.count=Math.max(de.count,Ie.start+Ie.count-de.start):(++be,W[be]=Ie)}W.length=be+1;const se=n.getParameter(n.UNPACK_ROW_LENGTH),Me=n.getParameter(n.UNPACK_SKIP_PIXELS),Ee=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let ne=0,de=W.length;ne<de;ne++){const Ie=W[ne],ye=Math.floor(Ie.start/4),ce=Math.ceil(Ie.count/4),Be=ye%_.width,L=Math.floor(ye/_.width),ie=ce,ae=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Be),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,Be,L,ie,ae,F,q,_.data)}y.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,se),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Me),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ee)}}function X(y,_,F){let q=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=n.TEXTURE_3D);const j=re(y,_),W=_.source;t.bindTexture(q,y.__webglTexture,n.TEXTURE0+F);const be=i.get(W);if(W.version!==be.__version||j===!0){t.activeTexture(n.TEXTURE0+F);const se=qe.getPrimaries(qe.workingColorSpace),Me=_.colorSpace===vn?null:qe.getPrimaries(_.colorSpace),Ee=_.colorSpace===vn||se===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let ne=x(_.image,!1,r.maxTextureSize);ne=pt(_,ne);const de=s.convert(_.format,_.colorSpace),Ie=s.convert(_.type);let ye=b(_.internalFormat,de,Ie,_.colorSpace,_.isVideoTexture);xe(q,_);let ce;const Be=_.mipmaps,L=_.isVideoTexture!==!0,ie=be.__version===void 0||j===!0,ae=W.dataReady,me=R(_,ne);if(_.isDepthTexture)ye=M(_.format===Ai,_.type),ie&&(L?t.texStorage2D(n.TEXTURE_2D,1,ye,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,ye,ne.width,ne.height,0,de,Ie,null));else if(_.isDataTexture)if(Be.length>0){L&&ie&&t.texStorage2D(n.TEXTURE_2D,me,ye,Be[0].width,Be[0].height);for(let Q=0,K=Be.length;Q<K;Q++)ce=Be[Q],L?ae&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ce.width,ce.height,de,Ie,ce.data):t.texImage2D(n.TEXTURE_2D,Q,ye,ce.width,ce.height,0,de,Ie,ce.data);_.generateMipmaps=!1}else L?(ie&&t.texStorage2D(n.TEXTURE_2D,me,ye,ne.width,ne.height),ae&&Ce(_,ne,de,Ie)):t.texImage2D(n.TEXTURE_2D,0,ye,ne.width,ne.height,0,de,Ie,ne.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){L&&ie&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,ye,Be[0].width,Be[0].height,ne.depth);for(let Q=0,K=Be.length;Q<K;Q++)if(ce=Be[Q],_.format!==Vt)if(de!==null)if(L){if(ae)if(_.layerUpdates.size>0){const _e=Na(ce.width,ce.height,_.format,_.type);for(const Oe of _.layerUpdates){const et=ce.data.subarray(Oe*_e/ce.data.BYTES_PER_ELEMENT,(Oe+1)*_e/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Oe,ce.width,ce.height,1,de,et)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ce.width,ce.height,ne.depth,de,ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,ye,ce.width,ce.height,ne.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ae&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ce.width,ce.height,ne.depth,de,Ie,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,ye,ce.width,ce.height,ne.depth,0,de,Ie,ce.data)}else{L&&ie&&t.texStorage2D(n.TEXTURE_2D,me,ye,Be[0].width,Be[0].height);for(let Q=0,K=Be.length;Q<K;Q++)ce=Be[Q],_.format!==Vt?de!==null?L?ae&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,ce.width,ce.height,de,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,ye,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ae&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ce.width,ce.height,de,Ie,ce.data):t.texImage2D(n.TEXTURE_2D,Q,ye,ce.width,ce.height,0,de,Ie,ce.data)}else if(_.isDataArrayTexture)if(L){if(ie&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,ye,ne.width,ne.height,ne.depth),ae)if(_.layerUpdates.size>0){const Q=Na(ne.width,ne.height,_.format,_.type);for(const K of _.layerUpdates){const _e=ne.data.subarray(K*Q/ne.data.BYTES_PER_ELEMENT,(K+1)*Q/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,ne.width,ne.height,1,de,Ie,_e)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,de,Ie,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,ne.width,ne.height,ne.depth,0,de,Ie,ne.data);else if(_.isData3DTexture)L?(ie&&t.texStorage3D(n.TEXTURE_3D,me,ye,ne.width,ne.height,ne.depth),ae&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,de,Ie,ne.data)):t.texImage3D(n.TEXTURE_3D,0,ye,ne.width,ne.height,ne.depth,0,de,Ie,ne.data);else if(_.isFramebufferTexture){if(ie)if(L)t.texStorage2D(n.TEXTURE_2D,me,ye,ne.width,ne.height);else{let Q=ne.width,K=ne.height;for(let _e=0;_e<me;_e++)t.texImage2D(n.TEXTURE_2D,_e,ye,Q,K,0,de,Ie,null),Q>>=1,K>>=1}}else if(Be.length>0){if(L&&ie){const Q=at(Be[0]);t.texStorage2D(n.TEXTURE_2D,me,ye,Q.width,Q.height)}for(let Q=0,K=Be.length;Q<K;Q++)ce=Be[Q],L?ae&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,de,Ie,ce):t.texImage2D(n.TEXTURE_2D,Q,ye,de,Ie,ce);_.generateMipmaps=!1}else if(L){if(ie){const Q=at(ne);t.texStorage2D(n.TEXTURE_2D,me,ye,Q.width,Q.height)}ae&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,Ie,ne)}else t.texImage2D(n.TEXTURE_2D,0,ye,de,Ie,ne);m(_)&&h(q),be.__version=W.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function Z(y,_,F){if(_.image.length!==6)return;const q=re(y,_),j=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+F);const W=i.get(j);if(j.version!==W.__version||q===!0){t.activeTexture(n.TEXTURE0+F);const be=qe.getPrimaries(qe.workingColorSpace),se=_.colorSpace===vn?null:qe.getPrimaries(_.colorSpace),Me=_.colorSpace===vn||be===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ee=_.isCompressedTexture||_.image[0].isCompressedTexture,ne=_.image[0]&&_.image[0].isDataTexture,de=[];for(let K=0;K<6;K++)!Ee&&!ne?de[K]=x(_.image[K],!0,r.maxCubemapSize):de[K]=ne?_.image[K].image:_.image[K],de[K]=pt(_,de[K]);const Ie=de[0],ye=s.convert(_.format,_.colorSpace),ce=s.convert(_.type),Be=b(_.internalFormat,ye,ce,_.colorSpace),L=_.isVideoTexture!==!0,ie=W.__version===void 0||q===!0,ae=j.dataReady;let me=R(_,Ie);xe(n.TEXTURE_CUBE_MAP,_);let Q;if(Ee){L&&ie&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Be,Ie.width,Ie.height);for(let K=0;K<6;K++){Q=de[K].mipmaps;for(let _e=0;_e<Q.length;_e++){const Oe=Q[_e];_.format!==Vt?ye!==null?L?ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,0,0,Oe.width,Oe.height,ye,Oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,Be,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,0,0,Oe.width,Oe.height,ye,ce,Oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,Be,Oe.width,Oe.height,0,ye,ce,Oe.data)}}}else{if(Q=_.mipmaps,L&&ie){Q.length>0&&me++;const K=at(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Be,K.width,K.height)}for(let K=0;K<6;K++)if(ne){L?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,de[K].width,de[K].height,ye,ce,de[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Be,de[K].width,de[K].height,0,ye,ce,de[K].data);for(let _e=0;_e<Q.length;_e++){const et=Q[_e].image[K].image;L?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,0,0,et.width,et.height,ye,ce,et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,Be,et.width,et.height,0,ye,ce,et.data)}}else{L?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ye,ce,de[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Be,ye,ce,de[K]);for(let _e=0;_e<Q.length;_e++){const Oe=Q[_e];L?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,0,0,ye,ce,Oe.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,Be,ye,ce,Oe.image[K])}}}m(_)&&h(n.TEXTURE_CUBE_MAP),W.__version=j.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function he(y,_,F,q,j,W){const be=s.convert(F.format,F.colorSpace),se=s.convert(F.type),Me=b(F.internalFormat,be,se,F.colorSpace),Ee=i.get(_),ne=i.get(F);if(ne.__renderTarget=_,!Ee.__hasExternalTextures){const de=Math.max(1,_.width>>W),Ie=Math.max(1,_.height>>W);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,W,Me,de,Ie,_.depth,0,be,se,null):t.texImage2D(j,W,Me,de,Ie,0,be,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),ve(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,j,ne.__webglTexture,0,nt(_)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,j,ne.__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(y,_,F){if(n.bindRenderbuffer(n.RENDERBUFFER,y),_.depthBuffer){const q=_.depthTexture,j=q&&q.isDepthTexture?q.type:null,W=M(_.stencilBuffer,j),be=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=nt(_);ve(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,W,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,W,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,W,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,y)}else{const q=_.textures;for(let j=0;j<q.length;j++){const W=q[j],be=s.convert(W.format,W.colorSpace),se=s.convert(W.type),Me=b(W.internalFormat,be,se,W.colorSpace),Ee=nt(_);F&&ve(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,Me,_.width,_.height):ve(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,Me,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Me,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Se(y,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(_.depthTexture);q.__renderTarget=_,(!q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),V(_.depthTexture,0);const j=q.__webglTexture,W=nt(_);if(_.depthTexture.format===bi)ve(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(_.depthTexture.format===Ai)ve(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Ge(y){const _=i.get(y),F=y.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==y.depthTexture){const q=y.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){const j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",j)};q.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=q}if(y.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const q=y.texture.mipmaps;q&&q.length>0?Se(_.__webglFramebuffer[0],y):Se(_.__webglFramebuffer,y)}else if(F){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=n.createRenderbuffer(),Ue(_.__webglDepthbuffer[q],y,!1);else{const j=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=_.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,W)}}else{const q=y.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Ue(_.__webglDepthbuffer,y,!1);else{const j=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,W)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function dt(y,_,F){const q=i.get(y);_!==void 0&&he(q.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Ge(y)}function T(y){const _=y.texture,F=i.get(y),q=i.get(_);y.addEventListener("dispose",C);const j=y.textures,W=y.isWebGLCubeRenderTarget===!0,be=j.length>1;if(be||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=_.version,a.memory.textures++),W){F.__webglFramebuffer=[];for(let se=0;se<6;se++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[se]=[];for(let Me=0;Me<_.mipmaps.length;Me++)F.__webglFramebuffer[se][Me]=n.createFramebuffer()}else F.__webglFramebuffer[se]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let se=0;se<_.mipmaps.length;se++)F.__webglFramebuffer[se]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(be)for(let se=0,Me=j.length;se<Me;se++){const Ee=i.get(j[se]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),a.memory.textures++)}if(y.samples>0&&ve(y)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let se=0;se<j.length;se++){const Me=j[se];F.__webglColorRenderbuffer[se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[se]);const Ee=s.convert(Me.format,Me.colorSpace),ne=s.convert(Me.type),de=b(Me.internalFormat,Ee,ne,Me.colorSpace,y.isXRRenderTarget===!0),Ie=nt(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,de,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,F.__webglColorRenderbuffer[se])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Ue(F.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),xe(n.TEXTURE_CUBE_MAP,_);for(let se=0;se<6;se++)if(_.mipmaps&&_.mipmaps.length>0)for(let Me=0;Me<_.mipmaps.length;Me++)he(F.__webglFramebuffer[se][Me],y,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me);else he(F.__webglFramebuffer[se],y,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(_)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let se=0,Me=j.length;se<Me;se++){const Ee=j[se],ne=i.get(Ee);let de=n.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(de=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,ne.__webglTexture),xe(de,Ee),he(F.__webglFramebuffer,y,Ee,n.COLOR_ATTACHMENT0+se,de,0),m(Ee)&&h(de)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(se=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,q.__webglTexture),xe(se,_),_.mipmaps&&_.mipmaps.length>0)for(let Me=0;Me<_.mipmaps.length;Me++)he(F.__webglFramebuffer[Me],y,_,n.COLOR_ATTACHMENT0,se,Me);else he(F.__webglFramebuffer,y,_,n.COLOR_ATTACHMENT0,se,0);m(_)&&h(se),t.unbindTexture()}y.depthBuffer&&Ge(y)}function Fe(y){const _=y.textures;for(let F=0,q=_.length;F<q;F++){const j=_[F];if(m(j)){const W=w(y),be=i.get(j).__webglTexture;t.bindTexture(W,be),h(W),t.unbindTexture()}}}const Pe=[],Re=[];function pe(y){if(y.samples>0){if(ve(y)===!1){const _=y.textures,F=y.width,q=y.height;let j=n.COLOR_BUFFER_BIT;const W=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(y),se=_.length>1;if(se)for(let Ee=0;Ee<_.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const Me=y.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Ee=0;Ee<_.length;Ee++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[Ee]);const ne=i.get(_[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ne,0)}n.blitFramebuffer(0,0,F,q,0,0,F,q,j,n.NEAREST),c===!0&&(Pe.length=0,Re.length=0,Pe.push(n.COLOR_ATTACHMENT0+Ee),y.depthBuffer&&y.resolveDepthBuffer===!1&&(Pe.push(W),Re.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Re)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Pe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),se)for(let Ee=0;Ee<_.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,be.__webglColorRenderbuffer[Ee]);const ne=i.get(_[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&c){const _=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function nt(y){return Math.min(r.maxSamples,y.samples)}function ve(y){const _=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function He(y){const _=a.render.frame;d.get(y)!==_&&(d.set(y,_),y.update())}function pt(y,_){const F=y.colorSpace,q=y.format,j=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||F!==ci&&F!==vn&&(qe.getTransfer(F)===Ze?(q!==Vt||j!==ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function at(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(l.width=y.naturalWidth||y.width,l.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(l.width=y.displayWidth,l.height=y.displayHeight):(l.width=y.width,l.height=y.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=O,this.setTexture2D=V,this.setTexture2DArray=H,this.setTexture3D=$,this.setTextureCube=I,this.rebindTextures=dt,this.setupRenderTarget=T,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=he,this.useMultisampledRTT=ve}function Qh(n,e){function t(i,r=vn){let s;const a=qe.getTransfer(r);if(i===ln)return n.UNSIGNED_BYTE;if(i===Ks)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Zs)return n.UNSIGNED_SHORT_5_5_5_1;if(i===mo)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===go)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ho)return n.BYTE;if(i===po)return n.SHORT;if(i===yi)return n.UNSIGNED_SHORT;if(i===$s)return n.INT;if(i===Bn)return n.UNSIGNED_INT;if(i===an)return n.FLOAT;if(i===Ri)return n.HALF_FLOAT;if(i===_o)return n.ALPHA;if(i===vo)return n.RGB;if(i===Vt)return n.RGBA;if(i===bi)return n.DEPTH_COMPONENT;if(i===Ai)return n.DEPTH_STENCIL;if(i===xo)return n.RED;if(i===js)return n.RED_INTEGER;if(i===So)return n.RG;if(i===Js)return n.RG_INTEGER;if(i===Qs)return n.RGBA_INTEGER;if(i===ur||i===dr||i===fr||i===hr)if(a===Ze)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ur)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===dr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===hr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ur)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===dr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===hr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gs||i===_s||i===vs||i===xs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===gs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_s)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ss||i===Ms||i===Es)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ss||i===Ms)return a===Ze?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Es)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ys||i===Ts||i===bs||i===As||i===ws||i===Rs||i===Cs||i===Ps||i===Ls||i===Ds||i===Us||i===Is||i===Ns||i===Fs)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ys)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ts)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===As)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ws)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ps)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ls)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ds)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Us)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Is)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ns)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Os||i===Bs||i===zs)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Os)return a===Ze?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bs)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zs)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hs||i===ks||i===Gs||i===Vs)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Hs)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ks)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vs)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ti?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const ep=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class np{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Io(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Kt({vertexShader:ep,fragmentShader:tp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wt(new Ii(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ip extends di{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,d=null,u=null,f=null,p=null,g=null;const x=typeof XRWebGLBinding<"u",m=new np,h={},w=t.getContextAttributes();let b=null,M=null;const R=[],A=[],C=new je;let D=null;const S=new Ht;S.viewport=new ot;const E=new Ht;E.viewport=new ot;const P=[S,E],O=new yc;let G=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Z=R[X];return Z===void 0&&(Z=new qr,R[X]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(X){let Z=R[X];return Z===void 0&&(Z=new qr,R[X]=Z),Z.getGripSpace()},this.getHand=function(X){let Z=R[X];return Z===void 0&&(Z=new qr,R[X]=Z),Z.getHandSpace()};function V(X){const Z=A.indexOf(X.inputSource);if(Z===-1)return;const he=R[Z];he!==void 0&&(he.update(X.inputSource,X.frame,l||a),he.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",$);for(let X=0;X<R.length;X++){const Z=A[X];Z!==null&&(A[X]=null,R[X].disconnect(Z))}G=null,Y=null,m.reset();for(const X in h)delete h[X];e.setRenderTarget(b),p=null,f=null,u=null,r=null,M=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",H),r.addEventListener("inputsourceschange",$),w.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Ue=null,Se=null;w.depth&&(Se=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=w.stencil?Ai:bi,Ue=w.stencil?Ti:Bn);const Ge={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(Ge),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new zn(f.textureWidth,f.textureHeight,{format:Vt,type:ln,depthTexture:new Uo(f.textureWidth,f.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const he={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new zn(p.framebufferWidth,p.framebufferHeight,{format:Vt,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Ce.setContext(r),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(X){for(let Z=0;Z<X.removed.length;Z++){const he=X.removed[Z],Ue=A.indexOf(he);Ue>=0&&(A[Ue]=null,R[Ue].disconnect(he))}for(let Z=0;Z<X.added.length;Z++){const he=X.added[Z];let Ue=A.indexOf(he);if(Ue===-1){for(let Ge=0;Ge<R.length;Ge++)if(Ge>=A.length){A.push(he),Ue=Ge;break}else if(A[Ge]===null){A[Ge]=he,Ue=Ge;break}if(Ue===-1)break}const Se=R[Ue];Se&&Se.connect(he)}}const I=new B,J=new B;function ee(X,Z,he){I.setFromMatrixPosition(Z.matrixWorld),J.setFromMatrixPosition(he.matrixWorld);const Ue=I.distanceTo(J),Se=Z.projectionMatrix.elements,Ge=he.projectionMatrix.elements,dt=Se[14]/(Se[10]-1),T=Se[14]/(Se[10]+1),Fe=(Se[9]+1)/Se[5],Pe=(Se[9]-1)/Se[5],Re=(Se[8]-1)/Se[0],pe=(Ge[8]+1)/Ge[0],nt=dt*Re,ve=dt*pe,He=Ue/(-Re+pe),pt=He*-Re;if(Z.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(pt),X.translateZ(He),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Se[10]===-1)X.projectionMatrix.copy(Z.projectionMatrix),X.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const at=dt+He,y=T+He,_=nt-pt,F=ve+(Ue-pt),q=Fe*T/y*at,j=Pe*T/y*at;X.projectionMatrix.makePerspective(_,F,q,j,at,y),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function oe(X,Z){Z===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Z.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let Z=X.near,he=X.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(he=m.depthFar)),O.near=E.near=S.near=Z,O.far=E.far=S.far=he,(G!==O.near||Y!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),G=O.near,Y=O.far),O.layers.mask=X.layers.mask|6,S.layers.mask=O.layers.mask&3,E.layers.mask=O.layers.mask&5;const Ue=X.parent,Se=O.cameras;oe(O,Ue);for(let Ge=0;Ge<Se.length;Ge++)oe(Se[Ge],Ue);Se.length===2?ee(O,S,E):O.projectionMatrix.copy(S.projectionMatrix),xe(X,O,Ue)};function xe(X,Z,he){he===null?X.matrix.copy(Z.matrixWorld):(X.matrix.copy(he.matrixWorld),X.matrix.invert(),X.matrix.multiply(Z.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Z.projectionMatrix),X.projectionMatrixInverse.copy(Z.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ws*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(X){return h[X]};let re=null;function Te(X,Z){if(d=Z.getViewerPose(l||a),g=Z,d!==null){const he=d.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Ue=!1;he.length!==O.cameras.length&&(O.cameras.length=0,Ue=!0);for(let T=0;T<he.length;T++){const Fe=he[T];let Pe=null;if(p!==null)Pe=p.getViewport(Fe);else{const pe=u.getViewSubImage(f,Fe);Pe=pe.viewport,T===0&&(e.setRenderTargetTextures(M,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(M))}let Re=P[T];Re===void 0&&(Re=new Ht,Re.layers.enable(T),Re.viewport=new ot,P[T]=Re),Re.matrix.fromArray(Fe.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Fe.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),T===0&&(O.matrix.copy(Re.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ue===!0&&O.cameras.push(Re)}const Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){u=i.getBinding();const T=u.getDepthInformation(he[0]);T&&T.isValid&&T.texture&&m.init(T,r.renderState)}if(Se&&Se.includes("camera-access")&&x){e.state.unbindTexture(),u=i.getBinding();for(let T=0;T<he.length;T++){const Fe=he[T].camera;if(Fe){let Pe=h[Fe];Pe||(Pe=new Io,h[Fe]=Pe);const Re=u.getCameraImage(Fe);Pe.sourceTexture=Re}}}}for(let he=0;he<R.length;he++){const Ue=A[he],Se=R[he];Ue!==null&&Se!==void 0&&Se.update(Ue,Z,l||a)}re&&re(X,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Ce=new Fo;Ce.setAnimationLoop(Te),this.setAnimationLoop=function(X){re=X},this.dispose=function(){}}}const Cn=new cn,rp=new ut;function sp(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Co(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,w,b,M){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),u(m,h)):h.isMeshPhongMaterial?(s(m,h),d(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,M)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),x(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?c(m,h,w,b):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===At&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===At&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const w=e.get(h),b=w.envMap,M=w.envMapRotation;b&&(m.envMap.value=b,Cn.copy(M),Cn.x*=-1,Cn.y*=-1,Cn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Cn.y*=-1,Cn.z*=-1),m.envMapRotation.value.setFromMatrix4(rp.makeRotationFromEuler(Cn)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,w,b){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*w,m.scale.value=b*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function u(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,w){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===At&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const w=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ap(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,b){const M=b.program;i.uniformBlockBinding(w,M)}function l(w,b){let M=r[w.id];M===void 0&&(g(w),M=d(w),r[w.id]=M,w.addEventListener("dispose",m));const R=b.program;i.updateUBOMapping(w,R);const A=e.render.frame;s[w.id]!==A&&(f(w),s[w.id]=A)}function d(w){const b=u();w.__bindingPointIndex=b;const M=n.createBuffer(),R=w.__size,A=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,R,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,M),M}function u(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const b=r[w.id],M=w.uniforms,R=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let A=0,C=M.length;A<C;A++){const D=Array.isArray(M[A])?M[A]:[M[A]];for(let S=0,E=D.length;S<E;S++){const P=D[S];if(p(P,A,S,R)===!0){const O=P.__offset,G=Array.isArray(P.value)?P.value:[P.value];let Y=0;for(let V=0;V<G.length;V++){const H=G[V],$=x(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,O+Y,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,Y),Y+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,b,M,R){const A=w.value,C=b+"_"+M;if(R[C]===void 0)return typeof A=="number"||typeof A=="boolean"?R[C]=A:R[C]=A.clone(),!0;{const D=R[C];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return R[C]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(w){const b=w.uniforms;let M=0;const R=16;for(let C=0,D=b.length;C<D;C++){const S=Array.isArray(b[C])?b[C]:[b[C]];for(let E=0,P=S.length;E<P;E++){const O=S[E],G=Array.isArray(O.value)?O.value:[O.value];for(let Y=0,V=G.length;Y<V;Y++){const H=G[Y],$=x(H),I=M%R,J=I%$.boundary,ee=I+J;M+=J,ee!==0&&R-ee<$.storage&&(M+=R-ee),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=$.storage}}}const A=M%R;return A>0&&(M+=R-A),w.__size=M,w.__cache={},this}function x(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function m(w){const b=w.target;b.removeEventListener("dispose",m);const M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function h(){for(const w in r)n.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:c,update:l,dispose:h}}class op{constructor(e={}){const{canvas:t=Gl(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,h=null;const w=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let R=!1;this._outputColorSpace=Tt;let A=0,C=0,D=null,S=-1,E=null;const P=new ot,O=new ot;let G=null;const Y=new $e(0);let V=0,H=t.width,$=t.height,I=1,J=null,ee=null;const oe=new ot(0,0,H,$),xe=new ot(0,0,H,$);let re=!1;const Te=new Do;let Ce=!1,X=!1;const Z=new ut,he=new B,Ue=new ot,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function dt(){return D===null?I:1}let T=i;function Fe(v,U){return t.getContext(v,U)}try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ys}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",Q,!1),T===null){const U="webgl2";if(T=Fe(U,v),T===null)throw Fe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Pe,Re,pe,nt,ve,He,pt,at,y,_,F,q,j,W,be,se,Me,Ee,ne,de,Ie,ye,ce,Be;function L(){Pe=new _f(T),Pe.init(),ye=new Qh(T,Pe),Re=new uf(T,Pe,e,ye),pe=new jh(T,Pe),Re.reversedDepthBuffer&&f&&pe.buffers.depth.setReversed(!0),nt=new Sf(T),ve=new Bh,He=new Jh(T,Pe,pe,ve,Re,ye,nt),pt=new ff(M),at=new gf(M),y=new bc(T),ce=new lf(T,y),_=new vf(T,y,nt,ce),F=new Ef(T,_,y,nt),ne=new Mf(T,Re,He),se=new df(ve),q=new Oh(M,pt,at,Pe,Re,ce,se),j=new sp(M,ve),W=new Hh,be=new qh(Pe),Ee=new of(M,pt,at,pe,F,p,c),Me=new Kh(M,F,Re),Be=new ap(T,nt,Re,pe),de=new cf(T,Pe,nt),Ie=new xf(T,Pe,nt),nt.programs=q.programs,M.capabilities=Re,M.extensions=Pe,M.properties=ve,M.renderLists=W,M.shadowMap=Me,M.state=pe,M.info=nt}L();const ie=new ip(M,T);this.xr=ie,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const v=Pe.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Pe.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(v){v!==void 0&&(I=v,this.setSize(H,$,!1))},this.getSize=function(v){return v.set(H,$)},this.setSize=function(v,U,z=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=v,$=U,t.width=Math.floor(v*I),t.height=Math.floor(U*I),z===!0&&(t.style.width=v+"px",t.style.height=U+"px"),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(H*I,$*I).floor()},this.setDrawingBufferSize=function(v,U,z){H=v,$=U,I=z,t.width=Math.floor(v*z),t.height=Math.floor(U*z),this.setViewport(0,0,v,U)},this.getCurrentViewport=function(v){return v.copy(P)},this.getViewport=function(v){return v.copy(oe)},this.setViewport=function(v,U,z,k){v.isVector4?oe.set(v.x,v.y,v.z,v.w):oe.set(v,U,z,k),pe.viewport(P.copy(oe).multiplyScalar(I).round())},this.getScissor=function(v){return v.copy(xe)},this.setScissor=function(v,U,z,k){v.isVector4?xe.set(v.x,v.y,v.z,v.w):xe.set(v,U,z,k),pe.scissor(O.copy(xe).multiplyScalar(I).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(v){pe.setScissorTest(re=v)},this.setOpaqueSort=function(v){J=v},this.setTransparentSort=function(v){ee=v},this.getClearColor=function(v){return v.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(v=!0,U=!0,z=!0){let k=0;if(v){let N=!1;if(D!==null){const te=D.texture.format;N=te===Qs||te===Js||te===js}if(N){const te=D.texture.type,ue=te===ln||te===Bn||te===yi||te===Ti||te===Ks||te===Zs,ge=Ee.getClearColor(),fe=Ee.getClearAlpha(),De=ge.r,Ne=ge.g,we=ge.b;ue?(g[0]=De,g[1]=Ne,g[2]=we,g[3]=fe,T.clearBufferuiv(T.COLOR,0,g)):(x[0]=De,x[1]=Ne,x[2]=we,x[3]=fe,T.clearBufferiv(T.COLOR,0,x))}else k|=T.COLOR_BUFFER_BIT}U&&(k|=T.DEPTH_BUFFER_BIT),z&&(k|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),Ee.dispose(),W.dispose(),be.dispose(),ve.dispose(),pt.dispose(),at.dispose(),F.dispose(),ce.dispose(),Be.dispose(),q.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",qt),ie.removeEventListener("sessionend",ia),En.stop()};function ae(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const v=nt.autoReset,U=Me.enabled,z=Me.autoUpdate,k=Me.needsUpdate,N=Me.type;L(),nt.autoReset=v,Me.enabled=U,Me.autoUpdate=z,Me.needsUpdate=k,Me.type=N}function Q(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function K(v){const U=v.target;U.removeEventListener("dispose",K),_e(U)}function _e(v){Oe(v),ve.remove(v)}function Oe(v){const U=ve.get(v).programs;U!==void 0&&(U.forEach(function(z){q.releaseProgram(z)}),v.isShaderMaterial&&q.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,z,k,N,te){U===null&&(U=Se);const ue=N.isMesh&&N.matrixWorld.determinant()<0,ge=Go(v,U,z,k,N);pe.setMaterial(k,ue);let fe=z.index,De=1;if(k.wireframe===!0){if(fe=_.getWireframeAttribute(z),fe===void 0)return;De=2}const Ne=z.drawRange,we=z.attributes.position;let Ve=Ne.start*De,Ke=(Ne.start+Ne.count)*De;te!==null&&(Ve=Math.max(Ve,te.start*De),Ke=Math.min(Ke,(te.start+te.count)*De)),fe!==null?(Ve=Math.max(Ve,0),Ke=Math.min(Ke,fe.count)):we!=null&&(Ve=Math.max(Ve,0),Ke=Math.min(Ke,we.count));const st=Ke-Ve;if(st<0||st===1/0)return;ce.setup(N,k,ge,z,fe);let tt,Je=de;if(fe!==null&&(tt=y.get(fe),Je=Ie,Je.setIndex(tt)),N.isMesh)k.wireframe===!0?(pe.setLineWidth(k.wireframeLinewidth*dt()),Je.setMode(T.LINES)):Je.setMode(T.TRIANGLES);else if(N.isLine){let Le=k.linewidth;Le===void 0&&(Le=1),pe.setLineWidth(Le*dt()),N.isLineSegments?Je.setMode(T.LINES):N.isLineLoop?Je.setMode(T.LINE_LOOP):Je.setMode(T.LINE_STRIP)}else N.isPoints?Je.setMode(T.POINTS):N.isSprite&&Je.setMode(T.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)wi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Je.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Pe.get("WEBGL_multi_draw"))Je.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Le=N._multiDrawStarts,it=N._multiDrawCounts,Xe=N._multiDrawCount,Rt=fe?y.get(fe).bytesPerElement:1,Hn=ve.get(k).currentProgram.getUniforms();for(let Ct=0;Ct<Xe;Ct++)Hn.setValue(T,"_gl_DrawID",Ct),Je.render(Le[Ct]/Rt,it[Ct])}else if(N.isInstancedMesh)Je.renderInstances(Ve,st,N.count);else if(z.isInstancedBufferGeometry){const Le=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,it=Math.min(z.instanceCount,Le);Je.renderInstances(Ve,st,it)}else Je.render(Ve,st)};function et(v,U,z){v.transparent===!0&&v.side===sn&&v.forceSinglePass===!1?(v.side=At,v.needsUpdate=!0,Fi(v,U,z),v.side=Mn,v.needsUpdate=!0,Fi(v,U,z),v.side=sn):Fi(v,U,z)}this.compile=function(v,U,z=null){z===null&&(z=v),h=be.get(z),h.init(U),b.push(h),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),v!==z&&v.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),h.setupLights();const k=new Set;return v.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const te=N.material;if(te)if(Array.isArray(te))for(let ue=0;ue<te.length;ue++){const ge=te[ue];et(ge,z,N),k.add(ge)}else et(te,z,N),k.add(te)}),h=b.pop(),k},this.compileAsync=function(v,U,z=null){const k=this.compile(v,U,z);return new Promise(N=>{function te(){if(k.forEach(function(ue){ve.get(ue).currentProgram.isReady()&&k.delete(ue)}),k.size===0){N(v);return}setTimeout(te,10)}Pe.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let Ye=null;function Zt(v){Ye&&Ye(v)}function qt(){En.stop()}function ia(){En.start()}const En=new Fo;En.setAnimationLoop(Zt),typeof self<"u"&&En.setContext(self),this.setAnimationLoop=function(v){Ye=v,ie.setAnimationLoop(v),v===null?En.stop():En.start()},ie.addEventListener("sessionstart",qt),ie.addEventListener("sessionend",ia),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(U),U=ie.getCamera()),v.isScene===!0&&v.onBeforeRender(M,v,U,D),h=be.get(v,b.length),h.init(U),b.push(h),Z.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Te.setFromProjectionMatrix(Z,$t,U.reversedDepth),X=this.localClippingEnabled,Ce=se.init(this.clippingPlanes,X),m=W.get(v,w.length),m.init(),w.push(m),ie.enabled===!0&&ie.isPresenting===!0){const te=M.xr.getDepthSensingMesh();te!==null&&Mr(te,U,-1/0,M.sortObjects)}Mr(v,U,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(J,ee),Ge=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Ge&&Ee.addToRenderList(m,v),this.info.render.frame++,Ce===!0&&se.beginShadows();const z=h.state.shadowsArray;Me.render(z,v,U),Ce===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,N=m.transmissive;if(h.setupLights(),U.isArrayCamera){const te=U.cameras;if(N.length>0)for(let ue=0,ge=te.length;ue<ge;ue++){const fe=te[ue];sa(k,N,v,fe)}Ge&&Ee.render(v);for(let ue=0,ge=te.length;ue<ge;ue++){const fe=te[ue];ra(m,v,fe,fe.viewport)}}else N.length>0&&sa(k,N,v,U),Ge&&Ee.render(v),ra(m,v,U);D!==null&&C===0&&(He.updateMultisampleRenderTarget(D),He.updateRenderTargetMipmap(D)),v.isScene===!0&&v.onAfterRender(M,v,U),ce.resetDefaultState(),S=-1,E=null,b.pop(),b.length>0?(h=b[b.length-1],Ce===!0&&se.setGlobalState(M.clippingPlanes,h.state.camera)):h=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Mr(v,U,z,k){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)z=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLight)h.pushLight(v),v.castShadow&&h.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Te.intersectsSprite(v)){k&&Ue.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Z);const ue=F.update(v),ge=v.material;ge.visible&&m.push(v,ue,ge,z,Ue.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Te.intersectsObject(v))){const ue=F.update(v),ge=v.material;if(k&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ue.copy(v.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Ue.copy(ue.boundingSphere.center)),Ue.applyMatrix4(v.matrixWorld).applyMatrix4(Z)),Array.isArray(ge)){const fe=ue.groups;for(let De=0,Ne=fe.length;De<Ne;De++){const we=fe[De],Ve=ge[we.materialIndex];Ve&&Ve.visible&&m.push(v,ue,Ve,z,Ue.z,we)}}else ge.visible&&m.push(v,ue,ge,z,Ue.z,null)}}const te=v.children;for(let ue=0,ge=te.length;ue<ge;ue++)Mr(te[ue],U,z,k)}function ra(v,U,z,k){const N=v.opaque,te=v.transmissive,ue=v.transparent;h.setupLightsView(z),Ce===!0&&se.setGlobalState(M.clippingPlanes,z),k&&pe.viewport(P.copy(k)),N.length>0&&Ni(N,U,z),te.length>0&&Ni(te,U,z),ue.length>0&&Ni(ue,U,z),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function sa(v,U,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[k.id]===void 0&&(h.state.transmissionRenderTarget[k.id]=new zn(1,1,{generateMipmaps:!0,type:Pe.has("EXT_color_buffer_half_float")||Pe.has("EXT_color_buffer_float")?Ri:ln,minFilter:Fn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const te=h.state.transmissionRenderTarget[k.id],ue=k.viewport||P;te.setSize(ue.z*M.transmissionResolutionScale,ue.w*M.transmissionResolutionScale);const ge=M.getRenderTarget(),fe=M.getActiveCubeFace(),De=M.getActiveMipmapLevel();M.setRenderTarget(te),M.getClearColor(Y),V=M.getClearAlpha(),V<1&&M.setClearColor(16777215,.5),M.clear(),Ge&&Ee.render(z);const Ne=M.toneMapping;M.toneMapping=Sn;const we=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),h.setupLightsView(k),Ce===!0&&se.setGlobalState(M.clippingPlanes,k),Ni(v,z,k),He.updateMultisampleRenderTarget(te),He.updateRenderTargetMipmap(te),Pe.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Ke=0,st=U.length;Ke<st;Ke++){const tt=U[Ke],Je=tt.object,Le=tt.geometry,it=tt.material,Xe=tt.group;if(it.side===sn&&Je.layers.test(k.layers)){const Rt=it.side;it.side=At,it.needsUpdate=!0,aa(Je,z,k,Le,it,Xe),it.side=Rt,it.needsUpdate=!0,Ve=!0}}Ve===!0&&(He.updateMultisampleRenderTarget(te),He.updateRenderTargetMipmap(te))}M.setRenderTarget(ge,fe,De),M.setClearColor(Y,V),we!==void 0&&(k.viewport=we),M.toneMapping=Ne}function Ni(v,U,z){const k=U.isScene===!0?U.overrideMaterial:null;for(let N=0,te=v.length;N<te;N++){const ue=v[N],ge=ue.object,fe=ue.geometry,De=ue.group;let Ne=ue.material;Ne.allowOverride===!0&&k!==null&&(Ne=k),ge.layers.test(z.layers)&&aa(ge,U,z,fe,Ne,De)}}function aa(v,U,z,k,N,te){v.onBeforeRender(M,U,z,k,N,te),v.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),N.onBeforeRender(M,U,z,k,v,te),N.transparent===!0&&N.side===sn&&N.forceSinglePass===!1?(N.side=At,N.needsUpdate=!0,M.renderBufferDirect(z,U,k,N,v,te),N.side=Mn,N.needsUpdate=!0,M.renderBufferDirect(z,U,k,N,v,te),N.side=sn):M.renderBufferDirect(z,U,k,N,v,te),v.onAfterRender(M,U,z,k,N,te)}function Fi(v,U,z){U.isScene!==!0&&(U=Se);const k=ve.get(v),N=h.state.lights,te=h.state.shadowsArray,ue=N.state.version,ge=q.getParameters(v,N.state,te,U,z),fe=q.getProgramCacheKey(ge);let De=k.programs;k.environment=v.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(v.isMeshStandardMaterial?at:pt).get(v.envMap||k.environment),k.envMapRotation=k.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,De===void 0&&(v.addEventListener("dispose",K),De=new Map,k.programs=De);let Ne=De.get(fe);if(Ne!==void 0){if(k.currentProgram===Ne&&k.lightsStateVersion===ue)return la(v,ge),Ne}else ge.uniforms=q.getUniforms(v),v.onBeforeCompile(ge,M),Ne=q.acquireProgram(ge,fe),De.set(fe,Ne),k.uniforms=ge.uniforms;const we=k.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(we.clippingPlanes=se.uniform),la(v,ge),k.needsLights=Wo(v),k.lightsStateVersion=ue,k.needsLights&&(we.ambientLightColor.value=N.state.ambient,we.lightProbe.value=N.state.probe,we.directionalLights.value=N.state.directional,we.directionalLightShadows.value=N.state.directionalShadow,we.spotLights.value=N.state.spot,we.spotLightShadows.value=N.state.spotShadow,we.rectAreaLights.value=N.state.rectArea,we.ltc_1.value=N.state.rectAreaLTC1,we.ltc_2.value=N.state.rectAreaLTC2,we.pointLights.value=N.state.point,we.pointLightShadows.value=N.state.pointShadow,we.hemisphereLights.value=N.state.hemi,we.directionalShadowMap.value=N.state.directionalShadowMap,we.directionalShadowMatrix.value=N.state.directionalShadowMatrix,we.spotShadowMap.value=N.state.spotShadowMap,we.spotLightMatrix.value=N.state.spotLightMatrix,we.spotLightMap.value=N.state.spotLightMap,we.pointShadowMap.value=N.state.pointShadowMap,we.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=Ne,k.uniformsList=null,Ne}function oa(v){if(v.uniformsList===null){const U=v.currentProgram.getUniforms();v.uniformsList=pr.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function la(v,U){const z=ve.get(v);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function Go(v,U,z,k,N){U.isScene!==!0&&(U=Se),He.resetTextureUnits();const te=U.fog,ue=k.isMeshStandardMaterial?U.environment:null,ge=D===null?M.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ci,fe=(k.isMeshStandardMaterial?at:pt).get(k.envMap||ue),De=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ne=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),we=!!z.morphAttributes.position,Ve=!!z.morphAttributes.normal,Ke=!!z.morphAttributes.color;let st=Sn;k.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(st=M.toneMapping);const tt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Je=tt!==void 0?tt.length:0,Le=ve.get(k),it=h.state.lights;if(Ce===!0&&(X===!0||v!==E)){const xt=v===E&&k.id===S;se.setState(k,v,xt)}let Xe=!1;k.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==it.state.version||Le.outputColorSpace!==ge||N.isBatchedMesh&&Le.batching===!1||!N.isBatchedMesh&&Le.batching===!0||N.isBatchedMesh&&Le.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Le.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Le.instancing===!1||!N.isInstancedMesh&&Le.instancing===!0||N.isSkinnedMesh&&Le.skinning===!1||!N.isSkinnedMesh&&Le.skinning===!0||N.isInstancedMesh&&Le.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Le.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Le.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Le.instancingMorph===!1&&N.morphTexture!==null||Le.envMap!==fe||k.fog===!0&&Le.fog!==te||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==se.numPlanes||Le.numIntersection!==se.numIntersection)||Le.vertexAlphas!==De||Le.vertexTangents!==Ne||Le.morphTargets!==we||Le.morphNormals!==Ve||Le.morphColors!==Ke||Le.toneMapping!==st||Le.morphTargetsCount!==Je)&&(Xe=!0):(Xe=!0,Le.__version=k.version);let Rt=Le.currentProgram;Xe===!0&&(Rt=Fi(k,U,N));let Hn=!1,Ct=!1,hi=!1;const rt=Rt.getUniforms(),It=Le.uniforms;if(pe.useProgram(Rt.program)&&(Hn=!0,Ct=!0,hi=!0),k.id!==S&&(S=k.id,Ct=!0),Hn||E!==v){pe.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),rt.setValue(T,"projectionMatrix",v.projectionMatrix),rt.setValue(T,"viewMatrix",v.matrixWorldInverse);const Et=rt.map.cameraPosition;Et!==void 0&&Et.setValue(T,he.setFromMatrixPosition(v.matrixWorld)),Re.logarithmicDepthBuffer&&rt.setValue(T,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&rt.setValue(T,"isOrthographic",v.isOrthographicCamera===!0),E!==v&&(E=v,Ct=!0,hi=!0)}if(N.isSkinnedMesh){rt.setOptional(T,N,"bindMatrix"),rt.setOptional(T,N,"bindMatrixInverse");const xt=N.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),rt.setValue(T,"boneTexture",xt.boneTexture,He))}N.isBatchedMesh&&(rt.setOptional(T,N,"batchingTexture"),rt.setValue(T,"batchingTexture",N._matricesTexture,He),rt.setOptional(T,N,"batchingIdTexture"),rt.setValue(T,"batchingIdTexture",N._indirectTexture,He),rt.setOptional(T,N,"batchingColorTexture"),N._colorsTexture!==null&&rt.setValue(T,"batchingColorTexture",N._colorsTexture,He));const Nt=z.morphAttributes;if((Nt.position!==void 0||Nt.normal!==void 0||Nt.color!==void 0)&&ne.update(N,z,Rt),(Ct||Le.receiveShadow!==N.receiveShadow)&&(Le.receiveShadow=N.receiveShadow,rt.setValue(T,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(It.envMap.value=fe,It.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(It.envMapIntensity.value=U.environmentIntensity),Ct&&(rt.setValue(T,"toneMappingExposure",M.toneMappingExposure),Le.needsLights&&Vo(It,hi),te&&k.fog===!0&&j.refreshFogUniforms(It,te),j.refreshMaterialUniforms(It,k,I,$,h.state.transmissionRenderTarget[v.id]),pr.upload(T,oa(Le),It,He)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(pr.upload(T,oa(Le),It,He),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&rt.setValue(T,"center",N.center),rt.setValue(T,"modelViewMatrix",N.modelViewMatrix),rt.setValue(T,"normalMatrix",N.normalMatrix),rt.setValue(T,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const xt=k.uniformsGroups;for(let Et=0,Er=xt.length;Et<Er;Et++){const yn=xt[Et];Be.update(yn,Rt),Be.bind(yn,Rt)}}return Rt}function Vo(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function Wo(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(v,U,z){const k=ve.get(v);k.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),ve.get(v.texture).__webglTexture=U,ve.get(v.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:z,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,U){const z=ve.get(v);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const Xo=T.createFramebuffer();this.setRenderTarget=function(v,U=0,z=0){D=v,A=U,C=z;let k=!0,N=null,te=!1,ue=!1;if(v){const fe=ve.get(v);if(fe.__useDefaultFramebuffer!==void 0)pe.bindFramebuffer(T.FRAMEBUFFER,null),k=!1;else if(fe.__webglFramebuffer===void 0)He.setupRenderTarget(v);else if(fe.__hasExternalTextures)He.rebindTextures(v,ve.get(v.texture).__webglTexture,ve.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const we=v.depthTexture;if(fe.__boundDepthTexture!==we){if(we!==null&&ve.has(we)&&(v.width!==we.image.width||v.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(v)}}const De=v.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(ue=!0);const Ne=ve.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ne[U])?N=Ne[U][z]:N=Ne[U],te=!0):v.samples>0&&He.useMultisampledRTT(v)===!1?N=ve.get(v).__webglMultisampledFramebuffer:Array.isArray(Ne)?N=Ne[z]:N=Ne,P.copy(v.viewport),O.copy(v.scissor),G=v.scissorTest}else P.copy(oe).multiplyScalar(I).floor(),O.copy(xe).multiplyScalar(I).floor(),G=re;if(z!==0&&(N=Xo),pe.bindFramebuffer(T.FRAMEBUFFER,N)&&k&&pe.drawBuffers(v,N),pe.viewport(P),pe.scissor(O),pe.setScissorTest(G),te){const fe=ve.get(v.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+U,fe.__webglTexture,z)}else if(ue){const fe=U;for(let De=0;De<v.textures.length;De++){const Ne=ve.get(v.textures[De]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+De,Ne.__webglTexture,z,fe)}}else if(v!==null&&z!==0){const fe=ve.get(v.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,fe.__webglTexture,z)}S=-1},this.readRenderTargetPixels=function(v,U,z,k,N,te,ue,ge=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=ve.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ue!==void 0&&(fe=fe[ue]),fe){pe.bindFramebuffer(T.FRAMEBUFFER,fe);try{const De=v.textures[ge],Ne=De.format,we=De.type;if(!Re.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-k&&z>=0&&z<=v.height-N&&(v.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+ge),T.readPixels(U,z,k,N,ye.convert(Ne),ye.convert(we),te))}finally{const De=D!==null?ve.get(D).__webglFramebuffer:null;pe.bindFramebuffer(T.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(v,U,z,k,N,te,ue,ge=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=ve.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ue!==void 0&&(fe=fe[ue]),fe)if(U>=0&&U<=v.width-k&&z>=0&&z<=v.height-N){pe.bindFramebuffer(T.FRAMEBUFFER,fe);const De=v.textures[ge],Ne=De.format,we=De.type;if(!Re.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ve),T.bufferData(T.PIXEL_PACK_BUFFER,te.byteLength,T.STREAM_READ),v.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+ge),T.readPixels(U,z,k,N,ye.convert(Ne),ye.convert(we),0);const Ke=D!==null?ve.get(D).__webglFramebuffer:null;pe.bindFramebuffer(T.FRAMEBUFFER,Ke);const st=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Vl(T,st,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Ve),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,te),T.deleteBuffer(Ve),T.deleteSync(st),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,U=null,z=0){const k=Math.pow(2,-z),N=Math.floor(v.image.width*k),te=Math.floor(v.image.height*k),ue=U!==null?U.x:0,ge=U!==null?U.y:0;He.setTexture2D(v,0),T.copyTexSubImage2D(T.TEXTURE_2D,z,0,0,ue,ge,N,te),pe.unbindTexture()};const qo=T.createFramebuffer(),Yo=T.createFramebuffer();this.copyTextureToTexture=function(v,U,z=null,k=null,N=0,te=null){te===null&&(N!==0?(wi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=N,N=0):te=0);let ue,ge,fe,De,Ne,we,Ve,Ke,st;const tt=v.isCompressedTexture?v.mipmaps[te]:v.image;if(z!==null)ue=z.max.x-z.min.x,ge=z.max.y-z.min.y,fe=z.isBox3?z.max.z-z.min.z:1,De=z.min.x,Ne=z.min.y,we=z.isBox3?z.min.z:0;else{const Nt=Math.pow(2,-N);ue=Math.floor(tt.width*Nt),ge=Math.floor(tt.height*Nt),v.isDataArrayTexture?fe=tt.depth:v.isData3DTexture?fe=Math.floor(tt.depth*Nt):fe=1,De=0,Ne=0,we=0}k!==null?(Ve=k.x,Ke=k.y,st=k.z):(Ve=0,Ke=0,st=0);const Je=ye.convert(U.format),Le=ye.convert(U.type);let it;U.isData3DTexture?(He.setTexture3D(U,0),it=T.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(He.setTexture2DArray(U,0),it=T.TEXTURE_2D_ARRAY):(He.setTexture2D(U,0),it=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,U.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,U.unpackAlignment);const Xe=T.getParameter(T.UNPACK_ROW_LENGTH),Rt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Hn=T.getParameter(T.UNPACK_SKIP_PIXELS),Ct=T.getParameter(T.UNPACK_SKIP_ROWS),hi=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,tt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,tt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,De),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ne),T.pixelStorei(T.UNPACK_SKIP_IMAGES,we);const rt=v.isDataArrayTexture||v.isData3DTexture,It=U.isDataArrayTexture||U.isData3DTexture;if(v.isDepthTexture){const Nt=ve.get(v),xt=ve.get(U),Et=ve.get(Nt.__renderTarget),Er=ve.get(xt.__renderTarget);pe.bindFramebuffer(T.READ_FRAMEBUFFER,Et.__webglFramebuffer),pe.bindFramebuffer(T.DRAW_FRAMEBUFFER,Er.__webglFramebuffer);for(let yn=0;yn<fe;yn++)rt&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ve.get(v).__webglTexture,N,we+yn),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ve.get(U).__webglTexture,te,st+yn)),T.blitFramebuffer(De,Ne,ue,ge,Ve,Ke,ue,ge,T.DEPTH_BUFFER_BIT,T.NEAREST);pe.bindFramebuffer(T.READ_FRAMEBUFFER,null),pe.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(N!==0||v.isRenderTargetTexture||ve.has(v)){const Nt=ve.get(v),xt=ve.get(U);pe.bindFramebuffer(T.READ_FRAMEBUFFER,qo),pe.bindFramebuffer(T.DRAW_FRAMEBUFFER,Yo);for(let Et=0;Et<fe;Et++)rt?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Nt.__webglTexture,N,we+Et):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Nt.__webglTexture,N),It?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,xt.__webglTexture,te,st+Et):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,xt.__webglTexture,te),N!==0?T.blitFramebuffer(De,Ne,ue,ge,Ve,Ke,ue,ge,T.COLOR_BUFFER_BIT,T.NEAREST):It?T.copyTexSubImage3D(it,te,Ve,Ke,st+Et,De,Ne,ue,ge):T.copyTexSubImage2D(it,te,Ve,Ke,De,Ne,ue,ge);pe.bindFramebuffer(T.READ_FRAMEBUFFER,null),pe.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else It?v.isDataTexture||v.isData3DTexture?T.texSubImage3D(it,te,Ve,Ke,st,ue,ge,fe,Je,Le,tt.data):U.isCompressedArrayTexture?T.compressedTexSubImage3D(it,te,Ve,Ke,st,ue,ge,fe,Je,tt.data):T.texSubImage3D(it,te,Ve,Ke,st,ue,ge,fe,Je,Le,tt):v.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,te,Ve,Ke,ue,ge,Je,Le,tt.data):v.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,te,Ve,Ke,tt.width,tt.height,Je,tt.data):T.texSubImage2D(T.TEXTURE_2D,te,Ve,Ke,ue,ge,Je,Le,tt);T.pixelStorei(T.UNPACK_ROW_LENGTH,Xe),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Rt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Hn),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ct),T.pixelStorei(T.UNPACK_SKIP_IMAGES,hi),te===0&&U.generateMipmaps&&T.generateMipmap(it),pe.unbindTexture()},this.initRenderTarget=function(v){ve.get(v).__webglFramebuffer===void 0&&He.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?He.setTextureCube(v,0):v.isData3DTexture?He.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?He.setTexture2DArray(v,0):He.setTexture2D(v,0),pe.unbindTexture()},this.resetState=function(){A=0,C=0,D=null,pe.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $t}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}const lp={sky:"#14203f"};function dn(n){let e=n>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function lr(n,e){const t=document.createElement("canvas");return t.width=n,t.height=e,t}function ii(n){const e=n.getContext("2d");if(!e)throw new Error("Canvas unavailable");return e}function Ut(n,e,t){n.beginPath(),e.forEach((i,r)=>r===0?n.moveTo(i[0],i[1]):n.lineTo(i[0],i[1])),n.closePath(),n.fillStyle=t,n.fill()}function vt(n,e,t,i,r){const s=n.createRadialGradient(e,t,0,e,t,i);s.addColorStop(0,r),s.addColorStop(1,"transparent"),n.fillStyle=s,n.fillRect(e-i,t-i,i*2,i*2)}function Qe(n,e,t,i,r,s,a=0){n.beginPath(),n.ellipse(e,t,i,r,a,0,Math.PI*2),n.fillStyle=s,n.fill()}function es(n,e,t,i,r,s,a){const o=dn(s),c=[];for(let d=-1;d<=18;d++)c.push({x:e*d/16,y:t*(i-o()*r)});n.beginPath(),n.moveTo(-e*.1,t*.68),n.lineTo(c[0].x,c[0].y);for(let d=1;d<c.length-1;d++){const u=c[d+1];n.quadraticCurveTo(c[d].x,c[d].y,(c[d].x+u.x)/2,(c[d].y+u.y)/2)}n.lineTo(e*1.1,t*.68),n.closePath();const l=n.createLinearGradient(0,t*(i-r),0,t*.62);l.addColorStop(0,a),l.addColorStop(1,"#77768f"),n.fillStyle=l,n.fill()}function cp(n,e,t){const i=dn(48021),r=(s,a,o,c,l,d)=>{n.save(),n.translate(s,a),n.rotate(d),n.scale(1,c/o),vt(n,0,0,o,l),n.restore()};r(e*.66,t*.09,e*.39,t*.12,"#8f83c017",-.12),r(e*.86,t*.035,e*.3,t*.075,"#789fca12",-.13),r(e*.46,t*.135,e*.23,t*.07,"#8c87ba0b",-.17);for(let s=0;s<10;s++){const a=s/9,o=e*(.28+a*.76),c=t*(.137-a*.13+Math.sin(a*Math.PI*2)*.012);r(o,c,e*(.07+i()*.07),t*(.016+i()*.026),s%3===0?"#c2c9ef0f":s%3===1?"#a59bce11":"#8ca8d211",-.14),s%2===0&&r(o+e*.018,c+t*.009,e*.075,t*.013,"#121b391c",-.14)}for(let s=0;s<325;s++){const a=i(),o=e*(.25+a*.82),c=t*(.137-a*.13+Math.sin(a*Math.PI*2)*.012),l=i()+i()+i()-1.5,d=o+(i()-.5)*e*.025,u=c+l*t*.036;if(u<0)continue;const f=e*(12e-5+i()*32e-5),p=.04+i()*.21;Qe(n,d,u,f,f,s%4===0?`rgba(219,207,242,${p})`:`rgba(195,215,244,${p})`),s%57===0&&vt(n,d,u,e*.004,"#b8cef214")}}function up(n,e,t,i){const r=dn(3097),s=n.createLinearGradient(0,0,0,t*.66);s.addColorStop(0,"#121b39"),s.addColorStop(.38,"#26365a"),s.addColorStop(.76,"#656482"),s.addColorStop(1,"#9b889b"),n.fillStyle=s,n.fillRect(0,0,e,t),vt(n,e*.59,t*.38,e*.5,"#7a699126"),vt(n,e*.15,t*.32,e*.35,"#4b6b9626"),cp(n,e,t);for(let u=0;u<215;u++){const f=r()*e,p=r()*t*.48,g=(.32+r()*.7)*e/1500,x=.14+r()*.53;Qe(n,f,p,g,g,`rgba(230,232,255,${x})`),u%25===0&&(vt(n,f,p,e*.006,"#dfe3ff25"),n.strokeStyle="#e3dcf44a",n.lineWidth=e/2200,n.beginPath(),n.moveTo(f-g*3.2,p),n.lineTo(f+g*3.2,p),n.moveTo(f,p-g*3.2),n.lineTo(f,p+g*3.2),n.stroke())}n.save();for(let u=0;u<5;u++){const f=t*(.24+u*.045);n.beginPath(),n.moveTo(-e*.1,f),n.bezierCurveTo(e*.2,f-t*.035,e*.32,f+t*.025,e*.56,f-t*.008),n.bezierCurveTo(e*.73,f-t*.03,e*.86,f+t*.007,e*1.1,f-t*.03),n.strokeStyle=`rgba(185,171,202,${.016+u*.004})`,n.lineWidth=t*(.009+u*.004),n.stroke()}n.restore();const a=e*(i?.71:.592),o=t*(i?.217:.218),c=Math.min(e,t)*(i?.046:.043);vt(n,a,o,c*5.6,"#f7d5e00a"),vt(n,a,o,c*3.5,"#ffe2e812"),vt(n,a,o,c*1.75,"#fff0dc32");const l=n.createRadialGradient(a-c*.4,o-c*.4,1,a,o,c);l.addColorStop(0,"#fff9e8"),l.addColorStop(.7,"#f7eddd"),l.addColorStop(1,"#ddd7d2"),n.beginPath(),n.arc(a,o,c,0,Math.PI*2),n.fillStyle=l,n.fill(),n.save(),n.beginPath(),n.arc(a,o,c*.95,0,Math.PI*2),n.clip();for(let u=0;u<30;u++)Qe(n,a+(r()-.5)*c*2,o+(r()-.5)*c*2,c*(.06+r()*.15),c*(.04+r()*.14),"#9d9bab0a");n.restore(),es(n,e,t,.5,.185,7007,"#6c688a"),es(n,e,t,.54,.14,97,"#565b7a"),es(n,e,t,.57,.105,1239,"#414d6c");const d=n.createLinearGradient(0,t*.43,0,t*.59);d.addColorStop(0,"transparent"),d.addColorStop(.7,"#c9aec529"),d.addColorStop(1,"#b3a5c344"),n.fillStyle=d,n.fillRect(0,t*.43,e,t*.2);for(let u=0;u<7;u++){const f=t*(.493+u*.0085),p=n.createLinearGradient(0,0,e,0);p.addColorStop(0,"#b2accc00"),p.addColorStop(.3,"#b2accc18"),p.addColorStop(.65,"#c6b3c227"),p.addColorStop(1,"#b2accc00"),Qe(n,e*.49,f,e*.64,t*.009,p)}return{moonX:a,moonY:o,moonSize:c}}function dp(n,e,t,i,r,s,a){const o=dn(816);n.save(),n.beginPath(),n.rect(0,r,t,i-r),n.clip();const c=n.createLinearGradient(0,r,0,i);c.addColorStop(0,"#898298"),c.addColorStop(.12,"#5a6a87"),c.addColorStop(.54,"#304b69"),c.addColorStop(1,"#152e49"),n.fillStyle=c,n.fillRect(0,r,t,i-r),n.save(),n.translate(0,r*2),n.scale(1,-1),n.globalAlpha=.36,n.drawImage(e,0,i*.31,t,i*.32,0,i*.31,t,i*.32),n.restore();const l=n.createLinearGradient(0,r,0,i);l.addColorStop(0,"#49628305"),l.addColorStop(.35,"#243e6530"),l.addColorStop(1,"#122e4ee8"),n.fillStyle=l,n.fillRect(0,r,t,i-r),n.save();const d=n.createLinearGradient(s-t*.16,0,s+t*.16,0);d.addColorStop(0,"#f6dbd300"),d.addColorStop(.35,"#f6dbd307"),d.addColorStop(.5,"#f6dbd314"),d.addColorStop(.65,"#f6dbd307"),d.addColorStop(1,"#f6dbd300"),n.fillStyle=d,n.fillRect(s-t*.16,r,t*.32,i-r),vt(n,t*.79,i*.76,t*.19,"#f4b3cb15"),vt(n,t*.8,i*.75,t*.09,"#f3bc6b12"),n.restore();for(let u=0;u<340;u++){const f=o(),p=r+f*(i-r),g=t*(.012+f*(a?.14:.095)),x=s+(o()+o()-1)*g,m=t*(.001+o()*.025)*(.3+f),h=Math.max(.45,i*(3e-4+f*75e-5));Qe(n,x,p,m,h,`rgba(242,221,218,${(.06+o()*.23)*(1-f*.6)})`)}for(let u=0;u<250;u++){const f=o()*t,p=r+o()*(i-r),g=(p-r)/(i-r);n.strokeStyle=u%3===0?"#c0b7ca12":"#1027461c",n.lineWidth=i*(4e-4+g*9e-4),n.beginPath(),n.moveTo(f,p),n.bezierCurveTo(f+t*.008,p-i*.001,f+t*.022,p+i*.001,f+t*(.01+g*.035),p),n.stroke()}for(let u=0;u<95;u++){const f=i*(.665+o()*.24),p=t*(.792+(o()-.5)*(.022+(f/i-.66)*.24));Qe(n,p,f,t*(.001+o()*.012),i*8e-4,`rgba(244,180,112,${o()*.19})`)}n.restore()}function fp(n,e,t,i){const r=dn(2021),s=i?.67:.645;n.save(),n.beginPath(),n.moveTo(e*1.05,t*.548),n.bezierCurveTo(e*.95,t*.57,e*.89,t*.61,e*.81,t*s),n.bezierCurveTo(e*.7,t*.69,e*.715,t*.72,e*.79,t*.753),n.bezierCurveTo(e*.87,t*.8,e*.88,t*.92,e*.94,t*1.03),n.lineTo(e*1.1,t*1.1),n.closePath();const a=n.createLinearGradient(e*.8,t*.6,e,t);a.addColorStop(0,"#364a57"),a.addColorStop(.38,"#293d46"),a.addColorStop(1,"#142c3b"),n.fillStyle=a,n.fill(),n.save(),n.clip(),vt(n,e*.805,t*.695,e*.13,"#efbc6542");for(let c=0;c<1200;c++){const l=e*(.7+r()*.36),d=t*(.61+r()*.43),u=t*(.003+r()*.012);n.strokeStyle=["#71756937","#87977c26","#c1b2a21f","#162b3a66"][c%4],n.lineWidth=e/2200,n.beginPath(),n.moveTo(l,d),n.quadraticCurveTo(l+e*.0015,d-u*.6,l+e*.004,d-u),n.stroke()}for(let c=0;c<135;c++){const l=e*(.72+r()*.3),d=t*(.63+r()*.29);Qe(n,l,d,e*.0016,t*.001,["#e5adc58c","#f7c7d5a1","#c989b77a"][c%3],r()*3)}n.restore(),[[.765,.713,.026,.011],[.749,.694,.018,.01],[.804,.759,.027,.016],[.834,.782,.018,.012],[.909,.94,.035,.016]].forEach(([c,l,d,u],f)=>{const p=n.createLinearGradient(0,t*(l-u),0,t*(l+u));p.addColorStop(0,f%2===0?"#6a7482":"#647080"),p.addColorStop(.35,"#475568"),p.addColorStop(1,"#26394e"),Qe(n,e*c,t*l,e*d,t*u,p,-.1),Qe(n,e*(c-.004),t*(l-u*.5),e*d*.55,t*u*.12,"#b7b2bb32",-.07)}),n.restore()}function hp(n,e,t,i){const r=dn(124),s=Math.min(e/(i?860:1500),t/870),a=e*(i?.77:.806),o=t*(i?.715:.695);n.save(),n.translate(a,o),n.scale(s,s),vt(n,-5,-60,220,"#ecc28b12"),Qe(n,10,12,173,22,"#102b3a6b"),Ut(n,[[-126,8],[78,8],[153,-26],[150,-41],[-129,-14]],"#63727a"),Ut(n,[[-129,-14],[76,-14],[151,-45],[-48,-42]],"#9a9a967a"),Ut(n,[[-111,-16],[76,-16],[76,-113],[-111,-113]],"#8f8391"),Ut(n,[[76,-16],[145,-45],[145,-137],[76,-111]],"#685f78");const c=n.createLinearGradient(-111,0,76,-120);c.addColorStop(0,"#b7a0a184"),c.addColorStop(1,"#b7a0a100"),n.fillStyle=c,n.fillRect(-110,-112,186,96),Ut(n,[[-114,-112],[-16,-205],[83,-112]],"#9a8796"),Ut(n,[[-16,-205],[66,-233],[162,-135],[83,-112]],"#544c67"),n.strokeStyle="#493e52",n.lineWidth=6,[[-109,-111,76,-111],[-109,-111,-109,-18],[75,-110,75,-17],[-112,-18,77,-18],[-16,-203,-16,-112],[-85,-134,58,-134]].forEach(([u,f,p,g])=>{n.beginPath(),n.moveTo(u,f),n.lineTo(p,g),n.stroke()}),Ut(n,[[-141,-108],[-17,-226],[-8,-214],[-124,-100]],"#55516e");const l=n.createLinearGradient(20,-220,118,-100);l.addColorStop(0,"#80758f"),l.addColorStop(.4,"#655e7d"),l.addColorStop(1,"#3f405e"),Ut(n,[[-17,-226],[66,-253],[181,-132],[91,-102]],l),n.save(),n.beginPath(),n.moveTo(-17,-226),n.lineTo(66,-253),n.lineTo(181,-132),n.lineTo(91,-102),n.clip();for(let u=0;u<11;u++)n.beginPath(),n.moveTo(-25+u*10,-237+u*11),n.lineTo(81+u*10,-272+u*11),n.strokeStyle=u%2===0?"#b2a3b35e":"#242b472e",n.lineWidth=u%2===0?2:4,n.stroke();for(let u=0;u<7;u++)n.beginPath(),n.moveTo(-10+u*15,-238),n.lineTo(130+u*15,-94),n.strokeStyle="#242b474d",n.lineWidth=1.4,n.stroke();for(let u=0;u<85;u++)Qe(n,r()*210-20,r()*155-250,2+r()*3,1+r()*1.5,["#e2aac3ad","#ffcddd9c","#a87c9e80"][u%3],r()*2);n.restore(),n.strokeStyle="#a59ab588",n.lineWidth=2,n.beginPath(),n.moveTo(-141,-108),n.lineTo(-17,-226),n.lineTo(66,-253),n.stroke(),Ut(n,[[90,-107],[183,-138],[181,-128],[91,-96]],"#33364f"),Ut(n,[[-141,-108],[-124,-102],[-15,-207],[-18,-221]],"#8d7a92");const d=n.createLinearGradient(0,-100,0,-20);d.addColorStop(0,"#f9d5a0"),d.addColorStop(.5,"#ffe3a8"),d.addColorStop(1,"#d79769"),vt(n,-68,-62,75,"#ffd18531"),vt(n,18,-64,70,"#ffcf7b2c"),n.fillStyle="#4e3d4a",n.fillRect(-100,-94,62,67),n.fillStyle=d,n.fillRect(-94,-88,50,55),n.fillStyle="#fff2d132",n.fillRect(-90,-85,12,47),n.fillRect(-59,-85,12,47),n.strokeStyle="#816052",n.lineWidth=3,n.beginPath(),n.moveTo(-69,-90),n.lineTo(-69,-31),n.moveTo(-96,-61),n.lineTo(-42,-61),n.stroke(),n.fillStyle="#493b4b",n.fillRect(-21,-94,52,79),n.fillStyle=d,n.fillRect(-15,-88,40,66),n.fillStyle="#98705b",n.fillRect(3,-87,3,64),n.fillRect(-15,-54,40,3),n.fillRect(-15,-24,40,5),Qe(n,17,-42,1.8,1.8,"#fff1bc"),Ut(n,[[93,-94],[128,-109],[128,-65],[93,-51]],"#ffd797"),n.strokeStyle="#6d5260",n.lineWidth=4,n.beginPath(),n.moveTo(110,-100),n.lineTo(110,-59),n.moveTo(93,-73),n.lineTo(128,-87),n.stroke(),vt(n,-15,-153,31,"#ffcf8128"),Qe(n,-15,-153,16,16,"#4b3e55"),Qe(n,-15,-153,12,12,"#eac495"),n.strokeStyle="#846052",n.lineWidth=2,n.beginPath(),n.moveTo(-15,-166),n.lineTo(-15,-141),n.moveTo(-27,-153),n.lineTo(-3,-153),n.stroke(),Ut(n,[[-31,-14],[43,-14],[48,-5],[-37,-5]],"#9f9690"),Ut(n,[[-37,-5],[48,-5],[54,4],[-44,4]],"#777e82"),n.fillStyle="#635066",n.fillRect(-129,-39,22,25),n.fillRect(44,-35,22,21);for(let u=0;u<23;u++){const f=(u<12?-119:55)+(r()-.5)*25,p=-41-r()*10;Qe(n,f,p,3+r()*2,2.5,["#f3bfd6","#c8b1dd","#edc796"][u%3])}n.restore()}function nn(n,e,t,i){n.beginPath(),n.moveTo(e[0],e[1]),n.bezierCurveTo(e[2],e[3],e[4],e[5],e[6],e[7]),n.strokeStyle=i,n.lineWidth=t,n.lineCap="round",n.stroke()}function ao(n,e,t,i,r=!1){const s=dn(r?9087:1578);n.save(),r&&(n.translate(e*-.055,t*-.028),n.scale(-.59,.66),n.translate(-e,0),n.globalAlpha=.74);const a=e*(i?1.025:.982),o=t*.89,c=i?.395:.3,l=f=>t*(f+(i?.077:0)),d=e*(i?.023:.017);nn(n,[a,o,e*.924,t*.73,e*.951,l(.49),e*.854,l(.32)],d,"#2b3044"),nn(n,[a-e*.002,o,e*.931,t*.7,e*.944,l(.49),e*.853,l(.32)],d*.45,"#5b4a5b"),nn(n,[e*.94,l(.58),e*.91,l(.43),e*.745,l(.39),e*.69,l(.27)],d*.52,"#353347"),nn(n,[e*.921,l(.48),e*.98,l(.37),e*1.06,l(.37),e*1.05,l(.24)],d*.49,"#353347"),nn(n,[e*.89,l(.36),e*.88,l(.25),e*.82,l(.21),e*.79,l(.14)],d*.39,"#3e374b"),nn(n,[e*.858,l(.32),e*.82,l(.34),e*.725,l(.24),e*.667,l(.24)],d*.35,"#3e374b"),nn(n,[e*.915,l(.46),e*.974,l(.45),e*.996,l(.49),e*1.07,l(.43)],d*.29,"#3e374b"),nn(n,[e*.872,l(.3),e*.886,l(.23),e*.985,l(.19),e*1.027,l(.15)],d*.3,"#3e374b"),nn(n,[a-e*.007,o-t*.02,e*.932,t*.741,e*.942,l(.55),e*.909,l(.45)],d*.13,"#bd849147");const u=[[.73,c-.052,.095,.075],[.815,c-.12,.105,.077],[.923,c-.139,.105,.068],[1.015,c-.075,.13,.09],[.854,c-.007,.12,.07],[.706,c+.013,.073,.053],[.994,c+.074,.11,.069],[.917,c+.023,.09,.075],[1.064,c+.13,.095,.047]];u.forEach(([f,p,g,x],m)=>{const h=Math.round((r?150:250)*(g/.1)),w=e*f,b=t*p;vt(n,w,b,e*g*.92,"#e3adc315");for(let M=0;M<h;M++){const R=s()*Math.PI*2,A=Math.sqrt(s()),C=w+Math.cos(R)*A*e*g,D=b+Math.sin(R)*A*t*x,S=e*(.0016+s()*.0056)*(r?.8:1),E=(1-Math.sin(R)*.35-A*.23)*s(),P=E>.66?["#eec0d0e6","#f6ccd9db","#e8b8d2df"]:E>.32?["#c697b9d9","#bc93b4df","#d5a4c1db"]:["#846b99d9","#a27da8d9","#95729bd9"];Qe(n,C,D,S*(1.2+s()*.4),S*(.7+s()*.5),P[(M+m)%3],s()*2)}});for(let f=0;f<(r?95:300);f++){const p=u[Math.floor(s()*u.length)],g=s()*Math.PI*2,x=Math.sqrt(s()),m=e*(p[0]+Math.cos(g)*x*p[2]),h=t*(p[1]+Math.sin(g)*x*p[3]),w=e*(.0013+s()*.0019);for(let b=0;b<5;b++){const M=b*Math.PI*.4;Qe(n,m+Math.cos(M)*w*.8,h+Math.sin(M)*w*.8,w,w*.56,f%3===0?"#ffe1e8b3":"#eac4db8c",M)}Qe(n,m,h,w*.25,w*.25,"#f6dcbdc9")}for(let f=0;f<42;f++){const p=e*(.66+s()*.39),g=t*(c+.07+s()*.25);Qe(n,p,g,e*(.0013+s()*.0014),e*.001,"#f0c3db86",s()*Math.PI)}n.restore()}function pp(n,e,t,i){const r=dn(2041);n.save(),n.beginPath(),n.moveTo(-e*.1,t*.9),n.bezierCurveTo(e*.025,t*.91,e*.08,t*.99,e*.26,t*1.04),n.lineTo(-e*.1,t*1.1),n.closePath();const s=n.createLinearGradient(0,t*.9,0,t);s.addColorStop(0,"#20364c"),s.addColorStop(1,"#12273c"),n.fillStyle=s,n.fill();for(let a=0;a<(i?36:65);a++){const o=e*(r()*.17-.025),c=t*(.96+r()*.1),l=t*(.03+r()*.105),d=e*(r()-.5)*.04;if(n.strokeStyle=["#304651","#425364","#51616d","#182f40"][a%4],n.lineWidth=e*(8e-4+r()*6e-4),n.beginPath(),n.moveTo(o,c),n.quadraticCurveTo(o+d*.2,c-l*.65,o+d,c-l),n.stroke(),a%4===0&&Qe(n,o+d,c-l,e*.0011,t*.009,"#9f8fa281",-.15),a%5===0){const u=o+d,f=c-l;for(let p=0;p<5;p++){const g=p*Math.PI*.4;Qe(n,u+Math.cos(g)*e*.0025,f+Math.sin(g)*t*.002,e*.0028,t*.0018,"#d7b3cf9c",g)}Qe(n,u,f,e*.0011,e*.0011,"#ebc6a8b0")}}for(let a=0;a<14;a++){const o=e*(.03+r()*.31),c=t*(.89+r()*.13),l=e*(.005+r()*.009);if(Qe(n,o,c+t*.001,l*1.35,t*.003,"#162c4766"),Qe(n,o,c,l,l*.19,"#46596280",-.12),n.strokeStyle="#9b9caa27",n.lineWidth=e*6e-4,n.beginPath(),n.moveTo(o-l*.8,c),n.lineTo(o+l*.8,c-l*.04),n.stroke(),a%5===0)for(let d=0;d<5;d++){const u=Math.PI*(1+d*.25);Qe(n,o+Math.cos(u)*l*.25,c+Math.sin(u)*l*.25,l*.35,l*.11,"#dcadcda6",u)}}for(let a=0;a<40;a++){const o=r()*e,c=t*(.71+r()*.28);Qe(n,o,c,e*.0015,t*6e-4,"#f2bfd35e",r()*.5),Qe(n,o,c+t*.002,e*.004,t*4e-4,"#dcb5d11a")}n.restore()}function ts(n,e){const t=e/n>1.06,i=Math.min(1.5,2100/Math.max(n,e)),r=Math.max(1,Math.round(n*i)),s=Math.max(1,Math.round(e*i)),a=lr(r,s),o=ii(a),{moonX:c}=up(o,r,s,t),l=lr(r,s);ii(l).drawImage(a,0,0);const d=s*(t?.565:.551);dp(o,l,r,s,d,c,t);const u=lr(r,s),f=ii(u);fp(f,r,s,t),ao(f,r,s,t),hp(f,r,s,t),ao(f,r,s,t,!0),pp(f,r,s,t);const p=f.createRadialGradient(r*.49,s*.44,r*.12,r*.5,s*.45,Math.max(r,s)*.77);p.addColorStop(0,"#07142a00"),p.addColorStop(.62,"#07142a00"),p.addColorStop(1,"#07142a7d"),f.fillStyle=p,f.fillRect(0,0,r,s);const g=lr(r,s),x=ii(g);return x.drawImage(a,0,0),x.drawImage(u,0,0),{background:a,foreground:u,poster:g,horizon:1-d/s}}const mp=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,gp=`
  uniform sampler2D uTexture;
  uniform float uTime;
  uniform float uAspect;
  uniform float uHorizon;
  uniform vec3 uRipples[4];
  varying vec2 vUv;
  void main() {
    vec2 sampleUv = vUv;
    float water = 1.0 - smoothstep(uHorizon - 0.015, uHorizon + 0.006, vUv.y);
    float depth = clamp((uHorizon - vUv.y) / uHorizon, 0.0, 1.0);
    sampleUv.x += water * (sin(vUv.y * 135.0 + uTime * 0.42) * 0.00055 + sin(vUv.y * 63.0 - uTime * 0.28) * 0.0008) * (0.3 + depth);
    sampleUv.y += water * sin(vUv.x * 33.0 + vUv.y * 88.0 + uTime * 0.3) * 0.00028;
    float rippleLight = 0.0;
    for (int index = 0; index < 4; index++) {
      float age = uTime - uRipples[index].z;
      if (age >= 0.0 && age < 6.0) {
        vec2 delta = vUv - uRipples[index].xy;
        delta.x *= uAspect;
        float distanceToRipple = length(delta);
        float ring = sin(distanceToRipple * 210.0 - age * 5.1) * exp(-abs(distanceToRipple - age * 0.038) * 39.0) * exp(-age * 0.65);
        sampleUv += normalize(delta + vec2(0.0001)) * ring * 0.0013 * water;
        rippleLight += ring * 0.018 * water;
      }
    }
    vec4 color = texture2D(uTexture, clamp(sampleUv, 0.001, 0.999));
    color.rgb += rippleLight;
    gl_FragColor = color;
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,_p=`
  attribute float aSize;
  attribute float aPhase;
  attribute float aKind;
  uniform float uTime;
  uniform float uPixelRatio;
  uniform float uMotion;
  varying float vPhase;
  varying float vKind;
  varying float vOpacity;
  void main() {
    vec3 particle = position;
    float phase = aPhase;
    if (aKind < 0.5) {
      particle.y = mod(position.y + 1.0 - uTime * 0.018 * uMotion * (0.55 + phase * 0.12), 2.25) - 1.0;
      particle.x += sin(uTime * 0.22 * uMotion + phase * 6.0) * 0.035;
      particle.x -= uTime * 0.0015 * uMotion;
      vOpacity = 0.26 + sin(phase * 13.0) * 0.1;
    } else {
      particle.x += sin(uTime * 0.27 * uMotion + phase) * 0.006;
      particle.y += cos(uTime * 0.3 * uMotion + phase * 2.0) * 0.007;
      vOpacity = 0.25 + sin(uTime * 0.8 * uMotion + phase * 9.0) * 0.18;
    }
    vPhase = phase + uTime * 0.2 * uMotion;
    vKind = aKind;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(particle, 1.0);
    gl_PointSize = aSize * uPixelRatio;
  }
`,vp=`
  varying float vPhase;
  varying float vKind;
  varying float vOpacity;
  void main() {
    vec2 point = gl_PointCoord - 0.5;
    if (vKind < 0.5) {
      float rotation = vPhase * 3.0;
      point = mat2(cos(rotation), -sin(rotation), sin(rotation), cos(rotation)) * point;
      point.x *= 1.55;
      point.y *= 0.85;
      float shape = 1.0 - smoothstep(0.24, 0.46, length(point));
      float fold = smoothstep(-0.2, 0.3, point.x + point.y);
      gl_FragColor = vec4(mix(vec3(0.82, 0.60, 0.76), vec3(1.0, 0.86, 0.9), fold), shape * vOpacity);
    } else {
      float shape = exp(-dot(point, point) * 24.0);
      gl_FragColor = vec4(1.0, 0.87, 0.55, shape * vOpacity);
    }
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;function xp(n){const e=window.matchMedia("(prefers-reduced-motion: reduce)"),t=(navigator.hardwareConcurrency??8)<=4||navigator.deviceMemory===2;let i=n.clientWidth||window.innerWidth,r=n.clientHeight||window.innerHeight,s=ts(i,r);const a=s.poster;a.className="scene-poster",a.setAttribute("aria-hidden","true"),Object.assign(a.style,{position:"absolute",inset:"0",width:"100%",height:"100%",objectFit:"cover",pointerEvents:"none"}),n.append(a),n.dataset.ready="true";let o;try{o=new op({alpha:!1,antialias:!1,powerPreference:"low-power",depth:!1,stencil:!1})}catch{let T=0;const Fe=()=>{window.clearTimeout(T),T=window.setTimeout(()=>{const Pe=n.clientWidth||window.innerWidth,Re=n.clientHeight||window.innerHeight;if(Math.abs(Pe-i)<3&&Math.abs(Re-r)<80)return;i=Pe,r=Re;const pe=ts(i,r);a.width=pe.poster.width,a.height=pe.poster.height,ii(a).drawImage(pe.poster,0,0)},150)};return window.addEventListener("resize",Fe,{passive:!0}),()=>{window.clearTimeout(T),window.removeEventListener("resize",Fe),a.remove()}}o.setPixelRatio(Math.min(window.devicePixelRatio,t?1:1.35)),o.setSize(i,r,!1),o.setViewport(0,0,i,r),o.setScissorTest(!1),o.outputColorSpace=Tt,o.setClearColor(lp.sky),o.domElement.setAttribute("aria-hidden","true"),o.domElement.className="scene-canvas",Object.assign(o.domElement.style,{position:"absolute",inset:"0",width:"100%",height:"100%",pointerEvents:"none"}),n.append(o.domElement);const c=new pc,l=new No(-1,1,1,-1,.1,10);l.position.z=2;const d=new Ii(2,2),u=T=>{const Fe=new Sc(T);return Fe.colorSpace=Tt,Fe.minFilter=Gt,Fe.generateMipmaps=!1,Fe};let f=u(s.background),p=u(s.foreground);const g=Array.from({length:4},()=>new B(.5,.2,-100)),x={uTexture:{value:f},uTime:{value:0},uAspect:{value:i/r},uHorizon:{value:s.horizon},uRipples:{value:g}},m=new Kt({vertexShader:mp,fragmentShader:gp,uniforms:x,depthTest:!1,depthWrite:!1}),h=new Wt(d,m);h.scale.setScalar(1.017),c.add(h);const w=new ta({map:p,transparent:!0,depthTest:!1,depthWrite:!1}),b=new Wt(d,w);b.position.z=.1,b.scale.setScalar(1.024),b.renderOrder=1,c.add(b);const M=dn(1925),R=t?34:64,A=new Float32Array(R*3),C=new Float32Array(R),D=new Float32Array(R),S=new Float32Array(R);for(let T=0;T<R;T++){const Fe=T>R*.66;A[T*3]=Fe?.28+M()*.65:-.95+M()*2,A[T*3+1]=Fe?-.61+M()*.43:-1+M()*2,A[T*3+2]=.2,C[T]=Fe?4+M()*8:4+M()*5,D[T]=M()*Math.PI*2,S[T]=Fe?1:0}const E=new un;E.setAttribute("position",new bt(A,3)),E.setAttribute("aSize",new bt(C,1)),E.setAttribute("aPhase",new bt(D,1)),E.setAttribute("aKind",new bt(S,1));const P={uTime:{value:0},uPixelRatio:{value:o.getPixelRatio()},uMotion:{value:e.matches?0:1}},O=new Kt({vertexShader:_p,fragmentShader:vp,uniforms:P,transparent:!0,depthTest:!1,depthWrite:!1}),G=new xc(E,O);G.renderOrder=2,G.frustumCulled=!1,c.add(G);let Y=0,V=!1,H=!1,$=0,I=0,J=0,ee=0,oe=0,xe=0;const re=performance.now(),Te=t?50:1e3/30,Ce=T=>{if(V||H)return;const Fe=(T-re)/1e3;if(T-$>=Te-.5||e.matches){$=T,x.uTime.value=e.matches?0:Fe,P.uTime.value=Fe;const Pe=e.matches?0:1;h.position.x+=(J*.0018*Pe-h.position.x)*.04,b.position.x+=(J*.005*Pe-b.position.x)*.035,b.position.y+=((ee*.0025+oe*.008)*Pe-b.position.y)*.03,o.render(c,l)}!e.matches&&!document.hidden&&(Y=window.requestAnimationFrame(Ce))},X=()=>{window.cancelAnimationFrame(Y),P.uMotion.value=e.matches?0:1,Ce(performance.now())},Z=T=>{J=T.clientX/i-.5,ee=T.clientY/r-.5},he=T=>{e.matches||T.clientY<r*.56||T.target instanceof Element&&T.target.closest('a, button, input, textarea, select, dialog, [role="button"]')||document.querySelector("dialog[open]")||(g[I].set(T.clientX/i,1-T.clientY/r,(performance.now()-re)/1e3),I=(I+1)%g.length)},Ue=()=>{oe=Math.min(1,window.scrollY/Math.max(1,document.documentElement.scrollHeight-r))},Se=()=>{window.clearTimeout(xe),xe=window.setTimeout(()=>{if(V)return;const T=n.clientWidth||window.innerWidth,Fe=n.clientHeight||window.innerHeight;if(Math.abs(T-i)<3&&Math.abs(Fe-r)<80)return;i=T,r=Fe,s=ts(i,r),a.width=s.poster.width,a.height=s.poster.height,ii(a).drawImage(s.poster,0,0);const Pe=f,Re=p;f=u(s.background),p=u(s.foreground),x.uTexture.value=f,w.map=p,w.needsUpdate=!0,Pe.dispose(),Re.dispose(),x.uAspect.value=i/r,x.uHorizon.value=s.horizon,o.setSize(i,r,!1),o.setViewport(0,0,i,r),o.setScissorTest(!1),$=0,X()},150)},Ge=T=>{T.preventDefault(),H=!0,window.cancelAnimationFrame(Y),o.domElement.style.opacity="0"},dt=()=>{H=!1,o.domElement.style.opacity="1",X()};return window.addEventListener("pointermove",Z,{passive:!0}),window.addEventListener("pointerdown",he,{passive:!0}),window.addEventListener("scroll",Ue,{passive:!0}),window.addEventListener("resize",Se,{passive:!0}),document.addEventListener("visibilitychange",X),e.addEventListener("change",X),o.domElement.addEventListener("webglcontextlost",Ge),o.domElement.addEventListener("webglcontextrestored",dt),Ce(performance.now()),()=>{V=!0,window.cancelAnimationFrame(Y),window.clearTimeout(xe),window.removeEventListener("pointermove",Z),window.removeEventListener("pointerdown",he),window.removeEventListener("scroll",Ue),window.removeEventListener("resize",Se),document.removeEventListener("visibilitychange",X),e.removeEventListener("change",X),o.domElement.removeEventListener("webglcontextlost",Ge),o.domElement.removeEventListener("webglcontextrestored",dt),f.dispose(),p.dispose(),d.dispose(),m.dispose(),w.dispose(),E.dispose(),O.dispose(),o.dispose(),o.domElement.remove(),a.remove()}}function oo(n){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d");if(!t)return e;const i=t.createRadialGradient(32,32,0,32,32,32);return i.addColorStop(0,`rgba(${n},.85)`),i.addColorStop(.08,`rgba(${n},.45)`),i.addColorStop(.28,`rgba(${n},.13)`),i.addColorStop(1,`rgba(${n},0)`),t.fillStyle=i,t.fillRect(0,0,64,64),e}function ko(n,e){const t=document.createElement("canvas"),i=t.getContext("2d");if(!i)return()=>{};t.setAttribute("aria-hidden","true"),t.dataset.particleMode=e,Object.assign(t.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block",pointerEvents:"none"}),n.append(t);const r=oo("189,211,255"),s=oo("255,215,155"),a=window.matchMedia("(prefers-reduced-motion: reduce)"),o=navigator.deviceMemory,c=navigator.hardwareConcurrency<=4||o!==void 0&&o<=4;let l=1,d=1,u=1,f=!1,p=[],g=[],x,m=7,h=0,w=0,b=0,M=0,R=0,A=!0,C=!1,D=e==="galaxy"?121819:101912;const S=()=>(D=D*1664525+1013904223>>>0,D/4294967296),E=(H,$)=>{i.setTransform(u,0,0,u,0,0),i.clearRect(0,0,l,d),i.globalCompositeOperation="screen";for(const I of p){const J=H*I.drift,ee=((I.horizontal*l+J)%(l+8)+l+8)%(l+8)-4,oe=I.vertical*d+Math.sin(H*.035+I.phase)*2,xe=.61+Math.sin(H/I.period+I.phase)*.27+Math.sin(H/(I.period*.43)+I.phase*2)*.12,re=I.opacity*xe,Te=I.radius*(I.sparkle?24:I.tier===2?17:12);if(i.globalAlpha=re*(I.sparkle?.9:I.tier===2?.65:.5),i.drawImage(I.warm?s:r,ee-Te/2,oe-Te/2,Te,Te),i.globalAlpha=re,i.fillStyle=I.warm?"#fff1d9":"#e2eaff",i.beginPath(),i.arc(ee,oe,I.radius,0,Math.PI*2),i.fill(),I.sparkle&&xe>.67){const Ce=I.radius*(2.4+xe*1.6);i.globalAlpha=re*.44,i.strokeStyle="#dfebff",i.lineWidth=.55,i.beginPath(),i.moveTo(ee-Ce,oe),i.lineTo(ee+Ce,oe),i.moveTo(ee,oe-Ce*1.2),i.lineTo(ee,oe+Ce*1.2),i.stroke()}}for(const I of g){const J=H/I.period,ee=I.horizontal*l+Math.sin(J+I.phase)*(f?11:19),oe=I.vertical*d+Math.sin(J*.63+I.phase)*12,xe=(.32+Math.sin(J*1.4+I.phase)*.2)*.8,re=I.radius*21;i.globalAlpha=xe,i.drawImage(s,ee-re/2,oe-re/2,re,re),i.globalAlpha=xe*1.4,i.fillStyle="#ffe1a2",i.beginPath(),i.arc(ee,oe,I.radius*.55,0,Math.PI*2),i.fill()}if($&&!x&&H>=m&&(x={born:H,duration:1.45+S()*.55,horizontal:l*(.55+S()*.4),vertical:d*(.04+S()*.21),speed:(f?190:320)+S()*100,slope:.28+S()*.22,trail:(f?95:155)+S()*65}),x&&$){const I=(H-x.born)/x.duration;if(I>=1)x=void 0,m=H+(e==="galaxy"?8:11)+S()*(e==="galaxy"?8:10);else{const J=(H-x.born)*x.speed,ee=x.horizontal-J,oe=x.vertical+J*x.slope,xe=ee+x.trail,re=oe-x.trail*x.slope,Te=Math.sin(Math.PI*I)**1.25*.82,Ce=i.createLinearGradient(xe,re,ee,oe);Ce.addColorStop(0,"rgba(174,203,255,0)"),Ce.addColorStop(.72,"rgba(201,220,255,.35)"),Ce.addColorStop(1,"rgba(240,245,255,.95)"),i.globalAlpha=Te,i.strokeStyle=Ce,i.lineWidth=f?1.15:1.55,i.beginPath(),i.moveTo(xe,re),i.lineTo(ee,oe),i.stroke(),i.drawImage(r,ee-13,oe-13,26,26)}}i.globalAlpha=1,i.globalCompositeOperation="source-over"},P=H=>{if(M=0,C||!A||document.hidden||a.matches)return;w||(w=H);const $=H-w;w=H,h+=Math.min($,100)/1e3,H-b>=1e3/30&&(b=H-(H-b)%(1e3/30),E(h,!0)),M=window.requestAnimationFrame(P)},O=()=>{M&&window.cancelAnimationFrame(M),M=0,w=0,b=0,!C&&(a.matches?(x=void 0,E(h,!1)):A&&!document.hidden&&(M=window.requestAnimationFrame(P)))},G=()=>{if(C)return;l=Math.max(1,n.clientWidth),d=Math.max(1,n.clientHeight),f=l<760||c,u=Math.min(window.devicePixelRatio||1,f?1.25:1.5,Math.sqrt(21e5/(l*d))),t.width=Math.round(l*u),t.height=Math.round(d*u),D=e==="galaxy"?121819:101912,p=Array.from({length:e==="galaxy"?f?170:330:f?145:280},($,I)=>{const J=S(),ee=e==="galaxy"?S():S()**1.3*.81,oe=I%31===0,xe=I%17===0?2:I%5===0?1:0,re=e==="atmosphere"&&J>.18&&J<.7&&ee>.25;return{horizontal:J,vertical:ee,radius:oe?1.15+S()*.55:xe===2?.9+S()*.45:xe===1?.55+S()*.4:.35+S()**2*.85,opacity:(.4+S()*.52)*(re?.4:1),phase:S()*Math.PI*2,period:2.5+S()*5,drift:(S()-.5)*(e==="galaxy"?.85:.72),sparkle:oe,warm:I%11===0,tier:xe}}),g=e==="galaxy"?[]:Array.from({length:f?5:9},()=>({horizontal:S(),vertical:.73+S()*.24,phase:S()*Math.PI*2,period:5+S()*6,radius:.8+S()*.7})),x=void 0,m=h+3.5+S()*3.5,E(h,!1),O()},Y=new ResizeObserver(()=>{window.clearTimeout(R),R=window.setTimeout(G,100)}),V=new IntersectionObserver(H=>{A=H.some($=>$.isIntersecting),O()},{rootMargin:"60px"});return Y.observe(n),V.observe(n),document.addEventListener("visibilitychange",O),a.addEventListener("change",O),G(),()=>{C=!0,window.cancelAnimationFrame(M),window.clearTimeout(R),Y.disconnect(),V.disconnect(),document.removeEventListener("visibilitychange",O),a.removeEventListener("change",O),t.remove(),p=[],g=[],r.width=0,s.width=0}}function Sp(n){return ko(n,"atmosphere")}function Mp(n){const e=document.createElement("canvas"),t=e.getContext("2d");if(!t)return()=>{};e.setAttribute("aria-hidden","true"),Object.assign(e.style,{width:"100%",height:"100%",display:"block",pointerEvents:"none"}),n.append(e);const i=()=>{const c=n.getBoundingClientRect(),l=Math.min(1.3,1900/Math.max(c.width,c.height)),d=e.width=Math.max(1,Math.round(c.width*l)),u=e.height=Math.max(1,Math.round(c.height*l)),f=d<u;let p=121819;const g=()=>(p=p*1664525+1013904223>>>0,p/4294967296),x=t.createLinearGradient(0,0,d,u);x.addColorStop(0,"#070d24"),x.addColorStop(.5,"#101c3d"),x.addColorStop(1,"#080d23"),t.fillStyle=x,t.fillRect(0,0,d,u);const m=(M,R,A,C,D,S)=>{t.save(),t.translate(M,R),t.rotate(-.48),t.scale(S,1);const E=t.createRadialGradient(0,0,0,0,0,A);E.addColorStop(0,`rgba(${C},${D})`),E.addColorStop(.45,`rgba(${C},${D*.4})`),E.addColorStop(1,`rgba(${C},0)`),t.fillStyle=E,t.fillRect(-A,-A,A*2,A*2),t.restore()};t.globalCompositeOperation="screen";for(let M=0;M<31;M++){const R=M/30,A=d*(.23+R*.9),C=u*(.78-R*.7);m(A,C,u*(.1+g()*.1),M%3===0?"142,116,175":"93,129,177",.025+g()*.052,2.6)}for(let M=0;M<55;M++){const R=g(),A=(g()-.5)*u*.21;m(d*(.29+R*.76),u*(.74-R*.66)+A,u*(.012+g()*.06),M%4===0?"188,149,182":"153,177,209",.025+g()*.08,1.9)}m(d*.74,u*.31,u*.11,"195,187,218",.12,2.1),t.globalCompositeOperation="source-over";for(let M=0;M<17;M++){const R=M/16;m(d*(.3+R*.72),u*(.725-R*.63),u*(.021+g()*.025),"4,9,25",.14,2.6)}const h=(M,R,A,C,D)=>{t.fillStyle=`rgba(${D},${C})`,t.beginPath(),t.arc(M,R,A,0,Math.PI*2),t.fill()},w=Math.max(.65,d/1700);for(let M=0;M<(f?1300:2300);M++)h(g()*d,g()*u,(.15+g()**4*1.1)*w,.08+g()**2*.57,M%9===0?"239,206,177":"201,218,245");for(let M=0;M<(f?1100:2100);M++){const R=g(),A=(g()+g()+g()-1.5)*u*.13;h(d*(.24+R*.87),u*(.78-R*.72)+A,(.13+g()*.55)*w,.08+g()*.36,"211,218,239")}for(let M=0;M<17;M++){const R=d*(.04+g()*.92),A=u*(.08+g()*.82),C=(M%4===0?1.5:1)*w;m(R,A,C*10,"185,206,249",.25,1),h(R,A,C,.8,"236,238,252"),M%4===0&&(t.strokeStyle="#d9e6ff40",t.lineWidth=.55*w,t.beginPath(),t.moveTo(R-C*4,A),t.lineTo(R+C*4,A),t.moveTo(R,A-C*5),t.lineTo(R,A+C*5),t.stroke())}const b=t.createRadialGradient(d*.65,u*.4,u*.18,d*.55,u*.48,Math.max(d,u)*.8);b.addColorStop(0,"#05081700"),b.addColorStop(1,"#050817b3"),t.fillStyle=b,t.fillRect(0,0,d,u)};let r=0;const s=()=>{window.clearTimeout(r),r=window.setTimeout(i,120)},a=new ResizeObserver(s);a.observe(n),i();const o=ko(n,"galaxy");return()=>{o(),a.disconnect(),window.clearTimeout(r),e.remove()}}const lo=document.querySelector("#app");if(lo){lo.innerHTML=jo();const n=Jo(),e=Ko(),t=document.querySelector("#scene"),i=t?xp(t):()=>{},r=document.querySelector("#star-sky"),s=r?Mp(r):()=>{},a=document.querySelector("#atmosphere"),o=a?Sp(a):()=>{};window.addEventListener("pagehide",c=>{c.persisted||(n(),i(),s(),o(),e())},{once:!0})}
