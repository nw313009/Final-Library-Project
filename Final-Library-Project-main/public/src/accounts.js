function findAccountById(accounts,id) {
//   //takes in an array of account objects and a string ID
//   //console.log(id)
//   //if(accounts[id] === id){
//    // const account = {accounts}
//   //}
//   // loop through array of objects
  for(let i = 0; i< accounts.length;i++){
    if(accounts[i].id === id){
      return accounts[i]
    }
  }
}


function sortAccountsByLastName(accounts) {
  //sort alphabetically by last name
  //accounts[i].name.last
  
    let sortedArray = accounts.sort((a,b)=> (a.name.last < b.name.last) ? -1:1)
    return sortedArray;
  }
 


//I need to loop through the books array and then loop through the borrow array in order to check if the borrows id matches the account id; if this is true, I need to add 1 to the counter variable totalBorrows.
//The two loops will continue until the end of books array.
//When the loop is complete return the value stored in the totalBorrows variable.
function getTotalNumberOfBorrows(account, books) {
  const accountId = account.id;
  let total = 0;
  books.forEach(book => book.borrows.forEach(borrow => accountId === borrow.id && total++))
  return total
  

}

function getBooksPossessedByAccount(account, books, authors) {
  //intialize a placeholder array that will hold the value of the final result
  let result = [];

  //using the .forEach method iterate through the books array to build the final result
  books.forEach(item => {
     //initialize a book object as a copy from the books array
     //initialize a placeholder for the borrows object
     //deconstruct the book object to build the author and borrows elements
    const book = {...item};
    const borrowz = item.borrows; 
    const {id, title, genre, authorId, author, borrows} = book;

    //using .forEach method to build author and borrows elements using conditional statement
    borrowz.forEach(borrow => {
      if(borrow.id === account.id && !borrow.returned) {
        book.author = authors.find(auth => auth.id === book.authorId);
        //add element to final result
        result.push(book);
      }
    })
  })
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
