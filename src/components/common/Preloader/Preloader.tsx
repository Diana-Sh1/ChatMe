import preloader from "../../../assets/preloader.svg";
import React, {FC} from "react";

let Preloader: FC = () => {
    return <div>
        <img src={preloader}/>
    </div>
}
export default Preloader;