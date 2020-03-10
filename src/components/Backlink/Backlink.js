import React from 'react'
import styled from 'styled-components/macro'
import { FiChevronLeft } from 'react-icons/fi'

export default function Backlink({ href }) {
  return (
    <a href={href} className="backlink">
      <FiChevronLeft className="backlink-icon" />
      <span className="backlink-label">Back</span>
    </a>
  )
}
