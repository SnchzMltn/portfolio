import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import linkedIn from "../../static/icons/linkedin-original.svg";
import github from "../../static/icons/github.svg";
import gmail from "../../static/icons/google-gmail.svg";
import "./ContactFormContent.css";

async function ContactFromContent() {
  return (
    <div className="ContactFormContent">
      <Box>
        <br />
        <br />
        <br />
        <br />
        <Typography marginX={"10%"} textAlign="left" variant="h2">
          Contact me via:
        </Typography>
        <Stack direction="row" alignItems="center" spacing={2} marginX={"10%"}>
          <React.Fragment>
            <a href="https://www.linkedin.com/in/miltonsanchezm/">
              <img src={linkedIn} height="40px" width="40px" alt="LinkedIn" />
            </a>
          </React.Fragment>
          <React.Fragment>
            <a href="https://github.com/SnchzMltn">
              <img src={github} alt="Github" height="40px" width="40px" />
            </a>
          </React.Fragment>
          <React.Fragment>
            <a href="mailto:snchzmltn1994@gmail.com">
              <img src={gmail} alt="Mail" height="40px" width="40px" />
            </a>
          </React.Fragment>
        </Stack>
      </Box>
    </div>
  );
}

export default ContactFromContent;
