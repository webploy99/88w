function detail(id){
    location.href = `detail.html?id=${id}`;
}
function url(){
    location.href = ('https://www.hay88.one/?inviteCode=5829700');
  }
$(document).ready(function(){  
  const FunVisible = () => {
    if (window.pageYOffset > 250) {
      $("header").addClass("is-sticky");
    } else {
      $("header").removeClass("is-sticky");
    }
  };
  window.addEventListener("scroll", FunVisible);
    
    const backtotop = `<button class="Btn-backtotop1 backgroundanimation">
          <svg class="Btn-backtotop1arrow h-7 w-7" viewBox="0 0 512 512">
            <path
              d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
            ></path>
          </svg>
          <p class="Btn-backtotop1text">Back to Top</p>
    </button>`;
    $("#backtotop").html(backtotop);
    var btn = $(".Btn-backtotop1");
    $(window).scroll(function () {
      if ($(window).scrollTop() > 250) {
        btn.addClass("show");
      } else {
        btn.removeClass("show");
      }
    });
    btn.on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "600");
    }); 

    const header = `
       <div class="bg-[#004789] hidden md:block">
        <div class="container mx-auto">
          <div class="flex justify-end gap-10 py-3">
            <button onclick="url()"
              type="button"
              class="text-white bg-[#175425] hover:bg-[#226231] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-2xl px-4 py-2 lg:px-5 lg:py-4"
            >
            ĐĂNG NHẬP
            </button>
            <button onclick="url()"
              type="button"
              class="text-white bg-[#b20000] hover:bg-[#812e2e] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-2xl px-4 py-2 lg:px-5 lg:py-4"
            >
              
            ĐĂNG KÝ
            </button>
          </div>
        </div>
      </div>
      <div class="bg-gray-800">
        <div class="container mx-auto">
          <div class="flex justify-between items-center py-3">

            <div class="max-w-[200px] md:max-w-[300px]">
            <a href="index.html">
              <img src="./assets/images/88wanwin logo 300x130.png" alt=""></a>
            </div>

            <ul  class="items-center text-white font-semibold text-[1.7rem] uppercase flex-wrap *:leading-10 hidden md:flex">
            <li class="p-5">
              <a href="index.html">TRANG CHỦ</a>
            </li>
            <li class="p-5">
              <a href="./88wan.html">88WAN</a>
            </li>
            <li class="p-5 group relative">
              <a  href="casino.html"  class="flex items-center" >
                <div class="mr-1">  CASINO </div>
                <div>
                  <svg
                    class="h-8 w-8 text-white inline-block"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </a>
              <div  class="keyframe discription-dropdown hidden z-10 group-hover:block border bg-white divide-y divide-gray-100 shadow absolute w-[30rem] top-20" > <ul class="px-5 text-2xl text-gray-500 font-semibold *:py-4 *:border-b *:border-gray-100"  >
                  <li class="hover:text-gray-900">
                    <a href="" class="transition-all" >
                      <span>Baccarat</span>
                    </a>
                  </li>
                  
                </ul>
              </div>
            </li>
            <li class="p-5">
              <a href="./the thao.html">THỂ THAO</a>
            </li>
            <li class="p-5">
              <a href="./lo de.html">LÔ ĐỀ</a>
            </li>
            <li class="p-5">
              <a href="./khuyen mai.html">KHUYẾN MÃI </a>
            </li>
            <li class="p-5">
              <a href="./giai ma giac mo.html">GIẢI MÃ GIẤC MƠ</a>
            </li>
            
            </ul>

            <div class="flex gap-5 md:hidden">
              <button type="button" onclick="url()" class="text-white bg-[#175425] hover:bg-[#226231] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-2xl px-4 py-2 lg:px-5 lg:py-4">  ĐĂNG NHẬP  </button>
              <button type="button" onclick="url()" class="text-white bg-[#b20000] hover:bg-[#812e2e] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-2xl px-4 py-2 lg:px-5 lg:py-4"> ĐĂNG KÝ </button>
            </div>

            <div class="menu-icon md:hidden">
              <label class="hamburger">
                <svg viewBox="0 0 32 32">
                  <path
                    class="line line-top-bottom"
                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                  ></path>
                  <path class="line" d="M7 16 27 16"></path>
                </svg>
              </label>
            </div>

          </div>
        </div>
      </div>
      <!-- Side-bar mobile menu -->
    <div class="side-menu-mobile fixed top-0 -translate-x-full z-[1000] overflow-y-hidden transition-transform duration-500 ">
      <ul class="w-[60vw] bg-slate-100 h-screen">
        <li class="">
          <a href="index.html" class="flex items-center px-5 py-5 font-semibold text-2xl text-gray-900 rounded-lg hover:bg-gray-200">
            <span class="ml-3">TRANG CHỦ</span>
          </a>
        </li>
        <li class="">
          <a  href="88wan.html" class="flex items-center px-5 py-5 font-semibold text-2xl text-gray-900 rounded-lg hover:bg-gray-200">
            <span class="ml-3">88WAN</span>
          </a>
        </li>
        <li>
          <button type="button" class="flex items-center w-full px-5 py-5 text-2xl font-semibold text-gray-900  rounded-lg group hover:bg-gray-200" >
            <a  href="casino.html"  class="flex-1 ml-3 text-left whitespace-nowrap">CASINO</a>
            <svg
              class="w-11 h-11 icon-dropdown-side-menu-mobile transition-all duration-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <ul  class=" sub-menu-side-menu-mobile  py-2 space-y-2  *:px-14 ">
            <li class="">
              <a href="#" class="flex items-center w-full p-5 text-2xl font-medium text-gray-800  rounded-lg group hover:bg-gray-200 ">BACCARAT</a>
            </li>
          </ul>
        </li>
        <li class="">
          <a
            href="the thao.html"
            class="flex items-center px-5 py-5 font-semibold text-2xl text-gray-900 rounded-lg hover:bg-gray-200"
          >
            <span class="ml-3">THỂ THAO</span>
          </a>
        </li>
        <li class="">
          <a
            href="./lo de.html"
            class="flex items-center px-5 py-5 font-semibold text-2xl text-gray-900 rounded-lg hover:bg-gray-200"
          >
            <span class="ml-3">LÔ ĐỀ</span>
          </a>
        </li>
        <li class="">
          <a
            href="khuyen mai.html"
            class="flex items-center px-5 py-5 font-semibold text-2xl text-gray-900 rounded-lg hover:bg-gray-200"
          >
            <span class="ml-3">KHUYẾN MÃI</span>
          </a>
        </li>
        <li class="">
          <a
            href="giai ma giac mo.html"
            class="flex items-center px-5 py-5 font-semibold text-2xl text-gray-900 rounded-lg hover:bg-gray-200"
          >
            <span class="ml-3">GIẢI MÃ GIẤC MƠ</span>
          </a>
        </li>
      </ul>
    </div>
    <!-- End Side bar mobile -->
    `;
    $("#header").html(header);

    const main_right = ` 
    <div class="py-5 *:mb-9 sticky top-0"> 
    <div class="*:mb-4">
        <h3 class="font-bold text-[1.7rem] ">TIN MỚI</h3>
        <hr class="border-t-[3px] w-[30px] border-gray-400">
    </div>

    <div class="grid grid-cols-2 md:grid-cols-1 gap-5 md:gap-10">
        <div class="*:mb-4">
            <img class="cursor-pointer" src="./assets/images/ty-le-trung-ve-so-cu-the-300x169.jpg" alt="" onclick="detail(39)">
            <span class="text-lg">HƯỚNG DẪN</span>
            <h3  class="text-[1.7rem] font-semibold text-[#135790] cursor-pointer" onclick="detail(39)">Tỷ lệ trúng vé số và phân tích các yếu tố ảnh hưởng </h3>
            <hr class="border-t-[3px] w-[30px] border-gray-400">
        </div>
    
        <div class="*:mb-4">
            <img class="cursor-pointer" src="./assets/images/ghep-bach-thu-de-voi-cac-thu-trong-tuan-300x150.jpg" alt="" onclick="detail(23)">
            <span class="text-lg">LÔ ĐỀ</span>
            <h3 class="text-[1.7rem] font-semibold text-[#135790] cursor-pointer" onclick="detail(23)">Hướng dẫn cách tính 3 càng miền bắc chuẩn nhất cho anh em </h3>
            <hr class="border-t-[3px] w-[30px] border-gray-400">
        </div>
    
        <div class="*:mb-4">
            <img class="cursor-pointer" src="./assets/images/tinh-tong-cac-con-so-trong-giai-dac-biet-300x190.jpg" alt="" onclick="detail(24)">
            <span class="text-lg">LÔ ĐỀ</span>
            <h3 class="text-[1.7rem] font-semibold text-[#135790] cursor-pointer" onclick="detail(24)">Lô theo đặc biệt – Top phương pháp bắt chuẩn không cần chỉnh </h3>
            <hr class="border-t-[3px] w-[30px] border-gray-400">
        </div>
    </div>
    

    <div class="*:mb-4">
        <h3 class="font-bold text-[1.7rem] ">CHUYÊN MỤC</h3>
        <hr class="border-t-[3px] w-[30px] border-gray-400">
    </div>

    <div class="*:mb-3">
        <h3 class="font-bold text-[1.7rem]" >88WAN</h3>
        <hr class="border-t">
        <h3 class="text-[#135790] font-semibold text-[1.8rem] hover:text-gray-800 duration-300"><a href="">Baccarat</a></h3>
        <hr class="border-t">
        <h3 class="text-[#135790] font-semibold text-[1.8rem] hover:text-gray-800 duration-300"><a href="">Casino</a></h3>
        <hr class="border-t">
        <h3 class="text-[#135790] font-semibold text-[1.8rem] hover:text-gray-800 duration-300"><a href="">Giải Mã giấc mơ</a></h3>
        <hr class="border-t">
        <h3 class="text-[#135790] font-semibold text-[1.8rem] hover:text-gray-800 duration-300"><a href="">Hướng Dẫn</a></h3>
        <hr class="border-t">
        <h3 class="text-[#135790] font-semibold text-[1.8rem] hover:text-gray-800 duration-300"><a href="">Khuyến Mãi</a></h3>
        <hr class="border-t">
        <h3 class="text-[#135790] font-semibold text-[1.8rem] hover:text-gray-800 duration-300"><a href="">Lô Đề</a></h3>
        <hr class="border-t">
        <h3 class="text-[#135790] font-semibold text-[1.8rem] hover:text-gray-800 duration-300"><a href="">Thể Thao</a></h3>
   
    </div>

    <div class="*:mb-4">
        <h3 class="font-bold text-[1.7rem] ">THẺ TÌM KIẾM</h3>
        <hr class="border-t-[3px] w-[30px] border-gray-400">
    </div>
    <span class="text-[#135790]">hướng dẫn xem bóng đá Xả kèo là gì</span>

    
</div>
    `;
    $(".main_right").html(main_right);
    const footer = `
<div class="container mx-auto py-5 lg:py-10 *:my-5 *:lg:my-10">
        <p class="text-center text-white w-full">  2024 © Bản quyền thuộc về nhà cái </p>
        <img class="mx-auto" src="./assets/images/_dmca_premi_badge_4.png" alt="">
      </div>
    `;
    $(".footer").html(footer);

    $(".menu-icon").on("click", function () {
    if($(this).hasClass("active")){
        $(this).removeClass("active");
        $(".side-menu-mobile").addClass("-translate-x-full");
    }
    else{
        $(this).addClass("active");
        $(".side-menu-mobile").removeClass("-translate-x-full");
    }
    });
    $(document).on("click", function (event) {
      if (!$(event.target).closest(".side-menu-mobile").length && !$(event.target).closest(".menu-icon").length ) {
        $(".menu-icon").removeClass("active");
        $(".side-menu-mobile").addClass("-translate-x-full");
      }
    });

    $(".icon-dropdown-side-menu-mobile").on("click", function(){
        $(this).toggleClass("rotate-180");
        $(this).closest("li").find('ul').toggleClass('active');
    })

 


    $('#showloading').delay(500).queue(function(next) {
        $(this).addClass('hidden');
        next();
        });
});

