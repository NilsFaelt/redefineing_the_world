import React, { FC } from "react";
import { TitleLetterByLetter } from "../../../ui/feedback";
import {
  Container,
  InfoContainer,
  Text,
  InnerInfoContainer,
  SmallText,
} from "./Pricing.css";
export const PricingView: FC = () => {
  return (
    <Container>
      {/* <TitleLetterByLetter color='white' text='PRICING AND OUR WAY OF WORK' /> */}
      <InfoContainer>
        <Text>• ALWAYS SET PRICES UNLESS YOU WANT IT TO BE BY HOUR</Text>
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
        <Text>• GUILDELINE PRICING, ONE MONTH 80 000 SEK ON INVOICE</Text>
        <InnerInfoContainer>
          <SmallText>
            • WHY HALF THE PRICE TO MOST OTHER COMPANIES ? CAUSE IM IN THIS FOR
            THE PASION AND LOGTERM RELATIOSNHIP WITH YOU
          </SmallText>
          <SmallText>
            • MY GOAL IS TO NEVER CHARGE YOU BEFORE THE PRODUCT IS DONE,BUT IF
            THE PROJECT IS OVER 3 MONTHS, I WILL ASK FOR 50 000 SEK AS A
            PAYDOWN, THIS WILL OF COURSE BE REDUCED FROM YOU FINAL PRICE.
          </SmallText>
        </InnerInfoContainer>
        <Text>• YOU NEVER PAY ANYTHING UNTIL YOU HAVE A PRODUCT </Text>
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
        <Text>• WERE IN THIS TOGHETER, AND YOUR SATISFACTION IS MYGOAL</Text>
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
    </Container>
  );
};
