import {Route , Routes} from "react-router-dom"
import { Homepage } from "../Pages/Homepage"
import Interviewpage from "../component/Interviewpage"
import { Mern } from "../Pages/Mern"
import { Node } from "../Pages/Node"

export const MainRoutes = () => {
    return(
<Routes>
        <Route path = "/" element = {<Homepage />} />
        <Route path = "/interview" element = {<Interviewpage />} />
        <Route path = "/mernstack" element = {<Mern />} />
        <Route path = "/nodestack" element = {<Node />} />
    </Routes>
    )
    


} 