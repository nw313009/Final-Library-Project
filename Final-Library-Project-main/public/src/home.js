//length method, return number of elements in books object

function getTotalBooksCount(books) {
  return books.length
}
//length method return number of element in accounts object
function getTotalAccountsCount(accounts) {
  return accounts.length
}
//created an array that returned the first item of the borrows array in the books
//array === false. return list length.
function getBooksBorrowedCount(books) {
  const list = books.filter((book)=> !book.borrows[0].returned);
  return list.length
  
  

}
//
function _reduceProp(arr, key) {
  let newArr = arr.reduce((acc, prop) => {
    let keyExist = acc.find((item) => item.name === prop[key]);
    if (keyExist) {
      keyExist.count += 1;
    } else {
      let obj = { name: prop[key], count: 1 };
      acc.push(obj);
    }
    return acc;
  }, []);
  return newArr;
}
function getMostCommonGenres(books) {
  let countArr = _reduceProp(books, "genre")
   return countArr.sort((a, b) => b.count - a.count)
   .slice(0, 5);
 }
 


function getMostPopularBooks(books) {
  return books
  .map((book)=> {
    return {name: book.title, count:book.borrows.length};
  } )
  .sort((a,b)=> b.count - a.count)
  .slice(0,5)
}
function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
   let theAuthor = {
    name: `${author.name.first} ${author.name.last}`,
    count: 0
   };
   books.forEach((book) => {
    if (book.authorId === author.id) {
     theAuthor.count += book.borrows.length;
    }
   });
   result.push(theAuthor);
  });
  return result.sort((a, b) => b.count - a.count).slice(0, 5);
 }
// function getMostPopularAuthors(books,authors) {
//   const topAuthors = authors.map(a => ({
//   ...a,
//   // books: books.filter(b => b.authorId === a.id),
//   bookCount: books.filter(b => b.authorId === a.id).length,
//   borrowCount: books.filter(b => b.authorId === a.id).reduce((acc, cur)
//   =>  acc + cur.borrows.length, 0)
//   })).sort((b, a) => a.borrowCount - b.borrowCount);
//   topAuthors.length = 5;
//   return topAuthors.map(ta => {
//   return {count: ta.borrowCount, name: ta.name.first + " " + ta.name.last};
//   // return {id: ta.id, name: `${ta.name.first} ${ta.name.last}`};
// //return result.sort((a, b) => b.count - a.count).slice(0, 5);  
// })
//   }



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
