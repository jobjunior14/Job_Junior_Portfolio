
import { useEffect } from "react"
export default function FallBack () {

    useEffect(() => {
        scrollTo(0, 0)
    })
    return (
        <div className=" w-full min-h-screen flex gap-5 justify-center items-center">

            <div className="h-6 w-6 rounded-full bg-blue-500  animate-loadigDiv1">

            </div>
            <div className="h-6 w-6 rounded-full bg-blue-500 animate-loadigDiv2">

            </div>
            <div className="h-6 w-6 rounded-full bg-blue-500 animate-loadigDiv3">

            </div>

        </div>
    )
}