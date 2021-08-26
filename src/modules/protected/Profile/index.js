import Link from 'next/link'

import Layout from '../../../common/components/Layout'

import * as Ss from './index.module.css'

function Profile() {
  return (
    <Layout default='no'>
      profile
      <Link href="/login"><a>acesso</a></Link>
    </Layout>
  )
}

export default Profile