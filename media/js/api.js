
const get = function (url) {
    let data = fetch(url);
    const article = document.querySelector(".article");
    data.then((a) => {
        a.text().then((b) => {
            article.innerHTML = b;
        })
    })
}
