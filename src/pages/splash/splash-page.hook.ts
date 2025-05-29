import { useEffect } from "react"
import { useHistory } from "react-router-dom"

const useSplashPage = () => {
    const history = useHistory()

    useEffect(() => {
        setTimeout(() => {
            history.push("/home")
        }, 1000)
    }, [history])

    return {}
}

export default useSplashPage
