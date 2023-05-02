import * as types from './types'
import * as data from './data'
export const reducer = (state:any, action:any) => {
  switch (action.type) {
    case types.PROJECT_LADING_PAGE: {
      if(state===data.Default){
        return{...data.Default}
      }
      return data.Default
    }
    case types.PROJECT_FILME_PAGE: {
      return data.data2
    }
    

  }
  return { ...state }
}


//export const reducer = (state:any, action:any) => {
//   switch (action.type) {
//     case types.PROJECT_LADING_PAGE: {
//       // se o estado atual já é o da landing page, retorne o estado padrão
//       if (state === data.data) {
//         return { ...data.defaultData }
//       }
//       return data.data
//     }
//     case types.PROJECT_FILME_PAGE: {
//       // se o estado atual já é o da página de filmes, retorne o estado padrão
//       if (state === data.data2) {
//         return { ...data.defaultData }
//       }
//       return data.data2
//     }
//   }
//   return { ...state }
// }
//esse codigo verifica se o usuario ja estiver em um estado e clicar nele assim mesmo ele mando 
// o usuario pra home