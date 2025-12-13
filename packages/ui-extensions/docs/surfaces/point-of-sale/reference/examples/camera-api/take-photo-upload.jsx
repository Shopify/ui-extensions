import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCaptureAndUpload = async () => {
    setIsProcessing(true);
    try {
      const photo = await shopify.camera.takePhoto({
        quality: 0.8,
        maxWidth: 1520,
        maxHeight: 1520,
      });

      // Upload the image to your backend server
      // (Replace with your actual backend endpoint)
      await fetch('https://your-backend.com/api/upload', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          image: photo.base64,
          mimeType: photo.type,
        }),
      });

      shopify.toast.show('Photo uploaded successfully!');
    } catch (error) {
      shopify.toast.show(`Error: ${error.message}`);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <s-tile
      heading="Upload Photo"
      onClick={handleCaptureAndUpload}
      disabled={isProcessing}
    />
  );
};
