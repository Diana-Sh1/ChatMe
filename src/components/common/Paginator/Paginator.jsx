import React from "react";
import s from "./Paginator.module.css"

let Paginator = ({currentPage, onPageChanged, totalItemsCount, pageSize}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let slicedPages;
    let curPage = currentPage;

    if (curPage - 3 < 0) {
        slicedPages = pages.slice(0, 5);
    } else {
        slicedPages = pages.slice(curPage - 3, curPage + 2);
    }

    return <>
        {slicedPages.map(p => {
            return <span key={p.id} onClick={() => {
                onPageChanged(p)
            }}
                         className={currentPage === p ? s.selectedPage : ''}>{p}</span>
        })}
    </>

}

export default Paginator;