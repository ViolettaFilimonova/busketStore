// let buttons = document.querySelectorAll('button')
// let block = document.querySelector('.item:nth-child(3)')
// let block2 = document.querySelector('.item:nth-child(4)')

// let sum = 0
// let count = 0
// let count2 = 0

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].onclick = function(){
//         if (i == 0) {
//             let title = document.createElement('p')
//             let price = document.createElement('p')
//             title.innerText = products.name1
//             price.innerHTML = products.price1
//             sum += price  * count
            

//             count++
//             count.innerHTML
//             block.append(title, count, sum)
//             console.log(sum)
            

            
//         }else if (i == 1) {
           
//                 let title = document.createElement('p')
//                 let price = document.createElement('p')
//                 title.innerText = products.name2
//                 price.innerHTML = products.price2
    
    
//                 count2++
//                 count.innerHTML
//                 block2.append(title, count, price)
//                 sum += price * count2
                
//         }
//         console.log(sum)
//     }
// }


let sum = 0
function product(title, img, price){
    this.title = title
    this.img = img
    this.price = price
    this.quantity = 1
}
let product1 = new product('DYSON supersonic™ - фен', "/dyson.jpg", 40000)
let product2 = new product('DYSON supersonic™ - выпрямитель для волос', "/dyson2.jpg", 39000)
let product4 = new product('DYSON supersonic™ - пылесос', "/dyson4.jpg", 62900)
let product3 = new product('DYSON supersonic™ - очиститель воздуха', "/dyson3.jpg", 55000)
let products = [product1, product2, product3, product4]

let total = document.querySelector(".sum")

let cards = document.querySelector(".cards")

for (let i = 0; i < products.length; i++) {
    let card = document.createElement('div')
    card.classList.add('card')
    cards.append(card)
    let title = document.createElement('p')
    title.classList.add('title')
    title.innerText = products[i].title
    card.append(title)
    let img = document.createElement('img')
    img.src = products[i].img
    card.append(img)
    let price = document.createElement('p')
    price.classList.add('price')
    price.innerText = products[i].price + '\u20bd'
    card.append(price )
    // console.log(price)
    let button = document.createElement('button')
    button.innerText = 'Добавить в карзину'
    button.setAttribute('id', 'btn_' + i)
    card.append(button)
}
let buttons = document.querySelectorAll('button')
for (let i = 0; i < buttons.length; i++) {

    let itemProduct = document.createElement('div')
    itemProduct.classList.add('item_product')
    let name = document.createElement('p')
    name.classList.add('name')
    let price = document.createElement('p')
    price.classList.add('price')
    let quantity = document.createElement('p')
    quantity.classList.add('quantity')

    buttons[i].onclick = function (e){
        let button = e.target;
        let mass = button.id.split('_');
        let id = mass[1]
        let productPrint = products[id]
        let item = document.querySelector('.item')
        name.textContent = productPrint.title 
        
        price.textContent =  productPrint.price + '\u20bd'
        
    

        quantity.textContent = productPrint.quantity++
        itemProduct.append(name, quantity, price)
        item.append(itemProduct)
        // console.log(id)
       sum += productPrint.price
       total.textContent = 'Сумма вашей покупки: ' + sum + '\u20bd'
       console.log(sum)
      
    }
}


