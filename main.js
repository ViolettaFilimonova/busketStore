let buttons = document.querySelectorAll('button')
let block = document.querySelector('.item:nth-child(3)')
let block2 = document.querySelector('.item:nth-child(4)')

let sum = 0
let count = 0
let count2 = 0

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function(){
        if (i == 0) {
            let title = document.createElement('p')
            let price = document.createElement('p')
            title.innerText = products.name1
            price.innerHTML = products.price1
            sum += price  * count
            

            count++
            count.innerHTML
            block.append(title, count, sum)
            
            

            
        }else if (i == 1) {
           
                let title = document.createElement('p')
                let price = document.createElement('p')
                title.innerText = products.name2
                price.innerHTML = products.price2
    
    
                count2++
                count.innerHTML
                block2.append(title, count, price)
                sum += price * count2
                
        }
        console.log(sum)
    }
}
