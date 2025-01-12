//**
// Coding Steps:
// Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
// A Bootstrap styled table representing your choice of data.
// A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.
//  */
//    SUMARRIZE what is needed. 
/*  What is needed?

button, on a click to add information to the table

get information, from teh Form (input ) fields and their values
Need FirstName, lastName, favoriteColor and store in variables. 

Get a number value from teh form when submitted. 
Append() to the table.  

How?  
getElementByID()  Need ID's on our Values.  lots of stuff....

*/

const formButton = document.getElementById('formSubmit')

let number = 0

formButton.addEventListener('click', (event)  => {
    event.preventDefault()
    //variables to hold hte values from instructions
    
    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let fishType = document.getElementById('fishType').value
    let fishWeight = document.getElementById('fishWeight').value

    // create a node .... to tr node to append to any form 

    let newTableRow = document.createElement('tr')

    let numberNode = document.createElement('td')
        numberNode.innerHTML = number
        newTableRow.append(numberNode)

    let firstNameNode = document.createElement('td')
    firstNameNode.innerHTML = firstName
    newTableRow.append(firstNameNode)

    let lastNameNode = document.createElement('td')
    lastNameNode.innerHTML = lastName
    newTableRow.append(lastNameNode)

    let fishTypeNode = document.createElement('td')
    fishTypeNode.innerHTML = fishType
    newTableRow.append(fishTypeNode)

let fishWeightNode = document.createElement('td')
    fishWeightNode.innerHTML = fishWeight
    newTableRow.append(fishWeightNode)

    document.getElementById('tBody').appendChild(newTableRow)

    document.getElementById('firstName').value = ''
    document.getElementById('lastName').value = ''
    document.getElementById('fishType').value = ''
    document.getElementById('fishWeight').value = ''

    number++
})