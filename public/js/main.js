const deleteBtn = document.querySelectorAll('.fa-trash') 
const likesBtn = document.querySelectorAll('.fa-heart')

Array.from(deleteBtn).forEach((element, i)=>{
    element.addEventListener('click', deleteItem) // use event listener to run deleteItem function line 17 in the case of a click
})

Array.from(likesBtn).forEach((element)=>{//???
    element.addEventListener('click', addLike) // use event listener to run markComplete function  line 36 in the case of a click
})

// Array.from(itemCompleted).forEach((element)=>{//???
//     element.addEventListener('click', markUnComplete) // use event listener to run markUnComplete function line 55 in the case of a click
// })

async function deleteItem(){ //async await syntax for deleteItem function called by click on line 6
    const itemText = this.parentNode.nextElementSibling.childNodes[1].innerText // we click on the span, the LI is the parent , look to the parent and then go to the child node which is (the same span we clicked). anything that takes up space counts in the dom (?) so the text is childnode[1]?? creating a variable that seeks out a parent node and then the second (index [1] in an array) child node and using it's inner text
    console.log(itemText)
    try{ //first try what follows
        const response = await fetch('deleteItem', { // response to await fetching the information that follows
            method: 'delete',  // html method
            headers: {'Content-Type': 'application/json'}, // ???
            body: JSON.stringify({ // the body of this will contain JSON object which then needs to be converted to a string
              'itemFromJS': itemText // this is what is delivered back and named in server.js line 87
            })
          })
        const data = await response.json() // data is the JSON delivered to the varable response on line 20
        console.log(data) // tell me that data in the console
        location.reload() // reload the page

    }catch(err){ //if promise fails
        console.log(err) // tell me why in the console
    }
}
 async function addLike(){

    const productName = this.parentNode.nextElementSibling.childNodes[1].innerText
//     const sName = this.parentNode.childNodes[1].innerText
//     const bName = this.parentNode.childNodes[3].innerText
    const tLikes = Number(this.parentNode.childNodes[0].innerText)
    console.log(tLikes)
    try{
        const response = await fetch('addOneLike', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'name': productName,
                'likes': tLikes
            })
            })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}
// }
// async function markComplete(){  // async await syntax for markComplete function called by click on line 9
//     const itemText = this.parentNode.childNodes[1].innerText // ?? creating a variable that seeks out a parent node and then the second (index [1] in an array) child node and using it's inner text
//     try{ //first try what follows
//         const response = await fetch('markComplete', { // response to await fetching the information that follows
//             method: 'put', // html method for updating
//             headers: {'Content-Type': 'application/json'},// ???
//             body: JSON.stringify({ // the body of this will contain JSON object which then needs to be converted to a string
//                 'itemFromJS': itemText  // this is what is delivered back and named in server.js line 63
//             })
//           })
//         const data = await response.json() // data is the JSON delivered to the variable response on line 39
//         console.log(data) // tell me that data in the console
//         location.reload() // reload the page

//     }catch(err){ // if the promise fails
//         console.log(err) // tell me why in the console
//     }
// }

// async function markUnComplete(){ // async await syntax for markUnComplete function called by click on line 13
//     const itemText = this.parentNode.childNodes[1].innerText // ?? creating a variable that seeks out a parent node and then the second (index [1] in an array) child node and using it's inner text
//     try{ //first try what follows
//         const response = await fetch('markUnComplete', { // response to await fetching the information that follows
//             method: 'put', // html method for updating 
//             headers: {'Content-Type': 'application/json'}, // ??? 
//             body: JSON.stringify({ // the body of this will contain JSON object which then needs to be converted to a string
//                 'itemFromJS': itemText // this is what is delivered back and named in server.js line 80
//             })
//           })
//         const data = await response.json() // data is the JSON delivered to the variable response on line 58 
//         console.log(data) // tell me the data in te console
//         location.reload() // reload the page

//     }catch(err){ // if the promise fails
//         console.log(err) // tell me why in the console
//     }
// }