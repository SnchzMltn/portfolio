import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Paper,
  List,
  ListItem,
  Box,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { Stack, Divider, LinearProgress } from "@mui/material";
import "./AboutMeContent.css";
import prof_img from "../../static/img_prof_2048.jpeg";
import javaLogo from "../../static/icons/java.svg";
import pythonLogo from "../../static/icons/python.svg";
import sqlLogo from "../../static/icons/sql.svg";
import dbLogo from "../../static/icons/dbicon.png";
import reactLogo from "../../static/icons/react.svg";
import html5Logo from "../../static/icons/html5.svg";
import awsLogo from "../../static/icons/aws.svg";
import googleLogo from "../../static/icons/google.svg";
import typescriptLogo from "../../static/icons/TypeScript.svg";

import Timeline from "../../components/Timeline/Timeline";
import { COLORS, PROFESSIONAL_PROFILE } from "../../static/constants";

type Skill = {
  name: string;
  progress: number;
  logo: string;
};

const skillsArray: Skill[] = [
  { name: "Java (JDK 8+)", progress: 100, logo: javaLogo },
  { name: "Python", progress: 80, logo: pythonLogo },
  { name: "Relational Database (SQL)", progress: 100, logo: sqlLogo },
  {
    name: "Non-relational Database (NoSQL)",
    progress: 90,
    logo: dbLogo,
  },
  {
    name: "Vector Database",
    progress: 60,
    logo: dbLogo,
  },
  { name: "React", progress: 75, logo: reactLogo },
  { name: "TypeScript", progress: 85, logo: typescriptLogo },
  { name: "HTML5/CSS3", progress: 100, logo: html5Logo },
  { name: "Amazon Web Services", progress: 80, logo: awsLogo },
  { name: "Google Cloud Platform", progress: 75, logo: googleLogo },
];

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.primary.main,
    },
    secondary: {
      main: COLORS.secondary.main,
    },
  },
});

function AboutMeContent() {
  return (
    <div
      style={{
        display: "block",
      }}
      className="AboutMeContent"
    >
      <Box className="aboutHeader">
        <ThemeProvider theme={theme}>
          <Typography color="primary" variant="h3" align="center">
            Fullstack Software Engineer
          </Typography>
          <Typography color="primary" variant="h4" align="center">
            Webdev @{" "}
            <a href="https://apryse.com" rel="blank">
              Apryse
            </a>
          </Typography>
        </ThemeProvider>
        <div className="ProfilePhotoImage aboutProfileImage">
          <img src={prof_img} alt="hi!" width="240" height="240" />
        </div>
      </Box>

      <Box className="aboutSkillsContainer">
        <Paper variant="outlined">
          <List>
            {skillsArray.map((skill, i) => {
              return (
                <div key={i}>
                  <Stack
                    className="aboutSkillRow"
                    direction="row"
                    spacing={2}
                  >
                    <ListItem className="aboutSkillListItem" key={i}>
                      <Box width="100%">
                        <Stack
                          justifyContent="left"
                          direction="row"
                          spacing={2}
                        >
                          <Box className="aboutSkillIcon">
                            <img
                              alt={skill.name}
                              width="24px"
                              height="24px"
                              src={skill.logo}
                              style={{
                                margin: "5px",
                              }}
                            />
                          </Box>
                          <Box className="aboutSkillName" display="flex" alignItems="center">
                            <Typography variant="body2" noWrap>
                              {skill.name}
                            </Typography>
                          </Box>
                          <Box className="aboutSkillProgress" alignItems="right">
                            <LinearProgress
                              variant="determinate"
                              value={skill.progress}
                            />
                          </Box>
                        </Stack>
                      </Box>
                    </ListItem>
                  </Stack>
                  <Divider variant="middle" />
                </div>
              );
            })}
          </List>
        </Paper>
      </Box>

      <Accordion>
        <AccordionSummary>
          <Box marginLeft="25%" marginRight="25%" width="100%">
            <Typography
              color="primary"
              variant="h4"
              align="center"
              className="AccordionSubtitle"
            >
              Services
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails style={{ display: "flex", justifyContent: "center" }}>
          <Stack
            spacing={2}
          >
            <Paper variant="outlined" >
              <div style={{ margin: "1.5%" }}>
                <Typography variant="h5" align="center">
                  Consulting
                </Typography>
              </div>
              <div style={{ margin: "1.5%" }}>
                <Typography variant="body2">
                  Want to discuss the viability of your project? Have you got an idea but unsure about how to proceed? I am currently <a href="mailto:snchzmltn1994@gmail.com" rel="blank">available</a> for consulting jobs.
                </Typography>
              </div>
            </Paper>
            <Paper variant="outlined">
              <div style={{ margin: "1.5%" }}>
                <Typography variant="h5" align="center">
                  Tutoring
                </Typography>
              </div>
              <div style={{ margin: "1.5%" }}>
                <Typography variant="body2">
                  Do you need help with your classes, projects, ideas, etc.? Let's connect and have a chat, <a href="mailto:snchzmltn1994@gmail.com" rel="blank">reach out</a>!
                </Typography>
              </div>
            </Paper>
          </Stack>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary>
          <Box marginLeft="25%" marginRight="25%" width="100%">
            <Typography
              color="primary"
              variant="h4"
              align="center"
              className="AccordionSubtitle"
            >
              Experience
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails style={{ display: "flex", justifyContent: "center" }}>
          <Timeline />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <Box marginLeft="25%" marginRight="25%" width="100%">
            <Typography
              color="primary"
              variant="h4"
              align="center"
              className="AccordionSubtitle"
            >
              Professional profile
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Paper variant="outlined">
            <div style={{ margin: "2.5%" }}>
              <Typography>{PROFESSIONAL_PROFILE}</Typography>
            </div>
          </Paper>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AboutMeContent;
