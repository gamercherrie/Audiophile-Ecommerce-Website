import React from 'react'
import { Box }from '@chakra-ui/react'
import './SectionHeader.scss'

const SectionHeader = ({product}) => {
  return (
      <Box className="section-header">
          {product}
      </Box>
  )
}

export default SectionHeader