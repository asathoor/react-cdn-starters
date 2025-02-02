import * as React from "https://cdn.skypack.dev/react";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom";
import { HashRouter, Routes, Route, NavLink } from "https://cdn.skypack.dev/react-router-dom";

// ====== PAGES ====== //
function Home() {
    return (
        <section className="page">
            <h1>Home Page</h1>
        </section>
    );
}

function About() {
    return (
        <section className="page">
            <h1>About Page</h1>
        </section>
    );
}

function Clients() {
    return (
        <section className="page">
            <h1>Clients Page</h1>
        </section>
    );
}

// ====== COMPONENTS ====== //
function Nav() {
    return (
        <nav>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                About
            </NavLink>
            <NavLink to="/clients" className={({ isActive }) => (isActive ? "active" : "")}>
                Clients
            </NavLink>
        </nav>
    );
}

// ====== APP ====== //
function App() {
    return (
        <main>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/clients" element={<Clients />} />
            </Routes>
        </main>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
    </React.StrictMode>,
    document.querySelector("#root")
);
