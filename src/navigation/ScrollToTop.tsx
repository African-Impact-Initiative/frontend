import { useEffect } from 'react'
import { useLocation } from 'react-router'

// wrapper so that the page always loads at top
// router does not handle this :(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ScrollToTop = (props: any) => {
    const location = useLocation()
    const top = 0

    useEffect(() => {
        window.scrollTo(top, top)
    }, [location])

    return <>{props.children}</>
}

export default ScrollToTop