import { Box, Typography, Grid } from "@mui/material";

const features = [
  { image: "/smile.png", title: "Client Satisfaction", subtitle: "Always exceeded" },
  { image: "/geezer.png", title: "Plumbing & Heating", subtitle: "Full service" },
  { image: "/main2.png", title: "Maintenance & Service", subtitle: "One-off or ongoing maintenance" },
  { image: "/h3.png", title: "Customer Support", subtitle: "Provided 100% by us" }
];

const Quality = () => {
  return (
    <Box sx={{ textAlign: "center", py: 4 ,backgroundColor: "#E3F2FD"}}>
      {/* Main Heading */}
      <Typography variant="h3" color="primary" fontWeight="bold"marginTop={'20px'}>
        Working with UK’s leading gas engineer
      </Typography>

      {/* Features Section */}
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 3 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              sx={{
                mt: 2, // Added margin-top: 20px
                p: 3,  // Added padding for better spacing
                borderRadius: 2, // Added rounded corners
                backgroundColor: "#E3F2FD"// Ensures it stands out on different themes
              }}
            >
              {/* Image */}
              <img src={feature.image} alt={feature.title} style={{ width: "80px", height: "auto", marginBottom: "10px" }} />

              {/* Title */}
              <Typography variant="h5" fontWeight="bold" sx={{ mt: 1 }}>
                {feature.title}
              </Typography>

              {/* Subtitle */}
              <Typography variant="body1" color="textSecondary">
                {feature.subtitle}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Quality;
