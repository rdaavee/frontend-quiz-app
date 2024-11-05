import { Outlet } from "react-router-dom"
import ScreenModeToggle from "../components/ScreenModeToggle"

const AppLayout = () => {
    return (
        <div className="bg-lightGrey dark:bg-darkNavy min-h-screen">
            <div className="container mx-auto px-4 pt-10 flex flex-col gap-14 lg:pt-20 lg:gap-24">
                <header className="flex items-center justify-between">
                    <div className="">Quiz Title</div>
                    <div className="">
                        <ScreenModeToggle />
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default AppLayout
