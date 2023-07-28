import {Route , Routes} from "react-router-dom"
import { Homepage } from "../Pages/Homepage"
import { Mern } from "../Pages/Mern"
import { Node } from "../Pages/Node"
import Interviewpage from "../component/Interviewpage"

export const MainRoutes = () => {
    return(
<Routes>
        <Route path = "/" element = {<Homepage />} />
        <Route path="/mernstack" element = {<Mern/>} />
        <Route path="/nodestack" element = {<Node/>} />
        <Route path = "/interview" element = {<Interviewpage />} />
    </Routes>
    )
    


} 