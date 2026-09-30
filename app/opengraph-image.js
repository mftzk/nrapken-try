import { ImageResponse } from "next/og";

export const alt = "Try Us — nrapkén.dev";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#080d18",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div style={{ width: "96px", height: "12px", backgroundColor: "#FF4B07", borderRadius: "6px" }} />
          <div style={{ fontSize: "30px", color: "#94a3b8" }}>nrapkén.dev</div>
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div style={{ fontSize: "150px", fontWeight: 700, color: "#ffffff", lineHeight: 1 }}>
            Try Us
          </div>
          <div style={{ fontSize: "38px", color: "#94a3b8" }}>
            Scan. Coba. Deploy — Quick App Deployments.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
