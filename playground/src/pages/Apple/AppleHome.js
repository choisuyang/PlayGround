(() => {
  const sceneInfo = [
    {
      // 0
      type: "sticky",
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-0"),
      },
    },
    {
      // 1
      type: "normal",
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-1"),
      },
    },
    {
      // 2
      type: "sticky",
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-2"),
      },
    },
    {
      // 3
      type: "sticky",
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-3"),
      },
    },
  ];

  function setLayout() {
    // 각 스크롤 섹션의 높이 세팅
    for (let i = 0; i < sceneInfo.length; i++) {
      sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
      sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
    }
    // console.log("Window Height", sceneInfo);
  }
  setLayout();
})();
// import React, { useRef } from "react";
// import "./AppleHome.css";

// export default function AppleHome() {
// var querySection = useRef(null);
// (() => {
//   const sceneInfo = [
//     {
//       // 0
//       type: "sticky",
//       heightNum: 5,
//       scrollHeight: 0,
//       objs: {
//         container: querySection.current,
//       },
//     },
//     {
//       // 1
//       type: "normal",
//       heightNum: 5,
//       scrollHeight: 0,
//       objs: {
//         container: querySection.current,
//       },
//     },
//     {
//       // 2
//       type: "sticky",
//       heightNum: 5,
//       scrollHeight: 0,
//       objs: {
//         container: querySection.current,
//       },
//     },
//     {
//       // 3
//       type: "sticky",
//       heightNum: 5,
//       scrollHeight: 0,
//       objs: {
//         container: querySection.current,
//       },
//     },
//   ];

//   function setLayout() {
//     // 각 스크롤 섹션의 높이 세팅
//     for (let i = 0; i < sceneInfo.length; i++) {
//       sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
//       sceneInfo[i].objs.container = `${sceneInfo[i].scrollHeight}px`;
//     }
//     // console.log("Window Height", sceneInfo);
//   }
//   setLayout();
// })();
//   console.log("--->", querySection.current);
//   return (
//     <div className="container">
//       <nav className="global-nav">
//         <div className="global-nav-links">
//           <a href="#" className="global-nav-items">
//             Rooms
//           </a>
//           <a href="#" className="global-nav-items">
//             Ideas
//           </a>
//           <a href="#" className="global-nav-items">
//             Stores
//           </a>
//           <a href="#" className="global-nav-items">
//             Contact
//           </a>
//         </div>
//       </nav>
//       <nav className="local-nav">
//         <div className="local-nav-links">
//           <a href="#" className="product-name">
//             AirMug Pro
//           </a>
//           <a href="#">개요</a>
//           <a href="#">제품사양</a>
//           <a href="#">구입하기</a>
//         </div>
//       </nav>
//       <section className="scroll-section" id="scroll-section-0" ref={querySection}>
//         <h1>AirMug pro</h1>
//         <div className="sticky-elem main-message">
//           <p>
//             온전히 빠져들게 하는
//             <br />
//             최고급 세라믹
//           </p>
//         </div>
//         <div className="sticky-elem main-message">
//           <p>
//             주변 맛을 느끼게 해주는
//             <br />
//             주변 맛 허용 모드
//           </p>
//         </div>
//         <div className="sticky-elem main-message">
//           <p>
//             온종일 편안한
//             <br />
//             맞춤형 손잡이
//           </p>
//         </div>
//         <div className="sticky-elem main-message">
//           <p>
//             새롭게 입가를
//             <br />
//             찾아온 매혹
//           </p>
//         </div>
//       </section>
//       <section className="scroll-section" id="scroll-section-1" ref={querySection}>
//         <p className="description">
//           <strong>보통 스크롤 영역</strong>
//           "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized
//           by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble
//           that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will,
//           which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to
//           distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able
//           to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances
//           and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to
//           be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle
//           of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse
//           pains."
//         </p>
//       </section>
//       <section className="scroll-section" id="scroll-section-2" ref={querySection}>
//         <div className="sticky-elem main-message">
//           <p>
//             <small>편안한 촉감</small>
//             입과 하나 되다
//           </p>
//         </div>
//         <div className="sticky-elem desc-message">
//           <p>
//             편안한 목넘김을 완성하는 디테일한 여러 구성 요소를, 우리는 이를 하나하나 새롭게 살피고 재구성하는 과정을
//             거쳐 새로운 수준의 머그, AirMug Pro를 만들었습니다. 입에 뭔가 댔다는 감각은 어느새 사라지고 오롯이 당신과
//             음료만 남게 되죠.
//           </p>
//           <div className="pin"></div>
//         </div>
//         <div className="sticky-elem desc-message">
//           <p>
//             디자인 앤 퀄리티 오브 스웨덴,
//             <br /> 메이드 인 코리아
//           </p>
//           <div className="pin"></div>
//         </div>
//       </section>
//       <section className="scroll-section" id="scroll-section-3" ref={querySection}>
//         <p className="mid-message">
//           <strong>Retina 머그</strong>
//           아이디어를 광활하게 펼칠 <br />
//           아름답고 부드러운 음료 공간
//         </p>
//         <p className="canvas-caption">
//           "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized
//           by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble
//           that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will,
//           which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to
//           distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able
//           to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances
//           and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to
//           be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle
//           of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse
//           pains."
//         </p>
//       </section>
//       <footer className="footer">2020, apple</footer>
//     </div>
//   );
// }
