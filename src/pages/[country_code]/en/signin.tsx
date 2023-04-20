import React from "react"

import Seo from "@/components/Seo"
import SignInPage from "@/components/SignInPage"
import { IPageProps } from "@/lib/interfaces/common"

interface ISigninProps {
  params: IPageProps,
  path? : string
}

const Signin: React.FC<ISigninProps> = ({ params }) => {
  return (
    <React.Fragment>
      <Seo title="Sign In | Arrium" />
      <SignInPage country_code={params.country_code} />
    </React.Fragment>
  )
}

export default Signin
