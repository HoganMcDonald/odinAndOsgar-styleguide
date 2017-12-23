function calcRange(end, start, percent) {
  return (percent * 0.01) * (start - end) + end;
}

//height of the viewport
const windowH = document.scrollingElement.scrollTopMax;

// elements for scroll effects
const logo = $('.logo');
const sidePanel = $('.sidePanel');
const sectionContainer = $('.section-container');

function scrollSet() {
  const bScroll = document.scrollingElement.scrollTop;

  let scrollPercent = ((windowH - bScroll) / windowH) * 100;

  // logo
  const logoH = calcRange(15, 50, scrollPercent);
  const logoX = calcRange(15, 50, scrollPercent);
  const logoY = calcRange(10, 50, scrollPercent);
  logo.css('height', `${logoH}vh`)
  logo.css('top', `${logoY}vh`)
  logo.css('left', `${logoX}vw`)

  // side-panel
  const sidePanelW = calcRange(30, 100, scrollPercent);
  sidePanel.css('width', `${sidePanelW}vw`)

  // section-container
  const sectionContainerT = calcRange(60, 150, scrollPercent);
  const sectionContainerO = calcRange(1, -1, scrollPercent).toFixed(2);
  sectionContainer.css('top', `${sectionContainerT}vh`)
  sectionContainer.css('opacity', `${sectionContainerO}`)
}

scrollSet();

// scroll effects
$(window).on('scroll', ()=> {
  scrollSet();
});

// gradient changes
$('.section').click( function() {
  const top = $(this).index() * 100
  $('.sidePanel').css('top', `-${top}vh`);
});
