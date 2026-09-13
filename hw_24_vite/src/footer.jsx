import './styles/footer.css'
function Footer() {
    return (
        <>
            <section className="inform row">
                <div className="info-col col-12 col-md-4">
                    <h4>What is this?</h4>
                    <p>The Star Wars API, or "swapi" (Swah-pee) is the world's first quantified and
                        programmatically-accessible data
                        source for all the data from the Star Wars canon universe!</p>
                    <p>We've taken all the rich contextual stuff from the universe and formatted into something easier
                        to consume
                        with software. Then we went and stuck an API on the front so you can access it all!</p>
                </div>
                <div className="info-col col-12 col-md-4">
                    <h4>How can I use it?</h4>
                    <p>All the data is accessible through our HTTP web API. Consult our <a href="#">documentation</a> if
                        you'd like
                        to get started.</p>
                    <p>Helper libraries for popular programming languages are also provided so you can consume swapi in
                        your
                        favourite programming language, in a style that suits you.</p>
                </div>
                <div className="info-col col-12 col-md-4">
                    <h4>What happened with old swapi.co?</h4>
                    <p>swapi.co is not supported and maintained anymore. But since so many projects and tutorials used
                        it as their
                        educational playground, this is an "unofficial" branch.</p>
                    <p>This project is open source you can contribute on <a href="#">GitHub</a>.</p>
                </div>
            </section>
            <section className="created-by p-3 d-flex justify-content-between align-items-center">
                <span>
                    Created by Paul Hallett Maintained by Juriy Bura ©2026
                </span>
                <div className="buttons d-flex gap-1">
                    <a>𝕏 Follow</a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                    </svg> Follow @juriy</a>
                </div>
            </section>
        </>
    );
}

export default Footer;