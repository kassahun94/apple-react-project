import "./assets/css/styles.css";
import "./assets/css/bootstrap.css";
import "./assets/js/bootstrap.js";
import "./assets/toggle/custom.js";
import Arcade from "./components/Arcade";
import Banker from "./components/Banker";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Iphone from "./components/Iphone";
import IphonePro from "./components/IphonePro";
import Landing from "./components/Landing";
import Macbook from "./components/Macbook";

function App() {
	return (
		<>
			<Header />
			<Landing />
			<Macbook />
			<IphonePro />
			<Iphone />
			<Banker />
			<Arcade />
			<Footer />
		</>
	);
}

export default App;
