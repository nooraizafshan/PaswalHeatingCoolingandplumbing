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
        <iframe
          title="Google Map Location"
          width="100%"
          height="320"
          style={{ border: "0", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.204751814465!2d0.06940527483715904!3d51.54614440787451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a75475f48e11%3A0x69e6074cbd12e11b!2sPaswal!5e0!3m2!1sen!2s!4v1742059879851!5m2!1sen!2s"
        ></iframe>
      </Box>
    </Box>
  );
};

export default ContactUs;
