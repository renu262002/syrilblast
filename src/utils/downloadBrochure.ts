/**
 * High-reliability brochure downloader and opener.
 * Works across desktop browsers, mobile devices, and iframe sandboxes.
 */
export async function downloadBrochureFile(filename = 'Syril_Infotech_Diwali_Blast_Package.pdf') {
  const fileUrl = `/${filename}`;

  try {
    const response = await fetch(fileUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const blob = await response.blob();
    // Ensure MIME type is application/pdf
    const pdfBlob = new Blob([blob], { type: 'application/pdf' });
    const blobUrl = window.URL.createObjectURL(pdfBlob);

    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up
    setTimeout(() => {
      window.URL.revokeObjectURL(blobUrl);
    }, 2000);

    return true;
  } catch (error) {
    console.warn('Blob download fallback to direct anchor:', error);
    // Direct anchor fallback
    const fallbackLink = document.createElement('a');
    fallbackLink.href = fileUrl;
    fallbackLink.download = filename;
    fallbackLink.target = '_blank';
    fallbackLink.rel = 'noopener noreferrer';
    document.body.appendChild(fallbackLink);
    fallbackLink.click();
    document.body.removeChild(fallbackLink);
    return false;
  }
}
