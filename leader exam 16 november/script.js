class Books{
    constructor(title, author, year){
        this.title = title;
        this.author = author
        this.year = year;
    }
    display(){
        return `${this.title}, ${this.author}, ${this.year}`
    }
}

class Library{
    constructor(){
        this.books = []
    }

    save(){
        localStorage.setItem("books", JSON.stringify(this.books))
    }

    add(book){
        this.books.push(book) // დავამატეთ წიგნები
        this.save() // შევინახეთ დამატებული წიგნი
    }

    displaybooks(){
        const bookdisplay = document.getElementById("book");
        bookdisplay.innerHTML = ''
        
        this.books.forEach(book =>{
            const li = document.createElement("li")
            li.textContent = book.display()
            bookdisplay.append(li)
        })
    }

    deleteBook() {
        this.books = this.books.slice(0, this.books.length-1)
    }
}


const lbr = new Library()
const btn = document.getElementById("addButton")
const removeButton = document.getElementById("removeButton")

function addRemove(){
    const bks = new Books("Invisible Man","Ralph Ellison","1952") // აქ შეგვიძლია ღილაკზე დამატების დროს დავამატოთ
    btn.addEventListener("click",function(e){
        e.preventDefault()
        lbr.add(bks) // library ში დავამატეთ bks, value-ს
        lbr.displaybooks() // გამოვიტანეთ
    })
}
addRemove()

removeButton.addEventListener("click",function(){
    lbr.deleteBook()
    lbr.displaybooks()
})

const book1 = new Books("Anna Karenina", "Greta Garbo", 1878.) // ესენი რაც თავიდან წერია
const book2 = new Books("One Hundred Years of Solitude", "Márquez",  1982) // ესენი რაც თავიდან წერია// ესენი რაც თავიდან წერია
lbr.add(book1) // აქ უკვე ჩვენით დავამატეთ
lbr.add(book2) 
lbr.displaybooks()
