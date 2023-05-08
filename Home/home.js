const cardData = [
  {
    id: 03,
    name: 'Trading Automation',
    details: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
  },
  {
    id: 02,
    name: 'Task Automation',
    details: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
  },
  {
    id: 3,
    name: 'SaaS Development',
    details: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    img: "./Assets/"
  },
]

const navbarToggle = document.getElementById('navbar-toggle');
const mobileMenu = document.getElementById('mobile-menu');
navbarToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

const cardSection = document.querySelector('#cardSection');

const cards = cardData.map((cardData) => {
  return `<div class="[&>*:nth-child(2)]:hover:bg-green-900 [&>div>div]:hover:bg-green-900 w-[360px] h-[314px] relative">
    <div class="absolute top-0 right-0 w-[112px] h-[100px] rounded-bl-[36px] bg-white flex items-center justify-center z-10 ">
        <div class=" flex items-center justify-center rounded-full w-[64px] h-[64px] bg-red-500">
       
        </div>
    </div>
    <div class="absolute top-0 right-0 bg-gray-900 w-full h-full"
        style="clip-path: inset(0rem 0% round 1rem 1rem 1rem 1rem);">
        <div class="absolute top-0 right-[112px] rounded-tr-full w-[50px] h-[50px]"
            style="box-shadow: 15px -15px 0 15px #FFFFFF">
        </div>
        <div class="absolute top-[100px] right-0 rounded-tr-full w-[50px] h-[50px]"
            style="box-shadow: 15px -15px 0 15px #FFFFFF">
        </div>
    </div>
  </div>`;
});
cardSection.innerHTML = cards.join('');