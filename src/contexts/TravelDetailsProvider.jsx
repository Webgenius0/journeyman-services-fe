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

  // console.log(selectedCurrency);
  

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
      }}
    >
      {children}
    </TravelDetailsContext.Provider>
  );
};
