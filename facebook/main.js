//----------------------------------HEADER-----------------------------//
//----------------------------------HEADER-----------------------------//
//----------------------------------HEADER----------------------------//

var OverlaySearch = document.querySelector('.OverlaySearch');
var headerSearch = document.querySelector('.header__main-search');
var body = document.querySelector('body');
var iconFB = document.querySelector('.header__main-iconfb');
var iconClose = document.querySelector('.icon-close');
var iconSearch = document.querySelector('.icon_search');
var inputHeader = document.querySelector('.input_header');



//---------------------------------------HEADER LEFT-------------------------------//
headerSearch.addEventListener('click', function(){
    setTimeout(function(){
        iconFB.classList.add('hide');
        iconClose.classList.remove('hide');
        OverlaySearch.classList.remove('hide');
        inputHeader.focus();
    }, 200) 
})

document.addEventListener('click', function (event) {
    // Kiểm tra xem sự kiện click có diễn ra trên headerSearch hay không
    var isClickedHeaderSearch = headerSearch.contains(event.target);
    var isClickedOverlaySearch = OverlaySearch.contains(event.target);
    var isClickedIconClose = iconClose.contains(event.target);
    
    // Nếu không phải là click trong headerSearch, ẩn OverlaySearch
    if (!isClickedHeaderSearch && !isClickedOverlaySearch || isClickedIconClose ) {
        iconClose.classList.add('hide');
        iconFB.classList.remove('hide');
        OverlaySearch.classList.add('hide');
    }
});

iconSearch.addEventListener('click', function(){
    inputHeader.classList.add('appear');
    inputHeader.focus();
})
//---------------------------------------HEADER LEFT-------------------------------//



//-------------------------------------HEADER MID---------------------------------//
var headerMidIcon = document.querySelectorAll('.header__mid-icon');

function underlineIcon(){
    headerMidIcon.forEach(i => {
        i.classList.remove('hideIconColor');
        i.style.color = '#816262';
        i.style.height = '50px';
        i.addEventListener('click', function(){
            i.classList.add('hideIconColor');
            i.style.color = '#0866FF';
            i.style.height = '60px';
        })
    });
}

window.onload = function() {
    // Kích hoạt sự kiện onclick cho phần tử mong muốn
    document.getElementById('fist-icon').click();
};

document.getElementById('fist-icon').addEventListener('click', underlineIcon())
//-------------------------------------HEADER MID---------------------------------//



// ----------------------------HEADER RIGHT------------------------------------------//
var overlayMessage = document.querySelector('.overlay__message');
var iconMess = document.querySelector('.iconMess');


var sltoggle = 0;
document.addEventListener('click', function (event) {
    
    var isClickedMessOverlay = overlayMessage.contains(event.target);
    var isClickedIconMess = iconMess.contains(event.target);
    
    if(isClickedIconMess){
        overlayMessage.classList.toggle('hide');
        if(sltoggle === 0){
            iconMess.style.color = '#0866FF';
            sltoggle = 1;
        }
        else {
            iconMess.style.color = '#000';
            sltoggle = 0;
        }
    }
    
    else if (!isClickedMessOverlay && !isClickedIconMess) {
        overlayMessage.classList.add('hide')
        iconMess.style.color = '#000';
        sltoggle = 0;
    }
    
});
// ----------------------------HEADER RIGHT------------------------------------------//


//----------------------------------HEADER-----------------------------//
//----------------------------------HEADER-----------------------------//
//----------------------------------HEADER----------------------------//









//---------------------------------CONTAINER----------------------------------//
//---------------------------------CONTAINER----------------------------------//
//---------------------------------CONTAINER----------------------------------//


//-----------------------------CONTAINET-LEFT--------------------------------//
var moreSelect = document.querySelector('.more__select');
var selectSuportMore = document.querySelector('.select__suport-more');
var lessSelect = document.querySelector('.less_select');

moreSelect.addEventListener('click', function(){
    selectSuportMore.classList.remove('hide');
    moreSelect.style.display = 'none'
})

lessSelect.addEventListener('click', function(){
    selectSuportMore.classList.add('hide');
    moreSelect.classList.remove('hide')
    moreSelect.style.display = 'flex'
})

//-----------------------------CONTAINET-LEFT--------------------------------//



//-----------------------------CONTAINER MID--------------------------------//
var containerStory = document.querySelector('.container__mid-story ul');
var iconRunLeft = document.querySelector('.run_left');
var iconRunRight = document.querySelector('.run_right');
var slLi = document.querySelectorAll('.container__mid-story ul li');

var liWidth = slLi[0].clientWidth;
var totalLiWidth = slLi.length * liWidth;
var containerWidth = containerStory.clientWidth;
var length = totalLiWidth - containerWidth;

var dem = 0;

function runScroll(s) {
  containerStory.scrollBy({
    left: s,
    behavior: 'smooth'
  });

  dem += s;
}

iconRunLeft.addEventListener('click', function() {
  iconRunRight.classList.remove('hide');

  if (dem < length) {
    var scrollAmount = Math.min(450, length - dem);
    runScroll(scrollAmount);
  }

  dem = containerStory.scrollLeft;

  if (dem >= length - 10) {
    iconRunLeft.classList.add('hide');
  }
});

iconRunRight.addEventListener('click', function() {
  iconRunLeft.classList.remove('hide');

  if (dem > 0) {
    var scrollAmount = Math.min(450, dem + 10);
    runScroll(-scrollAmount);
  }

  dem = containerStory.scrollLeft;

  console.log(dem);
  if (dem <= 36) {

    iconRunRight.classList.add('hide');
  }
});

//-----------------------------CONTAINER MID--------------------------------//


var post_hello = document.querySelector('.container__mid-contentpost');
function contentImage(i) {
  var htmlCode = `<div class="post">
                    <div class="contentpost__hear">
                        <div class="contentpost__hear-avt">
                            <img src="./image/avt-1.jpg" alt="">
                        </div>
    
                        <div class="contentpost__hear-name">
                            <h3>Võ Thị Na Vi</h3>
                            <span>10 giờ &#183;</span>
                            <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" title="Đã chia sẻ với Công khai" class="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq" style="--color: var(--secondary-icon);"><title>Đã chia sẻ với Công khai</title><g fill-rule="evenodd" transform="translate(-448 -544)"><g><path d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434" transform="translate(354 143.5)"></path><path d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096" transform="translate(354 143.5)"></path><path fill-rule="nonzero" d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z" transform="translate(354 143.5)"></path></g></g></svg>
                        </div>
    
                        <div class="contentpost__hear-icon">
                            <i class="fa-solid fa-ellipsis"></i>
                            <i class="fa-solid fa-xmark"></i>
                        </div>
                    </div>
    
                    <div class="contentpost__content">
                        <p>Hello Võ Thị Na Vi</p>
                        <img src="./image-content/img-content-${i}.jpg" alt="">
                    </div>
    
                    <div class="contentpost__footer">
                        <div class="contentpost__footer-quantity">
                            <div class="quantity-feel">
                                <div class="quantity-feel-icon">
                                    <img class="x16dsc37" height="18" role="presentation" src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.5'/%3E%3Cpath d='M7.3014 3.8662a.6974.6974 0 0 1 .6974-.6977c.6742 0 1.2207.5465 1.2207 1.2206v1.7464a.101.101 0 0 0 .101.101h1.7953c.992 0 1.7232.9273 1.4917 1.892l-.4572 1.9047a2.301 2.301 0 0 1-2.2374 1.764H6.9185a.5752.5752 0 0 1-.5752-.5752V7.7384c0-.4168.097-.8278.2834-1.2005l.2856-.5712a3.6878 3.6878 0 0 0 .3893-1.6509l-.0002-.4496ZM4.367 7a.767.767 0 0 0-.7669.767v3.2598a.767.767 0 0 0 .767.767h.767a.3835.3835 0 0 0 .3835-.3835V7.3835A.3835.3835 0 0 0 5.134 7h-.767Z' fill='%23fff'/%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(90 .0005 8) scale(7.99958)'%3E%3Cstop offset='.5618' stop-color='%230866FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%230866FF' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5257 10.9237) scale(10.1818)'%3E%3Cstop offset='.3143' stop-color='%2302ADFC'/%3E%3Cstop offset='1' stop-color='%2302ADFC' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3989' y1='2.3999' x2='13.5983' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2302ADFC'/%3E%3Cstop offset='.5' stop-color='%230866FF'/%3E%3Cstop offset='1' stop-color='%232B7EFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E" width="18">
                                    <img class="x16dsc37" height="18" role="presentation" src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cg clip-path='url(%23clip0_15251_63610)'%3E%3Cpath d='M15.9963 8c0 4.4179-3.5811 7.9993-7.9986 7.9993-4.4176 0-7.9987-3.5814-7.9987-7.9992 0-4.4179 3.5811-7.9992 7.9987-7.9992 4.4175 0 7.9986 3.5813 7.9986 7.9992Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M15.9973 7.9992c0 4.4178-3.5811 7.9992-7.9987 7.9992C3.5811 15.9984 0 12.417 0 7.9992S3.5811 0 7.9986 0c4.4176 0 7.9987 3.5814 7.9987 7.9992Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M7.9996 5.9081c-.3528-.8845-1.1936-1.507-2.1748-1.507-1.4323 0-2.4254 1.328-2.4254 2.6797 0 2.2718 2.3938 4.0094 4.0816 5.1589.3168.2157.7205.2157 1.0373 0 1.6878-1.1495 4.0815-2.8871 4.0815-5.159 0-1.3517-.993-2.6796-2.4254-2.6796-.9811 0-1.822.6225-2.1748 1.507Z' fill='%23fff'/%3E%3C/g%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='matrix(0 7.9992 -7.99863 0 7.9986 7.9992)'%3E%3Cstop offset='.5637' stop-color='%23E11731' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23E11731' stop-opacity='.1'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3986' y1='2.4007' x2='13.5975' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FF74AE'/%3E%3Cstop offset='.5001' stop-color='%23FA2E3E'/%3E%3Cstop offset='1' stop-color='%23FF5758'/%3E%3C/linearGradient%3E%3CclipPath id='clip0_15251_63610'%3E%3Cpath fill='%23fff' d='M-.001.0009h15.9992v15.9984H-.001z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E" width="18">
                                </div>
                                <span>123</span>
                            </div>
    
                            <div class="quantity-cmt">
                                <span>15</span>
                                <span>bình luận</span>
                            </div>
                        </div>
    
                        <div class="contentpost__footer-select">
                            <div class="selects thich-icon">
                                <i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/3Sd4hjvXASJ.png?_nc_eui2=AeE4ay_6uuond-IjZ9Zo4PYCRLm7nzju851EubufOO7znZm4b0nD0Z2VXjOv8-e7-Cgqh4SGjwJ0oPp5g913M4v7&quot;); background-position: 0px -840px; background-size: 26px 1636px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block; "></i>
                                <span>Thích</span>
                                <div class="feel-icons">
                                    <img src="./image-icon/like.png" alt="">
                                    <img src="./image-icon/tym.png" alt="">
                                    <img src="./image-icon/thunthun.png" alt="">
                                    <img src="./image-icon/haha.png" alt="">
                                    <img src="./image-icon/wow.png" alt="">
                                    <img src="./image-icon/download.png" alt="">
                                    <img src="./image-icon/phanno.png" alt="">
                                </div>
                            </div>
    
                            <div class="selects">
                                <i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/3Sd4hjvXASJ.png?_nc_eui2=AeE4ay_6uuond-IjZ9Zo4PYCRLm7nzju851EubufOO7znZm4b0nD0Z2VXjOv8-e7-Cgqh4SGjwJ0oPp5g913M4v7&quot;); background-position: 0px -642px; background-size: 26px 1636px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>
                                <span>Bình luận</span>
                            </div>
    
    
                            <div class="selects">
                                <i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/3Sd4hjvXASJ.png?_nc_eui2=AeE4ay_6uuond-IjZ9Zo4PYCRLm7nzju851EubufOO7znZm4b0nD0Z2VXjOv8-e7-Cgqh4SGjwJ0oPp5g913M4v7&quot;); background-position: 0px -994px; background-size: 26px 1636px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>
                                <span>Chia sẻ</span>
                            </div>
    
                        </div>
                    </div>
                </div>`;

post_hello.insertAdjacentHTML('beforeend', htmlCode);
}

for(var i = 1; i < 32; i++) {
  contentImage(i);
}
//---------------------------------CONTAINER----------------------------------//
//---------------------------------CONTAINER----------------------------------//
//---------------------------------CONTAINER----------------------------------//





