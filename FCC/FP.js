// /**
//  * 备茶过程
//  * @return {string} 一杯茶
//  **/
// const prepareTea = () => 'greenTea';

// /**
//  * 获得一定数量的茶
//  * @param {number} numOfCups 所需茶的数量
//  * @return {Array<string>} 返回给定量的茶
//  **/
// const getTea = (numOfCups) => {
//     const teaCups = [];

//     for (let cups = 1; cups <= numOfCups; cups += 1) {
//         const teaCup = prepareTea();
//         teaCups.push(teaCup);
//     }

//     return teaCups;
// };

// // 请在本行以下添加你的代码

// const tea4TeamFCC = getTea(40); // :(

// // 请在本行以上添加你的代码

// console.log(tea4TeamFCC);
// /**
//  * 绿茶准备过程
//  * @return {string} 一杯绿茶
//  **/
// const prepareGreenTea = () => 'greenTea';

// /**
//  * 备红茶准备过程
//  * @return {string} 一杯红茶
//  **/
// const prepareBlackTea = () => 'blackTea';

// /**
//  * 获得一定数量的茶
//  * @param {function():string} prepareTea 茶的类型
//  * @param {number} numOfCups 需要茶的数量
//  * @return {Array<string>} 给定的茶
//  **/
// const getTea = (prepareTea, numOfCups) => {
//     const teaCups = [];

//     for (let cups = 1; cups <= numOfCups; cups += 1) {
//         const teaCup = prepareTea();
//         teaCups.push(teaCup);
//     }

//     return teaCups;
// };

// // 请在本行以下添加你的代码

// const tea4GreenTeamFCC = getTea(prepareGreenTea, 27); // :(
// const tea4BlackTeamFCC = getTea(prepareBlackTea, 13); // :(

// // 请在本行以上添加你的代码

// console.log(
//     tea4GreenTeamFCC,
//     tea4BlackTeamFCC
// );

// // 全局变量
// var fixedValue = 4;

// // 请在本行以下添加你的代码
// function incrementer(fixedValue) {
//     // let _fixedValue = fixedValue;
//     // return _fixedValue + 1;
//     // 请在本行以上添加你的代码
//     return fixedValue+1;
// }

// var newValue = incrementer(fixedValue); // 应等于 5
// console.log(fixedValue); // 应打印 4

// // 全局变量
// var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// /* 这个函数应该增加一本书到列表中，并返回这个列表 */
// // 新参数应在 bookName 之前

// // 请在本行以下添加你的代码
// function add(bookList, bookName) {
//     let _bookList = [...bookList];
//     _bookList.push(bookName);
//     return _bookList;
//     // 请在本行以上添加你的代码
// }

// /* 这个函数应该移除一本书到列表中，并返回这个列表 */
// // 新参数应在 bookName 之前

// // 请在本行以下添加你的代码
// function remove(bookList, bookName) {
//     let _bookList = [...bookList];
//     if (_bookList.indexOf(bookName) >= 0) {
//         _bookList.splice(_bookList.indexOf(bookName), 1);
//         // 请在本行以上添加你的代码
//         return _bookList;
//     }
// }

// var newBookList = add(bookList, 'A Brief History of Time');
// var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
// var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

// console.log(bookList);

// 全局变量
// var watchList = [{
//         "Title": "Inception",
//         "Year": "2010",
//         "Rated": "PG-13",
//         "Released": "16 Jul 2010",
//         "Runtime": "148 min",
//         "Genre": "Action, Adventure, Crime",
//         "Director": "Christopher Nolan",
//         "Writer": "Christopher Nolan",
//         "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
//         "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//         "Language": "English, Japanese, French",
//         "Country": "USA, UK",
//         "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//         "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//         "Metascore": "74",
//         "imdbRating": "8.8",
//         "imdbVotes": "1,446,708",
//         "imdbID": "tt1375666",
//         "Type": "movie",
//         "Response": "True"
//     },
//     {
//         "Title": "Interstellar",
//         "Year": "2014",
//         "Rated": "PG-13",
//         "Released": "07 Nov 2014",
//         "Runtime": "169 min",
//         "Genre": "Adventure, Drama, Sci-Fi",
//         "Director": "Christopher Nolan",
//         "Writer": "Jonathan Nolan, Christopher Nolan",
//         "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//         "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//         "Language": "English",
//         "Country": "USA, UK",
//         "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//         "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//         "Metascore": "74",
//         "imdbRating": "8.6",
//         "imdbVotes": "910,366",
//         "imdbID": "tt0816692",
//         "Type": "movie",
//         "Response": "True"
//     },
//     {
//         "Title": "The Dark Knight",
//         "Year": "2008",
//         "Rated": "PG-13",
//         "Released": "18 Jul 2008",
//         "Runtime": "152 min",
//         "Genre": "Action, Adventure, Crime",
//         "Director": "Christopher Nolan",
//         "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//         "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//         "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//         "Language": "English, Mandarin",
//         "Country": "USA, UK",
//         "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//         "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//         "Metascore": "82",
//         "imdbRating": "9.0",
//         "imdbVotes": "1,652,832",
//         "imdbID": "tt0468569",
//         "Type": "movie",
//         "Response": "True"
//     },
//     {
//         "Title": "Batman Begins",
//         "Year": "2005",
//         "Rated": "PG-13",
//         "Released": "15 Jun 2005",
//         "Runtime": "140 min",
//         "Genre": "Action, Adventure",
//         "Director": "Christopher Nolan",
//         "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//         "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//         "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//         "Language": "English, Urdu, Mandarin",
//         "Country": "USA, UK",
//         "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//         "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//         "Metascore": "70",
//         "imdbRating": "8.3",
//         "imdbVotes": "972,584",
//         "imdbID": "tt0372784",
//         "Type": "movie",
//         "Response": "True"
//     },
//     {
//         "Title": "Avatar",
//         "Year": "2009",
//         "Rated": "PG-13",
//         "Released": "18 Dec 2009",
//         "Runtime": "162 min",
//         "Genre": "Action, Adventure, Fantasy",
//         "Director": "James Cameron",
//         "Writer": "James Cameron",
//         "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//         "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//         "Language": "English, Spanish",
//         "Country": "USA, UK",
//         "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//         "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//         "Metascore": "83",
//         "imdbRating": "7.9",
//         "imdbVotes": "876,575",
//         "imdbID": "tt0499549",
//         "Type": "movie",
//         "Response": "True"
//     }
// ];

// // 请在本行以下添加你的代码

// var rating = [];
// watchList.map(item => {
//     rating.push({
//         title: item["Title"],
//         rating: item["imdbRating"]
//     })
// })
// // 请在本行以上添加你的代码

// console.log(rating);

// 全局变量
var s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
    var newArray = [];
    Array.prototype.forEach.call(this,item=>{
        newArray.push(callback(item))
    })
    // this.forEach(item => {
    //     newArray.push(callback(item))
    // })
    return newArray;

};

var new_s = s.myMap(function (item) {
    return item * 2;
});
console.log(new_s)