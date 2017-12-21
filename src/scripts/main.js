function calcRange(min, max, percent) {
  return (percent * 0.01) * (max - min) + min;
}

$(document).ready(()=> {
  // elements for scroll effects
  const logo = $('.logo');
  const windowH = $('body').height()/2;

  // scroll effects
  $(window).on('scroll', ()=> {
    const bScroll = document.scrollingElement.scrollTop;

    let scrollPercent = ((windowH - bScroll) / windowH) * 100;

    const logoH = calcRange(15, 50, scrollPercent);
    const logoX = calcRange(25, 50, scrollPercent);
    const logoY = calcRange(10, 50, scrollPercent);
    logo.css('height', `${logoH}vh`)
    logo.css('top', `${logoY}vh`)
    logo.css('left', `${logoX}vw`)
  });

});


/*

when bScroll === windowH
  logo.Height() = 20vh

*/
