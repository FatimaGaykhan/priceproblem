// if(localStorage.getItem('products') === null){
//     localStorage.setItem('products',JSON.stringify([]))
// }
//   console.log(localStorage);
// let buttons=document.querySelectorAll('.btn');

// console.log(buttons);
// for(let btn of buttons){
//    btn.onclick = function(e){
//         e.preventDefault();
//         let id = e.target.parentElement.parentElement.id;
//         let src = e.target.parentElement.previousElementSibling.src;
//         let name = e.target.previousElementSibling.previousElementSibling.innerHTML;
//         let price = e.target.previousElementSibling.innerHTML;
  
//         let basket = JSON.parse(localStorage.getItem('products'));
//         console.log(basket);
//     }
// }


if(localStorage.getItem('products') === null){
    localStorage.setItem('products',JSON.stringify([]))
}
//   console.log(localStorage);
let buttons=document.querySelectorAll('.btn');

// console.log(buttons);
for(let btn of buttons)
{
    btn.onclick=function(e){
        e.preventDefault();
        let id = e.target.parentElement.parentElement.id;
       


    }
    let basket = JSON.parse(localStorage.getItem('products'));
    console.log(basket);
}


