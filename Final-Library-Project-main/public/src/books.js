//create a function, use find method to loop through author's array and search for author id
//return author object where author.id === id

function findAuthorById(authors, id) {
 return authors.find((author)=>author.id === id)
}
// find books by id. loop through books, return where book.id === id
function findBookById(books, id) {
  return books.find((book)=> book.id === id)
}
//seperated into two arrays, book returned and book not returned,
//spread operator used to combine the entire two arrays.

function partitionBooksByBorrowedStatus(books) {
  let booksReturn = books.filter((book)=> 
  book.borrows.every((borrow)=> borrow.returned === true ));
  let booksBorrow =  books.filter((book)=>
  book.borrows.some((borrow)=>borrow.returned === false));
  let finalArray = [[...booksBorrow],[...booksReturn]];
  return finalArray
 
}
//Pass in an anonymous function as the callback function that takes in each account and finds the account where account.id === borrow.id
//Return the spread operator that contains the output values of the map method as borrow and the account variable.
//Use the slice method on the output array to return only the portion of the array up to index value 10 of the returned array.
function getBorrowersForBook(book, accounts) {
 return book.borrows.map((borrow)=>{
   let account = accounts.find((account)=> account.id === borrow.id);
   return {...borrow,...account};
 })
 .slice(0,10);
  
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
