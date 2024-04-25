import './App.css'
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

// eslint-disable-next-line react/prop-types
function MainArena({ element }) {
    return (
        <>
            <Header />
            <main className="main-arena">
                <Sidebar />
                {element}
            </main>
        </>
    )
}

export default MainArena