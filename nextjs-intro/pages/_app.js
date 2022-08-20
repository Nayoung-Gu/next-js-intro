import NavBar from "../components/NavBar";
import "../styles/globals.css";

// Next app will automatically load this file as a blueprint
export default function App({ Component, pageProps }) {
    return (
        <div>
            <NavBar />
            <Component {...pageProps} />
            <style jsx global>{`
                a {
                    color: white;
                }
            `}</style>
        </div>
    );
}
