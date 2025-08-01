"use client";

import { Box, Button, Typography, Container, Grid } from "@mui/material";
import Image from "next/image";

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#E3F2FD",
        paddingY: 6,
        marginBottom: 20,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Side: Text Content */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              fontWeight="bold"
              color="primary"
              sx={{ marginBottom: 2 }}
            >
              Your local Gas safe and f-Gas registered Engineer
            </Typography>

            <Typography
              sx={{
                color: "#666",
                marginBottom: 2,
                fontWeight: "bold",
              }}
            >

            </Typography>
            <Typography
              sx={{
                color: "#666",
                marginBottom: 2,
              }}
            >
              Professional  heating,  cooling and  plumbing   installation  maintainenance and service 
              We deliver expert care to keep your home running smoothly in winter and summer
            </Typography>

            <Button
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: "#1976D2",
                color: "white",
                "&:hover": { backgroundColor: "#1565C0" },
              }}
            >
              Get A Qoute →
            </Button>
          </Grid>

          {/* Right Side: Three Images */}
          <Grid item xs={12} md={6}>
            {/* Container for the Three Images */}
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "400px", // Adjust height as needed
              }}
            >
              {/* First Image (Slightly to the Left) */}
              <Box
                sx={{
                  position: "absolute",
                  top: "5%",
                  left: "6%",
                  zIndex: 2,
                  width: "80%",
                  height: "100%",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2px solid #1976D2", // Yellow border
                }}
              >
                <Image
                  src="/J.png" // Replace with your image path
                  alt="Plumber 1"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>

              {/* Second Box (Replacing the Second Image) */}
              <Box
                sx={{
                  position: "absolute",
                  top: "0%",
                  right: "15%",
                  zIndex: 3,
                  width: "100px", // Adjust size as needed
                  height: "100px", // Adjust size as needed
                  backgroundColor: "#1976D2", // Blue background
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  "&:hover": {
                    backgroundColor: "#FFC107", // Yellow background on hover
                    transform: "scale(1.05)", // Slight zoom effect on hover
                  },
                  transition: "all 0.3s ease", // Smooth transition for hover effect
                }}
              >
                <Typography
                  variant="body2" // Smaller font size
                  fontWeight="bold"
                  sx={{ color: "#fff" }}
                >
                  High Quality Service ⭐
                </Typography>
              </Box>

              {/* Third Image (Bottom) */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: "-20%",
                  left: "4%",
                  zIndex: 3,
                  width: "30%",
                  height: "40%",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2px solid  #1976D2", // Yellow border
                }}
              >
                <Image
                  src="/boiler.jpeg" // Replace with your image path
                  alt="Plumber 3"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
