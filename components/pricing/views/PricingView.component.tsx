import React, { FC, useState } from "react";
import { Button } from "../../../ui/actions";
import { TitleLetterByLetter } from "../../../ui/feedback";

import { CalculatePriceContainer } from "../components";
import {
  Container,
  InfoContainer,
  Text,
  InnerInfoContainer,
  SmallText,
  CaluculatePriceContainerStyle,
} from "./Pricing.css";
export const PricingView: FC = () => {
  const [toogleCaluculatePrice, setToogleCalculatePrice] = useState(false);
  const handleClick = () => {
    setToogleCalculatePrice(!toogleCaluculatePrice);
  };
  return (
    <Container>
      <TitleLetterByLetter color='white' text='PRICING' />
      <InfoContainer>
        <Text>ALWAYS SET PRICES UNLESS YOU WANT IT SOME OTHER WAY</Text>
        <InnerInfoContainer>
          <SmallText>
            • YOU SHOULD BE ABLE TO KNOW YOUR TOTAL PRICE FROM DAY ONE
          </SmallText>
          <SmallText>
            • IF THE PROJECT GOES OVER TIME, ITS ON ME, YOUR PRICE AND PRODUCT
            WILL NEVER CHANGE
          </SmallText>
          <SmallText>
            • IF IM DONE AHEAD OF TIME I WILL LET YOU KNOW; AND YOU CAN DECIDE
            IF YOU WANT THE REST OF YOUR HOURS TO BE USED TO NEW FEATURES OR
            LOWER THE COST OF OUR PROJECT.
          </SmallText>
        </InnerInfoContainer>
        <Text>GUILDELINE PRICING</Text>
        <InnerInfoContainer>
          <SmallText>
            •WHY MONEY IS SECONDARY? CAUSE IM IN THIS FOR THE PASION AND LOGTERM
            RELATIOSNHIP WITH YOU
          </SmallText>
          <SmallText>
            • MY GOAL IS TO NEVER CHARGE YOU BEFORE THE PRODUCT IS DONE,BUT IF
            THE PROJECT IS OVER 3 MONTHS, I WILL CHARGE A MONTHLY PAYMENT AFTER
            YOU RECIEVD A UPDATE AND APPROVED THE PROJECTS SUCCESS, ALL MONTHLY
            PAYMETS WILL OF COURSE BE REDUCED FROM YOU FINAL PRICE.
          </SmallText>
        </InnerInfoContainer>
        <Text>YOU NEVER PAY ANYTHING UNTIL YOU HAVE A PRODUCT </Text>
        <InnerInfoContainer>
          <SmallText>
            • MY GOAL IS TO HAVE YOU SATISFIED, AND I CANT POSSIBLE KNOW IF YOU
            HAPPY UNTIL YOU HAVE THE PRODUCT IN YOUR HAND
          </SmallText>
          <SmallText>
            • IVE STUMBLED UPON WAY TO MANY PEOPLE BEEING IN SHADY DEALS WITH
            COMPANIES DEVELOPING THEIR PRODUCT,AND CHARGING PRE DELIVERY.
          </SmallText>
        </InnerInfoContainer>
        <Text>WERE IN THIS TOGHETER, AND YOUR SATISFACTION IS MYGOAL</Text>
        <InnerInfoContainer>
          <SmallText>
            • I RATHER SLEEP GOOD AND KEEP A GOOD REALTION WITH ALL THE PEOPLE I
            SUROUND MY SELF WITH, THEN HAVING A EXTRA COIN IN MY POCKET.
          </SmallText>
          <SmallText>
            • I LOVE TO CREATE SOMETHING TRULY REMARKABLE, THAT I CAN STAND FOR,
            AND WHICH MAKES YOU HAPPY.
          </SmallText>
        </InnerInfoContainer>
      </InfoContainer>
      <CaluculatePriceContainerStyle>
        <Button
          onclick={handleClick}
          text={!toogleCaluculatePrice ? "CALCULATE PRICE" : "CLOSE"}
        />
        {toogleCaluculatePrice && (
          <CalculatePriceContainer setToogle={setToogleCalculatePrice} />
        )}
      </CaluculatePriceContainerStyle>
    </Container>
  );
};
