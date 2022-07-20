import "./App.css";
import WeatherCard from "./components/WeatherCard";
import { Container } from "react-bootstrap";
import City from "./components/City";
import UseFetch from "./components/UseFetch";
import { API_KEY, API_BASE_URL } from "./apis/config";
import WeatherList from "./components/WeatherList";

function App() {
  const { data, error, isLoading, setUrl } = UseFetch();
  console.log(data);

  // error handling and loading

  const getContent = () => {
    if (error) return <h2>Error when fetching: {error}</h2>;
    if (!data && isLoading) return <h2>LOADING...</h2>;
    if (!data) return null;
    return <WeatherList weathers={data.list} />;
  };
  return (
    <Container className="App">
      <City
        onSearch={(city) =>
          setUrl(
            `${API_BASE_URL}/data/2.5/forecast?q=${city}&cnt=5&units=metric&appid=${API_KEY}`
          )
        }
      />
      {/* don't forget the change */}
      {getContent()}
    </Container>
  );
}

export default App;
