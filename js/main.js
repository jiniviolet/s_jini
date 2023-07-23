const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function (){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
    if(window.scrollY > 500) {
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
    }
     else {
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
    }
}, 300));

//_.throttle(사용할함수, 시간)
//gsap.to(요소, 지속시간, 옵션);


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index){
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .8,
        opacity: 1
    });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});

new Swiper('.promotion .swiper-container', {
    slidesPerView: 3, //한번에 보여줄 슬라이드 개수
    spaceBetwnne: 10, //슬라이드 사이 여백
    centeredSlides: true, //1번 슬라이드가 가운데 보이기
    loop: true,
        autoplay: {
        delay: 4500
    },
    pagination: {
        el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
        clickable: true //사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next',
        }
});
new Swiper('.awards .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBetwnne: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awrds .swiper-next'
    }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
    isHidePromotion = !isHidePromotion // !뒤의값은 반대가 되게 만들어 주라는 뜻
    // 요소를 숨겨야 하면,
    if (isHidePromotion) {
      promotionEl.classList.add('hide')
    // 요소가 보여야 하면,
    } else {
      promotionEl.classList.remove('hide')
    }
  })
// 위의 뜻
/* promotion이란 클래스를 가진 요소를 찾아서 promotionEl라는 변수에 할당하고 toggle-promotion 이라는 변수를 가진 요소를 찾아서 프로모션 토글버튼이라는 변수에 할당함
 isHidepromotion이 지금 false인데 이름에서 유추할수 있듯이 프로모션 영역이 숨겨졌니? 라는 이름을 가진 변수가 지금 false니까 보이고 있다라는뜻
 그러면 프로모션 토글 버튼을 선택을 하면 어떤 함수가 실행이 되고 그함수에서 isHidepromotion 값을 체크를 해서 그것의 반대값을 다시 할당하는 것.
 그러면 처음에는 false 였으니까 그것의 반대값인 true가 isHidepromotion이라는 변수에 다시 재할당이 되고 재할당된 값은 true니까 if 조건문에 첫번째구문이 실행이됨
 화면에 안보이게 되면 isHidepromotion이 true 여서 다시 토글버튼을 클릭하면 ishidepromotion의 변수의 값은 true이고 true의 반대값이 다시 할당되니까 false고 false가
 조건문으로 들어가니까 else부분이 실행이됨 
*/

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 '문자 데이터'를,
    // `parseFloat()`을 통해 소수점을 가지는 '숫자 데이터'로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }
  // 부유하는(떠 다니는) 요소를 만드는 함수
  function floatingObject(selector, delay, size) {
    gsap.to(
      selector, // 선택자
      random(1.5, 2.5), // 애니메이션 동작 시간
      {
        delay: random(0, delay), // 얼마나 늦게 애니메이션을 시작할 것인지 지연 시간을 설정.
        y: size, // `transform: translateY(수치);`와 같음. 수직으로 얼마나 움직일지 설정.
        repeat: -1, // 몇 번 반복하는지를 설정, `-1`은 무한 반복.
        yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생.
        ease: Power1.easeInOut // Easing 함수 적용.
      }
    )
  }
  floatingObject('.floating1', 1, 15)
  floatingObject('.floating2', .5, 15)
  floatingObject('.floating3', 1.5, 20)
  

//스크롤 매직
const spyEls = document.querySelectorAll('section.scroll-spy')
// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
})

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2023