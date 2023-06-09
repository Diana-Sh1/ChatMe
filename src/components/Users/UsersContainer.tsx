import {useSelector} from "react-redux";
import React, {FC} from "react";
import Preloader from "../common/Preloader/Preloader";
import {getIsFetching} from "../../redux/users-selector";
import {Users} from "./Users";



 const UsersPage: FC = () => {
    const isFetching =  useSelector(getIsFetching)

    return <>
        {isFetching ? <Preloader/> : null}
        <Users/>
    </>
}
export default UsersPage