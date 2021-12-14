 
    const refs = {
      openModalBtn: document.querySelector('[data-mobel-open]'),
      closeModalBtn: document.querySelector('[data-mobel-close]'),
      modal: document.querySelector('[data-mobel]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  

    
      
       // const iconCloseBtn = document.querySelector('.close-icon-container'),
       // const loginModal = document.querySelector('.login-page'),
       // const closeBtn = document.querySelector('.close-icon-container'),
       // const loginBtn = document.querySelector('#login'),
       // const logoutBtn = document.querySelector('#logout'),
       // const regForm = document.querySelector('.register-form'),
       // const logForm = document.querySelector('.login-form'),
       // const createLink = document.querySelector('.create-message a'),
        //const loginLink = document.querySelector('.login-message a');
       

  