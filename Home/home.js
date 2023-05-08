const cardData = [
  {
    id: 1,
    dataNo: '03',
    name: 'Trading Automation',
    details: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    img: "./Assets/traddingAutomation.svg"
  },
  {
    id: 2,
    dataNo: '04',
    name: 'Task Automation',
    details: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    img: "./Assets/taskAutomation.svg"
  },
  {
    id: 3,
    dataNo: '04',
    name: 'SaaS Development',
    details: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    img: "./Assets/saasDevlopmentIcon.svg"
  },
]

const navbarToggle = document.getElementById('navbar-toggle');
const mobileMenu = document.getElementById('mobile-menu');
navbarToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

const cardSection = document.querySelector('#cardSection');

const cards = cardData.map((cardData) => {
  return `<div class="[&>*:nth-child(2)]:hover:bg-green-900 [&>div>div]:hover:bg-green-900 w-[360px] h-[314px] relative bg-[#d9d9d930]">
    <div class="absolute top-0 right-0 w-[112px] h-[100px] rounded-bl-[36px] bg-white flex items-center justify-center z-10 ">
        <div class=" flex items-center justify-center rounded-full w-[64px] h-[64px] bg-[#FFFFFF]">
        <img src=${cardData.img} alt="" />
        </div>
    </div>
    <div class="absolute top-0 right-0  w-full h-full"
        style="clip-path: inset(0rem 0% round 1rem 1rem 1rem 1rem);">
        <div class="mt-[48px] mx-[28px]">
        <p class="text-[#B3B7D4] font-semibold text-[20px]  tracking-tight mb-[8px]">${cardData.dataNo}</p>
        <p class="font-semibold text-[24px] text-[#000316] tracking-tight w-[129px] mb-[16px]">${cardData.name}</p>
        <p class="font-normal text-[14px] text-[#64748B] mb-[20px]">${cardData.details}</p>
        <div class="w-[150px] h-[42px] border rounded-[50px] flex flex-row justify-start items-center bg-[#FFE3D1]">
        <button class="font-semibold text-[14px] leading-5 p-[11px] ml-[9px] text-[#FE7317]">Learn more</button>
        <img src="./Assets/arrowRight.svg" alt="" />
        </div>
        </div>
        <div class="absolute top-0 right-[112px] rounded-tr-full w-[50px] h-[50px] "
            style="box-shadow: 15px -15px 0 15px #FFFFFF">
        </div>
        <div class="absolute top-[100px] right-0 rounded-tr-full w-[50px] h-[50px]"
            style="box-shadow: 15px -15px 0 15px #FFFFFF">
        </div>
    </div>
  </div>`;
});
cardSection.innerHTML = cards.join('');