const Home = () => {
  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   getTrendingMovies().then(res => {
  //     const movies = res.data.results;
  //     setMovies(movies);
  //   });
  // }, []); // esling-ignore-line

  return (
    <div>
      <h1>Welcome to FairyMovie®</h1>

      <h2>On our site you can search for a movie.</h2>
      <h2>
        You can read about movie, see whos got the role in it, and see reviews
        for it.
      </h2>
    </div>
  );
};

export default Home;
