<s-drop-zone 
  id="upload" 
  label="Product images" 
  accept="image/*" 
  multiple
></s-drop-zone>

// In your component:
// const dropzone = document.getElementById('upload');
//
// dropzone.addEventListener('change', async (e) => {
//   const files = e.currentTarget.files;
//
//   // Validate size (5MB max per file)
//   const maxSize = 5 * 1024 * 1024;
//   if (files.some(f => f.size > maxSize)) {
//     dropzone.error = 'Files must be under 5MB';
//     return;
//   }
//   dropzone.error = '';
//
//   dropzone.disabled = true;
//   const formData = new FormData();
//   files.forEach(f => formData.append('images[]', f));
//
//   try {
//     await fetch('/api/upload', { method: 'POST', body: formData });
//     dropzone.value = ''; // Clear for next upload
//   } catch (error) {
//     dropzone.error = 'Upload failed. Please try again.';
//   } finally {
//     dropzone.disabled = false;
//   }
// });
//
// dropzone.addEventListener('droprejected', () => {
//   dropzone.error = 'Only image files are accepted';
// });
