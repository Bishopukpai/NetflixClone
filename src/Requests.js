const key = '579941457182ee9ae3d28f099b58bd6b';

const requests = {
toprated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
Latest: `https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US`,
RecommendedMovies: `https://api.themoviedb.org/3/movie/{movie_id}/recommendations?api_key=${key}&language=en-US&page=1`,
NewMovies: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
SimilarMovies: `https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=${key}&language=en-US&page=1`,
Popular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
Upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
movieThrailer: ` https://api.themoviedb.org/3/movie/{297762}/videos?api_key=${key}&language=en-US`
};

export default requests