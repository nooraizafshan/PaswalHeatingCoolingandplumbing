"use client";
import { Box, Typography, Link, Grid, IconButton, useTheme, useMediaQuery, List, ListItem } from "@mui/material";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";
import Image from "next/image";

// Smooth scrolling function
const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const areasCovered = [
    "Romford", "Barking", "Dagenham", "Mile End", "Ilford", 
    "Seven Kings", "Chigwell", "Woodford Green", "Buckhurst Hill", 
    "Loughton", "Chadwell Heath", "Hornchurch", "Elm Park", 
    "Rainham", "Upminster", "Grays", "Emerson Park", "Abridge", 
    "East London", "Aldgate", "Whitechapel", "Shoreditch", "Bow", 
    "Hackney", "Leytonstone", "Wanstead", "West Ham", "Poplar", 
    "Canary Wharf", "Stratford", "Canning Town", "Walthamstow", "Woodford"
  ];

  // Split areas into three columns
  const columnSize = Math.ceil(areasCovered.length / 3);
  const column1 = areasCovered.slice(0, columnSize);
  const column2 = areasCovered.slice(columnSize, columnSize * 2);
  const column3 = areasCovered.slice(columnSize * 2);

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: 'url(/g.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#fff',
        padding: { xs: 3, md: 5 },
        borderTop: "2px solid #ddd",
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(21, 101, 192, 0.81)',
          zIndex: 0,
        }
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={3} justifyContent="center">
          {/* Left Section - Company Info with Logo */}
          <Grid item xs={12} md={4} textAlign={{ xs: "center", md: "left" }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' } }}>
              <Image
                src="/Logo-removebg-preview.png"
                alt="Logo"
                width={isMobile ? 100 : 230}
                height={isMobile ? 100 : 225}
                style={{
                  objectFit: "contain",
                  minWidth: isMobile ? 80 : 120,
                }}
              />
              <Typography variant="body1" mt={1} ml={3} sx={{ maxWidth: 300, color: '#fff' }}>
                Professional plumbing cooling and heating services with over 20 years of experience, serving London and surrounding areas.
              </Typography>
              
              <Box mt={2} ml={3} textAlign={{ xs: "center", md: "left" }}>
                <Typography variant="body1" fontWeight="bold" color="#fff">
                  Address:
                </Typography>
                <Typography variant="body2" color="rgba(255, 255, 255, 0.9)">
                  4 Jasmine Cl, Ilford IG1 2BS, United Kingdom
                </Typography>

                <Typography variant="body1" fontWeight="bold" mt={1} color="#fff">
                  Phone:
                </Typography>
                <Link href="tel:+447951494052" variant="body2" color="#fff" sx={{ '&:hover': { color: '#ddd' } }}>
                  +44 7951 494052
                </Link>
              </Box>
            </Box>
          </Grid>

          {/* Areas Covered Section - Three Columns */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" textAlign={{ xs: "center", md: "left" }} mb={2} color="#fff">
              Areas We Cover:
            </Typography>
            <Box sx={{ 
              display: 'flex',
              mt: 1,
              justifyContent: { xs: 'center', md: 'flex-start' },
              flexWrap: 'wrap'
            }}>
              {/* First Column */}
              <Box sx={{ mr: { xs: 0, md: 3 }, mb: { xs: 2, md: 0 } }}>
                <List dense sx={{ p: 0 }}>
                  {column1.map((area, index) => (
                    <ListItem key={index} sx={{ p: 0, display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' }}>
                      <Link 
                        href="#" 
                        variant="body2" 
                        sx={{
                          color: 'rgba(255, 255, 255, 0.9)',
                          textDecoration: 'none',
                          '&:hover': {
                            color: '#fff',
                            textDecoration: 'underline'
                          },
                          transition: 'all 0.3s ease',
                          display: 'inline',
                          ml: -1
                        }}
                      >
                        {area}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
              {/* Second Column */}
              <Box sx={{ mr: { xs: 0, md: 3 }, mb: { xs: 2, md: 0 } }}>
                <List dense sx={{ p: 0 }}>
                  {column2.map((area, index) => (
                    <ListItem key={index} sx={{ p: 0, display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' }}>
                      <Link 
                        href="#" 
                        variant="body2" 
                        sx={{
                          color: 'rgba(255, 255, 255, 0.9)',
                          textDecoration: 'none',
                          '&:hover': {
                            color: '#fff',
                            textDecoration: 'underline'
                          },
                          transition: 'all 0.3s ease',
                          display: 'inline',
                          ml: -1
                        }}
                      >
                        {area}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
              {/* Third Column */}
              <Box>
                <List dense sx={{ p: 0 }}>
                  {column3.map((area, index) => (
                    <ListItem key={index} sx={{ p: 0, display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' }}>
                      <Link 
                        href="#" 
                        variant="body2" 
                        sx={{
                          color: 'rgba(255, 255, 255, 0.9)',
                          textDecoration: 'none',
                          '&:hover': {
                            color: '#fff',
                            textDecoration: 'underline'
                          },
                          transition: 'all 0.3s ease',
                          display: 'inline',
                          ml: -1
                        }}
                      >
                        {area}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          </Grid>

          {/* Right Section - Social Media & Certifications */}
          <Grid item xs={12} md={4} textAlign={{ xs: "center", md: "right" }}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: { xs: 'center', md: 'flex-end' },
              height: '100%',
              justifyContent: 'space-between'
            }}>
              <Box>
                <Typography variant="h6" fontWeight="bold" mb={2} color="#fff">
                  Connect With Us
                </Typography>
                <Box>
                  <IconButton href="#" sx={{ 
                    color: '#fff',
                    '&:hover': { 
                      transform: 'scale(1.1)',
                      color: '#ddd'
                    }, 
                    transition: 'all 0.3s ease' 
                  }}>
                    <Facebook />
                  </IconButton>
                  <IconButton href="#" sx={{ 
                    color: '#fff',
                    '&:hover': { 
                      transform: 'scale(1.1)',
                      color: '#ddd'                  
                    }, 
                    transition: 'all 0.3s ease' 
                  }}>
                    <Twitter />
                  </IconButton>
                  <IconButton href="#" sx={{ 
                    color: '#fff',
                    '&:hover': { 
                      transform: 'scale(1.1)',
                      color: '#ddd'
                    }, 
                    transition: 'all 0.3s ease' 
                  }}>
                    <LinkedIn />
                  </IconButton>
                  <IconButton href="#" sx={{ 
                    color: '#fff',
                    '&:hover': { 
                      transform: 'scale(1.1)',
                      color: '#ddd'
                    }, 
                    transition: 'all 0.3s ease' 
                  }}>
                    <Instagram />
                  </IconButton>
                </Box>
              
              <Box mt={2}>
                <Typography variant="h6" fontWeight="bold" mb={2} color="#fff">
                  Our Certifications
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
                  <Image
                    src="/gas.png"
                    alt="Gas Safe Register"
                    width={100}
                    height={50}
                    style={{ 
                      marginTop: "10px",
                    }}
                  />
                  <Image
                    src="/fgas.jpeg"
                    alt="F-Gas Certified"
                    width={100}
                    height={50}
                    style={{ 
                      marginTop: "10px", 
                      marginLeft: '10px',
                    }}
                  />
                </Box>
              </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Line */}
        <Box textAlign="center" mt={3} pt={2} borderTop="1px solid rgba(255, 255, 255, 0.2)">
          <Typography variant="body2" color="rgba(255, 255, 255, 0.8)">
            © {new Date().getFullYear()} Paswal Company. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;