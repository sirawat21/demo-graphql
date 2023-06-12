import { useQuery, gql } from "@apollo/client";

const GET_LOCATIONS = gql`
  query hello {
  }
`;

export default function App() {
  const DisplayLocations = async () => {
    const { loading, error, data } = await useQuery(GET_LOCATIONS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    const result = JSON.stringify(data);
    return <p>{result}</p>;
  };
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <>
      {DisplayLocations}
      </>
    </div>
  );
}
