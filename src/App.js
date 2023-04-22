import './App.css';
import Data from './components/Data';


const error = "http://localhost:7070/error";
const data = "http://localhost:7070/data";
const loading = "http://localhost:7070/loading";

function App() {
	return (
		<div className="App">
			<Data url={error} />
			<Data url={data} />
			<Data url={loading} />
		</div>
	);
}

export default App;