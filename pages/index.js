import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const {data: session } = useSession();
  if (session) {
    return(
    <main>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign Out</button>
    </main>
    )
  }
  return(  
  <main>
    No signed in <br/>
    <button onClick={() => signIn()}>Sign In</button>
  </main>
  )}