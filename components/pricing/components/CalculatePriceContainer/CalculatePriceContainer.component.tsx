import React, { FC, useState } from "react";
import { Button } from "../../../../ui/actions";
import { TitleLetterByLetter } from "../../../../ui/feedback";
import {
  Container,
  ToogleButtonContainer,
  EachQuestionContainer,
  ClicableTextButton,
  ToogleButton,
  Title,
  Text,
} from "./CalculatePriceContainer.styles";

interface Values {
  projectType: number;
  design: number;
  ai: number;
  clearIdea: number;
}

export const CalculatePriceContainer: FC = () => {
  const [values, setValues] = useState<Values>({
    projectType: 0,
    design: 0,
    ai: 0,
    clearIdea: 0,
  });
  const [page, setPage] = useState(1);
  const showLeftButton = page > 1 && page !== 5;

  const handleClickLeft = () => {
    setPage(page - 1);
  };

  return (
    <Container>
      <Title>PLEASE FILL IN TO GET A CALCULATION</Title>

      {page === 1 && (
        <EachQuestionContainer>
          <Text>TYPE OF PROJECT</Text>
          <ClicableTextButton
            onClick={() => {
              setPage(page + 1),
                setValues((prev) => ({ ...prev, projectType: 1 }));
            }}
          >
            Front-End
          </ClicableTextButton>
          <ClicableTextButton
            onClick={() => {
              setPage(page + 1),
                setValues((prev) => ({ ...prev, projectType: 2 }));
            }}
          >
            Back-End
          </ClicableTextButton>
          <ClicableTextButton
            onClick={() => {
              setPage(page + 1),
                setValues((prev) => ({ ...prev, projectType: 3 }));
            }}
          >
            Full-Stack
          </ClicableTextButton>
          <ClicableTextButton
            onClick={() => {
              setPage(page + 1),
                setValues((prev) => ({ ...prev, projectType: 2 }));
            }}
          >
            Fix website
          </ClicableTextButton>
          <ClicableTextButton
            onClick={() => {
              setPage(page + 1),
                setValues((prev) => ({ ...prev, projectType: 2 }));
            }}
          >
            Dont know
          </ClicableTextButton>
        </EachQuestionContainer>
      )}
      {page === 2 && (
        <EachQuestionContainer>
          <Text>DESIGN</Text>
          <ClicableTextButton
            onClick={() => {
              setPage(page + 1), setValues((prev) => ({ ...prev, design: 1 }));
            }}
          >
            I HAVE A DESIGN
          </ClicableTextButton>
          <ClicableTextButton
            onClick={() => {
              setPage(page + 1), setValues((prev) => ({ ...prev, design: 2 }));
            }}
          >
            I HAVE A IDEA BUT NOT A DESIGN
          </ClicableTextButton>
          <ClicableTextButton
            onClick={() => {
              setPage(page + 1), setValues((prev) => ({ ...prev, design: 3 }));
            }}
          >
            I NEED A DESIGN
          </ClicableTextButton>
          <ClicableTextButton
            onClick={() => {
              setPage(page + 1), setValues((prev) => ({ ...prev, design: 0 }));
            }}
          >
            NONE
          </ClicableTextButton>
        </EachQuestionContainer>
      )}
      {page === 3 && (
        <EachQuestionContainer>
          <Text>DO YOU WANT AI IMPLEMENTED</Text>
          <ClicableTextButton
            onClick={() => {
              setPage(page + 1), setValues((prev) => ({ ...prev, ai: 1 }));
            }}
          >
            YES
          </ClicableTextButton>
          <ClicableTextButton
            onClick={() => {
              setPage(page + 1), setValues((prev) => ({ ...prev, ai: 0 }));
            }}
          >
            NO
          </ClicableTextButton>
        </EachQuestionContainer>
      )}
      {page === 4 && (
        <EachQuestionContainer>
          <Text>I HAVE A CLEAR IDEA WHAT I WANT</Text>
          <ClicableTextButton
            onClick={() => {
              setPage(page + 1),
                setValues((prev) => ({ ...prev, clearIdea: 1 }));
            }}
          >
            YES
          </ClicableTextButton>
          <ClicableTextButton
            onClick={() => {
              setPage(page + 1),
                setValues((prev) => ({ ...prev, clearIdea: 0 }));
            }}
          >
            NO
          </ClicableTextButton>
        </EachQuestionContainer>
      )}
      {page === 5 && (
        <Text>
          The provided estimate serves as a general indication and should be
          treated as a starting point for determining the potential cost of your
          website. However, keep in mind that actual expenses can vary based on
          project specifics, complexity, required features, and professional
          consultation is advised for accurate pricing.{" "}
        </Text>
      )}
      {page == 5 && <Title>500 000 sek</Title>}
      {page === 5 && <Text>PLEASE MAIL OR CALL FOR MORE INFO</Text>}
      {page !== 5 && <Text>STEP: {page} / 5</Text>}
      <ToogleButtonContainer>
        {showLeftButton && (
          <ToogleButton onClick={() => handleClickLeft()}>BACK</ToogleButton>
        )}
      </ToogleButtonContainer>
    </Container>
  );
};
