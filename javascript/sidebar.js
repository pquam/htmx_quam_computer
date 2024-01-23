function toggleNav() {
  const sidebar = document.querySelector('.side-navigation');
  if ((window.innerWidth >= 1500) && (sidebar.style.display === 'none' || sidebar.style.display === '')) { 
    sidebar.style.display = 'block'; 
  } else if (sidebar.style.display === 'none' || sidebar.style.display === '') {
      sidebar.style.display = 'block';
  } else {
     sidebar.style.display = 'none';
  }
  
}

function loadContentAndNavigate(target) {
  // Assuming `toggleNav()` is your function to trigger HTMX content loading
  toggleNav();

  // Listen for HTMX to complete the content load
  document.body.addEventListener('htmx:afterSwap', function() {
      // Navigate to the target section
      const section = document.querySelector(target);
      if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
      }
  }, { once: true }); // The 'once' option auto-removes the listener after it runs
}


//if the window width is increased, return the sidebar to normal
window.addEventListener('resize', function() {
  const navLinks = document.querySelectorAll('.side-navigation a');
  const sidebar = document.querySelector('.side-navigation');
  const tab = document.querySelector('.nav-toggle-btn');
  
  if (window.innerWidth >= 1500) { 
    sidebar.style.display = 'none'; 
    tab.style.left = '175px'; 
  } else if (sidebar.style.display === 'block') {
    tab.style.left = '175px'; 
  } else {
    tab.style.left = '-70px';
  }

  if (window.innerWidth <= 1500) { 
      for (const link of navLinks) {
          link.addEventListener('click', () => {
            const sidebar = document.querySelector('.side-navigation');
            const tab = document.querySelector('.nav-toggle-btn');
            sidebar.style.display = 'none';
            tab.style.left = '-70px';
          });
        }
      sidebar.style.display = 'none'; 
      tab.style.left = '-70px'; 
    } else if (sidebar.style.display === 'none') {
      tab.style.left = '-70px'; 
    } else {
      tab.style.left = '350px';
    }
})