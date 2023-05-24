const teamsMember = [
  {
    id: 1,
    img: './imgs/speakers/speaker1.jpg',
    name: 'Tareq Hassan',
    title: 'Founder - head of AYSDN',
    desc: 'Mr Tareq is the visionary behind the organization, responsible for its establishment and initial direction',
    alt: 'Tareq Hassan Image',
  },
  {
    id: 2,
    img: './imgs/speakers/speaker3.JPG',
    name: 'Musheer Abdo',
    title: 'Operation Director',
    desc: `Musheer Abdo leads the organization's operations, overseeing
                                the planning,
                                execution, and management of various projects
                                and initiatives.`,
    alt: 'Musheer Abdo Image',
  },
  {
    id: 3,
    img: './imgs/speakers/speaker2.jpg',
    name: 'Ghada Omar',
    title: 'Finance Director',
    desc: `As the Finance Director, Ghada Omar oversees financial
                                management,
                                budgeting, and accounting operations within the
                                organization. Ghada ensures financial stability.`,
    alt: 'Ghada Omar',
  },
  {
    id: 4,
    img: 'https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_358,h_394/https://aysdn.org/wp-content/uploads/2023/03/h5-team2-aysdn12.jpg',
    name: 'Naseem Al-Zeinati',
    title: 'Web Developer Office',
    desc: `Naseem Al-Zeinati is responsible for managing and maintaining
                                the
                                organization's web development activities.`,
    alt: 'Naseem Al-Zeinati Image',
  },
  {
    id: 5,
    img: './imgs/speakers/speaker4.jpeg',
    name: 'Reem Ali',
    title: 'Office Management',
    desc: `Reem Ali takes charge of office management, ensuring smooth
                                operations and
                                efficient functioning of the organization's
                                administrative processes.`,
    alt: 'Reem Ali Image',
  },
  {
    id: 6,
    img: 'https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_358,h_394/https://aysdn.org/wp-content/uploads/2023/02/h6-team-02-1-aysdn.jpg',
    name: 'Ala Mustafa',
    title: 'Program Director',
    desc: `As the Program Director, Ala Mustafa oversees and manages the
                                overall
                                planning, implementation, and evaluation of
                                programs within the organization.`,
    alt: 'Ala Mustafa Image',
  },
];

// mobile menu
const hamburger = document.querySelector('.navbar-toggler-icon');
const close = document.querySelector('.closebtn');
const navbar = document.querySelector('#navbarSupportedContent');
const body = document.querySelector('body');
const mobileLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  document.querySelector('.cc').style.display = 'none';
  navbar.classList.add('overlay');
  navbar.classList.remove('d-none');
  navbar.classList.add('w-100');
  body.classList.toggle('active');
});

close.addEventListener('click', () => {
  document.querySelector('.cc').style.display = 'block';
  navbar.classList.remove('overlay');
  navbar.classList.add('d-none');
  navbar.classList.remove('w-100');
  body.classList.toggle('active');
});

// links functionality
mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.cc').style.display = 'block';
    navbar.classList.remove('overlay');
    navbar.classList.add('d-none');
    navbar.classList.remove('w-100');
    body.classList.toggle('active');
  });
});

// generate team memebrs
const membersContainer = document.getElementById('membersContainer');

function generateTeam(num) {
  for (let i = 0; i < num; i += 1) {
    const member = teamsMember[i];
    membersContainer.innerHTML += `
          <div class="member d-flex col-md-6" id="member${member.id}">
                        <div class="d-flex flex-column me-4">
                            <img src="./imgs/website/istockphoto-806894546-612x612.jpg" alt="background"
                                class="backgtound-img">
                            <img src="${member.img}" alt="${member.alt} image" class="memberImg">
                        </div>
                        <div class="content ms-2">
                            <h2 class="name"> ${member.name}</h2>
                            <p class="title text-main py-1 small">${member.title}</p>
                            <div class="small-line my-1"></div>
                            <p class="desc py-1">${member.desc}
                            </p>
                        </div>
                    </div>
        `;
  }

  const btn = document.createElement('button');
  const icon = document.createElement('i');
  btn.classList.add('btn', 'btn-outline');
  icon.classList.add('fa-solid', 'fa-angle-down', 'iconArrow');

  if (num < teamsMember.length) {
    btn.textContent = 'MORE';
    btn.classList.remove('mb-5');
  } else {
    btn.textContent = 'LESS';
    icon.style.rotate = '180deg';
    btn.classList.add('mb-5');
  }

  btn.appendChild(icon);
  membersContainer.appendChild(btn);
}
// for team memebers
if (window.screen.width >= 768) {
  document.addEventListener('DOMContentLoaded', generateTeam(teamsMember.length));
  const more = document.querySelector('#membersContainer button');
  more.classList.add('d-none');
} else {
  document.addEventListener('DOMContentLoaded', generateTeam(2));
  const more = document.querySelector('#membersContainer button');
  more.classList.remove('d-none');
}

//  function to add more team member on click
let more = document.querySelector('#membersContainer button');
const generateMem = () => {
  const membersCont = document.querySelector('#membersContainer');
  membersCont.innerHTML = '';
  if (more.textContent === 'MORE') {
    generateTeam(teamsMember.length);
    more = document.querySelector('#membersContainer button');
    more.addEventListener('click', generateMem);
  } else {
    generateTeam(2);
    more.textContent = 'MORE';
    more = document.querySelector('#membersContainer button');
    more.addEventListener('click', generateMem);
  }
};

more.addEventListener('click', generateMem);

const members = document.querySelector('#membersContainer');
let width = false;
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768 && !width) {
    width = true;
    members.innerHTML = '';
    generateTeam(teamsMember.length);
    const more = document.querySelector('#membersContainer button');
    more.addEventListener('click', generateMem);
    more.classList.add('d-none');
  } else if (window.innerWidth < 768 && width) {
    width = false;
    members.innerHTML = '';
    generateTeam(2);
    const more = document.querySelector('#membersContainer button');
    more.addEventListener('click', generateMem);
    more.classList.remove('d-none');
  }
  // delete the active mobile nav-bar
  if (window.screen.width >= 768) {
    document.querySelector('.cc').style.display = 'block';
    navbar.classList.remove('overlay');
    navbar.classList.add('d-none');
    navbar.classList.remove('w-100');
  }
});