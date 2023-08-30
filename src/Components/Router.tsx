import { createBrowserRouter } from "react-router-dom";
import ContactMain from "./ContactPage/ContactMain";

 const route:any = createBrowserRouter([
    {
        path : "/",
        element: <ContactMain/>
    }
 ]);

 export default route;