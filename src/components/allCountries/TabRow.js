import React from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Link } from 'react-router-dom';

function TabRow({columnData, bgcolor, cart, setCart, total, setTotal, allData}) {
    const changeCart = (nameC)=>{
        
        console.log('Buy items:-',cart)
        const addToCart = allData.find(elem=>elem.name===nameC)
        if(cart[addToCart.name]){
            cart[addToCart.name].quantity ++
        }
        else{
            const countryCart = {quantity:1, flag:addToCart.flag}
            cart[addToCart.name] = countryCart
        }
        setCart(cart)
        localStorage.setItem('cart', cart)
        setTotal(total + 1)
    }
    

    return (
        <TableRow  bgColor={bgcolor}>
                {columnData['flag']==='Flag'?(<TableCell>{columnData['flag']}</TableCell>):(<TableCell><img width="100px" height="50px" src={columnData['flag']} alt="FLAG"></img></TableCell>)}
                {columnData['name']==='Country'?(<TableCell>{columnData['name']}</TableCell>):(<TableCell><Link to={`/country/${columnData['name']}`}>{columnData['name']}</Link></TableCell>)}
                
                <TableCell>{columnData['population']}</TableCell>
                <TableCell>{columnData['region']}</TableCell>
                <TableCell>{columnData['languages'][0]['name']}</TableCell>
                <TableCell>{columnData['area']}</TableCell>
                 {columnData['shopNow']==='Shop Now'?(<TableCell>{columnData['shopNow']}</TableCell>):<TableCell><button className="btn" onClick={()=>{changeCart(columnData['name'])}}>Add To Cart</button></TableCell>}
                      
        </TableRow>
    )
}

export default TabRow
