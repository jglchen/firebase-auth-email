import Layout from '@/components/layout';

export default function Home() {
  
  return (
    <Layout>
    
       <div>
          <p>
              This example creates an authentication system that uses a{' '}
              <b>signed and encrypted cookie to store session data</b>. It uses current best practices as for authentication in the Next.js ecosystem, 
              we use <b>`useUser` custom hook</b>  together with `<a href="https://swr.vercel.app/">swr</a>` for data fetching.
          </p>

          <ul>
              <li>Firebase Authentication with Email Passwordless Link is used to authenticate users.</li>
              <li>Session data is signed and encrypted in a cookie.</li>
          </ul>

       </div>
    </Layout>
    
  )
}
