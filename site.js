/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/


const vue_app = Vue.createApp({
      // This automatically imports your movies.json file and puts it into
      //   the variable: movies
      created () {
            fetch('movies.json').then(response => response.json()).then(json => {
                  this.movies = json
            })
      },
      data() {
        return {
            // This holds your movies.json data.
            movies: [],
            title: "IMDB + Emilio's Top 8 Movies",
            owner: "Emilio",
            github:"https://github.com/EmilioZ24/Zapata-P3",
            /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
         
      }
    },
      methods: {
    /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
       getMonthText(dateArray) {
             const months = [
                   'January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'
                  ];
            
                  const month = months[dateArray[1] - 1];
                  const day = dateArray[2];
                  const year = dateArray[0];
            
                  return `${month} ${day}, ${year}`;
                },
      likes(index){
            this.movies[index].likes++;
      },
      dislikes(index){
            this.movies[index].dislikes++;
      },
      posterClick(index) {
            const movie = this.movies[index];
            const numPosters = movie.posters.length;
      
            // Increment posterindex for the movie at the given index
            movie.posterindex = (movie.posterindex + 1) % numPosters;
          }
}
});

vue_app.mount("#vue_app")
