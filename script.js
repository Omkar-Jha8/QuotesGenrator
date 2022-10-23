var quotes = document.querySelector('.quotes')
var author = document.querySelector('.author')
i = 0;
var loop = () => {
    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            quotes.innerHTML = data[i].text
            author.innerHTML = data[i].author
        });
    i++
}