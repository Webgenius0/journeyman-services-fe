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
  const [selectedCurrency, setSelectedCurrency] = useState("GBP");
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
      }}
    >
      {children}
    </TravelDetailsContext.Provider>
  );
};
