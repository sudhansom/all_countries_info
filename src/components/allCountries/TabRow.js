import React from 'react'
import styled from 'styled-components';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import {saveCountryToCart} from '../../redux/action';
import flag from "../../images/flag.png"
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
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
                {columnData['flag']==='Flag'?(<TableCell className="tableHeader" style={{fontSize:22}}>{columnData['flag']}</TableCell>):(<TableCell><img width="15%" height="15%" src={columnData['flag']} alt="FLAG"></img></TableCell>)}
                {columnData['name']==='Country'?(<TableCell style={{fontSize:22}}>{columnData['name']}</TableCell>):(<TableCell><Link to={`/country/${columnData['name']}`}>{columnData['name']}</Link></TableCell>)}
                <TableCell>{columnData['population']}</TableCell>
                <TableCell>{columnData['region']}</TableCell>
                {columnData['languages'][0].name==='Language'?(<TableCell style={{fontSize:22}}>{columnData['languages'][0].name}</TableCell>):(<TableCell>{columnData['languages'].map(lang=>{return (<p>{lang.name}</p>)})}</TableCell>)}
                
                <TableCell>{columnData['area']}</TableCell>
                 {columnData['select']==='Select'?(<TableCell style={{fontSize:22}}>{columnData['select']}</TableCell>):<TableCell><Button  startIcon={<SaveIcon/>} variant="outlined" className="flagIcon"  onClick={()=>{addToCart(columnData)}}>Like</Button></TableCell>}
                      
        </TableRow>
    )
}



export default TabRow

