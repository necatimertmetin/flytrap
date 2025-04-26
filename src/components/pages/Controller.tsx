// src/Controller.tsx
import React, { useState } from "react";
import {
  Typography,
  Container,
  Snackbar,
  Button,
  Paper,
  Box,
  CircularProgress,
  useTheme,
} from "@mui/material";
import axios from "axios";

export const Controller: React.FC = () => {
  const theme = useTheme(); // Access the theme
  const [isPinOn, setIsPinOn] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null); // Hata mesajı
  const [snackOpen, setSnackOpen] = useState<boolean>(false); // Snackbar açma durumu
  const [loading, setLoading] = useState<boolean>(false); // Yükleme durumu

  const togglePin = async () => {
    setLoading(true); // Yükleme durumunu aktif et
    try {
      const response = await axios.post("http://192.168.1.9:5000/toggle-pin", {
        pin: 18,
      });

      if (response.data.success) {
        setIsPinOn(!isPinOn);
      }
    } catch (error) {
      console.error("Error toggling GPIO pin:", error);
      setError("Pin değiştirilirken bir hata oluştu!");
      setSnackOpen(true);
    } finally {
      setLoading(false); // İşlem tamamlandığında yükleme durumunu sonlandır
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          borderRadius: 3,
          backgroundColor: theme.palette.background.paper, // Use theme color for Paper background
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          FLYTRAP Light Control
        </Typography>

        <Box
          sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}
        >
          <Box
            sx={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              backgroundColor: isPinOn
                ? theme.palette.success.main
                : theme.palette.error.main,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: 3,
            }}
          >
            <Typography variant="h6" color="white">
              {isPinOn ? "ON" : "OFF"}
            </Typography>
          </Box>
        </Box>

        <Button
          variant="contained"
          onClick={togglePin}
          fullWidth
          disabled={loading}
        >
          {loading ? (
            <CircularProgress size={24} color="inherit" />
          ) : isPinOn ? (
            "Turn Pin Off"
          ) : (
            "Turn Pin On"
          )}
        </Button>

        {error && (
          <Snackbar
            open={snackOpen}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            autoHideDuration={6000}
            onClose={() => setSnackOpen(false)}
            message={error}
          />
        )}
      </Paper>
    </Container>
  );
};
