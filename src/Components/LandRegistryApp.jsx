import React, { useState, useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const LandRegistryApp = () => {
  const [landDetails, setLandDetails] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map("map").setView([28.575055, 77.240647 ], 16.5); // Default view: Delhi

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
      }).addTo(mapRef.current);

      // Define blocks with polygon coordinates and details
      const blocks = [
        {
          coordinates: [
            [28.573825, 77.239582            ],
            [28.573840, 77.239972            ],
            [28.573294, 77.240000            ],
            [28.573269, 77.239645            ],
          ],
          details: {
            owner_name: "Kevin Parker",
            block_hash: "561ef488c59bd62ec353...",
            previous_hash: "535e9693bec5d83bb4dd...",
            timestamp: "1729788543.402427",
            address: "Hn. 123 Rajouri St. 4",
            land_size: 560,
            dimensions: "15 x 20",
          },
        },
        {
          coordinates: [
            [28.573872, 77.240530            ],
            [28.573874, 77.240900            ],
            [28.573359, 77.240902            ],
            [28.573364, 77.240535            ],
          ],
          details: {
            owner_name: "Nishant Garg",
            block_hash: "4ab8d93c45ecfa23a1b2...",
            previous_hash: "561ef488c59bd62ec353...",
            timestamp: "1729788544.302427",
            address: "Hn. 456 Lajpat Nagar",
            land_size: 450,
            dimensions: "10 x 45",
          },
        },
        {
          coordinates: [
            [28.574598, 77.239590            ],
            [28.574619, 77.240438            ],
            [28.574358, 77.240438            ],
            [28.574351, 77.239617            ],
          ],
          details: {
            owner_name: "Sophia Williams",
            block_hash: "39ab4c938dfe759ac21d...",
            previous_hash: "4ab8d93c45ecfa23a1b2...",
            timestamp: "1729788545.102427",
            address: "Hn. 789 Connaught Place",
            land_size: 600,
            dimensions: "20 x 30",
          },
        },
        {
          coordinates: [
            [28.574885, 77.241475            ],
            [28.574894, 77.242099            ],
            [28.574671, 77.242094            ],
            [28.574666, 77.241502            ],
          ],
          details: {
            owner_name: "Liam Brown",
            block_hash: "45ad3f932edcfa67c124...",
            previous_hash: "39ab4c938dfe759ac21d...",
            timestamp: "1729788546.002427",
            address: "Hn. 321 Saket",
            land_size: 500,
            dimensions: "25 x 20",
          },
        },
        {
          coordinates: [
            [28.574330, 77.241186            ],
            [28.574320, 77.241451            ],
            [28.573710, 77.241470            ],
            [28.573708, 77.241216            ],
          ],
          details: {
            owner_name: "Oliver Smith",
            block_hash: "67bf4c128edfba87c431...",
            previous_hash: "45ad3f932edcfa67c124...",
            timestamp: "1729788547.902427",
            address: "Hn. 654 Lajpat Nagar",
            land_size: 700,
            dimensions: "35 x 20",
          },
        },
        {
          coordinates: [
            [28.577039, 77.238974            ],
            [28.577081, 77.241432          ],
            [28.575918, 77.241438            ],
            [28.575875, 77.238980            ],
          ],
          details: {
            owner_name: "Oliver Smith",
            block_hash: "98cd3421fda4cb65a2ef...",
            previous_hash: "67bf4c128edfba87c431...",
            timestamp: "1729788547.902427",
            address: "Rajkiya Pratibha Vikas Vidyalaya",
            land_size: 700,
            dimensions: "35 x 20",
          },
        },
      ];

      // Add polygons to the map
      blocks.forEach((block) => {
        const polygon = L.polygon(block.coordinates, { color: "green" }).addTo(mapRef.current);

        polygon.on("click", () => {
          setLandDetails(block.details);
        });
      });
    }
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {/* Map Section */}
      <div id="map" style={{ height: "500px", width: "50%" }}></div>

      {/* Card Section */}
      <div
        style={{
          width: "30%",
          padding: "20px",
          backgroundColor: "#1e1e1e",
          borderRadius: "10px",
          color: "white",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          transition: "transform 0.3s, box-shadow 0.3s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        }}
      >
        {/* <img
          src={ethLogo}
          alt="Ethereum Logo"
          style={{
            width: "40px",
            height: "40px",
            position: "absolute",
            top: "20px",
            right: "20px",
          }}
        /> */}
        {landDetails ? (
          <>
            <h2
              style={{
                backgroundColor: "#f8f9fa",
                color: "#333",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              Land Details
            </h2>
            <p>
              <strong>Land Owner:</strong> {landDetails.owner_name}
            </p>
            <p>
              <strong>Block Hash:</strong> {landDetails.block_hash}
            </p>
            <p>
              <strong>Previous Hash:</strong> {landDetails.previous_hash}
            </p>
            <p>
              <strong>Timestamp:</strong> {landDetails.timestamp}
            </p>
            <p>
              <strong>Address:</strong> {landDetails.address}
            </p>
            <p>
              <strong>Land Size:</strong> {landDetails.land_size} sqft
            </p>
            <p>
              <strong>Land Dimensions:</strong> {landDetails.dimensions}
            </p>
          </>
        ) : (
          <h3
            style={{
              backgroundColor: "#f8f9fa",
              color: "#333",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            Click on a highlighted area to see land details.
          </h3>
        )}
      </div>
    </div>
  );
};

export default LandRegistryApp;
