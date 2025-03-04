document.getElementById('startAnim').addEventListener('click', async function() {
    const lines = document.querySelectorAll("[id='line']");
    document.getElementById('startAnim').removeAttribute('id');
  
    for (let i = 0; i < lines.length; i++) {
      lines[i].classList.add('lineChanging');
    }
  
    setTimeout(function() {
      for (let i = 0; i < lines.length; i++) {
        lines[i].classList.remove('lineChanging');
        lines[i].classList.add('lineChanged');
      }
  
      const content = document.querySelectorAll("[id='content']");
      for (let i = 0; i < content.length; i++) {
        content[i].classList.add('contentChanged');
      }
  
      document.querySelector('.lines-wrap').style.height = 'auto';
      document.querySelector('.lines-wrap').style.background = 'linear-gradient(90deg, #70625f 50%, #333333 50%)';
      document.querySelector('.wrapper').style.display = 'flex';
  
      
    }, 2000);

    await animateBlocks(); // Call the animateBlocks function
});

async function animateBlocks() {
    await new Promise(resolve => {
      setTimeout(() => {
        const block1 = document.querySelector(".block__content1");
        block1.classList.add("block__content_animate");
  
        setTimeout(() => {
          let blockAnimate = document.querySelector('.block__content_animate');
          blockAnimate.style.zIndex = '105';
          const blockCover1 = document.querySelector('.cover1');
          blockCover1.style.zIndex = '50';
          const undercontex1 = document.querySelector('.block__undercontent1');
          undercontex1.classList.add('block__undercontent_animate');
          resolve(); // разрешаем промис
        }, 400);
      }, 2030);
    });
    window.addEventListener("scroll", function(){

    if (window.pageYOffset > 200) {
      const block2 = document.querySelector(".block__content2");
        block2.classList.add("block__content_animate");
  
        setTimeout(() => {
          block2.style.zIndex = '103';
          const blockCover2 = document.querySelector('.block__cover2');
          blockCover2.style.zIndex = '105';
          const undercontex2 = document.querySelector('.block__undercontent2');
          undercontex2.classList.add('block__undercontent_animate2');
      
    },400)}
    if (window.pageYOffset > 400) {
        const block3 = document.querySelector(".block__content3");
        block3.classList.add("block__content_animate");
        setTimeout(() => {
        block3.style.zIndex = '103';
        const blockCover3 = document.querySelector('.block__cover3');
        blockCover3.style.zIndex = '105';
        const undercontex3 = document.querySelector('.block__undercontent3');
        undercontex3.classList.add('block__undercontent_animate');
          }, 400);
      }}

,)}