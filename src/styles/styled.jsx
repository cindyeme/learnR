import styled from "styled-components";
import Slider from "react-slick";

export const TeachersSlider = styled(Slider)`
  .slick-slide > div,
  .slick-slide {
    height: 100%;
    // display: flex;
  }
  .slick-slide > div {
    margin: 0 5px;
  }
  .slick-dots li button::before {
    font-size: 17px !important;
    background: transparent;
    border: 2px solid #ffc107 !important;
    border-radius: 50%;
    color: rgba(255, 255, 255, 0.4);
    padding: .3rem;
    margin-top: 20px;
  }
  .slick-cont {
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
