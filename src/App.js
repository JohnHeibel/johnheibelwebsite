import React from 'react';
import {
  Container,
  Typography,
  Link,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  CssBaseline,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import darkTheme from './theme';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <Box sx={{ textAlign: 'center', my: 4 }}>
          <Typography variant="h2" component="h1">
            John Heibel
          </Typography>
          <Typography variant="h6">Location: Fremont, California, US</Typography>
          <Box>
            <Link href="https://github.com/JohnHeibel" target="_blank" rel="noopener" sx={{ mx: 2 }}>
              GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/john-heibel-81a005277" target="_blank" rel="noopener" sx={{ mx: 2 }}>
              LinkedIn
            </Link>
            <Link href="https://todo.com" target="_blank" rel="noopener" sx={{ mx: 2 }}>
              Personal Website
            </Link>
            <Link href="mailto:jheibel@uoregon.edu" sx={{ mx: 2 }}>
              Email
            </Link>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            About Me
          </Typography>
          <Typography paragraph>
            I am a highly skilled software developer proficient in Python and C, with hands-on experience in machine learning libraries such as Huggingface Transformers and Pytorch. Well-versed with development tools including CodeQL, Slurm Workload Manager, and Git/Github. Willing to apply myself to new technologies.
          </Typography>
          <Typography paragraph>
            Bachelor's degree in Computer Science from the University of Oregon, with a cumulative GPA of 4.13.
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Projects
          </Typography>
          <Paper sx={{ p: 2, mb: 2 }}>
            <Typography variant="h5" component="h3">
              <Link href="https://project1.com" target="_blank" rel="noopener">
                Automatic Multi-Instance GPT
              </Link>
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Technologies:</strong> Python, OpenAI API, ChatGPT, Machine Learning
            </Typography>
            <Typography paragraph>
              Utilized the OpenAI API to create a tooling pipeline allowing for a singular instance of GPT-4 to call an arbitrary amount of child ChatGPT instances to improve task accuracy. Child instances are equipped with different tools such as Calculators or Google search through the Google Search API. Implemented multiprocessing and rate-limiting for reliability and speed.
            </Typography>
            <Link href="https://github.com/JohnHeibel/Automatic_Multi-instance_GPT-4/" target="_blank" rel="noopener">
              Source Code
            </Link>
          </Paper>
        </Box>
        <Divider />
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Skills
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Languages:" secondary="Python, C, C++, Java, Latex" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Libraries:" secondary="Huggingface Transformers, OpenAI API, Pytorch, Pandas" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Dev Tools:" secondary="CodeQL, Slurm Workload Manager, Git, Github, Jupyter Notebook" />
            </ListItem>
          </List>
        </Box>
        <Divider />
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Experience
          </Typography>
          <Paper sx={{ p: 2, mb: 2 }}>
            <Typography variant="h5" component="h3">
              Undergraduate Research Assistant
            </Typography>
            <Typography variant="subtitle1">
              University of Oregon | Eugene, Oregon | June 2023 - Present
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Created adversarial security testing for Large Language Models such as ChatGPT and LLama." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Systematic testing of malicious code generation using a modified version of the HumanEval evaluation dataset." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Worked with OpenAI API, Huggingface Transformers, and Pytorch to run automated and broad adversarial testing of LLMs to detect malicious code." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Utilized the University High Performance Computing Cluster to efficiently run and finetune open-source models." />
              </ListItem>
            </List>
          </Paper>
        </Box>
        <Divider />
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Education
          </Typography>
          <Typography>
            <strong>University of Oregon</strong> | Eugene, Oregon, US | Bachelor of Science in Computer Science | Sep 2022 - Present | Cumulative GPA: 4.13
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Extracurriculars
          </Typography>
          <Paper sx={{ p: 2, mb: 2 }}>
            <Typography variant="h5" component="h3">
              Vice President of the Artificial Intelligence Student Association
            </Typography>
            <Typography variant="subtitle1">University of Oregon</Typography>
            <List>
              <ListItem>
                <ListItemText primary="Main presenter for technical content and recent news. Proficient at communicating complex topics to both experienced and inexperienced members." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Designed and ran a project teaching club members how to use the OpenAI API and integrate it with existing codebases." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Heavily involved with managing the club, maintaining membership, and building industry connections." />
              </ListItem>
            </List>
          </Paper>
        </Box>
        <Divider />
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Contact
          </Typography>
          <Typography>
            Email: <Link href="mailto:jheibel@uoregon.edu">jheibel@uoregon.edu</Link>
          </Typography>
          <Typography>
            Mobile: <Link href="tel:15104075453">510-407-5453</Link>
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
