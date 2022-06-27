/* ----------------------
    ==== Functions ====
   --------------------- */

   const placeCheckIcon = () => {
    // --- Changing the number by checked icon
    const completedStep = document.querySelectorAll('.stepper__step--completed');
    
    completedStep.forEach(coStep => {
       coStep.children[0].innerHTML = `<svg width="16" height="16" viewBox="0 0 46 46">
       <path d="M25.3334 32.512L19.8456 37.9998C19.455 38.3903 18.8219 38.3903 18.4314 37.9998L3.58211 23.1506C3.19158 22.76 3.19158 22.1269 3.58211 21.7364L8.36285 16.9556C8.75338 16.5651 9.38654 16.5651 9.77706 16.9556L18.5275 25.7061C18.918 26.0966 19.5512 26.0966 19.9417 25.7061L36.3157 9.33211C36.7062 8.94158 37.3394 8.94158 37.7299 9.33211L42.4145 14.0167C42.805 14.4072 42.805 15.0404 42.4145 15.4309L25.3334 32.512Z"/>
       </svg>
       `;
    });
 
 }
 
 const resetStepValue = () => {
   if (currentStep < 0) currentStep = 0;
   if (currentStep > 3) currentStep = 3;
 }  
   
 
 const nextStep = () => {
   if(currentStep >= 3) resetStepValue(); 
   else {
 
     steps[currentStep].classList.replace(
      'stepper__step--active',
       'stepper__step--completed'
     );
     
     currentStep++;
 
     if (currentStep == 3) {
       steps[3].classList.add('stepper__step--completed');
     } else {
       steps[currentStep].classList.add('stepper__step--active');
     }
 
     placeCheckIcon();
 
   }
 }
 
 const lastStep = () => {
   if(currentStep <= 0) resetStepValue(); 
   else {
 
     if(currentStep == 3) {
       steps[currentStep].classList.remove('stepper__step--completed');
       steps[currentStep].children[0].textContent = `${currentStep + 1}`
     } else {
       steps[currentStep].classList.remove('stepper__step--active');
     }
 
     currentStep--;
     
     steps[currentStep].classList.replace(
      'stepper__step--completed',
      'stepper__step--active'
     );
     
     steps[currentStep].children[0].textContent = `${currentStep + 1}`
 
   }
 }
 
 /* ----------------------
     ==== Constants ====
    --------------------- */
 const nextBtn = document.getElementById('nextBtn');
 const lastBtn = document.getElementById('lastBtn');
 
 const steps = document.querySelectorAll('.stepper__step');
 
 /* ----------------------
     ==== variables ====
    --------------------- */
 let currentStep = 0;
 /* ----------------------
     ==== Code execution ====
    ---------------------   */
 nextBtn.addEventListener('click', nextStep);
 lastBtn.addEventListener('click', lastStep);
 