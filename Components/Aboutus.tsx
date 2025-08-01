'use client'
import React from "react";
import { Box, Typography, Grid, Container, Button } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: "#E3F2FD" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Side: Image and Blue Box */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  paddingTop: { xs: "75%", md: "75%" },
                  marginTop: 2,
                }}
              >
                {/* Blue Box */}
                <Box
                  sx={{
                    backgroundColor: "#1976D2",
                    width: "92%",
                    height: "92%",
                    borderRadius: "8px",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 1,
                  }}
                />

                {/* Image Box */}
                <Box
                  sx={{
                    position: "absolute",
                    top: { xs: "10px", md: "20px" },
                    left: { xs: "10px", md: "20px" },
                    width: { xs: "calc(100% - 20px)", md: "calc(100% - 40px)" },
                    height: { xs: "calc(100% - 20px)", md: "calc(100% - 40px)" },
                    borderRadius: "8px",
                    overflow: "hidden",
                    zIndex: 2,
                  }}
                >
                  <Image
                    src="/J.png"
                    alt="About Us"
                    layout="fill"
                    objectFit="cover"
                  />
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Side: Text Content */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Box sx={{ paddingLeft: { xs: "0", md: "30px" } }}>
                <Typography
                  sx={{
                    fontSize: { xs: "36px", md: "44px" },
                    color: "#1976D2",
                    fontWeight: "500",
                  }}
                  variant="h4"
                  gutterBottom
                >
                  About Us
                </Typography>
                <Box
                  sx={{
                    height: "2px",
                    width: { xs: "150px", md: "200px" },
                    marginTop: "5px",
                    background: "#1976D2",
                  }}
                ></Box>
                <Typography
                  sx={{
                    paddingLeft: { xs: "0", md: "10px" },
                    marginTop: "20px",
                    fontSize: { xs: "14px", md: "16px" },
                  }}
                  variant="body1"
                  paragraph
                >
<Typography variant="h6">
    We specialize in  installation, maintenance, repair, and Service, of gas appliances, and  Air conditioning heeting cooling systems, and plumbing solutions <br/>
   We are committed to delivering safe, efficient, and fully compliant solutions with a focus on customer satisfaction and long-term reliability.
Your comfort and safety is our priority — We  deliver results 

</Typography>
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    backgroundColor: "#1976D2",
                    color: "white",
                    marginLeft: { xs: "0", md: "10px" },
                    marginTop: { xs: "10px", md: "0" },
                    "&:hover": { backgroundColor: "#1565C0" },
                  }}
                >
                  Read more →
                </Button>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
