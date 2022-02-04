import { signIn, signOut, getSession } from "next-auth/react";

function Ssr({ user, data }) {
  console.log("xx1x", user, data);
  if (user) {
    // console.log(props?.session);
    return (
      <>
        Signed in as {user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}

export async function getServerSideProps(context) {
  const x = await getSession(context);
  console.log("session", x);
  return {
    props: {
      user: x?.user || null,
      data: { ja: "d" },
    },
  };
}

export default Ssr;
