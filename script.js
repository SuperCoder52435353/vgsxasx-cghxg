function downloadVideo() {
    const quality = document.getElementById('quality').value;
    const videoPath = `videos/sample-${quality}.mp4`;
    const status = document.getElementById('status');
  
    // Fayl mavjudligini tekshirish
    fetch(videoPath, { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          const link = document.createElement('a');
          link.href = videoPath;
          link.download = `video-${quality}p.mp4`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          status.textContent = '';
        } else {
          status.textContent = `${quality}p formatdagi video topilmadi.`;
        }
      })
      .catch(() => {
        status.textContent = 'Serverga ulanib bo‘lmadi.';
      });
  }
  