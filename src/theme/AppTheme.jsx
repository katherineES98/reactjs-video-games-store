import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import React from 'react'
import { themeApp } from './themeApp'

export const AppTheme = ({children}) => {
  return (
     <ThemeProvider theme={themeApp}>

      <CssBaseline/>
      {children}
     </ThemeProvider>
  )
}
