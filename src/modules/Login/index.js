import Link from 'next/link'

import Policies from '../../modules/Policies'

import Layout from '../../common/components/Layout'

import * as Ss from './index.module.css'

function Login() {
  return (
    <Layout default='no'>
      login
      <Link href="/policies"><a>policies</a></Link>
    </Layout>
  )
}

export default Login