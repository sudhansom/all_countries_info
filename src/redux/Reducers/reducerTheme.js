const defaultTheme = {
  theme:'#ffffff',
}

const reducerTheme = (state=defaultTheme, action)=>{
  switch(action.type){
    case "SELECT_THEME":
    const new_theme = "#" + action.payload
    return {
      theme: new_theme
    }
  default:
    return {
      state
    }
  }
}
export default reducerTheme
