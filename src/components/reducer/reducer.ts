import * as types from './types'
import * as data from './data'
export const reducer = (state: any, action: any) => {
  const toogleFalse = () => {
    data.home.isOpen = false
    data.landingPage.isOpen = false
    data.portifolio.isOpen = false
    data.siteAndroid.isOpen = false
    data.siteFilmes.isOpen = false
  }
  switch (action.type) {
    case types.PROJECT_PORTIFOLIO_REACT: {
      toogleFalse()
      data.home.isOpen = true
      return { ...data.home, }
    }
    case types.PROJECT_FILME_PAGE: {
      if (state.title === data.siteFilmes.title) {
        toogleFalse()
        data.home.isOpen = true
        return { ...data.home, isOpen: true }
      }
      toogleFalse()
      data.siteFilmes.isOpen = true
      return { ...data.siteFilmes }
    }
    case types.PROJECT_PORTIFOLIO_PAGE: {
      if (state.title === data.portifolio.title) {
        toogleFalse()
        data.home.isOpen = true
        return { ...data.home }
      }
      toogleFalse()
      data.portifolio.isOpen = true
      return { ...data.portifolio, isOpen: true }
    }
    case types.PROJECT_LADING_PAGE: {
      if (state.title === data.landingPage.title) {
        toogleFalse()
        data.home.isOpen = true
        return { ...data.home }
      }
      toogleFalse()
      data.landingPage.isOpen = true
      return { ...data.landingPage, isOpen: true }
    }
    case types.PROJECT_ANDROID_PAGE: {
      if (state.title === data.siteAndroid.title) {
        toogleFalse()
        data.home.isOpen = true
        return { ...data.home }
      }
      toogleFalse()
      data.siteAndroid.isOpen = true

      return { ...data.siteAndroid, isOpen: true }
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