import React from 'react';
import { Box, Typography, Chip, Card, CardContent, Grid } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import PersonIcon from '@mui/icons-material/Person';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import WorkIcon from '@mui/icons-material/Work';

const MainContent = ({ profile, experiences, education, projects, skills }) => {
  return (
    <Box sx={{ 
      p: { xs: 2, md: 4 }, 
      flexGrow: 1, 
      bgcolor: 'background.default',
      height: '100%',
    }}>
      {/* Profile Section with Card */}
      <Card elevation={3} sx={{ mb: 5, borderRadius: 2, overflow: 'hidden', position: 'relative' }}>
        <Box sx={{ 
          height: '8px', 
          width: '100%', 
          background: 'linear-gradient(90deg, #3498db, #2ecc71)' 
        }} />
        <CardContent sx={{ p: 3 }}>
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 2, 
              display: 'flex', 
              alignItems: 'center',
              gap: 1,
              fontWeight: 600,
              color: 'primary.main'
            }}
          >
            <PersonIcon color="secondary" />
            PROFILE
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 2,
              whiteSpace: 'pre-line',
              lineHeight: 1.8,
              '& > p': {
                mb: 2,
                '&:last-child': {
                  mb: 0
                }
              }
            }}
          >
            {profile}
          </Typography>
        </CardContent>
      </Card>

      {/* Skills Section with Gradient Chips */}
      <Card elevation={3} sx={{ mb: 5, borderRadius: 2, overflow: 'hidden' }}>
        <Box sx={{ 
          height: '8px', 
          width: '100%', 
          background: 'linear-gradient(90deg, #3498db, #2ecc71)' 
        }} />
        <CardContent sx={{ p: 3 }}>
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 3, 
              display: 'flex', 
              alignItems: 'center',
              gap: 1,
              fontWeight: 600,
              color: 'primary.main'
            }}
          >
            <CodeIcon color="secondary" />
            SKILLS
          </Typography>
          <Grid container spacing={3}>
            {skills.map((section, sIdx) => (
              <Grid item xs={12} md={6} key={sIdx}>
                <Box sx={{ mb: 1 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    {section.category}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                  {section.items.map((item, idx) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${idx % 2 === 0 ? '#3498db, #2980b9' : '#2ecc71, #27ae60'})`,
                          flexShrink: 0
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 500,
                          color: 'text.primary',
                          fontSize: '0.875rem'
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      {/* Work Experience Section with Timeline-like Design */}
      <Card elevation={3} sx={{ mb: 5, borderRadius: 2, overflow: 'hidden' }}>
        <Box sx={{ 
          height: '8px', 
          width: '100%', 
          background: 'linear-gradient(90deg, #3498db, #2ecc71)' 
        }} />
        <CardContent sx={{ p: 3 }}>
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 3, 
              display: 'flex', 
              alignItems: 'center',
              gap: 1,
              fontWeight: 600,
              color: 'primary.main'
            }}
          >
            <WorkIcon color="secondary" />
            WORK EXPERIENCE
          </Typography>
          <Box sx={{ position: 'relative' }}>
            {experiences.map((exp, index) => (
              <Box 
                key={index} 
                sx={{ 
                  mb: 4,
                  pl: 4,
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: '8px',
                    top: 0,
                    bottom: 0,
                    width: '2px',
                    bgcolor: index % 2 === 0 ? 'primary.light' : 'secondary.light',
                    display: index < experiences.length - 1 ? 'block' : 'none'
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: '8px',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    bgcolor: index % 2 === 0 ? 'primary.main' : 'secondary.main',
                    zIndex: 1
                  }
                }}
              >
                <Card 
                  elevation={2} 
                  sx={{ 
                    p: 2, 
                    borderRadius: 2,
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      transition: 'transform 0.3s ease',
                      boxShadow: 4
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1, alignItems: 'flex-start' }}>
                    <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 600 }}>
                      {exp.position}
                    </Typography>
                    <Chip 
                      label={exp.period} 
                      size="small" 
                      sx={{ 
                        bgcolor: index % 2 === 0 ? 'primary.light' : 'secondary.light',
                        color: 'white',
                        fontWeight: 500
                      }} 
                    />
                  </Box>
                  <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 1, fontWeight: 500 }}>
                    {exp.company}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
                    {exp.description}
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, mb: 0 }}>
                    {exp.achievements.map((achievement, i) => (
                      <Box 
                        component="li" 
                        key={i}
                        sx={{ 
                          mb: 1,
                          '&::marker': {
                            color: index % 2 === 0 ? 'primary.main' : 'secondary.main'
                          }
                        }}
                      >
                        <Typography variant="body2">{achievement}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Card>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>

      {/* Projects Section with Cards */}
      <Card elevation={3} sx={{ mb: 5, borderRadius: 2, overflow: 'hidden' }}>
        <Box sx={{ 
          height: '8px', 
          width: '100%', 
          background: 'linear-gradient(90deg, #3498db, #2ecc71)' 
        }} />
        <CardContent sx={{ p: 3 }}>
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 3, 
              display: 'flex', 
              alignItems: 'center',
              gap: 1,
              fontWeight: 600,
              color: 'primary.main'
            }}
          >
            <FolderSpecialIcon color="secondary" />
            PROJECTS
          </Typography>
          <Grid container spacing={3}>
            {projects.map((project, index) => (
              <Grid item xs={12} key={index}>
                <Card 
                  elevation={2} 
                  sx={{ 
                    borderRadius: 2,
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      transition: 'transform 0.3s ease',
                      boxShadow: 4
                    }
                  }}
                >
                  <Box sx={{ 
                    height: '6px', 
                    width: '100%', 
                    background: index % 2 === 0 ? 'linear-gradient(90deg, #3498db, #2980b9)' : 'linear-gradient(90deg, #2ecc71, #27ae60)' 
                  }} />
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, alignItems: 'flex-start' }}>
                      <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 600 }}>
                        {project.name}
                      </Typography>
                      <Chip 
                        label={project.period} 
                        size="small" 
                        sx={{ 
                          bgcolor: index % 2 === 0 ? 'primary.light' : 'secondary.light',
                          color: 'white',
                          fontWeight: 500
                        }} 
                      />
                    </Box>
                    {(project.teamSize || project.position) && (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                        {project.teamSize && (
                          <Chip 
                            label={`Team: ${project.teamSize}`} 
                            size="small" 
                            sx={{
                              bgcolor: 'background.paper',
                              border: '1px solid',
                              borderColor: index % 2 === 0 ? 'primary.light' : 'secondary.light',
                              color: index % 2 === 0 ? 'primary.main' : 'secondary.main',
                              fontWeight: 500
                            }}
                          />
                        )}
                        {project.position && (
                          <Chip 
                            label={`Role: ${project.position}`} 
                            size="small" 
                            sx={{
                              bgcolor: 'background.paper',
                              border: '1px solid',
                              borderColor: index % 2 === 0 ? 'primary.light' : 'secondary.light',
                              color: index % 2 === 0 ? 'primary.main' : 'secondary.main',
                              fontWeight: 500
                            }}
                          />
                        )}
                      </Box>
                    )}
                    <Typography variant="body1" sx={{ mb: 3 }}>
                      {project.description}
                    </Typography>
                    {project.Customer && (
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <Typography variant="subtitle2" sx={{ color: 'primary.main', fontWeight: 600 }}>
                          Customer:
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {project.Customer}
                        </Typography>
                      </Box>
                    )}
                    <Typography variant="subtitle2" sx={{ mb: 1, color: 'primary.main', fontWeight: 600 }}>
                      Technologies:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                      {project.technologies.map((tech, i) => (
                        <Chip
                          key={i}
                          label={tech}
                          size="small"
                          sx={{
                            bgcolor: 'background.paper',
                            border: '1px solid',
                            borderColor: index % 2 === 0 ? 'primary.light' : 'secondary.light',
                            color: index % 2 === 0 ? 'primary.main' : 'secondary.main',
                          }}
                        />
                      ))}
                    </Box>
                    <Typography variant="subtitle2" sx={{ mb: 1, color: 'primary.main', fontWeight: 600 }}>
                      Responsibilities:
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, mb: 0 }}>
                      {project.responsibilities.map((resp, i) => (
                        <Box 
                          component="li" 
                          key={i}
                          sx={{ 
                            mb: 1,
                            '&::marker': {
                              color: index % 2 === 0 ? 'primary.main' : 'secondary.main'
                            }
                          }}
                        >
                          <Typography variant="body2">{resp}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      {/* Education Section */}
      {/* Commented out as education section has been moved to Sidebar
      <Card elevation={3} sx={{ mb: 5, borderRadius: 2, overflow: 'hidden' }}>
        <Box sx={{ 
          height: '8px', 
          width: '100%', 
          background: 'linear-gradient(90deg, #3498db, #2ecc71)' 
        }} />
        <CardContent sx={{ p: 3 }}>
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 3, 
              display: 'flex', 
              alignItems: 'center',
              gap: 1,
              fontWeight: 600,
              color: 'primary.main'
            }}
          >
            <SchoolIcon color="secondary" />
            EDUCATION
          </Typography>
          {education.map((edu, index) => (
            <Card 
              key={index} 
              elevation={2} 
              sx={{ 
                mb: 3, 
                borderRadius: 2,
                overflow: 'hidden',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  transition: 'transform 0.3s ease',
                  boxShadow: 4
                }
              }}
            >
              <Box sx={{ 
                height: '6px', 
                width: '100%', 
                background: 'linear-gradient(90deg, #3498db, #2ecc71)' 
              }} />
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1, alignItems: 'flex-start' }}>
                  <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 600 }}>
                    {edu.degree}
                  </Typography>
                  <Chip 
                    label={edu.period} 
                    size="small" 
                    sx={{ 
                      bgcolor: 'primary.light',
                      color: 'white',
                      fontWeight: 500
                    }} 
                  />
                </Box>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 2, fontWeight: 500 }}>
                  {edu.school}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {edu.description}
                </Typography>
                {edu.achievements && edu.achievements.length > 0 && (
                  <>
                    <Typography variant="subtitle2" sx={{ mb: 1, color: 'primary.main', fontWeight: 600 }}>
                      Achievements:
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, mb: 0 }}>
                      {edu.achievements.map((achievement, i) => (
                        <Box 
                          component="li" 
                          key={i}
                          sx={{ 
                            mb: 1,
                            '&::marker': {
                              color: 'primary.main'
                            }
                          }}
                        >
                          <Typography variant="body2">{achievement}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
      */}
    </Box>
  );
};

export default MainContent;