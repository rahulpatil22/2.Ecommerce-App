import { Menu } from "@mui/icons-material";
import React from "react";
import { PageItemWrapper } from "../Helper/ItemWrapper";
import { Container, Wrapper, Text, LeftText } from "../MenuBar/styles";
import MainTab from "../Tab/MainTab";
// import {Menu} from '@material-ui/icons';


const Menubar: React.FC = () => {
  return (
    <div>
      <Container>
          
        <Wrapper>
    
            <Menu/>
            <Text>All</Text>
  

    {/* <Wrapper>
        <Text>Today's Deals</Text>
        <Text>Customer Service</Text>
        <Text>Gift Cards</Text>
        <Text>Sell</Text>
        <Text>Registry</Text>
    </Wrapper> */}
</Wrapper>

<Wrapper>
    <LeftText >Add Tab</LeftText>
</Wrapper>
      </Container>
    </div>
  );
};

export default Menubar;
