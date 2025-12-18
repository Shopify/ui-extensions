import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  const [imageData, setImageData] = useState(null);
  const [isCapturing, setIsCapturing] = useState(false);

  const handleTakePhoto = async () => {
    setIsCapturing(true);
    try {
      const photo = await shopify.camera.takePhoto();
      setImageData(photo);
      shopify.toast.show('Photo captured successfully!');
    } catch (error) {
      // skip showing errors when the user cancels the photo capture.
      if (!error.message.includes('User cancelled')) {
        shopify.toast.show(`Error: ${error.message}`);
      }
    } finally {
      setIsCapturing(false);
    }
  };

  return (
    <s-page heading="Camera Capture">
      <s-scroll-box>
        <s-stack>
          <s-button onClick={handleTakePhoto} disabled={isCapturing}>
            {isCapturing ? 'Capturing...' : 'Take Photo'}
          </s-button>

          {imageData && (
            <>
              <s-image
                src={`data:${imageData.type};base64,${imageData.base64}`}
              />
              <s-section heading="Image Details">
                <s-text>Width: {imageData.width}px</s-text>
                <s-text>Height: {imageData.height}px</s-text>
                <s-text>
                  File Size: {(imageData.fileSize / 1024).toFixed(2)} KB
                </s-text>
                <s-text>Type: {imageData.type}</s-text>
              </s-section>
            </>
          )}
        </s-stack>
      </s-scroll-box>
    </s-page>
  );
};
