import { gql, useQuery } from '@apollo/client'
import { getKLogs } from './__generated__/getKLogs'

const GET_K_LOGS = gql`
  query getKLogs {
    kLogs {
      title
    }
  }
`

export default function Home() {
  const { loading, error, data } = useQuery<getKLogs>(GET_K_LOGS)
  console.log('data:', data)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return data?.kLogs.map(({ title }, index) => (
    <div key={index}>
      <p>{title}</p>
    </div>
  ))
}
