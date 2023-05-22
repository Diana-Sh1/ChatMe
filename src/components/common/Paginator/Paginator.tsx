import React, {FC} from "react";
import s from "./Paginator.module.css"
import {useState} from "react";

type Props = {
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    totalItemsCount: number
    pageSize: number
    portionSize?: number
}
let Paginator: FC<Props> = ({currentPage, onPageChanged, totalItemsCount, pageSize, portionSize = 8}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages: number[] = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;


    return <>
        {portionNumber > 1 &&
            <button onClick={()=> {setPortionNumber(portionNumber - 1 )}}>&#8592;</button>}

        {pages
            .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
            .map(p => {
            return <span key={p} onClick={() => {
                onPageChanged(p)
            }}
                         className={currentPage === p ? s.selectedPage : ''}>{p}</span>
        })}
        { portionCount > portionNumber &&
            <button onClick={()=> {setPortionNumber (portionNumber + 1)}}>&#8594;</button>
        }
    </>
}

export default Paginator;