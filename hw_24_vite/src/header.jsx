import './styles/header.css'
function Header() {
    return (<>
                <nav className="nav d-flex justify-content-between pe-5 ps-5 align-items-center p-0">
                    <button className="rounded-5 post-btn">𝕏 Post</button>
                    <ul className="d-flex align-items-center m-0 p-0">
                        <li className="pt-3 pb-3 ps-2 pe-2 border-start border-end border-secondary "><a href="#">Home</a></li>
                        <li className="pt-3 pb-3 ps-2 pe-2 border-end border-secondary "><a href="#">About</a></li>
                        <li className="pt-3 pb-3 ps-2 pe-2 border-end border-secondary "><a href="#">Documentation</a></li>
                    </ul>
                </nav>
        </>
    );
}

export default Header;