'use client'
import { Box, Typography, Button, useTheme, useMediaQuery, Stack } from "@mui/material";
import { Phone } from "@mui/icons-material";

const RatingBanner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box 
      sx={{
        backgroundColor: "#1976D2",
        padding: { xs: "40px 20px", md: "60px 40px" },
        margin: { xs: "30px 0", md: "50px 0" },
        position: "relative",
      }}
    >
      {/* White content box */}
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: { xs: "20px", md: "30px" },
          maxWidth: "1200px",
          margin: "0 auto",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 3, md: 6 }}
          alignItems={{ md: "center" }}
          justifyContent="space-between"
        >
          {/* Left side content */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1.5rem", md: "2rem" },
                marginBottom: 2,
                color: "#1976D2",
              }}
            >
              Trusted gas engineer serving in Ilford
            </Typography>

            <Stack direction="row" alignItems="center" spacing={2} mb={2}>
              <Box
                sx={{
                  backgroundColor: "#1976D2",
                  color: "white",
                  width: "36px",
                  height: "36px",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                }}
              >
                G
              </Box>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1976D2" }}>
                Excellent Google Rating
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={3} mb={3}>
              <Typography variant="h4" sx={{ fontWeight: "bold", color: "#1976D2" }}>
                5.0
              </Typography>
              <Typography variant="body1" sx={{ color: "#1976D2" }}>
                Read our 45 reviews
              </Typography>
            </Stack>
          </Box>

          {/* Right side content */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "flex-start", md: "flex-end" },
              gap: 2,
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FFC107",
                color: "black",
                fontWeight: "bold",
                fontSize: "1rem",
                padding: { xs: "10px 20px", md: "12px 30px" },
                "&:hover": { backgroundColor: "#FFA000" },
                whiteSpace: "nowrap",
                minWidth: "180px",
              }}
            >
              BOOK TODAY
            </Button>

            <Stack direction="row" alignItems="center" spacing={1}>
              
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default RatingBanner;