import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { Button, Dialog, DialogTitle, Checkbox } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import Slider from "@material-ui/core/Slider";

import fullmoon from "../images/fullmoon.png";
import darkmoon from "../images/darkmoon.png";
import {
  saveKeys,
  selectTheme,
  sortTheCountries,
  filterSearchCountries,
} from "../redux/action";

function HeadBar() {
  const [slider, setSlider] = useState(0);
  const [input, setInput] = useState("");
  const [colNames, setColNames] = useState([]);
  const countries = useSelector((state) => state.reducerCountries.countries);
  let key = {};
  if (countries.length > 0) {
    key = Object.keys(countries[0]);
  } else {
    key = [];
  }
  const dispatch = useDispatch();

  const sortCountries = (e) => {
    e.preventDefault();
    dispatch(sortTheCountries(e.target.value));
  };

  const searchField = (text) => {
    setInput(text);
  };
  const filterCountries = (text) => {
    dispatch(
      filterSearchCountries(
        countries.filter((elem) => elem.name.toLowerCase().startsWith(text)),
        text
      )
    );
  };

  useEffect(() => {
    let timer;
    const search = async (input) => {
      await new Promise((resolve) => {
        timer = setTimeout(resolve, 1000);
      });
      filterCountries(input);
      console.log("changed input is ...", input);
    };
    search(input);
    return () => {
      clearTimeout(timer);
    };
  }, [input, filterCountries]);

  const [open, setOpen] = useState(false);
  const closeDialog = () => {
    setOpen(false);
  };
  const openDialog = () => {
    setOpen(true);
  };

  const handleChange = (e) => {
    setColNames([...colNames, e.target.value]);
  };
  const saveColNames = () => {
    dispatch(saveKeys([...colNames, "select"]));
    setColNames([]);
    closeDialog();
  };
  const displayTheme = (e, value) => {
    let number = 16777215 - 100000 * value;
    const hexString = number.toString(16);
    console.log("new hex value:", hexString);
    setSlider(value);
    dispatch(selectTheme(hexString));
  };
  //stylings...
  const buttonColor = { backgroundColor: "green", color: "white" };
  const dialogTitle = { background: "lightblue" };
  const checkBoxMargin = { marginLeft: "30px" };

  return (
    <div className="headbar">
      <div className="customize_moon">
        <div>
          <Button onClick={() => openDialog()} variant="text">
            Customize Table
          </Button>
          <Dialog open={open} onClose={closeDialog}>
            <DialogTitle style={dialogTitle}>Select Column Names</DialogTitle>
            {key.map((elem) => {
              return (
                <FormControlLabel
                  control={
                    <Checkbox
                      onClick={handleChange}
                      style={checkBoxMargin}
                      name={elem}
                      value={elem}
                    />
                  }
                  label={elem}
                />
              );
            })}
            <Button style={buttonColor} onClick={saveColNames}>
              save
            </Button>
          </Dialog>
        </div>

        <div>
          <div>
            <Link to={"/"}>
              <img
                className="moon"
                width="45px"
                height="45px"
                src={fullmoon}
                alt="logo"
              ></img>
            </Link>
            <span> </span>
            <Link to={"/"}>
              <img
                className="moon"
                width="45px"
                height="45px"
                src={darkmoon}
                alt="logo"
              ></img>
            </Link>
          </div>
          <form>
            <Slider value={slider} onChange={displayTheme} marks />
          </form>
        </div>
      </div>

      <div className="searchField">
        <TextField
          variant="standard"
          type="text"
          value={input}
          placeholder="Search"
          onChange={(e) => {
            searchField(e.target.value);
          }}
        />
      </div>
      <div>
        <label className="sort"> Sort By: </label>
        <select onChange={sortCountries}>
          <option>name</option>
          <option>region</option>
          <option>population</option>
          <option>area</option>
        </select>
      </div>
    </div>
  );
}

export default HeadBar;
