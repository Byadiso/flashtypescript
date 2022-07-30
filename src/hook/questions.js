
import {useQuery,gql } from '@apollo/client'

const GET_CHARACTERS= gql`
query {
  feed {
    id
    count
    links {
      id
      description
      url
    }
  }
}
`

export const useCharacters = ()=> {
    const {error, data,loading} = useQuery(GET_CHARACTERS)
    
    return {
        error,
        data, 
        loading
    }

}