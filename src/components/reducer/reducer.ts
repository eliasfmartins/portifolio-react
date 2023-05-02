import * as types from './types'
import * as data from './data'
export const reducer = (state:any, action:any) => {
  switch (action.type) {
    case types.PROJECT_LADING_PAGE: {
      return data.data
    }
    case types.PROJECT_FILME_PAGE: {
      return data.data2
    }

  }
  return { ...state }
}