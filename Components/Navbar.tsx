"use client"; // Required in Next.js App Router

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { Menu as MenuIcon, Phone } from "@mui/icons-material";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";

// Smooth scrolling function
const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Services", id: "services" },
    { name: "Reviews", id: "reviews" },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Top Bar - Navbar 1 */}
      <AppBar
        position="static"
        sx={{ 
          backgroundColor: "#FFF", 
          color: "black", 
          padding: { xs: "5px 10px", sm: "5px 20px" } 
        }}
      >
        <Toolbar sx={{ 
          display: "flex", 
          justifyContent: "space-between",
          padding: { xs: "0 !important", sm: "inherit" }
        }}>
          {/* Left Side: Logo and Brand */}
          <Box sx={{ 
            display: "flex", 
            alignItems: "center", 
            gap: { xs: 1, sm: 2 },
            flexGrow: isMobile ? 1 : 0
          }}>
            <Image
              src="/Logo.jpg"
              alt="Logo"
              width={isMobile ? 100 : 150}
              height={isMobile ? 100 : 155}
              style={{
                objectFit: "contain",
                minWidth: isMobile ? 80 : 120
              }}
            />
            {!isMobile && (
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "1rem", sm: "1.5rem" },
                  color: "#1976D2",
                  fontFamily: "Arial, sans-serif",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    color: "#0D47A1",
                    transform: "scale(1.02)",
                  },
                }}
              >
                Paswal Heating Cooling & Plumbing
              </Typography>
            )}
          </Box>

          {/* Right Side: Contact Info */}
          <Box sx={{ 
            display: "flex", 
            alignItems: "center", 
            gap: { xs: 1, sm: 2 },
            flexShrink: 0
          }}>
            {!isMobile && (
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Call us today to find out how we can help you!
              </Typography>
            )}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FFC107",
                color: "black",
                fontSize: isMobile ? "0.75rem" : "1rem",
                padding: isMobile ? "5px 8px" : "8px 16px",
                minWidth: isMobile ? "fit-content" : "inherit",
                "&:hover": { backgroundColor: "#FFA000" },
              }}
              startIcon={<Phone fontSize={isMobile ? "small" : "medium"} />}
            >
              +44 795 149 4052
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Navigation Bar - Navbar 2 */}
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "#1976D2" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: isMobile ? "space-between" : "center",
            gap: 2,
            padding: { xs: "0 10px !important", sm: "inherit" }
          }}
        >
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setDrawerOpen(true)}
                sx={{ mr: 0 }}
              >
                <MenuIcon />
              </IconButton>

              <Typography
                variant="h6"
                noWrap
                sx={{
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                  color: "white",
                  fontFamily: "Arial, sans-serif",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                  border: "1px solid white",
                  borderRadius: "4px",
                  padding: "4px 8px",
                  textAlign: "right",
                  flexGrow: 1,
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  maxWidth: "70%"
                }}
              >
                Paswal Heating Cooling & Plumbing
              </Typography>

              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                <Box sx={{ width: 250 }}>
                  <List>
                    {menuItems.map((item) => (
                      <ListItem key={item.id} disablePadding>
                        <ListItemButton
                          onClick={() => {
                            scrollToSection(item.id);
                            setDrawerOpen(false);
                          }}
                        >
                          <ListItemText primary={item.name} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            menuItems.map((item) => (
              <Button
                key={item.id}
                color="inherit"
                onClick={() => scrollToSection(item.id)}
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  textTransform: "none",
                  padding: "10px 20px",
                  "&:hover": {
                    backgroundColor: "#FFC107",
                    color: "black",
                  },
                }}
              >
                {item.name}
              </Button>
            ))
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;