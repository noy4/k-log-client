import { gql, useQuery } from '@apollo/client'
import { GetKLogs } from './__generated__/getKLogs'

const GET_K_LOGS = gql`
  query GetKLogs {
    kLogs {
      title
    }
  }
`

export const Home = () => {
  const { loading, error, data } = useQuery<GetKLogs>(GET_K_LOGS)
  console.log('data:', data)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <div>
      <h1>K-Log</h1>
      {data?.kLogs.map(({ title }, index) => (
        <div key={index}>
          <p>{title}</p>
        </div>
      ))}
    </div>
  )
}
