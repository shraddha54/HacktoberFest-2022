import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { GPSDATA } from "../Constants/Url";

function GPSsummary() {
  const [gpsData, setGpsData] = useState([]);

  useEffect(() => {
    axios.get(`${GPSDATA}`).then(
      (res) => {
        setGpsData(res.data);
      },
      (error) => {
        console.log("error");
      }
    );
  }, []);

  return (
    <div style={{ margin: "40px 40px 40px 40px" }}>
      <h5 style={{ color: "white" }}>GPS Summary</h5>
      <CTable className="mt-4">
        <CTableHead color="primary">
          <CTableRow>
            <CTableHeaderCell scope="col">DeviveID</CTableHeaderCell>
            <CTableHeaderCell scope="col">Device Type</CTableHeaderCell>
            <CTableHeaderCell scope="col">Latest TimeStamp</CTableHeaderCell>
            <CTableHeaderCell scope="col">Latest Location</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody color="secondary">
          {gpsData.map((data) => (
            <CTableRow>
              <CTableDataCell>{data.deviceId}</CTableDataCell>
              <CTableDataCell>{data.deviceType}</CTableDataCell>
              <CTableDataCell>{data.timeStamp}</CTableDataCell>
              <CTableDataCell>{data.location}</CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    </div>
  );
}

export default GPSsummary;
