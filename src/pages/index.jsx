import { Link } from "react-router-dom";

 export default function Home() {
    return ( 
        <div>
            <header >
                <div className="header_inner conteiner">
                    <div>
                        <Link to="/">articuleuz</Link>
                        <nav>
                            <Link to="/">iqtisodiyot</Link>
                            <Link to="/">Talim</Link>
                            <Link to="/">qurilish</Link>
                            <Link to="/">muhim</Link>
                        </nav>
                    </div>
                    <div></div>
                </div>
            </header>
        </div>
     );
}

