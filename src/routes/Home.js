import React, {useState, useEffect} from "react";
import axios from "axios";
import Movie from "../components/Movie";
import styled from "styled-components";

// class Home extends React.Component {
//   state = {
//     isLoading: true,
//     movies: []
//   };
//   getMovies = async () => {
//     const {
//       data: {
//         data: { movies }
//       }
//     } = await axios.get(
//       "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
//     );
//     this.setState({ movies, isLoading: false });
//   };
//   componentDidMount() {
//     this.getMovies();
//   }
//   render() {
//     const { isLoading, movies } = this.state;
    
//   }
// }

const Container = styled.section`
height: 100%;
display: flex;
justify-content: center;
`;

const Loader = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
font-weight: 300;
`;

const Movies = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;
flex-wrap: wrap;
padding: 50px;
padding-top: 70px;
width: 80%;
`;



function Home(){
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    setMovies(movies);
    setIsLoading(false);

  };
  useEffect(() => {
    // 브라우저 API를 이용하여 문서 타이틀을 업데이트합니다.
    getMovies();
  });

  return (
    <Container>
      {isLoading ? (
        <Loader>
          <span className="loader__text">Loading...</span>
        </Loader>
      ) : (
        <Movies>
          {movies.map(movie => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          ))}
        </Movies>
      )}
    </Container>
  );



}

export default Home;
