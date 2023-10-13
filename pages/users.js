import Link from "next/link";
import MainContainer from "../components/MainContainer";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

const Users = ({ data }) => {
  return (
    <MainContainer>
      <h2>List Of users: </h2>
      <List users={data} />
    </MainContainer>
  );
};

export default Users;

const List = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  );
};
