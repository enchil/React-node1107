import React from "react"
import { Link, useLocation } from 'react-router-dom'
function Pagination({page, totalPages}) {
    //const location = useLocation()

    
    //const usp = new URLSearchParams(location.search)
    //page = usp.get('page')
   // console.log(page)

    return (<>
    <nav aria-label="Page navigation example">
    <ul className="pagination">
    <li className="page-item"><a className="page-link" href="#/">Previous</a></li>
    
    {Array(11).fill(1).map((el, i)=>{
        const classNames = ['page-item']
        const p = page -5+i;
        if(p<1 ||p>totalPages) return null;
        if(p===page) classNames.push('active')

        const link = `?page=${p}`
        return (
            <li key={p} className={classNames.join(' ')}>
            <Link className="page-link" to={link}>{p}</Link>
            </li>
        )
    })}
    <li className="page-item"><a className="page-link" href="#/">Next</a></li>
  </ul>
</nav>
    </>)
}
export default Pagination