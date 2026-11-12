import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-dark">
                <div className="container">
                    <Link className="navbar-brand fw-bold fs-4" to="/">
                        My Todo APP
                    </Link>

                    <div className="d-flex align-items-center gap-3">
                        <Link to='/dashboard/addTodo'>
                            <button className="btn btn-success px-4">Dashboard</button>
                        </Link>

                        {/* Menu Toggle */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                    </div>

                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="navbarNav" aria-labelledby="navbarNavLabel">
                        <div className="offcanvas-header border-bottom">
                            <h5 className="offcanvas-title fw-bold" id="navbarNavLabel">My Todo APP</h5>

                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            />
                        </div>

                        <div className="offcanvas-body">
                            <ul className="navbar-nav gap-2">

                                <li className="nav-item">
                                    <Link className="nav-link active" to="/">
                                        Home
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">
                                        About
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Header
