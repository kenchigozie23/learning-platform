'use client'
import Navbar from './components/Navbar' 
// import Authorize from "./authorize/page";
import { useState } from 'react';
import { useSession, signIn, signOut, getSession } from "next-auth/react"
export default function Home() {
  const { data: session } = useSession()

  // const [sessio, setSession] = useState(false);
  return (
        <div className=''>
          {session ? Authorize({session}) : <Navbar/>}
        </div>
      )
}
function Authorize({session}) {
  return (
    <div>
        <h1>Welcome to your site</h1>
        {/* users details */}
        <div>
            <h1>{session.user.name}</h1>
            <p>{session.user.email}</p>
        </div>
        <button onClick={() => signOut()}>sign out</button>
    </div>
  )
}
export async function getServerSideProps({req}){
  const session = await getSession({req})

  if(!session){
    return{
      redirect:{
        destination: "/login",
        permanent: false
      }
    }
  }
  return{
    props: {session}
  }
}