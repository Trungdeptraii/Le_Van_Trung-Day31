const btnLink = document.querySelector('.btn-link');
const number = document.querySelector('.number');

// Đặt thời gian đếm ngược (giây)
let startTime;

btnLink.onclick = ()=>{
    console.log('Click')
    window.location.href = 'https://fullstack-nodejs.fullstack.edu.vn/'
}
let countdownTime = 10, timeCurrent;
document.addEventListener('visibilitychange', function(){
    if(this.hidden){
        
    }else{
        countdownTime = timeCurrent;  // Khi quay lại trang web thì gán lại thời gian trước khi chuyển tab vào
        startCountdown() // Băt đầu đếm lại
    }
})




window.addEventListener('load', ()=>{
    number.textContent = `${countdownTime}`
    startCountdown();
})

function updateCountdown() {
    const currentTime = Date.now();// Khởi tạo thời gian lặp lại
    const timeCount = (currentTime - startTime) / 1000; // Chuyển đổi sang giây
    timeCurrent = countdownTime - timeCount; // Lưu lại giá trị của thời gian hiện tại
    
    number.textContent = `${timeCurrent.toFixed(0)}`;
    
    if (timeCurrent > 0) {
        requestAnimationFrame(updateCountdown); // Gọi lại hàm
    } else {
        number.textContent = '0';
        btnLink.style.backgroundColor = 'transparent';
        btnLink.style.cursor = 'pointer'
        btnLink.disabled = false;
    }
}

function startCountdown() {
    startTime = Date.now(); // Khởi tạo thời gian bắt đầu đếm
    requestAnimationFrame(updateCountdown);// Tạo hàm đếm thời gian
}