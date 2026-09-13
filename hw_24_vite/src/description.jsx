import './styles/buner-description.css'
function Description() {
    return (
        <>
            <section className="description pt-5 pb-5 border-top border-bottom border-dark">
                <p>All the Star Wars data you've ever wanted:</p>
                <p className="films"><strong>Planets, Spaceships, Vehicles, People, Films and Species</strong></p>
                <p>From all <span className="seven">SEVEN</span> Star Wars films</p>
                <p>Now with The Force Awakens data!</p>
            </section>
        </>
    )
}

export default Description;