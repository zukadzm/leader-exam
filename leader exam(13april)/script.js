
let totalPrice = 0
function savecart(){
    localStorage.setItem("cart", JSON.stringify(totalPrice))
}
async function products() {
    try{
        const res = await fetch("https://fakestoreapi.com/products")
        if(!res.ok){
            throw new Error
        }
        const dataProduct = await res.json()
        console.log(dataProduct)

        const firstTitle = document.getElementById("first-product-title")
        const firstPrice = document.getElementById("first-product-price")
        firstPrice.innerHTML = `Price: ${dataProduct[0].price}$`
        firstTitle.innerHTML = `Title: ${dataProduct[0].title}`

        const secondTitle = document.getElementById("Second-product-title")
        const secondPrice = document.getElementById("Second-product-price")
        secondPrice.innerHTML = `Price: ${dataProduct[1].price}$`
        secondTitle.innerHTML = `Title: ${dataProduct[1].title}`

        const thirdTitle = document.getElementById("Third-product-title")
        const thirdPrice = document.getElementById("Third-product-price")
        thirdPrice.innerHTML = `Price: ${dataProduct[2].price}$`
        thirdTitle.innerHTML = `Title: ${dataProduct[2].title}`

        const fourthTitle = document.getElementById("Fourth-product-title")
        const fourthPrice = document.getElementById("Fourth-product-price")
        fourthPrice.innerHTML = `Price: ${dataProduct[3].price}$`
        fourthTitle.innerHTML = `Title: ${dataProduct[3].title}`

        const fifthTitle = document.getElementById("Fifth-product-title")
        const fifthPrice = document.getElementById("Fifth-product-price")
        fifthPrice.innerHTML = `Price: ${dataProduct[4].price}$`
        fifthTitle.innerHTML = `Title: ${dataProduct[4].title}`

        const sixthTitle = document.getElementById("Sixth-product-title")
        const sixthPrice = document.getElementById("Sixth-product-price")
        sixthPrice.innerHTML = `Price: ${dataProduct[5].price}$`
        sixthTitle.innerHTML = `Title: ${dataProduct[5].title}`
       

        const firstButton = document.getElementById("first-product-button");
        const secondButton = document.getElementById("Second-product-button");
        const thirdButton = document.getElementById("Third-product-button");
        const fourthButton = document.getElementById("Fourth-product-button");
        const fifthButton = document.getElementById("Fifth-product-button");
        const sisxthButton = document.getElementById("Sixth-product-button");

        const cart = document.getElementById("cart")
        firstButton.addEventListener("click",function(e){
            e.preventDefault()
            totalPrice += dataProduct[0].price;
            cart.innerHTML = `Cart: ${totalPrice}$`
        })
        secondButton.addEventListener("click",function(e){
            e.preventDefault()
            totalPrice += dataProduct[1].price;
            cart.innerHTML = `Cart: ${totalPrice}$`
        })
        thirdButton.addEventListener("click",function(e){
            e.preventDefault()
            totalPrice += dataProduct[2].price;
            cart.innerHTML = `Cart: ${totalPrice}$`
        })
        fourthButton.addEventListener("click",function(e){
            e.preventDefault()
            totalPrice += dataProduct[3].price;
            cart.innerHTML = `Cart: ${totalPrice}$`
        })
        fifthButton.addEventListener("click",function(e){
            e.preventDefault()
            totalPrice += dataProduct[4].price;
            cart.innerHTML = `Cart: ${totalPrice}$`
        })
        sisxthButton.addEventListener("click",function(e){
            e.preventDefault()
            totalPrice += dataProduct[5].price;
            cart.innerHTML = `Cart: ${totalPrice}$`
        })

        const removeButton1 = document.getElementById("removeButton1");
        const removeButton2 = document.getElementById("removeButton2");
        const removeButton3 = document.getElementById("removeButton3");
        const removeButton4 = document.getElementById("removeButton4");
        const removeButton5 = document.getElementById("removeButton5");
        const removeButton6 = document.getElementById("removeButton6");

        removeButton1.addEventListener("click",function(e){
            e.preventDefault()
            totalPrice -= dataProduct[0].price;
            if(totalPrice < 0) Math.floor(totalPrice = 0);
            cart.innerHTML = `Cart: ${totalPrice}`
        })
        removeButton2.addEventListener("click",function(e){
            e.preventDefault()
            totalPrice -= dataProduct[1].price;
            if(totalPrice < 0) Math.floor(totalPrice = 0);
            cart.innerHTML = `Cart: ${totalPrice}$`
        })
        removeButton3.addEventListener("click",function(e){
            e.preventDefault()
            totalPrice -= dataProduct[2].price;
            if(totalPrice < 0) Math.floor(totalPrice = 0);
            cart.innerHTML = `Cart: ${totalPrice}$`
        })
        removeButton4.addEventListener("click",function(e){
            e.preventDefault()
            totalPrice -= dataProduct[3].price;
            if(totalPrice < 0) Math.floor(totalPrice = 0);
            cart.innerHTML = `Cart: ${totalPrice}$`
        })
        removeButton5.addEventListener("click",function(e){
            e.preventDefault()
            totalPrice -= dataProduct[4].price;
            if(totalPrice < 0) Math.floor(totalPrice = 0);
            cart.innerHTML = `Cart: ${totalPrice}$`
        })
        removeButton6.addEventListener("click",function(e){
            e.preventDefault()
            totalPrice -= dataProduct[5].price;
            if(totalPrice < 0) Math.floor(totalPrice = 0);
            cart.innerHTML = `Cart: ${totalPrice}$`
        })

    }catch(er){
        console.error("ERROR", er)
    }
}
products() 
savecart()
