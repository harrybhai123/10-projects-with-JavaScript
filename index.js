const btn = document.getElementById("btn")
const quote = document.getElementById("quote")

    btn.addEventListener("click", function () {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => {
                let randomQuote = Math.ceil(Math.random() * data.length)
                let p = document.createElement("p")
                p.innerHTML = data[randomQuote].h
                quote.append(p)
                
            });
            quote.innerHTML = ""
    });
