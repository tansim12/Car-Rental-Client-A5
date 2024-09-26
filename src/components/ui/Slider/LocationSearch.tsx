import  { useEffect, useState } from "react";
import { useGeolocated } from "react-geolocated";
import axios from "axios";
import CustomButton from "../Button/CustomButton";
import { BiCurrentLocation } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { currentLocation } from "../../../Redux/Feature/Normal/availableAreaSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const LocationSearch = () => {
  const [districtName, setDistrictName] = useState<string | null>(null);
  const navigate = useNavigate();
  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
  });

  useEffect(() => {
    const fetchDistrictName = async () => {
      if (coords) {
        const latitude = coords.latitude;
        const longitude = coords.longitude;

        try {
          const response = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1`
          );
          const address = response.data.address;
          // Extract the district name from the address
          const district = address?.state_district.split(" ")?.[0]        
          setDistrictName(district);
        } catch (error) {
          console.error("Error fetching location data:", error);
        }
      }
    };

    fetchDistrictName();
  }, [coords]);
  const setLocation = useDispatch();
  const handleSetLocation = () => {
    if (districtName) {
      setLocation(currentLocation(districtName || "Dhaka"));
      navigate("/listing");
    } else {
      toast.error("Location Something Wrong");
    }
  };

  return (
    <div onClick={handleSetLocation}>
      <CustomButton
        name="Location"
        isTransParent={true}
        icon={BiCurrentLocation}
        size={20}
      />
    </div>
  );
};

export default LocationSearch;
