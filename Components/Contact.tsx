"use client";
import { Box, Typography, Link } from "@mui/material";

const ContactUs = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "start",
        justifyContent: "space-between",
        backgroundColor: "#f9f9f9",
        padding: { xs: 4, md: 6 },
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      {/* Left Side: Contact Information */}
      <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" }, pl: { md: 5 } }}>
        <Typography variant="h4" fontWeight="bold" color="primary" mb={3}>
          Get in Touch
        </Typography>

        <Typography variant="h6" fontWeight="bold" mb={1}>
          Address:
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "1.1rem", mb: 2, color: "#555" }}>
          4 Jasmine Cl, Ilford IG1 2BS, United Kingdom
        </Typography>

        <Typography variant="h6" fontWeight="bold" mb={1}>
          Phone:
        </Typography>
        <Link href="tel:+447951494052" variant="body1" color="primary" sx={{ fontSize: "1.1rem" }}>
          +44 7951 494052
        </Link>

        {/* <Typography variant="h6" fontWeight="bold" mt={3} color="primary">
          Our Location:
        </Typography> */}
      </Box>

      {/* Right Side: Embedded Google Map */}
      <Box sx={{ flex: 1, textAlign: "left", mt: { xs: 4, md: 0 }, pl: { md: 5 } }}>
       
      </Box>
    </Box>
  );
};

export default ContactUs;
