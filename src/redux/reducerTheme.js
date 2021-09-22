const defaultTheme = {
  theme: localStorage.getItem('theme')?JSON.parse(localStorage.getItem('theme')):['#b6f1f2','#d7f4f5'],
}

const reducerTheme = (state=defaultTheme, action)=>{
  switch(action.type){
    case "SELECT_THEME":
      let temp = []
      if(action.payload==='Green'){
            console.log("i am inside theme now.....")
            temp = ['#bff5c6','#dcf7e0']
      }
      else if(action.payload==='Yellow'){
            temp = ['#f0eec9','#e6edbe']
      }
      else if(action.payload==='Red'){
            temp = ['#f7a1a7','#f2d5d7']
      }
      return{
          ...state,
          theme:temp,
      }
    default:
      return {
        ...state
      }
  }
}
export default reducerTheme
