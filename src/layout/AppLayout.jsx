import { Outlet } from "react-router-dom"

const AppLayout = () => {
    return (
        <div>
            <header>
                header
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default AppLayout
