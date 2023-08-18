'use client'

import { Repository } from "./@types/git-types";
import { ContainerHome } from "./styles";
import {useQuery} from '@tanstack/react-query'

export default function Home() {

  const getRepos = async () => {
    try {
      const response = await fetch('https://api.github.com/users/B-Lucas365/repos')
      const dataJson = await response.json()

      return dataJson

    } catch (error) {
      console.log(error)
    }
  }

  const {data, isLoading} = useQuery<Repository[]>({queryKey: ['repos'], queryFn: getRepos})

  return (
    <ContainerHome>
      {isLoading ? (
          <div>Loading...</div>
          
      ) : (

        data?.map((repo) => (
          <p>
            {repo.name}
          </p>
        ))
      )}
      
    </ContainerHome>
  )
}
