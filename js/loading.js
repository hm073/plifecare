document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('progressCanvas');
    const ctx = canvas.getContext('2d');
    const progressText = document.getElementById('progressPercent');
    const progressBarThickness = 10; // 원형 진행 막대의 두께 (픽셀 단위)
    const totalTime = 5000; // 총 애니메이션 시간 (밀리초)
    let elapsedTime = 0; // 경과 시간 (밀리초)
    const startAngle = -Math.PI / 2; // 시작 각도
    let currentEndAngle = startAngle; // 현재 끝 각도
    const progress = 100; // 최종 진행 상태 (%)
  
    // 캔버스 중심 계산
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
  
    // 반지름 계산
    const radius = centerX - progressBarThickness / 2;
  
    function animateProgress(timestamp) {
      // 경과 시간 업데이트
      elapsedTime += timestamp - (lastTimestamp || timestamp);
      lastTimestamp = timestamp;
  
      // 진행 바 그리기
      const progressFraction = Math.min(elapsedTime / totalTime, 1);
      currentEndAngle = startAngle + (progressFraction * (progress / 100) * (Math.PI * 2));
  
      // 배경 원 그리기
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = '#eee';
      ctx.fill();
  
      // 진행 바 그리기
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, startAngle, currentEndAngle);
      ctx.lineWidth = progressBarThickness;
      ctx.strokeStyle = '#007bff'; // 진행 바 색상 설정
      ctx.stroke();
  
      // 진행 퍼센트 텍스트 업데이트
      progressText.textContent = Math.floor(progressFraction * progress) + '%';
  
      // 애니메이션 계속 진행
      if (elapsedTime < totalTime) {
        requestAnimationFrame(animateProgress);
      }
    }
  
    let lastTimestamp;
    requestAnimationFrame(animateProgress);
  });