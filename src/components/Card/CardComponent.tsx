// import "./styles.css";
import { Card } from "../Card/Card";
import styled from "styled-components";
import img1 from "../Asset/Images/img1.jpg";
import img2 from "../Asset/Images/img2.jpg";
// import img2 from "./Assets/images/img2.jpg";

const CardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1f2229;
  overflow: hidden;
`;

const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;

export default function CardComponent() {
  return (
    <div className="App">
      <h1></h1>
      <h2></h2>
      <CardContainer>
        <Card title={"hello world"} date={1} imgUrl={img1} />
        <Separator />
        <Card title={"My Card"} date={2} imgUrl={img2} />
      </CardContainer>
    </div>
  );
}