async function fetchData() {
    let res = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftechcrunch.com%2Ffeed%2F");
    let data = await res.json();

    data.items.forEach(item => {
        const news_list = document.getElementById("news_list")
        
        
        const li = document.createElement("li");
        const h2 = document.createElement("h2");
        const p = document.createElement("p");
        const author = document.createElement("h3")
        const a = document.createElement("a");

        h2.textContent = item.title
        p.innerHTML = item.description
        author.textContent = `Author: ${item.author}`
        a.textContent = "Read more"
        a.href = item.link
        a.classList.add("Read_more")
        a.target = "_blank"

        li.append(h2)
        li.append(p)
        li.append(author)
        li.append(a)
        news_list.appendChild(li)
    });
}

fetchData()