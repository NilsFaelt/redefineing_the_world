import React, { FC } from "react";
import { TitleLetterByLetter } from "../../../ui/feedback";
import { InfoText } from "../../AskMe/components/InfoText/InfoText.component";
import { Container, Text } from "./ContactView.css";

export const ContactView: FC = () => {
  return (
    <Container>
      {/* <TitleLetterByLetter
        color='white'
        size='small'
        text='PLEASE MAIL OR CALL ME'
      /> */}
      <Text>EMAIL: NILS:FAELT@GMAIL.COM</Text>
      <Text>PHONENUMBER: 0046-76-069-8660</Text>
      {/* <TitleLetterByLetter
        color='white'
        size='small'
        text='THERE IS NO SHAME IN CALLING ME HALF PAST NINE ON A SUNDAY, IF IM AVAIBLE I WILL ANSWER AND GLADLY TALK, PLAN YOUR IDEA, OR HERE YOUR INPUT. IF IM NOT AVAILBE, I WILL CALL YOU BACK AS SOON AS I CAN / NILS'
      /> */}
    </Container>
  );
};
