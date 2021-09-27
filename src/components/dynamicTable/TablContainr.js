import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete'
import DataTable from './Table';
import {saveCountryToCart, removeCountry} from '../../redux/action'
import { Link } from 'react-router-dom';

function TablContainr({select}) {
    const dispatch = useDispatch()
    const allData = useSelector(state => state.reducer.countries)
    const filterData = useSelector(state => state.reducer.filterCountries)
    const searchActive = useSelector(state => state.reducer.searchActive)
    let items = searchActive ? filterData : allData
    
    const cart = useSelector(state=>state.reducer.cart)
    const total = useSelector(state=>state.reducer.total)
    const column = ['flag', 'name', 'nativeName', 'region', 'population', 'select']
    
    const addToCart = (country)=>{
      dispatch(saveCountryToCart(country))
      localStorage.setItem('cart', JSON.stringify(cart))
      localStorage.setItem('total',total)  
  }
  const deleteCountry = (country)=>{
        dispatch(removeCountry(country))
    }

    const columns = column.map(item=>{
        return {
            label:item.toUpperCase(),
            renderContent:(items)=>{
                switch(item){
                    case "flag":
                        return (<img height="50px" width="65px" src={items[item]} alt="no image flag"></img>)
                    case "name":
                        return <p><Link to={`/country/${items[item]}`}>{items[item]}</Link></p>
                        case "select":
                        return (<Button variant="outlined" startIcon={<SaveIcon/>} onClick={()=>{addToCart(items)}}>Like</Button>)
                    default:
                        return <p>{items[item]}</p>
                }
            }
        }
    })
    const cartColumn = ['flag', 'name', 'area', 'delete']
    const cartColumns = cartColumn.map(item=>{
        return {
            label:item.toUpperCase(),
            renderContent:(items)=>{
                switch(item){
                    case "flag":
                        return (<img height="50px" width="65px" src={items[item]} alt="no image flag"></img>)
                    case "delete":
                        return (<Button variant="outlined"  color="secondary" startIcon={<DeleteIcon/>} onClick={()=>{deleteCountry(items['name'])}}>Delete</Button>)
                    default:
                        return <p>{items[item]}</p>
                }
            }
        }
    })
    return (
        <DataTable items={select===1?items:cart} columns={select===1?columns:cartColumns}/>
    )
}

export default TablContainr
