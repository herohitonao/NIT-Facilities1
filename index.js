function updateClock() {
      const now = new Date();
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      document.getElementById('clock').textContent = now.toLocaleString('en-IN', options);
    }

    setInterval(updateClock, 1000); // Update every second
    updateClock(); // Initial call