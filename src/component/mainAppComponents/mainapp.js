import UpperSection from "../mainAppComponents/upperSection.js";
import LowerSection from "../mainAppComponents/lowerSection.js";
import "../mainAppComponents/mainComponent.css"

function MainApp({data}){
    return(
    <div>
        <UpperSection data ={data}/>
    </div>
    );
}
export default MainApp;