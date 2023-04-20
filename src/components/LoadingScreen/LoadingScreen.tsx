import { CircularProgress } from "@mui/material"
import React from "react"
import { StyledLoadingScreen } from "./LoadingScreen.styled"

const LoadingScreen : React.FC<{ path? : string}>= () => {
  return (
    <StyledLoadingScreen>
      <CircularProgress size={40} />
    </StyledLoadingScreen>
  )
}

export default LoadingScreen
