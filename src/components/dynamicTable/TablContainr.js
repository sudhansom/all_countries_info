import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete'
import DataTable from './Table';
import {saveCountryToCart, removeCountry} from '../../redux/action'
import { Link } from 'react-router-dom';

function TablContainr({select}) {
    const dispatch = useDispatch()
    const allData = useSelector(state => state.reducerCountries.countries)
    const filterData = useSelector(state => state.reducerCountries.filterCountries)
    const searchActive = useSelector(state => state.reducerCountries.searchActive)
    let items = searchActive ? filterData : allData
    
    const cart = useSelector(state=>state.reducerCountries.cart)
    const total = useSelector(state=>state.reducerCountries.total)
    const column = useSelector(state=>state.reducerCountries.colNames)
   
    const addToCart = (country)=>{
      dispatch(saveCountryToCart(country))
      localStorage.setItem('cart', JSON.stringify(cart))
      localStorage.setItem('total',total)  
  }
  const deleteCountry = (country)=>{
        dispatch(removeCountry(country))
    }
    let columns = []

 if(column.length>0){
     try{
        columns = column.map(item=>{
            return {
            label:item.toUpperCase(),
            renderContent:(items)=>{
                switch(item){
                    case "topLevelDomain":
                        if(items[item]){
                            return (<p>{items[item][0]}</p>)
                        }else{
                            return <p>loading...</p>
                        }
                    case "callingCodes":
                        if(items[item]){
                            return (<p>{items[item][0]}</p>)
                        }else{
                            return <p>loading...</p>
                        }
                    case "altSpellings":
                        if(items[item]){
                            return (<p>{items[item][0]}</p>)
                        }else{
                            return <p>loading...</p>
                        }
                    case "latlng":
                        if(items[item]){
                            return (<p>{items[item][0]}</p>)
                        }else{
                            return <p>loading...</p>
                        }
                    case "timeZones":
                        if(items[item]){
                            return (<p>{items[item][0]}</p>)
                        }else{
                            return <p>loading...</p>
                        }
                    case "borders":
                        if(items[item]){
                            return (<p>{items[item][0]}</p>)
                        }else{
                            return <p>loading...</p>
                        }
                    case "flags":
                        if(items[item]){
                            return (<p>{items[item]['svg']}</p>)
                        }else{
                            return <p>loading...</p>
                        }
                    case "currencies":
                        if(items[item]){
                            return (<p>{items[item][0]['code']}</p>)
                        }else{
                            return <p>loading...</p>
                        }
                    case "languages":
                        if(items[item]){
                            return (<p>{items[item][0]['name']}</p>)
                        }else{
                            return <p>loading...</p>
                        }
                    case "translations":
                        if(items[item]){
                            return (<p>{items[item]['br']}</p>)
                        }else{
                            return <p>loading...</p>
                        }
                    case "regionalBlocs":
                        if(items[item]){
                            return (<p>{items[item][0]['acronym']}</p>)
                        }else{
                            return <p>loading...</p>
                        }
                    case "flag":
                        if(items[item]){
                            return (<img height="50px" width="65px" src={items[item]} alt="no image flag"></img>)
                        }else{
                            return <p>loading...</p>
                        }
                    case "name":
                        return <p><Link to={`/country/${items[item]}`}>{items[item]}</Link></p>
                        case "select":
                        return (<Button variant="outlined" color="primary" startIcon={<SaveIcon/>} disabled={false} onClick={()=>{addToCart(items)}}>Like</Button>)
                    default:
                        return <p>{items[item]}</p>
                }
            }
        }
    })}catch{
        console.log('waiting....')
    }
 }
    const cartColumn = ['flag', 'name', 'area', 'delete']
    const cartColumns = cartColumn.map(item=>{
        return {
            label:item.toUpperCase(),
            renderContent:(items)=>{
                switch(item){
                    case "flag":
                        return (<img height="50px" width="65px" src={items['flag']} alt="no image flag"></img>)
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
