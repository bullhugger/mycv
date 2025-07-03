function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function() {
    function updateTime() {
        const now = new Date();
        const local_time = new Intl.DateTimeFormat("en-MY", {
            timeZone: 'Asia/Kuala_Lumpur',
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

fetch("https://api.github.com/users/bullhugger/repos")
    .then(response => response.json())
    .then(data => {
        const output = data.slice(0, 3).map(repo =>
            `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`
        ).join('');
        document.getElementById('github_projects').innerHTML = `<ul>${output}</ul>`;
    })
    .catch(error => console.error("GitHub API error:", error));
