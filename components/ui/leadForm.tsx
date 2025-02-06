"use client";
import React from "react";

import { useState } from "react";
import Image from "next/image";
import { JsonForms } from "@jsonforms/react";
import schema from "../../src/schema.json";
import topuischema from "./topuischema.json";
import middleuischema from "./middleuischema.json";
import bottomuischema from "./bottomuischema.json";
import {
  materialCells,
  materialRenderers,
} from "@jsonforms/material-renderers";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import SubmissionConfirmation from "./submissionconfirmation";
import Button from "./button";
import { ValidationMode } from "@jsonforms/core";

export default function LeadForm() {
  const [data, setData] = useState<object>({
    firstName: "",
    lastName: "",
    linkedIn: "",
    resume: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const {
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [currentValidationMode, setValidationMode] =
    useState<ValidationMode>("NoValidation");
  const [_, setFile] = useState<File | null>(null);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log("onSubmit");
    console.log(data);
    setSubmitted(true);
    console.log("set submitted");
  };

  const handleConfirmationClose = () => {
    setSubmitted(false);
  };

  const handleChange = (data: object) => {
    setValidationMode("ValidateAndShow");
    setData(data);
  };

  if (submitted) {
    return <SubmissionConfirmation onClose={handleConfirmationClose} />;
  }

  const renderers = [...materialRenderers];

  //https://jsonforms.discourse.group/t/ajv-only-validate-on-input/1488/17
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Description>
        <CenteredImage src="/info.png" height={100} width={100} alt="info" />

        <h3>Want to understand your visa options?</h3>
        <p>
          Submit the form below and our team of experienced attorneys will
          review your information and send a preliminary assessment of your
          cased based on your goals.
        </p>
      </Description>
      <FormItems>
        <JsonForms
          schema={schema}
          uischema={topuischema}
          data={data}
          renderers={renderers}
          cells={materialCells}
          onChange={handleChange}
          validationMode={currentValidationMode}
        />
      </FormItems>
      <Description>
        <CenteredImage src="/die.png" height={100} width={100} alt="info" />

        <h3>Visa categories of interest</h3>
      </Description>

      <JsonForms
        schema={schema}
        uischema={middleuischema}
        data={data}
        renderers={renderers}
        cells={materialCells}
        onChange={handleChange}
        validationMode={currentValidationMode}
      />

      <Resume>
        Upload your Resumé / CV
        <input
          id="resume"
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
      </Resume>

      <Description>
        <CenteredImage src="/heart.png" height={100} width={100} alt="info" />

        <h3>How can we help you?</h3>
      </Description>

      <JsonForms
        schema={schema}
        uischema={bottomuischema}
        data={data}
        renderers={renderers}
        cells={materialCells}
        onChange={handleChange}
        validationMode={currentValidationMode}
      />

      <Button type="submit" disabled={Boolean(errors)}>
        Submit
      </Button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: var(--spacing-07) auto;
  gap: var(--spacing-07);
  max-width: var(--content-width);
  align-items: center;
`;

const CenteredImage = styled(Image)``;

const FormItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-05);
  width: 70%;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-04);
  align-items: center;
`;

const Resume = styled.label`
  display: flex;
  align-items: center;
  gap: var(--spacing-05);
`;
