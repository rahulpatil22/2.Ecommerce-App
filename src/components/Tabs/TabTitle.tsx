import React from "react"

type Props = {
  title: string
  index: number
  setSelectedTab: (index: number) => void
}

const TabTitle: React.FC<Props> = ({ title, setSelectedTab, index }) => {

  return (
    <div>
      <button onClick={() => setSelectedTab(index)}>{title}</button>
    </div>
  )
}

export default TabTitle