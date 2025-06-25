function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function() {
    function updateTime() {
        const now = new Date();
        const local_time = new Intl.DateTimeFormat("en-MY", {
            timeZone: 'Asia/Kuala_Lumpur',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        }).format(now);
        document.getElementById("datetime").innerHTML = local_time;
    }
    updateTime();
    setInterval(updateTime, 1000);
})
