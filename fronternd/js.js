document.addEventListener("DOMContentLoaded", () => {
    console.log("JS Loaded ✅");
});

fetch('/path/to/data.json')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        // بعد با data.playlists و data.user کار کن
});
