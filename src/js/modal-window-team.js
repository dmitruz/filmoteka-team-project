// import { teamData } from "../js/team-data";
// console.log(teamData);

// const teamListNode = document.querySelector(".team-list");

// function showTeamList(teamData) {
//     const string = teamData.reduce((teamList, {avatar, name, position, github, githubIcon, linkedin, linkedinIcon, instagram, instagramIcon}) => {
//         const teamMarkup = `<li class="team-list__item">
//           <img
//             src="${avatar}"
//             alt="${name}"
//             width="160"
//             class="team-photo"
//           />
//           <div class="team-content">
//             <h2 class="team-list__title">${name}</h2>
//             <p class="team-list__text">${position}</p>
//             <ul class="sociale-list">
//               <li class="sociale-list__item">
//                 <a class="sociale-list__link" href="${github}" target="blank">
//                   <svg class="sociale-list__icon">
//                     <use href="${githubIcon}"></use>
//                   </svg>
//                 </a>
//               </li>
//               <li class="sociale-list__item">
//                 <a class="sociale-list__link" href="${linkedin}" target="blank">
//                   <svg class="sociale-list__icon">
//                     <use href="${linkedinIcon}"></use>
//                   </svg>
//                 </a>
//               </li>
//               <li class="sociale-list__item">
//                 <a class="sociale-list__link" href="${instagram}" target="blank">
//                   <svg class="sociale-list__icon">
//                     <use href="${instagramIcon}"></use>
//                   </svg>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </li>`;

//         return teamList + teamMarkup;

//     }, '');

//     // console.log(string);

//     teamListNode.insertAdjacentHTML("beforeend", string);
        
// };

// showTeamList(teamData);

const openModalBtn = document.querySelector('[data-modal-open]');
const closeModalBtn = document.querySelector('[data-modal-close]');
const teamModal = document.querySelector('[data-modal]');
const bodyNode = document.querySelector('body');

openModalBtn.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);

function toggleModal(event) {
  event.preventDefault();
  teamModal.classList.toggle('is-hidden');
  
  if (event.target === openModalBtn) {
    bodyNode.style.overflow = 'hidden';
  }
  else {
    bodyNode.style.removeProperty('overflow');
  }
}


