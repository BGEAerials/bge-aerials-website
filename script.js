// Shared visible mobile header menu (Services / Works / About).
// Keep the approved three-bar icon unchanged while opening/closing the menu.
document.querySelectorAll('.menu-toggle').forEach((button)=>{
  button.addEventListener('click',()=>{
    const menu=document.querySelector('.mobile-drawer');
    if(!menu)return;
    const open=menu.classList.toggle('open');
    button.setAttribute('aria-expanded',String(open));
  });
});

document.querySelectorAll('.mobile-drawer a').forEach((link)=>link.addEventListener('click',()=>{
  const menu=document.querySelector('.mobile-drawer');
  const button=document.querySelector('.menu-toggle');
  menu?.classList.remove('open');
  if(button) button.setAttribute('aria-expanded','false');
}));

// Legacy invisible hotspots are retained for compatibility with approved artwork.
document.addEventListener('DOMContentLoaded', function () {
  const pairs = [
    ['.mobile-about-menu', '.mobile-drawer'],
    ['.mobile-works-menu', '.mobile-drawer'],
    ['.mobile-services-menu', '.mobile-drawer']
  ];
  pairs.forEach(([buttonSelector, drawerSelector]) => {
    const button = document.querySelector(buttonSelector);
    const drawer = document.querySelector(drawerSelector);
    if (!button || !drawer) return;
    button.addEventListener('click', function () {
      const isOpen = drawer.classList.toggle('open');
      button.setAttribute('aria-expanded', String(isOpen));
      const visibleButton = document.querySelector('.menu-toggle');
      if (visibleButton) visibleButton.setAttribute('aria-expanded', String(isOpen));
    });
  });
});
