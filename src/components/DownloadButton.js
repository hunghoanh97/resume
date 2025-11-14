import React, { useState } from 'react';
import { Button, CircularProgress, Snackbar, Alert } from '@mui/material';
import { Download } from '@mui/icons-material';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const DownloadButton = () => {
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleDownload = async () => {
    try {
      setLoading(true);
      const element = document.getElementById('cv-content');
      
      // Ensure we capture from top for consistent PDF output
      window.scrollTo(0, 0);

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        letterRendering: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
      });

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'in',
        format: 'a4'
      });

      // Calculate page dimensions dynamically to avoid cutoffs and duplication
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const marginX = 0.35; // left/right margin in inches
      const marginY = 0.35; // top/bottom margin in inches

      const contentWidthIn = pageWidth - marginX * 2;
      const contentHeightIn = pageHeight - marginY * 2;

      // Determine how many canvas pixels fit per PDF page content area
      const pixelsPerPage = Math.floor((contentHeightIn * canvas.width) / contentWidthIn);

      let renderedPx = 0;
      const totalPages = Math.ceil(canvas.height / pixelsPerPage);

      for (let i = 0; i < totalPages; i++) {
        const sliceHeightPx = Math.min(pixelsPerPage, canvas.height - renderedPx);

        // Create a temporary canvas for this slice
        const pageCanvas = document.createElement('canvas');
        pageCanvas.width = canvas.width;
        pageCanvas.height = sliceHeightPx;
        const pageCtx = pageCanvas.getContext('2d');

        // Draw the slice from the main canvas
        pageCtx.drawImage(
          canvas,
          0, renderedPx, canvas.width, sliceHeightPx, // source rect
          0, 0, canvas.width, sliceHeightPx            // destination rect
        );

        const sliceData = pageCanvas.toDataURL('image/jpeg', 1.0);

        if (i > 0) {
          pdf.addPage();
        }

        // Height in inches for this particular slice (preserve aspect ratio)
        const sliceHeightIn = (sliceHeightPx * contentWidthIn) / canvas.width;

        pdf.addImage(sliceData, 'JPEG', marginX, marginY, contentWidthIn, sliceHeightIn);
        renderedPx += sliceHeightPx;
      }

      pdf.save('HoanhQuangHung_CV.pdf');
      setOpenSnackbar(true);
    } catch (error) {
      console.error('Error generating PDF:', error);
      setOpenSnackbar(true);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <Download />}
        onClick={handleDownload}
        disabled={loading}
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 1000,
          boxShadow: 3,
          minWidth: '160px',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: 4,
          },
        }}
      >
        {loading ? 'Generating PDF...' : 'Download PDF'}
      </Button>

      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={3000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity="success" 
          sx={{ width: '100%' }}
        >
          PDF downloaded successfully!
        </Alert>
      </Snackbar>
    </>
  );
};

export default DownloadButton;