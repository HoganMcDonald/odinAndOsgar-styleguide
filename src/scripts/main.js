function calcRange(end, start, percent) {
  return (percent * 0.01) * (start - end) + end;
}

$(document).ready(()=> {
  // elements for scroll effects
  const logo = $('.logo');
  const sidePanel = $('.sidePanel');
  console.log(document.scrollingElement);

  //height of the viewport
  const windowH = document.scrollingElement.scrollTopMax;

  // scroll effects
  $(window).on('scroll', ()=> {
    const bScroll = document.scrollingElement.scrollTop;

    let scrollPercent = ((windowH - bScroll) / windowH) * 100;
    console.log(scrollPercent);

    const logoH = calcRange(15, 50, scrollPercent);
    const logoX = calcRange(25, 50, scrollPercent);
    const logoY = calcRange(10, 50, scrollPercent);
    logo.css('height', `${logoH}vh`)
    logo.css('top', `${logoY}vh`)
    logo.css('left', `${logoX}vw`)

    const sidePanelW = calcRange(50, 100, scrollPercent);
    sidePanel.css('width', `${sidePanelW}vw`)
  });

});


/*

when bScroll === windowH
  logo.Height() = 20vh

*/
