import React from 'react'

type Props = {
  title: string
  children:string
}


const Tab: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>
}

export default Tab