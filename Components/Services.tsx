"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Modal,
  Tabs,
  Tab,
} from "@mui/material";
import { motion } from "framer-motion";

// Define types
type Service = {
  image: string;
  text: string;
  details: string | string[];
  additionalImages?: string[];
};

type ServiceItemProps = {
  service: Service;
  index: number;
  handleBoxClick: (index: number) => void;
  handleImageClick: (service: Service) => void;
};

// ServiceItem component
const ServiceItem: React.FC<ServiceItemProps> = ({
  service,
  index,
  handleBoxClick,
  handleImageClick,
}) => {
  const onImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleImageClick(service);
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
        hover: { scale: 1.05 },
      }}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 0,
          textAlign: "center",
          cursor: "pointer",
          overflow: "hidden",
          "&:hover": {
            ".text-box": {
              color: "white",
              backgroundColor: "#1565C0",
            },
          },
        }}
        onClick={() => handleBoxClick(index)}
      >
        <Box
          sx={{
            width: "100%",
            height: { xs: "150px", sm: "200px", md: "250px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <img
            src={service.image}
            alt={service.text}
            onClick={onImageClick}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              cursor: "pointer",
            }}
          />
        </Box>
        <Box
          className="text-box"
          sx={{
            padding: 2,
            backgroundColor: "#1976D2",
            color: "white",
            transition: "background 0.3s, color 0.3s",
          }}
        >
          <Typography variant="body1">{service.text}</Typography>
        </Box>
      </Paper>
    </motion.div>
  );
};

// Services main component
const Services = () => {
  const [selectedBox, setSelectedBox] = useState<number | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  const handleBoxClick = (index: number) => {
    setSelectedBox(index === selectedBox ? null : index);
  };

  const handleImageClick = (service: Service) => {
    setSelectedService(service);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedService(null);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const heatingServices: Service[] = [
    {
      image: "J.png",
      text: "Gas Heating",
      details: "Professional gas heating installation and repair services.",
    },
    {
      image: "vented.jpeg",
      text: "Vented and Unvented Hot Water Systems",
      details: "Installation and maintenance of both vented and unvented hot water systems.",
    },
    {
      image: "boiler.jpeg",
      text: "Maintenance, Breakdown & Boiler Repair Services",
      details: "Comprehensive boiler services including maintenance and emergency repairs.",
    },
    //  {
    //   image: "s4.jpeg",
    //   text: "Air Source Heat Pump",
    //   details: "Efficient air source heat pump installation and servicing.",
    // },
    //  {
    //   image: "s4.jpeg",
    //   text: "New boiler installation",
    //   details: "",
    // },
    {
      image: "underfloorservice.jpg",
      text: "Under Floor Heating service",
      details: [
        "Expert installation and maintenance of underfloor heating systems.",
        "We provide both electric and water-based underfloor heating solutions.",
      ],
      additionalImages: ["underfloorservice2.jpg"],
    },
  ];

  const coolingServices: Service[] = [
   
    {
      image: "air conditioning.jpeg",
      text: "Air Conditioning HVAC Installation",
      details: "Professional HVAC system installation and maintenance.",
    },
  ];

  const selectedServices = activeTab === 0 ? heatingServices : coolingServices;

  return (
    <Box sx={{ padding: 4, backgroundColor: "#E3F2FD" }}>
      {/* Title */}
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 4 }}>
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "36px", md: "44px" },
            color: "#1976D2",
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          Our Services
        </Typography>
        <Box sx={{ height: "2px", width: { xs: "150px", md: "200px" }, background: "#1976D2" }} />
      </Box>

      {/* Tabs */}
      <Box sx={{ mb: 4 }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          centered
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab label="Heating Services" />
          <Tab label="Cooling Services" />
        </Tabs>
      </Box>

      {/* Service Grid */}
      <Grid container spacing={4}>
        {selectedServices.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ServiceItem
              service={service}
              index={index}
              handleBoxClick={handleBoxClick}
              handleImageClick={handleImageClick}
            />
          </Grid>
        ))}
      </Grid>

      {/* Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <motion.div
          variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
          initial="hidden"
          animate="visible"
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Box
            sx={{
              maxWidth: "90%",
              maxHeight: "90vh",
              overflow: "auto",
              outline: "none",
              backgroundColor: "white",
              padding: 4,
              borderRadius: 2,
              textAlign: "center",
            }}
          >
            {selectedService && (
              <>
                <Grid container spacing={2} sx={{ mb: 2 }}>
                  <Grid item xs={12} md={selectedService.additionalImages ? 6 : 12}>
                    <img
                      src={selectedService.image}
                      alt={selectedService.text}
                      style={{
                        width: "100%",
                        maxHeight: "300px",
                        objectFit: "contain",
                      }}
                    />
                  </Grid>
                  {selectedService.additionalImages && (
                    <Grid item xs={12} md={6}>
                      <img
                        src={selectedService.additionalImages[0]}
                        alt={`${selectedService.text} additional`}
                        style={{
                          width: "100%",
                          maxHeight: "300px",
                          objectFit: "contain",
                        }}
                      />
                    </Grid>
                  )}
                </Grid>
                <Box
                  sx={{
                    padding: 2,
                    backgroundColor: "#1976D2",
                    color: "white",
                    borderRadius: 1,
                    textAlign: "left",
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {selectedService.text}
                  </Typography>
                  {Array.isArray(selectedService.details) ? (
                    selectedService.details.map((detail, index) => (
                      <Typography key={index} variant="body1" sx={{ mb: 1 }}>
                        • {detail}
                      </Typography>
                    ))
                  ) : (
                    <Typography variant="body1">{selectedService.details}</Typography>
                  )}
                </Box>
              </>
            )}
          </Box>
        </motion.div>
      </Modal>
    </Box>
  );
};

export default Services;
