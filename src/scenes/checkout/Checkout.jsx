import * as yup from "yup";

import { Box, Button, Step, StepLabel, Stepper } from "@mui/material";

import { Formik } from "formik";
import Payment from "./Payment";
import Shipping from "./Shipping";
import { loadStripe } from "@stripe/stripe-js";
import { shades } from "../../theme";
import { useSelector } from "react-redux";
import { useState } from "react";

const Checkout = () => {

const [activeStep, setActiveStep] = useState(0);
const cart = useSelector((state)=>state.cart.cart);
const isFirstStep = activeStep === 0;
const isSecondStep = activeStep === 1;

const handleFormSubmit = async (value, action)=>{
  setActiveStep(activeStep + 1);
}

async function makePayment(values){

}

  return (
    <Box width='80%' m='100px auto'>
      <Stepper activeStep={activeStep} sx={{m: '20px 0'}}>
        <step>
          <StepLabel>Billing</StepLabel>
        </step>
        <step>
          <StepLabel>Payment</StepLabel>
        </step>
      </Stepper>
      <Box>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema[activeStep]}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue
          })=>(
            <form onSubmit={handleSubmit}>
              {isFirstStep && (
                <Shipping 
                 values={values}
                 errors={errors}
                 touched={touched}
                 handleBlur={handleBlur}
                 handleChange={handleChange}
                 setFieldValue={setFieldValue}
                />
              )}
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  )
}

export default Checkout