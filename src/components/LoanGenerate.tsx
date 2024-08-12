import React from "react";
import pdf from "../assets/Docs/GHB.pdf";

export const LoanGenerate: React.FC = () => {
  const [uploadSuccess, setUploadSuccess] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Simulate file upload and progress
      setProgress(80); // Simulate 80% progress
      setUploadSuccess(true);
    }
  };

  const handleDownload = () => {
    // Auto download pdf
    window.location.href = pdf;
  };

  return (
    <div className="w-full max-w-4xl p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        ยื่นกู้สินเชื่อ
      </h2>
      <p className="text-lg text-gray-700 mb-10">
        อัพโหลดเอกสารทางการเงินเพื่อทำการ
        ประเมินโอกาสการปล่อยสินเชื่อและสร้างใบคำขอสินเชื่อ
      </p>
      <div className="flex items-center mb-4">
        <button
          className="w-1/12 rounded-full text-white px-4 py-2 cursor-pointer flex items-center justify-center"
          style={{
            background: "linear-gradient(to top right, #51ADF7, #CD4CC3)",
          }}
        >
          <label
            htmlFor="upload-file"
            className="cursor-pointer flex items-center justify-center"
          >
            Upload
            <input
              type="file"
              id="upload-file"
              accept=".pdf"
              className="hidden"
              onChange={handleFileUpload}
            />
          </label>
        </button>

        {uploadSuccess && (
          <div className="w-11/12 relative bg-gray-300 rounded-full overflow-hidden ml-4">
            <div
              style={{ width: `${progress}%` }}
              className="h-10 bg-gradient-to-r from-[#51ADF7] to-[#CD4CC3] text-white text-center rounded-full flex items-center justify-center"
            >
              <span className="text-sm font-medium">{progress}%</span>
            </div>
          </div>
        )}
      </div>
      {uploadSuccess && (
        <div className="flex justify-center">
          <button
            onClick={handleDownload}
            className="w-1/3 py-2 rounded-full text-white"
            style={{
              background: "linear-gradient(to top right, #51ADF7, #CD4CC3)",
            }}
          >
            เอกสารการกู้
          </button>
        </div>
      )}
    </div>
  );
};
