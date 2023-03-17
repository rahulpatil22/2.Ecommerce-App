import React, { ReactElement, useState } from "react"
import TabTitle from "./TabTitle"

type Props = {
  children: ReactElement[];
  orientation?: "horizontal" | "vertical";
  className?: string;

}


const Tabs: React.FC<Props> = ({ children ,className = "tabs-component", orientation = "horizontal"}) => {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div className={
        orientation === "vertical" ? className + " vertical" : className
      }>
      <div role="tablist" aria-orientation={orientation}>
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </div>
      {children[selectedTab]}
    </div>
  )
}

export default Tabs