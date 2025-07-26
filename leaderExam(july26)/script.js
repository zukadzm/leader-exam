let favorites = JSON.parse(localStorage.getItem("favorites")) || [] // ამ favorite ში ვინახავთ ჩათვალე ყველაფერს, რათქმაუნდა localStorage ით

async function func(){
    try{
        let userInput = document.getElementById("searchInput").value;
        let res = await fetch("https://www.googleapis.com/books/v1/volumes?q=subject:{userInput}")

        if (!res.ok) {
            throw new Error("ERROR")
        }

        let data = await res.json();
        showResults(data.items)
    }catch(er) {
        console.error("ERROR", er)
    }
}
func()
function showResults(books) {
    const list = document.getElementById("resultList")
    list.innerHTML = "";

    books.forEach(book => {
        const title = book.volumeInfo.title || "unknow title"
        const author = (book.volumeInfo.authors && book.volumeInfo.authors[0]) || "unknow author"

        const li = document.createElement("li");
        li.textContent = `${title} - ${author} `;

        const addBtn = document.createElement("button");
        addBtn.textContent = "Add to favorite"
        addBtn.onclick = () => addTofavorites({ title, author})

        li.appendChild(addBtn);
        list.appendChild(li)
    })
}
showResults()

function addTofavorites(book) {
   let x = false; // ეს გვჭირდება რომ ვნახოთ არისთუარა დამატებული(ჯერ არა ოღონდ)

   for(let i = 0; i < favorites.length; i++) { // აქ გადავუარეთ favorite-ბს
    if(favorites[i].title === book.title && favorites[i].author === book.author) {
        x = true; // თუ ყველაფერიი სწორია, გავხადოთ x, true
        break;
    } // ეს favorite[i].title თი უკვე ვწვდებით ჩვენ api-ს title-ს და შემდეგ ვამოწმებთ თუ ტოლია(ბოლოს ვუტოლებთ)

    if(!x) {
        favorites.push(book); // უკვე ვამატებთ სასურველ წიგნს favorite ში
        localStorage.setItem("favorites", JSON.stringify(favorites))
        renderFavorites(); // აქ უკვე დარენდერების ფუნციას ვიძახებთ რომელსაც შევქმნის ეხლა(ნუ ჯერ removefavorite)
    }
   }
}

function removFavorite(tiltle){
    for(let i = 0; i < favorites.length; i++) {
        if(favorites[i].title === tiltle) {
            favorites.splice(i, 1) // აქ უკვე გამოვიყენეთ splice, რომელიც ხლიჩავს
            break;
        } // ანუ თუ არის არსებული ის კონკრეტული მასივში

        localStorage.setItem("favorites", JSON.stringify(favorites))
        renderFavorites(); // შევქმნის ეხლა, რომ დავარენდეროთ
    }
}

function renderFavorites(){ // დარენდერების ფუნქცია, რომ გავუშვათ ჩვენი საიტი და იმუშავოს ყველაფერმა
    const list = document.getElementById("favoriteList")// აქ შევინახავთ favorite-ბს
    list.innerHTML = "";

    favorites.forEach(book => { // გადავუარეთ forEach ით
        const li = document.createElement("li")
        li.textContent = `${book.title} -  ${book.author} `

        const removeBtn = document.createElement("button") // ეს არის favorite-ს მოსაშორებელი ღილაკი, removeButton
        removeBtn.textContent = "Remove"
        removeBtn.onclick = () => removFavorite(book.title) // მოვაშოროთ title, favorite ში დამატებული

        li.appendChild(removeBtn)
        list.appendChild(li)
    })
}
renderFavorites()




