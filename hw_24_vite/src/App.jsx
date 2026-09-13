import Header from './header.jsx';
import Bunner from './bunner.jsx';
import Footer from './footer.jsx';
import Description from "./description.jsx";
import './styles/App.css'

function App() {
    const mainText = `{
\t"name": "Luke Skywalker",
\t"height": "172",
\t"mass": "77",
\t"hair_color": "blond",
\t"skin_color": "fair",
\t"eye_color": "blue",
\t"birth_year": "19BBY",
\t"gender": "male",
\t"homeworld": "https://swapi.dev/api/planets/1/",
\t"films": [
\t\t"https://swapi.dev/api/films/2/",
\t\t"https://swapi.dev/api/films/6/",
\t\t"https://swapi.dev/api/films/3/",
\t\t"https://swapi.dev/api/films/1/",
\t\t"https://swapi.dev/api/films/7/"
\t],
\t"species": [
\t\t"https://swapi.dev/api/species/1/"
\t],
\t"vehicles": [
\t\t"https://swapi.dev/api/vehicles/14/",
\t\t"https://swapi.dev/api/vehicles/30/"
\t],
\t"starships": [
\t\t"https://swapi.dev/api/starships/12/",
\t\t"https://swapi.dev/api/starships/22/"
\t],
\t"created": "2014-12-09T13:50:51.644000Z",
\t"edited": "2014-12-20T21:17:56.891000Z",
\t"url": "https://swapi.dev/api/people/1/"
}
`
    return (
        <>
        <Header/>
        <Bunner/>
        <Description/>

        <section className="try-it mt-5 mb-5">
            <div className="container">
                <h2>Try it now!</h2>
                <div className="request-bar d-flex">
                    <span className="base-url">https://swapi.dev/api/</span>
                    <input className="flex-grow-1" type="text" id="pathInput" placeholder="people/1/"
                           value="people/1/"/>
                    <button onClick="makeRequest()">request</button>
                </div>
                <p className="hint text-start">Need a hint?
                    try <i>people/1/</i> or <i>planets/3/</i> or <i>starships/9/</i></p>
            </div>
        </section>
        <section className="result-section pb-5">
            <div className="container d-flex flex-column">
                <h3 className="text-start">Result:</h3>
                <div className="border-result-box">
                    <pre className="result-box overflow-auto text-start border m-4" id="resultBox" >{mainText}</pre>
                </div>
            </div>
        </section>
    <Footer/>
</>
);
}

export default App
