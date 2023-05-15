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
const succesStoriesData = [
  {
    id: 1,
    img: './Assets/successtories/successStories.svg',
    time: 'April.2021 - Ongoing',
    title: 'All-in-One Multi-Chain DEX',
    details: 'AliumSwap is an all-in-one multi-chain DEX with hybrid liquidity feature, unique staking alternatives, and the latest solutions for Investors'
  },
  {
    id: 2,
    img: './Assets/successtories/successStories.svg',
    time: 'April.2021 - Ongoing',
    title: 'All-in-One Multi-Chain DEX',
    details: 'AliumSwap is an all-in-one multi-chain DEX with hybrid liquidity feature, unique staking alternatives, and the latest solutions for Investors'
  },
  {
    id: 3,
    img: './Assets/successtories/successStories.svg',
    time: 'April.2021 - Ongoing',
    title: 'All-in-One Multi-Chain DEX',
    details: 'AliumSwap is an all-in-one multi-chain DEX with hybrid liquidity feature, unique staking alternatives, and the latest solutions for Investors'
  },
  {
    id: 4,
    img: './Assets/successtories/successStories.svg',
    time: 'April.2021 - Ongoing',
    title: 'All-in-One Multi-Chain DEX',
    details: 'AliumSwap is an all-in-one multi-chain DEX with hybrid liquidity feature, unique staking alternatives, and the latest solutions for Investors'
  },
]

const navbarToggle = document.getElementById('navbar-toggle');
const mobileMenu = document.getElementById('mobile-menu');
navbarToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

const cardSection = document.querySelector('#cardSection');

const cards = cardData.map((cardData) => {
  return `<div
  class="[&>div>div>div]:hover:bg-[#FE7317] [&>div>div>div>button]:hover:text-white [&>*:nth-child(2)]:hover:bg-[#E6E7F1] [&>div>div]:hover:bg-[#E6E7F1] w-full h-[150px] md:h-[314px] relative bg-[#d9d9d930] ">
  <div
      class="absolute top-0 right-0 w-[112px] h-[100px] rounded-bl-[36px] bg-white flex items-center justify-center z-10 ">
      <div class=" flex items-center justify-center rounded-full w-[64px] h-[64px] bg-[#FFFFFF]">
          <img src="Assets/dappsIcon.svg" alt="" />
      </div>
  </div>
  <div class="absolute top-0 right-0  w-full h-auto"
      style="clip-path: inset(0rem 0% round 1rem 1rem 1rem 1rem);">
      <div class="mt-[48px] px-[28px] hover:bg-[url('./Assets/cardBg.svg')] bg-no-repeat bg-left">
          <p class="hidden md:block text-[#B3B7D4] font-semibold text-[20px]  tracking-tight mb-[8px]">01
          </p>
          <p class="font-semibold text-[24px] text-[#000316] tracking-tight w-[129px] mb-[16px]">
              dApps
              Development</p>
          <p class="hidden md:block font-normal text-[14px] text-[#64748B] mb-[20px]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
              consequat duis enim velit mollit.
          </p>
          <div
              class="hidden mb-[30px]w w-[150px] h-[42px] border rounded-[50px] md:flex flex-row justify-start items-center bg-[#FFE3D1]">
              <button class="font-semibold text-[14px] leading-5 p-[11px] ml-[9px] text-[#FE7317]">Learn
                  more</button>
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


const successcardSection = document.querySelector('#success');

const successStoriesCard = succesStoriesData.map((data) => {
  return `
        <div class="w-full">
            <img src=${data.img} alt="">
            <p class="w-[119px] h-[20px] font-medium text-xs leading-5 text-[#000316] mt-[20px] mb-[8px]">${data.time}</p>
            <h1 style="font-family: Switzer-Semibold;"
                class="w-[360px] h-[32px] text-[24px] leading-[32px] tracking-tight text-[#000316] mb-[10px]">${data.title}</h1>
            <p class="md:w-[360px] h-[60px] mb-[27px] font-normal text-sm leading-5 text-[#64748B]">${data.details}</p>
            <button
                class="font-semibold text-sm leading-5 text-[#FE7317] bg-[#FFE3D1] rounded-[50px] flex flex-row gap-[8px] py-[9px] px-[20px]">
                Explore Case Study
                <img src="./Assets/arrowRight.svg" alt="">
            </button>
        </div>
        `;
});
successcardSection.innerHTML = successStoriesCard.join('');