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
        {/* Header */}
        <Box sx={{ textAlign: 'center', my: 4 }}>
          <Typography variant="h2" component="h1">
            John Heibel
          </Typography>
          <Typography variant="h6">Fremont, California, US</Typography>
          <Box>
            <Link href="https://github.com/JohnHeibel" target="_blank" rel="noopener" sx={{ mx: 2 }}>
              GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/john-heibel/" target="_blank" rel="noopener" sx={{ mx: 2 }}>
              LinkedIn
            </Link>
            <Link href="mailto:jheibel@uoregon.edu" sx={{ mx: 2 }}>
              Email
            </Link>
            <Link href="tel:15104075453" sx={{ mx: 2 }}>
              Mobile
            </Link>
          </Box>
        </Box>
        <Divider />

        {/* Experience */}
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Experience
          </Typography>
          <Paper sx={{ p: 2, mb: 2 }}>
            <Typography variant="h5" component="h3">
              Undergraduate Research Assistant
            </Typography>
            <Typography variant="subtitle1">
              University of Oregon Machine Learning Lab | Eugene, Oregon | June 2023 - Present
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Led research on adversarial attacks on code generation using language models." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Systematic testing of LLMs' ability to generate malicious code using a modified HumanEval and SWE-bench benchmarks." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Worked with OpenAI API, PyTorch, Docker, and Hugging Face Transformers for automated adversarial testing." />
              </ListItem>
            </List>
          </Paper>
        </Box>
        <Divider />

        {/* Publications */}
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Publications
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="MaPPing Your Model: Assessing the Impact of Adversarial Attacks on LLM-based Programming Assistants"
                secondary={
                  <>
                    <Typography component="span" variant="body2">
                      John Heibel, Daniel Lowd. Proceedings of the ICML 2024 Workshop on Trustworthy Multimodal Foundation Models and AI Agents, July 2024.{' '}
                      <Link href="https://doi.org/10.48550/arXiv.2407.11072" target="_blank" rel="noopener">
                        arXiv:2407.11072
                      </Link>
                    </Typography>
                  </>
                }
              />
            </ListItem>
          </List>
        </Box>
        <Divider />

        {/* Education */}
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Education
          </Typography>
          <Typography>
            <strong>University of Oregon</strong> | Bachelor of Science in Computer Science | Eugene, Oregon | Sep 2022 - Present | GPA: 4.09
          </Typography>
        </Box>
        <Divider />

        {/* Awards */}
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Awards
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Erwin & Gertrude Juilfs Scholarship in Computer and Information Science"
                secondary="Awarded to two students in 2024 for exceptional GPA and originality of research."
              />
            </ListItem>
          </List>
        </Box>
        <Divider />

        {/* Extracurriculars */}
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Extracurriculars
          </Typography>
          <Paper sx={{ p: 2, mb: 2 }}>
            <Typography variant="h5" component="h3">
              Cofounder & Vice President, Artificial Intelligence Student Association
            </Typography>
            <Typography variant="subtitle1">University of Oregon</Typography>
            <List>
              <ListItem>
                <ListItemText primary="Founded and led the AI Club, managing industry relations and educational initiatives." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Delivered technical presentations and developed hands-on projects using the OpenAI API." />
              </ListItem>
            </List>
          </Paper>
          <Paper sx={{ p: 2, mb: 2 }}>
            <Typography variant="h5" component="h3">
              Founder & Event Coordinator, QuackHacks
            </Typography>
            <Typography variant="subtitle1">University of Oregon</Typography>
            <List>
              <ListItem>
                <ListItemText primary="Organized a 24-hour hackathon with 100+ attendees and industry mentors." />
              </ListItem>
            </List>
          </Paper>
        </Box>
        <Divider />

        {/* Relevant Courses */}
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Relevant Courses
          </Typography>
          <List>
            {['CS 415: Operating Systems (A)',
              'CS 330: C/C++ and Unix (A+)',
              'CS 471: Intro to Artificial Intelligence (A-)',
              'CS 313: Intermediate Data Structures (A)',
              'CS 314: Computer Organization (A)',
              'CS 315: Intermediate Algorithms (A-)',
              'CS 453: Data Mining (In Progress)'].map((course) => (
              <ListItem key={course}>
                <ListItemText primary={course} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider />

        {/* Projects */}
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Projects
          </Typography>
          <Paper sx={{ p: 2, mb: 2 }}>
            <Typography variant="h5" component="h3">
              <Link
                href="https://github.com/JohnHeibel/Automatic_Multi-instance_GPT-4/"
                target="_blank"
                rel="noopener"
              >
                Automatic Multi-Instance GPT
              </Link>
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Technologies:</strong> Python, OpenAI API, ChatGPT, Machine Learning
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Built a pipeline enabling GPT-4 to spawn multiple child GPT-4 instances for task accuracy." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Integrated tools like calculators and Google Search API within child instances." />
              </ListItem>
            </List>
          </Paper>
        </Box>
        <Divider />

        {/* Technical Skills */}
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Technical Skills
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Languages:" secondary="C, Python, TypeScript, JavaScript, C++, Java, LaTeX" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Libraries:" secondary="OpenAI API, PyTorch, Pandas, NumPy, Matplotlib, React, Hugging Face Transformers" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Dev Tools:" secondary="CodeQL, Slurm, Git, GitHub, Jupyter Notebook" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Databases:" secondary="MySQL, MongoDB" />
            </ListItem>
          </List>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
