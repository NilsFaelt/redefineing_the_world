import React, { FC } from "react";
import { TitleLetterByLetter } from "../../../ui/feedback";
import { Container, Text, InfoTextContainer, LinkRef } from "./ContactView.css";

export const ContactView: FC = () => {
  return (
    <Container>
      <TitleLetterByLetter
        color='white'
        size='small'
        text='PLEASE MAIL OR CALL ME'
      />
      <Text>EMAIL: </Text>
      <LinkRef href={`mailto: nils.faelt@gmail.com`}>
        NILS:FAELT@GMAIL.COM
      </LinkRef>
      <Text>PHONENUMBER</Text>
      <LinkRef href={`tel: 0046-76-069-8660`}>0046-76-069-8660</LinkRef>
      <InfoTextContainer>
        <TitleLetterByLetter
          color='white'
          size='small'
          text='THERE IS NO SHAME IN CALLING ME HALF PAST NINE ON A SUNDAY, IF IM AVAIBLE I WILL ANSWER AND GLADLY TALK, PLAN YOUR IDEA, OR HERE YOUR INPUT. IF IM NOT AVAILBE, I WILL CALL YOU BACK AS SOON AS I CAN / NILS'
        />
      </InfoTextContainer>
    </Container>
  );
};
