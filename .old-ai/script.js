function updateTime() {
    const now = new Date();
    
    // Format Time (12-hour format with minutes)
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? ' PM' : ' AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0) as 12
    
    document.getElementById('clock').textContent = hours + ':' + minutes + ampm;

    // Format Date
    const options = { weekday: 'long', month: 'short', day: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString('en-US', options);
}

// Update clock immediately, then every second
updateTime();
setInterval(updateTime, 1000);
