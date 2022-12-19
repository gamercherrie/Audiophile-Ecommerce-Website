import React from 'react'
import { Container, Box, flexbox }from '@chakra-ui/react'
import './SectionHeader.scss'

const SectionHeader = ({product}) => {
  return (
      <Box className="section-header">
          {product}
      </Box>
  )
}

export default SectionHeader