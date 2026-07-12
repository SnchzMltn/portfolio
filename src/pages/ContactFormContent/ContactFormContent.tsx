import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import linkedIn from "../../static/icons/linkedin-original.svg";
import github from "../../static/icons/github.svg";
import gmail from "../../static/icons/google-gmail.svg";
import "./ContactFormContent.css";

function ContactFromContent() {
  return (
    <div className="ContactFormContent">
      <Box className="contact-card">
        <Typography variant="h2">
          Contact me via:
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Feel free to reach out for collaborations, consulting, or just a quick hello.
        </Typography>
        <Stack direction="row" alignItems="center" spacing={2} className="contact-links">
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
