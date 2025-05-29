import React from "react"
import useSplashPage from "./splash-page.hook"

const SplashPage: React.FC = () => {
    useSplashPage()

    return (
        <div className="flex h-screen flex-col items-center justify-center">
            <h1 className="mb-4 text-4xl">Welcome to Xomly</h1>
            <p className="text-text text-lg">
                Stay aware, stay safe in your xóm.
            </p>
        </div>
    )
}

export default SplashPage
