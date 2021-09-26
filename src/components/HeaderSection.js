import React, {useState} from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux'
import { filterSearchCountries, selectTheme, sortTheCountries} from '../redux/action';

import 'fontsource-roboto';
import Topography from '@material-ui/core/Typography'
import Navbar from './Navbar';

function HeaderSection() {
    return (
        <div className="HeaderSection">
            <div>
                 <Navbar />
            </div>
            <div className="header_info">
                <Topography variant="h2">
                DATA MAKES US POWERFUL
                </Topography>
                <Topography variant="body1">find all the countries info you need...</Topography>   
            </div>      
        </div>
    )
}

export default HeaderSection


