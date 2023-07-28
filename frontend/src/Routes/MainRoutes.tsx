import {Route , Routes} from "react-router-dom"
import { Homepage } from "../Pages/Homepage"

export const MainRoutes = () => {

    return(
<Routes>
        <Route path = "/" element = {<Homepage />} />
    </Routes>
    )
    


}