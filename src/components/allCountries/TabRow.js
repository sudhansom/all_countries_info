import React from 'react'
import styled from 'styled-components';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import {saveCountryToCart} from '../../redux/action';
import flag from "../../images/flag.png"
function TabRow({columnData, bgcolor}) {
    const dispatch = useDispatch()
    const cart = useSelector(state=>state.reducer.cart)
    const total = useSelector(state=>state.reducer.total)
    
    const addToCart = (country)=>{
      dispatch(saveCountryToCart(country))
      localStorage.setItem('cart', JSON.stringify(cart))
      localStorage.setItem('total',total)  
  }
  console.log('in the TabRow...')
  

    return (
        <TableRow bgColor={bgcolor}>
                {columnData['flag']==='Flag'?(<TableCell className="tableHeader" >{columnData['flag']}</TableCell>):(<TableCell><img width="15%" height="15%" src={columnData['flag']} alt="FLAG"></img></TableCell>)}
                {columnData['name']==='Country'?(<TableCell>{columnData['name']}</TableCell>):(<TableCell><Link to={`/country/${columnData['name']}`}>{columnData['name']}</Link></TableCell>)}
                <TableCell>{columnData['population']}</TableCell>
                <TableCell>{columnData['region']}</TableCell>
                {columnData['languages'][0].name==='Language'?(<TableCell>{columnData['languages'][0].name}</TableCell>):(<TableCell>{columnData['languages'].map(lang=>{return (<p>{lang.name}</p>)})}</TableCell>)}
                
                <TableCell>{columnData['area']}</TableCell>
                 {columnData['select']==='Select'?(<TableCell>{columnData['select']}</TableCell>):<TableCell><img className="flagIcon" src={flag} onClick={()=>{addToCart(columnData)}}></img></TableCell>}
                      
        </TableRow>
    )
}



export default TabRow
