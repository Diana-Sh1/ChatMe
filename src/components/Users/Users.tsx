import React, {FC, useEffect} from "react";
import s from "./Users.module.css"
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UsersSearchForm} from "./UsersSearchForm";
import {FilterType, follow as followThunk, requestUsers, unfollow as unfollowThunk} from "../../redux/users-reducer";
import {useDispatch, useSelector} from "react-redux";

import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getUsersFilter
} from "../../redux/users-selector";
import {AppDispatch} from "../../redux/redux-store";
import {useLocation, useNavigate} from "react-router-dom";


export const Users: FC = () => {

    const users = useSelector(getUsers)
    const totalItemsCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const followingInProgress = useSelector(getFollowingInProgress)

    const dispatch: AppDispatch = useDispatch()
    const history = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const search = location.search
        const params = new URLSearchParams(search)
        const parsedTerm = params.get('term')
        const parsedPage = params.get('page')
        const parsedFriend = params.get('friend')
        let actualPage = currentPage
        let actualFilter = filter

        if (parsedPage !== null) {
            actualPage = Number(parsedPage)
        }
        if (parsedTerm !== null) {
            actualFilter = { ...actualFilter, term: parsedTerm }
        }
        switch (parsedFriend) {
            case '':
                actualFilter = { ...actualFilter, friend: null }
                break
            case 'true':
                actualFilter = { ...actualFilter, friend: true }
                break
            case 'false':
                actualFilter = { ...actualFilter, friend: false }
                break
        }
        dispatch(requestUsers(actualPage, pageSize, actualFilter))
    }, [])

    useEffect(() => {
        const query: { term?: string; friend?: string; page?: string } = {}

        if (filter.term) query.term = filter.term
        if (filter.friend !== null) query.friend = String(filter.friend)
    if (currentPage !== 1) query.page = String(currentPage)

        const queryToString = new URLSearchParams(query)

        history({
            pathname: '/users',
            search: queryToString.toString(),
        })
    }, [filter, currentPage])

    const onPageChanged =(pageNumber: number)=> {
        dispatch(requestUsers(pageNumber, pageSize, filter));
    }
    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter))
    }
    const follow = (userId: number) => {
        dispatch(followThunk(userId));
    }
    const unfollow = (userId: number) => {
        dispatch(unfollowThunk(userId));
    }

    return <div className={s.content}>
        <h2 className={s.title}>List of Users</h2>
        <div className={s.pagination}>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalItemsCount={totalItemsCount} pageSize={pageSize}/>
        </div>
        <div><UsersSearchForm onFilterChanged={onFilterChanged}/></div>
        {users.map(u => <User key={u.id} user={u}
                              followingInProgress={followingInProgress}
                              unfollow={unfollow}
                              follow={follow}/>)
        }
    </div>
}


