import { createContext, useState, useContext } from "react";

const TravelDetailsContext = createContext();

export const useTravelDetails = () => useContext(TravelDetailsContext);

export const TravelDetailsProvider = ({ children }) => {
  const [selectedAdults, setSelectedAdults] = useState("1");
  const [selectedChildren, setSelectedChildren] = useState("0");
  const [selectedInsuranceType, setSelectedInsuranceType] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState("British Pounds");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [hear, setHear] = useState("");
  const [title, setTitle] = useState("");
  const [forename, setForename] = useState("");
  const [surname, setSurname] = useState("");
  const [dob, setDob] = useState("");
  const [priceData, setPriceData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [age, setAge] = useState("49");

  const [totalPrice, setTotalPrice] = useState(null);
  const [basicPremium, setBasicPremium] = useState(null);
  const [administrationCharge, setAdministrationCharge] = useState(null);

  // submitting the form
  const [submitForm, setSubmitForm] = useState(false);

  // adults and childrens array
  const [adultArray, setAdultArray] = useState([]);
  const [childrenArray, setChildrenArray] = useState([]);

  const [selectedTravelTypes, setSelectedTravelTypes] = useState([]);

  const [tripLength, setTripLength] = useState('Standard'); // Default to Standard
  const [cancellationCover, setCancellationCover] = useState(6500); // Default to £6,500

  // Function to update the trip length
  const handleTripLengthChange = (length) => {
    setTripLength(length);
  };

  // Function to update cancellation cover (can be any amount)
  const handleCancellationCoverChange = (cover) => {
    setCancellationCover(cover);
  };

  

  const addTravelType = (type) => {
    setSelectedTravelTypes((prev) => [...prev, type]);
  };

  const removeTravelType = (type) => {
    setSelectedTravelTypes((prev) => prev.filter((item) => item !== type));
  };



  return (
    <TravelDetailsContext.Provider
      value={{
        selectedAdults,
        setSelectedAdults,
        selectedChildren,
        setSelectedChildren,
        selectedInsuranceType,
        setSelectedInsuranceType,
        selectedArea,
        setSelectedArea,
        selectedType,
        setSelectedType,
        selectedCountry,
        setSelectedCountry,
        date,
        setDate,
        endDate,
        setEndDate,
        selectedCurrency,
        setSelectedCurrency,
        address1,
        setAddress1,
        address2,
        setAddress2,
        zipCode,
        setZipCode,
        telephone,
        setTelephone,
        email,
        setEmail,
        city,
        setCity,
        message,
        setMessage,
        hear,
        setHear,
        title,
        setTitle,
        forename,
        setForename,
        surname,
        setSurname,
        dob,
        setDob,
        priceData,
        setPriceData,
        loading,
        setLoading,
        age,
        setAge,
        submitForm,
        setSubmitForm,
        adultArray,
        childrenArray,
        setAdultArray,
        setChildrenArray,
        setTotalPrice,
        setBasicPremium,
        setAdministrationCharge,
        totalPrice,
        basicPremium,
        administrationCharge,
        selectedTravelTypes,
        addTravelType,
        removeTravelType,
        tripLength,
        cancellationCover,
        handleTripLengthChange,
        handleCancellationCoverChange,
      }}
    >
      {children}
    </TravelDetailsContext.Provider>
  );
};
