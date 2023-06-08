import {connect} from "react-redux";
import {
    follow,
    unfollow,
    requestUsers, FilterType
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers, getUsersFilter
} from "../../redux/users-selector";
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    users: UserType[]
    totalItemsCount: number
    followingInProgress: number[]
    filter: FilterType

}
type MapDispatchPropsType = {
    follow: (userId: number)=> void
    unfollow: (userId: number)=> void
    requestUsers: (currentPage: number, pageSize: number, filer: FilterType) => void
}


type PropsType = MapStatePropsType & MapDispatchPropsType
class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize, this.props.filter);
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize, filter} = this.props
        this.props.requestUsers(pageNumber, pageSize, filter);
    }

    onFilterChanged = (filter: FilterType) => {
        const {pageSize } = this.props;
        this.props.requestUsers(1, pageSize, filter)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalItemsCount={this.props.totalItemsCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   onPageChanged={this.onPageChanged}
                   onFilterChanged={this.onFilterChanged}
                   followingInProgress={this.props.followingInProgress}/>
        </>
    }
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        filter: getUsersFilter(state)
    }
}

export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
        follow, unfollow, requestUsers
    })
)(UsersContainer)
