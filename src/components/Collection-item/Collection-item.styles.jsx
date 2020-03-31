import styled from "styled-components";
import CustomButton from "../Custom-button/Custom-button.component";

export const CollectionItemContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 22vw;
  height: 350px;
  position: relative;
  margin-buttom: 20px
  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  font-weight: 300;
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  font-weight: 300;
  width: 10%;
  text-align: right;
`;
