//=== Functions ===//
const toggleBtnVisibility = (isHorizontal) => {
    // toggle button visivility according to TAB orientation
    if(isHorizontal) {
      (tabs_h.scrollLeft > 0) 
        ? backBtn_h.classList.add('tab__btn--visible')
        : backBtn_h.classList.remove('tab__btn--visible');
  
      (tabs_h.scrollLeft >= tabs_h.scrollWidth - tabs_h.offsetWidth) 
        ? nextBtn_h.classList.remove('tab__btn--visible')
        : nextBtn_h.classList.add('tab__btn--visible');
    } else {
      (tabs_v.scrollTop > 0) 
        ? backBtn_v.classList.add('tab__btn--visible')
        : backBtn_v.classList.remove('tab__btn--visible');
  
      (tabs_v.scrollTop >= tabs_v.scrollHeight - tabs_v.offsetHeight) 
        ? nextBtn_v.classList.remove('tab__btn--visible')
        : nextBtn_v.classList.add('tab__btn--visible');
    }
  }
  
  const horizontalTabFunc = () => {
    // Functionality for the horizontal tab
    toggleBtnVisibility(true);
  
    nextBtn_h.addEventListener('click', () => {
      tabs_h.scrollLeft += tabs_h.scrollWidth;
    });
  
    backBtn_h.addEventListener('click', () => {
      tabs_h.scrollLeft -= tabs_h.scrollWidth;
    });
  
    tabs_h.addEventListener('scroll', () => {
      toggleBtnVisibility(true);
    });
  }
  
  //=== Variables ===//
  const tabs_h = document.querySelector('.tab--h .tab__tabs');
  const nextBtn_h = document.querySelector('.tab--h .tab__nextBtn');
  const backBtn_h = document.querySelector('.tab--h .tab__backBtn');
  
  //=== Code execution ===//
  if (tabs_h) horizontalTabFunc();
  else console.log('There is no tab element');