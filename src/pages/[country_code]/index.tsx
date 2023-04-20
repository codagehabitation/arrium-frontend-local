import * as React from "react"
import { Router } from '@reach/router'
import useNavigate from "@/hooks/useNavigate"
import { useStore } from "@/store"
import { DEFAULT_COUNTRY } from "@/constants/common"
import LoadingScreen from "@/components/LoadingScreen"
import Signin from "./en/signin"

const IndexPage = ({ params }: any) => {
  const { userStore } = useStore()
  const { navigateToDefault } = useNavigate({
    country_code: params.country_code || DEFAULT_COUNTRY,
  })

  React.useEffect(() => {
    navigateToDefault(userStore.currentUser?.role)
  }, [])

  return( 
  <Router basepath='/:country_code'> 
    <LoadingScreen path="/" />
  <Signin path='/en/signin' params={params}/> 
  </Router>
  )
}

export default IndexPage
