// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directorsArr = moviesArray.map((movie) => movie.director);
  return directorsArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let spielbergMovies = moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );
  return spielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  } else {
    let scores = moviesArray.map((movie) => {
      if (typeof movie.score !== "number") {
        return 0;
      } else {
        return movie.score;
      }
    });
    let scoresReduced = scores.reduce((acc, index) => acc + index);
    let avg = scoresReduced / moviesArray.length;
    avg = Number(avg.toFixed(2));
    return avg;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaScores = moviesArray.reduce((acc, movie) => {
    if (movie.genre.includes("Drama")) {
      return acc + movie.score;
    } else {
      return acc;
    }
  }, 0);
  let countDramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  let avg = Number((dramaScores / countDramaMovies.length).toFixed(2));
  if (countDramaMovies.length !== 0) {
    return avg;
  } else {
    return 0;
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let moviesCopy = [...moviesArray];
  let moviesYearsOrdered = moviesCopy.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });
  return moviesYearsOrdered;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let moviesCopy = [...moviesArray];
  let moviesTitles = moviesCopy.map((movie) => movie.title);
  let alphOrdered = moviesTitles.sort((a, b) => a.localeCompare(b));
  if (alphOrdered.length < 20) {
    return alphOrdered;
  } else {
    return alphOrdered.slice(0, 20);
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let copy = JSON.parse(JSON.stringify(moviesArray));
  for (let i = 0; i < copy.length; i++) {
    let durationParts = copy[i].duration.split(" ");
    let hours = parseInt(durationParts[0]);
    let minutes = parseInt(durationParts[1]);
    let totalMin;
    if (!minutes) {
      totalMin = hours * 60;
    } else {
      totalMin = 60 * hours + minutes;
    }
    copy[i].duration = totalMin;
  }
  return copy;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if (movies.length === 0) {
    return null;
  } else {
    if (movies.length === 1) {
      return `The best year was ${movies[0].year} with an average score of ${movies[0].score}`;
    } else {
      let yearScores = {};
      for (let i = 0; i < movies.length; i++) {
        let movie = movies[i];
        if (!yearScores[movie.year]) {
          yearScores[movie.year] = { totalScore: 0, count: 0 };
        }
        yearScores[movie.year].totalScore += movie.score;
        yearScores[movie.year].count += 1;
      }
      let bestYear = null;
      let bestAverageScore = 0;
      let years = Object.keys(yearScores);
      for (let i = 0; i < years.length; i++) {
        let year = years[i];
        let averageScore = yearScores[year].totalScore / yearScores[year].count;
        if (averageScore > bestAverageScore) {
          bestAverageScore = averageScore;
          bestYear = year;
        }
      }
      return `The best year was ${bestYear} with an average score of ${bestAverageScore.toFixed(
        1
      )}`;
    }
  }
}
