const movies = [
    { title: 'Dilwale Dulhania Le Jayenge', genre: 'Romance', release: 1995, director: 'Aditya Chopra' },
    { title: '3 Idiots', genre: 'Comedy', release: 2009, director: 'Rajkumar Hirani' },
    { title: 'Dangal', genre: 'Biography', release: 2016, director: 'Nitesh Tiwari' },
    { title: 'Sholay', genre: 'Action', release: 1975, director: 'Ramesh Sippy' },
    { title: 'Kabhi Khushi Kabhie Gham', genre: 'Drama', release: 2001, director: 'Karan Johar' },
    { title: 'Gully Boy', genre: 'Musical', release: 2019, director: 'Zoya Akhtar' },
    { title: 'Lagaan', genre: 'Sport', release: 2001, director: 'Ashutosh Gowariker' },
    { title: 'PK', genre: 'Comedy', release: 2014, director: 'Rajkumar Hirani' },
    { title: 'Baahubali: The Beginning', genre: 'Fantasy', release: 2015, director: 'S. S. Rajamouli' },
    { title: 'Padmaavat', genre: 'Drama', release: 2018, director: 'Sanjay Leela Bhansali' },
    { title: 'Swades', genre: 'Drama', release: 2004, director: 'Ashutosh Gowariker' },
    { title: 'Koi... Mil Gaya', genre: 'Sci-Fi', release: 2003, director: 'Rakesh Roshan' },
    { title: 'Bajrangi Bhaijaan', genre: 'Adventure', release: 2015, director: 'Kabir Khan' },
    { title: 'Queen', genre: 'Comedy', release: 2014, director: 'Vikas Bahl' },
    { title: 'Barfi!', genre: 'Comedy', release: 2012, director: 'Anurag Basu' },
    { title: 'Zindagi Na Milegi Dobara', genre: 'Drama', release: 2011, director: 'Zoya Akhtar' },
    { title: 'Andhadhun', genre: 'Thriller', release: 2018, director: 'Sriram Raghavan' },
    { title: 'Dil Chahta Hai', genre: 'Drama', release: 2001, director: 'Farhan Akhtar' },
    { title: 'Chak De! India', genre: 'Sport', release: 2007, director: 'Shimit Amin' },
    { title: 'Mughal-E-Azam', genre: 'Drama', release: 1960, director: 'K. Asif' }
]

let moviesFilter = movies.filter( (movies) => movies.genre === "Comedy")
console.log(`The list of Comedy Movies :\n${ moviesFilter.map(movie => movie.title)}`)
