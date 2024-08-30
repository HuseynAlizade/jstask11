const insert = document.getElementById("insert");

window.addEventListener("keydown", function (event) {
    insert.innerHTML = "";
    const html = `
        <div class="key">
            ${event.key === " " ? "Space" : event.key}
            <small>event.key</small>
        </div>
        <div class="key">
            ${event.code}
            <small>event.code</small>
        </div>
        <div class="key">
            ${event.keyCode}
            <small>event.keyCode</small>
        </div>
    `;
    insert.insertAdjacentHTML("afterbegin", html);
});
