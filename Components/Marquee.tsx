import { Box, Typography } from "@mui/material";

const trustedBrands = [
  { name: "", logo: "/environement.png" },
  { name: "", logo: "/yell.png" },
  { name: "", logo: "/m.png" },
  { name: "", logo: "/trade.png" },
  { name: "", logo: "/gas.png" },
];

const BrandMarquee = () => {
  return (
    <Box sx={{ 
      py: 3,
      backgroundColor: "#E3F2FD",
      overflow: "hidden",
      position: "relative"
    }}>
      <Typography 
        variant="h5" 
        color="#1565C0" // Changed to dark blue for better visibility
        fontWeight="bold" 
        mb={2}
        textAlign="center"
      >
        Trusted by leading brands
      </Typography>
      
      {/* Marquee Container */}
      <Box sx={{
        width: "100%",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#fff",
        py: 2
      }}>
        {/* Marquee Content - Triple the brands for seamless looping */}
        <Box sx={{
          display: "flex",
          width: "300%", // Triple width to accommodate the cloned brands
          animation: "marquee 40s linear infinite",
          "@keyframes marquee": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-66.666%)" } // Move two-thirds of the way
          }
        }}>
          {[...trustedBrands, ...trustedBrands, ...trustedBrands].map((brand, index) => (
            <Box 
              key={`${index}-${brand.logo}`} 
              sx={{ 
                mx: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 150,
                flexShrink: 0
              }}
            >
              <img 
                src={brand.logo} 
                alt={brand.name} 
                style={{ 
                  height: "80px", 
                  width: "auto",
                  objectFit: "contain",
                  maxWidth: "150px"
                }} 
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default BrandMarquee;