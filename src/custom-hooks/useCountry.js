// This hook is used to fetch one specific country
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOneCountry } from "../redux/action";
import { useParams } from "react-router-dom";
const useCountry = () => {
  const { countryName } = useParams();
  const error = useSelector((state) => state.reducerCountries.err);
  const data = useSelector((state) => state.reducerCountries.country);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneCountry(countryName));
  }, countryName);
  return [error, data];
};
export default useCountry;
