const cur_one_name = document.querySelector('.cur-one__name')
const cur_two_name = document.querySelector('.cur-two__name')

const cur_one_elem = document.querySelector('#cur-one__select')
const cur_two_elem = document.querySelector('#cur-two__select')

const cur_one_input = document.querySelector('#cur-one__input')
const cur_two_input = document.querySelector('#cur-two__input')

const swapBtn = document.querySelector('#swap-button')
const rateEl = document.querySelector('#rate')

getCurrencies();

function getCurrencies(){
    const currency_one = cur_one_elem.value
    const currency_two = cur_two_elem.value
    
    const url = `./currency_data.json`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        const rate = data.exchangeRates
        for (let obj = 0; obj < rate.length; obj++) {
            const element = rate[obj];
            console.log(element);
            rateEl.innerText = `1 ${currency_one} = ${element.rate} ${currency_two}`
            cur_two_input.value = (cur_one_input.value * element.rate).toFixed(2)

            switch (currency_one) {
                case 'USD':
                    return cur_one_name.innerText = 'United State Dollar'
                    break;
                case 'EUR':
                    return cur_one_name.innerText = 'Euro'
                    break;
                case 'GBP':
                    return cur_one_name.innerText = 'British Pound'
                    break;
                case 'MDL':
                    return cur_one_name.innerText = 'Moldavian Lei'
                    break;
    
                default:
                    break;
    }
            
        }
    })
}

// async function getCurrencies(){
// const currency_one = cur_one_elem.value
// const currency_two = cur_two_elem.value

// const url = `./currency_data.json/${currency_one}`

// const res = await fetch(url);
// const data = await res.json();
// const currency_objects = data.exchangeRates
//     // currency_objects.map(obj => {
//     //     console.log(obj);
//     //     const rate = obj[currency_two]
//     //     console.log(rate);
//     // })

// // for (const key in currency_objects) {
// //     const element = currency_objects[key];
// //     console.log(element);
// // }
   
// switch (currency_one) {
//         case 'USD':
//             return cur_one_name.innerText = 'United State Dollar'
//             break;
//         case 'EUR':
//             return cur_one_name.innerText = 'Euro'
//             break;
//         case 'GBP':
//             return cur_one_name.innerText = 'British Pound'
//             break;
//         case 'MDL':
//             return cur_one_name.innerText = 'Moldavian Lei'
//             break;
    
//         default:
//             break;
//     }
// }

swapBtn.addEventListener('click', ()=>{
    const temp = cur_one_input.value
    cur_one_elem.value = cur_two_elem.value
    cur_two_elem.value = temp
    getCurrencies()
})

cur_one_elem.addEventListener('change', getCurrencies)
cur_two_elem.addEventListener('change', getCurrencies)

cur_one_input.addEventListener('input', getCurrencies)
cur_two_input.addEventListener('input', getCurrencies)