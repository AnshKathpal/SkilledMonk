import {Route , Routes} from "react-router-dom"
import { Homepage } from "../Pages/Homepage"
import Interviewpage from "../component/Interviewpage"

export const MainRoutes = () => {
    return(
<Routes>
        <Route path = "/" element = {<Homepage />} />
        <Route path = "/interview" element = {<Interviewpage />} />
    </Routes>
    )
    


} 