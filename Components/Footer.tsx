"use client";
import { Box, Typography, Link, Grid, IconButton } from "@mui/material";
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
  return (
    <Box
      sx={{
        backgroundColor: "#F5F8FC",
        padding: { xs: 3, md: 5 },
        borderTop: "2px solid #ddd",
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        {/* Left Section - Company Info */}
        <Grid item xs={12} md={4} textAlign={{ xs: "center", md: "left" }}>
          <Typography variant="body1" mt={2} fontWeight="bold">
            Address:
          </Typography>
          <Typography variant="body2">
            4 Jasmine Cl, Ilford IG1 2BS, United Kingdom
          </Typography>

          <Typography variant="body1" fontWeight="bold" mt={1}>
            Phone:
          </Typography>
          <Link href="tel:+447951494052" variant="body2" color="primary">
            +44 7951 494052
          </Link>
        </Grid>

        {/* Middle Section - Navigation Links */}
        <Grid item xs={12} md={4} textAlign="center">
          <Link href="#" underline="none" color="text.primary" mx={1}>
            Terms & Conditions
          </Link>
          <Link href="#" underline="none" color="text.primary" mx={1}>
            Maintenance Terms
          </Link>
          <Link href="#" underline="none" color="text.primary" mx={1}>
            Privacy Policy
          </Link>
          <br />
          <Link onClick={() => scrollToSection("services")} underline="none" color="text.primary" mx={1} sx={{ cursor: "pointer" }}>
            Our Services
          </Link>
          <Link onClick={() => scrollToSection("about")} underline="none" color="text.primary" mx={1} sx={{ cursor: "pointer" }}>
            About Us
          </Link>
          <Link onClick={() => scrollToSection("contact")} underline="none" color="text.primary" mx={1} sx={{ cursor: "pointer" }}>
            Contact Us
          </Link>
        </Grid>

        {/* Right Section - Social Media & Logo */}
        <Grid item xs={12} md={4} textAlign={{ xs: "center", md: "right" }}>
          <Box>
            <IconButton href="#" color="primary">
              <Facebook />
            </IconButton>
            <IconButton href="#" color="primary">
              <Twitter />
            </IconButton>
            <IconButton href="#" color="primary">
              <LinkedIn />
            </IconButton>
            <IconButton href="#" color="primary">
              <Instagram />
            </IconButton>
          </Box>
          <Image
            src="/gas.png"
            alt="Gas Safe Register"
            width={100}
            height={50}
            style={{ marginTop: "10px" }}
          />
        </Grid>
      </Grid>

      {/* Bottom Line */}
      <Box textAlign="center" mt={3} pt={2} borderTop="1px solid #ddd">
        <Typography variant="body2">
          © {new Date().getFullYear()} Paswal Media Publishing. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
