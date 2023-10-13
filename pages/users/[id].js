import MainContainer from "../../components/MainContainer";

const User = ({ user }) => {
  return (
    <MainContainer>
      <h2>{user.name}</h2>
      <b>{user.email}</b>
      <div>City: {user.address.city}</div>
    </MainContainer>
  );
};

export default User;

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.query.id}`
  );
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}
