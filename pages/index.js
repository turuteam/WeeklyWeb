import React, { useEffect } from 'react'
import Image from 'next/image'
import { Layout } from '../components'
import logoSocial from '../images/Weekly_logo_instagram-27.png'
import cover from '../images/coverWeekly.png'
import ImageSwapper from '../components/ImageSwapper'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'

function index1() {
  return (
    <>
      <Head>
        <title>{'Weekly'} </title>
        <link rel="icon" href="/logoInsta2.png" />
      </Head>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col ">
          <div className=" left-50 top-50 ">
            <Image src={logoSocial} width={100} height={100} />
          </div>

          <h2 className="pb-60 pt-40 pl-10 text-7xl">Lavori in corso</h2>

          <div className="flex flex-row"></div>

          <style>{`
        h2{
            font-family:"Playfair Display"
        }
      `}</style>
        </div>

        <div className="object-fill">
          <div>
            <ImageSwapper className="object-fill" />
          </div>
        </div>
      </div>
    </>
  )
}

export default index1
