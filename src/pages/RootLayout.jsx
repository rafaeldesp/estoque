import { Outlet, Link } from "react-router-dom";

export default function RootLayout() {
    return(
        <>
            <header>
                <Link to='/' className='Logo'></Link>
                <nav>
                    <Link to='/'>Inicio</Link>
                    <Link to='/items'>Items</Link>
                </nav>
            </header>
            <div>
                <Outlet/>
            </div>
            <footer>
                feito por rafael
            </footer>
        </>
    )
}