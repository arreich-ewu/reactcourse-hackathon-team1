export default class MovieModel {
    constructor(title, synopsis, cast, directors, showingTimes, releaseDate,
      filmStatus, img, _id) {
      this.title = title;
      this.synopsis = synopsis;
      this.cast = cast;
      this.directors = directors;
      this.showingTimes = showingTimes;
      this.releaseDate = releaseDate;
      this.filmStatus = filmStatus;
      this.img = img;
      this._id = _id;
    }
  }
