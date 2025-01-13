const PartyDetails = () => {
  const partyData = [
    {
      title: "Mr.",
      name: "John Doe",
      nationality: "American",
      dob: "01/01/1990",
    },
  ];

  return (
    <div className="border border-[#B8B6B5] rounded-md pt-6 pb-9 px-9 mt-6">
      <h3 className="text-lg font-bold text-textBlack2 leading-[30px]">
        Party Details
      </h3>

      <table className="mt-6 w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="text-center font-semibold text-textBlack2 py-[10px] px-6 border border-[#B8B6B5]">
              Title
            </th>
            <th className="text-center font-semibold text-textBlack2 py-[10px] px-6 border border-[#B8B6B5]">
              Name
            </th>
            <th className="text-center font-semibold text-textBlack2 py-[10px] px-6 border border-[#B8B6B5]">
              Nationality
            </th>
            <th className="text-center font-semibold text-textBlack2 py-[10px] px-6 border border-[#B8B6B5]">
              Date of Birth
            </th>
          </tr>
        </thead>
        <tbody>
          {partyData.map((party, index) => (
            <tr key={index} className="bg-white hover:bg-gray-50">
              <td className="py-[10px] text-center px-6 border border-[#B8B6B5] text-textGray">
                {party.title}
              </td>
              <td className="py-[10px] text-center px-6 border border-[#B8B6B5] text-textGray">
                {party.name}
              </td>
              <td className="py-[10px] text-center px-6 border border-[#B8B6B5] text-textGray">
                {party.nationality}
              </td>
              <td className="py-[10px] text-center px-6 border border-[#B8B6B5] text-textGray">
                {party.dob}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PartyDetails;
