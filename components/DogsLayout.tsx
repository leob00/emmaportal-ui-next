import React from 'react'
import Layout from './Layout'
import { Container, Typography } from '@mui/material'
import Image from 'next/image'

const YieldCurveLayout = ({ data }: { data: string }) => {
  return (
    <Layout>
      <Container sx={{ minHeight: '600px' }}>
        <h4>Dogs</h4>
        <Typography variant='body1' sx={{ padding: '5px' }}>
          the content below was created using SSR - Server Side Rendering and is regenerated on full page refresh
        </Typography>
        <hr></hr>
        <Typography sx={{ textAlign: 'center' }}>
          <img src={data} alt='Happy Dog' />
        </Typography>
      </Container>
    </Layout>
  )
}

export default YieldCurveLayout
