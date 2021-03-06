import React from "react"
import styled from "styled-components"
import { Heading, Description } from "./HeadingsElements"
import { ImQuotesLeft } from "react-icons/im"
import {
  Wrapper,
  Box,
  IconContainer,
  IconBackground,
  Title,
  Des,
} from "./Stats"

export const Testimonials = () => {
  return (
    <TestContainer>
      <Heading>Testimonials</Heading>
      <Description>What our customers are saying about us</Description>
      <TestWrapper>
        {TestimonialInfo.map((item, index) => {
          return (
            <Box key={index}>
              <IconContainer>
                <IconBackground>
                  <Quotes />
                </IconBackground>
              </IconContainer>
              <TestDes>{item.quote}</TestDes>
              <TestTitle>{item.name}</TestTitle>
            </Box>
          )
        })}
      </TestWrapper>
    </TestContainer>
  )
}

export default Testimonials

const TestContainer = styled.div`
  padding: 4rem calc((100vw - 1300px) / 2);
  background: #fff;
`

const TestWrapper = styled(Wrapper)`
  padding: 0 2rem;
`

const TestTitle = styled(Title)`
  color: #f26a2e;
`

const TestDes = styled(Des)`
  color: #000;
`

const Quotes = styled(ImQuotesLeft)`
  fill: #c4c4c4;
  font-size: 4rem;
`

const TestimonialInfo = [
  {
    quote:
      "It was the better experience of my entire life !",
    name: "John Smith",
  },
  {
    quote:
      "I strongly recommend this website.",
    name: "Susan Hill",
  },
  {
    quote:
      "My dream comes true.",
    name: "David Johnson",
  },
]
