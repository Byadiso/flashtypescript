
import {useQuery,gql } from '@apollo/client'

const GET_CHARACTER= gql`
query GetCharacter($id: ID!) {
    character(id: 2) {
        results {
            id
            name
            image
        }

    }

}
`

export const useCharacter = (id) => {
    const {error, data,loading} = useQuery(GET_CHARACTER, {
        variables: {
            id,
          }
    });

    return {
        error,
        data, 
        loading,
    };
};