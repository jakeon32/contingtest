document.addEventListener('DOMContentLoaded', () => {
    const idScreen = document.getElementById('id-screen');
    const countingScreen = document.getElementById('counting-screen');
    const confirmDialog = document.getElementById('confirm-dialog');
    const userIdInput = document.getElementById('user-id');
    const countInput = document.getElementById('count-input');
    const currentTimeId = document.getElementById('current-time-id');
    const currentTimeCount = document.getElementById('current-time-count');

    // 현재 시간 업데이트 함수
    function updateTime() {
        const now = new Date();
        const formattedTime = now.toLocaleTimeString('ko-KR', { hour12: false });
        currentTimeId.textContent = `현재 시간: ${formattedTime}`;
        currentTimeCount.textContent = `현재 시간: ${formattedTime}`;
    }

    // ID 제출 버튼 클릭 이벤트
    document.getElementById('id-submit').addEventListener('click', () => {
        const userId = userIdInput.value;
        if (userId) {
            localStorage.setItem('userId', userId);
            idScreen.classList.remove('active');
            countingScreen.classList.add('active');
            requestLocation();
        } else {
            alert('ID를 입력하세요.');
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
            alert('숫자를 입력하세요.');
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
                console.log(`위도: ${position.coords.latitude}, 경도: ${position.coords.longitude}`);
            }, () => {
                alert('이 브라우저는 지리적 위치를 지원하지 않습니다.');
            });
        }
    }

    // 데이터 전송 (구현 필요)
    function sendData(userId, count) {
        console.log(`데이터 전송: ID=${userId}, Count=${count}`);
        // 실제 서버에 데이터 전송 로직 구현 필요
    }

    // 초기 시간 설정 및 1초마다 시간 업데이트
    updateTime();
    setInterval(updateTime, 1000);
});
