import { useTravelDetails } from "@/contexts/TravelDetailsProvider";

const PartyDetails = () => {
  const { selectedCountry, title, forename, surname, dob } = useTravelDetails();

  // Combine forename and surname for the name
  const fullName = `${forename} ${surname}`;

  // the dynamic party data from the context
  const partyData = [
    {
      title,
      name: fullName,
      nationality: selectedCountry || "N/A",
      dob,
    },
  ];

  return (
    <div className="border border-[#B8B6B5] rounded-md pt-6 pb-9 px-6 sm:px-9 mt-6">
      <h3 className="text-lg sm:text-xl font-bold text-textBlack2 leading-[30px]">
        Party Details
      </h3>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="text-center font-semibold text-textBlack2 py-3 px-4 sm:py-[10px] sm:px-6 border border-[#B8B6B5]">
                Title
              </th>
              <th className="text-center font-semibold text-textBlack2 py-3 px-4 sm:py-[10px] sm:px-6 border border-[#B8B6B5]">
                Name
              </th>
              <th className="text-center font-semibold text-textBlack2 py-3 px-4 sm:py-[10px] sm:px-6 border border-[#B8B6B5]">
                Nationality
              </th>
              <th className="text-center font-semibold text-textBlack2 py-3 px-4 sm:py-[10px] sm:px-6 border border-[#B8B6B5]">
                Date of Birth
              </th>
            </tr>
          </thead>
          <tbody>
            {partyData.map((party, index) => (
              <tr key={index} className="bg-white hover:bg-gray-50">
                <td className="py-3 px-4 sm:py-[10px] sm:px-6 text-center border border-[#B8B6B5] text-textGray">
                  {party.title || "N/A"}
                </td>
                <td className="py-3 px-4 sm:py-[10px] sm:px-6 text-center border border-[#B8B6B5] text-textGray">
                  {party.name || "N/A"}
                </td>
                <td className="py-3 px-4 sm:py-[10px] sm:px-6 text-center border border-[#B8B6B5] text-textGray">
                  {party.nationality || "N/A"}
                </td>
                <td className="py-3 px-4 sm:py-[10px] sm:px-6 text-center border border-[#B8B6B5] text-textGray">
                  {party.dob || "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PartyDetails;
