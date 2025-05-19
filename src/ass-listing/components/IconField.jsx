// IconField.jsx
import React from "react";
import {
  FaClipboardList,
  FaTag,
  FaDollarSign,
  FaMoneyBillAlt,
  FaCar,
  FaCheckCircle,
  FaChargingStation,
  FaIndustry,
  FaCarSide,
  FaCalendarAlt,
  FaRoad,
  FaCogs,
  FaGasPump,
  FaTachometerAlt,
  FaWrench,
  FaCircle,
  FaDoorClosed,
  FaIdCard,
  FaPalette,
  FaFileAlt,
  FaTags,
} from "react-icons/fa";

const iconMap = {
  FaClipboardList,
  FaTag,
  FaDollarSign,
  FaMoneyBillAlt,
  FaCar,
  FaCheckCircle,
  FaChargingStation,
  FaIndustry,
  FaCarSide,
  FaCalendarAlt,
  FaRoad,
  FaCogs,
  FaGasPump,
  FaTachometerAlt,
  FaWrench,
  FaCircle,
  FaDoorClosed,
  FaIdCard,
  FaPalette,
  FaFileAlt,
  FaTags,
};

function IconField({ icon }) {
  const IconComponent = iconMap[icon];
  return IconComponent ? (
    <div className="text-blue-400 bg-blue-100 p-1.5 rounded-full">
      <IconComponent size={22} style={{ marginRight: 6 }} />
    </div>
  ) : null;
}

export default IconField;