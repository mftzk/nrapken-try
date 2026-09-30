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
          backgroundColor: "#0a0d14",
          borderTop: "12px solid #FF4B07",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ width: "28px", height: "28px", backgroundColor: "#FF4B07" }} />
          <div style={{ fontSize: "30px", color: "#8a93a5", letterSpacing: "2px" }}>
            nrapkén.dev
          </div>
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <div style={{ fontSize: "158px", fontWeight: 700, color: "#f2f5f9", lineHeight: 1 }}>
            Try Us
          </div>
          <div style={{ fontSize: "34px", color: "#8a93a5" }}>
            Scan. Coba. Deploy — Quick App Deployments.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
