
/* eslint-disable @typescript-eslint/no-explicit-any */
export const uploadImagesToImgBB = async (files: FileList) => {
  try {
    // Convert FileList to an array
    const filesArray = Array.from(files);

    // Create an array of promises for each file upload
    const uploadPromises = filesArray.map((file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append(
        "upload_preset",
        import.meta.env.VITE_PUBLIC_CLOUD_PRESET as string
      );

      return fetch(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_CLOUD_NAME
        }/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to upload image to Cloudinary.");
          }
          return response.json();
        })
        .then((data) => data.secure_url);
    });

    // Wait for all uploads to complete
    const secureUrls = await Promise.all(uploadPromises);
    return secureUrls;
  } catch (error) {
    console.error("Error uploading images:", error);
    throw error;
  }
};
