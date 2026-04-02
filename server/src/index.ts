import { validate } from "class-validator";
import { Movie } from "./entities/Movie";

const movie = new Movie();
movie.name = "The Dark Knight";
movie.type = ["Action", "Drama"];
movie.area = ["USA"];
movie.duration = 152;
movie.isHot = true;
movie.isComing = false;
movie.isClassic = false;
movie.description = "A superhero movie about a man who becomes a superhero and fights crime.";
movie.poster = "https://www.imdb.com/title/tt0468569/";
console.log(movie);

validate(movie).then(errors => {
  console.log(errors);
});
