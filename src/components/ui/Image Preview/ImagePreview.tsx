

type TPreviewImagesProps = {
  selectImages: FileList;
};

const ImagePreview = ({ selectImages }: TPreviewImagesProps) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {Array.from(selectImages).map((file, index) => (
        <div key={index} style={{ textAlign: "center" }}>
          <img
            src={URL.createObjectURL(file)} // Create a URL for the image
            alt={file.name}
            style={{
              width: "150px",
              height: "150px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
          <p style={{ fontSize: "12px" }}>{file.name}</p> {/* Show file name */}
        </div>
      ))}
    </div>
  );
};

export default ImagePreview;
