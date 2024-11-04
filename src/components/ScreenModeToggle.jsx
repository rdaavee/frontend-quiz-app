import { useState } from "react";

const ScreenModeToggle = () => {
    const [state, setState] = useState("light");

    const toggle = () => {
        if (state === "light") {
            document.body.classList.add("dark");
            setState("dark")
        } else {
            document.body.classList.remove("dark");
            setState("light")
        }
    };

    return (
        <div className="flex items-center gap-3">
            <div>
                <img
                    className="w-4 hidden dark:block"
                    src="/public/icons/icon-sun-light.png"
                    alt="light"
                />
                <img
                    className="w-4 dark:hidden"
                    src="/public/icons/icon-sun-dark.png"
                    alt="dark"
                />
            </div>

            <button
                onClick={toggle}
                className={`w-12 h-7 bg-appPurple rounded-full px-1 flex items-center ${state === "light" ? "" : "justify-end"}`}>
                <span
                    className="h-5 w-5 bg-white rounded-full block">
                </span>
            </button>

            <div>
                <img
                    className="w-4 hidden dark:block"
                    src="/public/icons/icon-moon-light.png"
                    alt="light"
                />
                <img
                    className="w-4 dark:hidden"
                    src="/public/icons/icon-moon-dark.png"
                    alt="dark"
                />
            </div>
        </div>
    )
}

export default ScreenModeToggle
