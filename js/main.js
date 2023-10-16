 /* 📍 menu menu */
 //한줄주석 : 컨트롤 + 슬래시

 console.log("방가방가")
 /* alert("반갑습니다.") */

 //📍 menu 
 $('.nav>ul>li').mouseover(function () {
   console.log($(this))
   $(this).find('.submenu').stop().slideDown();
 });

 $('.nav>ul>li').mouseout(function () {
   $(this).find('.submenu').stop().slideUp();
 });



 // 📍 banner
 /* 변수 : 변하는 값
 let 변수 이름 = 값; */

 let 주머니 = 100;
 /* 여기서 = 은 주머니에 값을 넣으라는 뜻, 같다는 의미X, 대입해라 */

 console.log(주머니 + 1) /* = 100+1 */

 let currentIndex = 0;

 /* setInterval(function () {명령}, 시간(1초 or 1000)); */
 /* setInterval(할 일,시간); : 1초마다 할 일이 실행된다 */

 /* if(조건문){
   조건이 만족하면 할 일
       }else{
         조건이 만족하지 않으면 할 일
       } */

 setInterval(function () {
   if (currentIndex < 2) {
     //1씩 더해라
     currentIndex++;
     // 조건이 만족하면 할 일
   } else {
     // 다시 0를 입력해라
     currentIndex = 0;
   }
   //console.log(currentIndex)
   let slidePosition = currentIndex * (-378) + "px"
   console.log(slidePosition)


   //   $('.slidelist').animate({실행문},시간)
   $('.slidelist').animate({
     top: slidePosition
   }, 400)
 }, 3000);



 // 📍 TAB 메뉴

 /* .find() : css에서 띄어쓰기(하위요소)와 동일, 자손
    .hide() : display:none;과 동일
    .show() : display:block;과 동일
    .next() : 형제 중에서 바로 밑 동생 내가 셋째면 넷째를 부름
    .parent() : 바로 위 상위 요소, 부모요소를 호출
    .siblings() : 나를 제외한 나머지 형제들 */

 let tabMenu = $('.notice');

 tabMenu.find('ul>li>ul').hide();
 tabMenu.find('ul>li.active>ul').show();

 tabMenu.find('ul>li>a').click(function (e) {
   e.preventDefault(); //#때문에 튕기는 현상 막기
   /* $(this).parent('li').addClass('active');
      $(this).parent('li').siblings('li').removeClass('active');
      $(this).parent('li').siblings('li').find('ul').hide(); */
   $(this).parent('li').addClass('active').siblings('li').removeClass('active').find('ul').hide();


   $(this).next().show();
 });


 /* 📍 팝업창 */
 // $('.ad').click(어떤일);
 // $('.ad').click(function(){실행문});

 $('.ad').click(function () {
   // $('.layer-bg').show(); 나타남
   // $('.layer-bg').slideDown(); 위에서 내려옴
   $('.layer-bg').fadeIn();
 });

 $('.layer .close').click(function () {
   //  $('.layer-bg').slideUp();
   //  $('.layer-bg').hide();
   //  $('.layer-bg').fadeOut(1000);
   $('.layer-bg').fadeOut();
 });