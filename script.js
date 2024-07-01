document.addEventListener('DOMContentLoaded', () => {
    const idScreen = document.getElementById('id-screen');
    const countingScreen = document.getElementById('counting-screen');
    const confirmDialog = document.getElementById('confirm-dialog');
    const userIdInput = document.getElementById('user-id');
    const countInput = document.getElementById('count-input');

    // ID 제출 버튼 클릭 이벤트
    document.getElementById('id-submit').addEventListener('click', () => {
        const userId = userIdInput.value;
        if (userId) {
            localStorage.setItem('userId', userId);
            idScreen.classList.remove('active');
            countingScreen.classList.add('active');
            requestLocation();
        } else {
            alert('Please enter your ID.');
        }
    });

    // 로그아웃 버튼 클릭 이벤트
    document.getElementById('logout').addEventListener('click', () => {
        localStorage.removeItem('userId');
        countingScreen.classList.remove('active');
        idScreen.classList.add('active');
    });

    // 카운트 제출 버튼 클릭 이벤트
    document.getElementById('count-submit').addEventListener('click', () => {
        const count = countInput.value;
        if (count) {
            confirmDialog.style.display = 'block';
        } else {
            alert('Please enter a number.');
        }
    });

    // Confirm 창 취소 버튼 클릭 이벤트
    document.getElementById('confirm-cancel').addEventListener('click', () => {
        confirmDialog.style.display = 'none';
    });

    // Confirm 창 전송 버튼 클릭 이벤트
    document.getElementById('confirm-send').addEventListener('click', () => {
        const userId = localStorage.getItem('userId');
        const count = countInput.value;
        if (userId && count) {
            sendData(userId, count);
        }
        confirmDialog.style.display = 'none';
    });

    // 위치 요청
    function requestLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
            }, () => {
                alert('Geolocation is not supported by this browser.');
            });
        }
    }

    // 데이터 전송 (구현 필요)
    function sendData(userId, count) {
        console.log(`Sending data: ID=${userId}, Count=${count}`);
        // 실제 서버에 데이터 전송 로직 구현 필요
    }
});
