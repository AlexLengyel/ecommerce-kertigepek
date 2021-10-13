import React, { useState, useEffect } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import sliderItems from "./data";
import {
  Container,
  Wrapper,
  Slide,
  ImageContainer,
  Image,
  InfoContainer,
  Arrow,
  Title,
  Description,
  Button,
  LinkText,
} from "./style";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(0);

  useEffect(() => {
    const newIntervalId = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : 0));
    }, 5300);
    setIntervalId(newIntervalId);
  }, []);

  const handleClick = (direction) => {
    clearInterval(intervalId);
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id} backgroundColor={item.backgroundColor}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
              <Button to={item.page}>
                <LinkText>Megtekintés</LinkText>
              </Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
