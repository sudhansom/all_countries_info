import React from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import {insertToCart} from '../../redux/action'

function TabRow({columnData, bgcolor, cart, setCart, total, setTotal, allData}) {
    const dispatch = useDispatch()
    const carts = useSelector(state=>state.cart)
    const totl = useSelector(state=>state.total)
    
    const addToCart = (country)=>{
      dispatch(insertToCart(country))
      localStorage.setItem('cart', JSON.stringify(carts))
      localStorage.setItem('total',totl)
  }
  

    return (
        <TableRow  bgColor={bgcolor}>
                {columnData['flag']==='Flag'?(<TableCell>{columnData['flag']}</TableCell>):(<TableCell><img width="100px" height="50px" src={columnData['flag']} alt="FLAG"></img></TableCell>)}
                {columnData['name']==='Country'?(<TableCell>{columnData['name']}</TableCell>):(<TableCell><Link to={`/country/${columnData['name']}`}>{columnData['name']}</Link></TableCell>)}
                
                <TableCell>{columnData['population']}</TableCell>
                <TableCell>{columnData['region']}</TableCell>
                <TableCell>{columnData['languages'][0]['name']}</TableCell>
                <TableCell>{columnData['area']}</TableCell>
                 {columnData['shopNow']==='Shop Now'?(<TableCell>{columnData['shopNow']}</TableCell>):<TableCell><button className="btn" onClick={()=>{addToCart(columnData)}}>Add To Cart</button></TableCell>}
                      
        </TableRow>
    )
}

export default TabRow
