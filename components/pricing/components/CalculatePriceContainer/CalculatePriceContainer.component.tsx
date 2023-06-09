import React, { FC, useState } from "react";
import { BaseInput, Button } from "../../../../ui/actions";
import { Loading, TitleLetterByLetter } from "../../../../ui/feedback";
import {
  ClicableTextButton,
  Container,
  InnerContainer,
  Text,
  Close,
  MailLink,
} from "./CalculatePriceContainer.styles";

interface Props {
  setToogle: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CalculatePriceContainer: FC<Props> = ({ setToogle }) => {
  const [gtpAnswer, setGtpAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [projectType, setProjectType] = useState("");
  const [design, setDesig] = useState("");
  const [content, setContent] = useState("");
  const [ai, SetAi] = useState("");
  const [payment, setPayment] = useState("");
  const [other, setOther] = useState("");

  const handelClickBack = async () => {
    setGtpAnswer("");
  };
  const handelClick = async () => {
    setLoading(true);
    const data = await fetch("/api/gtp-price-calculation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        projectInfo: `i would like a:${projectType}. with design: ${
          design !== "" ? design : "none provided"
        }and implementet ai: ${
          ai !== "" ? ai : "none provided"
        } and payment methods: ${payment ? payment : "none provided"}. and ${
          other ? other : "none provided "
        } and content: ${content ? content : "none provided"}`,
      }),
    })
      .then((res) => res.json())
      .finally(() => {
        setLoading(false);
      });
    const answer = data.choices?.[0].message.content
      ? data.choices?.[0].message.content
      : "Please ask again, i didnt understand, and provide as accurate information as possible";
    setGtpAnswer(answer);
  };
  console.log(gtpAnswer);
  return (
    <Container>
      <Close onClick={() => setToogle(false)}>CLOSE</Close>
      <TitleLetterByLetter
        size='small'
        color='white'
        text='GET A PRICE INVOICE'
      />
      {!gtpAnswer ? (
        <InnerContainer>
          <Text>
            TO RECEIVE AN ACCURATE COST ESTIMATE, PLEASE PROVIDE US WITH THE
            NECESSARY DETAILS. THE MORE INFORMATION YOU PROVIDE, THE MORE
            PRECISE OUR CALCULATION WILL BE. KINDLY FILL IN THE REQUIRED FIELDS
            TO GET A TAILORED QUOTE FOR YOUR PROJECT.
          </Text>

          <BaseInput
            type='text'
            value={projectType}
            onChange={setProjectType}
            color='white'
            placeholder='TYPE OF PROJECT?'
          />
          <BaseInput
            type='text'
            value={design}
            onChange={setDesig}
            color='white'
            placeholder='DO YOU HAVE A DESIGN?'
          />
          <BaseInput
            type='text'
            value={content}
            onChange={setContent}
            color='white'
            placeholder='DO YOU HAVE CONTENT?'
          />
          <BaseInput
            type='text'
            value={ai}
            onChange={SetAi}
            color='white'
            placeholder='IMPLEMENT AI?'
          />
          <BaseInput
            type='text'
            value={payment}
            onChange={setPayment}
            color='white'
            placeholder='E-COMMERCE ?'
          />
          <BaseInput
            type='text'
            value={other}
            onChange={setOther}
            color='white'
            placeholder='OTHER'
          />
          {loading && <Loading />}
          <Button
            onclick={(e) => {
              e.preventDefault();
              handelClick();
            }}
            text='CALCULATE'
          />
        </InnerContainer>
      ) : (
        <Text>
          {gtpAnswer} <br /> <br /> Please note that the price provided is a
          wide estimate and may vary depending on specific project requirements.
          It serves as a general indication of the potential cost for your
          website project. For a more accurate and detailed quote, we recommend
          contactnig us at <br />{" "}
          <MailLink href={`mailto: nils.faelt@gmail.com`}>
            Fango Solutions
          </MailLink>
        </Text>
      )}
      {gtpAnswer !== "" ? (
        <ClicableTextButton onClick={() => handelClickBack()}>
          Back
        </ClicableTextButton>
      ) : null}
    </Container>
  );
};
