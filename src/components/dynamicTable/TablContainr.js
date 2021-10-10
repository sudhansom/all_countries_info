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
    const total = cart.length
    const column = useSelector(state=>state.reducerCountries.colNames)
   
    const addToCart = (country)=>{
      dispatch(saveCountryToCart(country))
      localStorage.setItem('cart', JSON.stringify(cart))     
  }
  const deleteCountry = (country)=>{
        dispatch(removeCountry(country))
    }
    const display = (items, item)=>{
        const value = items[item]
        const typeOf = typeof value
        if(item==="select"){
            return (<Button variant="outlined" color="primary" startIcon={<SaveIcon/>} disabled={false} onClick={()=>{addToCart(items)}}>Like</Button>)
        }
        switch(typeOf){
            case "string":
                return <p>{value}</p>
            case "number":
                return <p>{value}</p>
            case "object":
                if(Array.isArray(value)){
                    for (let key=0;key<value.length; key++){
                        console.log(value[key])
                        return display(value, key)
                    }
                    //return <p>array</p>
                }else{
                    Object.keys(value).map((key,index)=>{
                        return display(value, key)})
                    //return <p>object</p>
                }
            default:
                return <p>none</p>
                
        }
    }
    let columns = []

 if(column.length>0){
     try{
        columns = column.map(item=>{
            return {
            label:item.toUpperCase(),
            renderContent:(items)=>{ return display(items, item)}
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
