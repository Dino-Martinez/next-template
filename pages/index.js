/* eslint-disable no-unused-vars */
import Head from 'next/head'
import { useSession } from 'next-auth/client'
import SignInForm from '../components/signinForm'
import { useEffect } from 'react'
import useApi from '../hooks/useApi'

export default function Home () {
  const [session, loading] = useSession()
  const [data, refetch, apiLoading] = useApi('/api/test')

  useEffect(() => { if (session) refetch() }, [session])
  return (
    <div>
      <Head>
        <title>Next App Template</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      {loading &&
        <h1>Loading session...</h1>
      }

      {apiLoading &&
        <h1>Loading result...</h1>
      }

      {!loading && !apiLoading && session &&
        data.result
      }

      {!loading &&
        <SignInForm session={session}></SignInForm>
      }
    </div>
  )
}
