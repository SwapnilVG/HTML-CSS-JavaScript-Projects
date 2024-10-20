async function fetchData(){
    let res = await fetch("https://fakestoreapi.com/products")
    let data = await res.json();
    let container = document.querySelector(".container")
    data.forEach(product => {
        let product_card = document.createElement("div")
        product_card.classList.add("product_card")

        let image = document.createElement("img")
        image.src=product.image
        image.alt = product.title
        image.classList.add("image")
        product_card.appendChild(image)

        let title = document.createElement("h1")
        title.textContent = product.title
        title.classList.add("title")
        product_card.appendChild(title)

        let price = document.createElement("p")
        price.textContent = `$${product.price}`
        price.classList.add("price")
        product_card.appendChild(price)

        
        let description = document.createElement("h3")
        description.textContent = product.description
        description.classList.add("description")
        product_card.appendChild(description)
        
        let category = document.createElement("h3")
        category.textContent = `Category: ${product.category}`
        category.classList.add("category")
        product_card.appendChild(category)

        let rating = document.createElement("p")
        rating.textContent = `Rating ${product.rating.rate} (${product.rating.count} reviews) `
        rating.classList.add("rating")
        product_card.appendChild(rating)

        container.appendChild(product_card)
    });
}

fetchData()