let buttons = document.querySelectorAll('button')
let block = document.querySelector('.item:nth-child(3)')

let resultSum = 0
let sum1 = 0
let sum2 = 0
let count = 0
let count2 = 0
let result = document.querySelector('.sum')
let item = document.createElement('div')
let item2 = document.createElement('div')
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function(){
   
        if (i == 0) {
            // let title = document.createElement('p')
            let price = products.price1
            // title.innerText = products.name1
            // price.innerHTML = products.price1

            item.classList.add('item1')
            let block = document.querySelector('.block')
            item.innerHTML = products.name1  + products.price1
            block.append(item)

           
            

            count++
            // count.innerHTML
            // block.append(title, count, sum)
            sum1 = price  * count
            

            // console.log(sum)

            // console.log(price)
            
        }else if (i == 1) {
           
                // let title = document.createElement('p')
                let price = products.price2
                // title.innerText = products.name2
                // price.innerHTML = products.price2
    
                item2.classList.add('item2')
                let block = document.querySelector('.block')
                item2.innerHTML = products.name2  + products.price2
                block.append(item2)

                count2++
                count.innerHTML
                // block.append(title, count, price)
                sum2 = price * count2
                // console.log(sum2)
        }
        // console.log(sum2)
        resultSum = sum1 + sum2
        result.innerHTML = resultSum
        console.log(resultSum)
    }

}




