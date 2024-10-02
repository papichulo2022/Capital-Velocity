import { Typography } from '@mui/material'
import { margin } from '@mui/system'
import React from 'react'
import Sidebar from '../Components/Sidebar'

export default function SellYourBussiness() {
  return (
    <div>
      <Sidebar open={open} />
      <Typography sx={{ml:45, fontSize:'30px'}}>Sell Your Bussiness</Typography>
    </div>
  )
}
