import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #003F8A 0%, #0057B7 100%)",
          borderRadius: 96,
        }}
      >
        <svg width="280" height="396" viewBox="0 0 178 252" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M31.2031 35.7267L68.6229 189.091L68.6229 22.1349L41.8774 22.1349C34.755 22.1349 29.5148 28.8073 31.2031 35.7267Z" fill="#F59601" />
          <path d="M31.2573 57.9889L68.6228 211.135L1.24417 79.3211C-2.04012 73.0016 1.46533 65.275 8.38393 63.5841L31.2573 57.9889Z" fill="#F59601" />
          <path d="M68 22.135C87.8822 22.135 104 38.2528 104 58.135V175.135C104 195.017 87.8822 211.135 68 211.135V22.135Z" fill="#ffffff" />
          <path d="M131.014 4.33013C132.395 1.93866 135.453 1.11929 137.844 2.5L160.361 15.5C162.752 16.8807 163.572 19.9387 162.191 22.3301L104.177 122.814L72.9999 104.814L131.014 4.33013Z" fill="#ffffff" />
          <path d="M177.004 202.759C186.946 219.978 181.046 241.995 163.827 251.936L86 117.135L117.177 99.135L177.004 202.759Z" fill="#ffffff" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
