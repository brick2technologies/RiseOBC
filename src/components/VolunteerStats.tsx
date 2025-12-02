import { Users } from "lucide-react";

const VolunteerTable = () => {
  const data = [
    { label: "Volunteers", count: "100,000", enroll: "0", reached: "0", balance: "100,000" },
    { label: "Service Artists singers", count: "10,000", enroll: "0", reached: "0", balance: "10,000" },
    { label: "Fund Raisers India/Abroad", count: "10,000", enroll: "0", reached: "0", balance: "10,000" },
    { label: "Service Legal Experts", count: "6,000", enroll: "0", reached: "0", balance: "6,000" },
    { label: "Service doctors", count: "3,000", enroll: "0", reached: "0", balance: "3,000" },
    { label: "Rise Media Promoters", count: "6,000", enroll: "0", reached: "0", balance: "6,000" },
  ];

  return (
    <section className="w-full py-16 bg-gradient-to-b from-green-50 to-gray-50">
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADLINE */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-green-700">
          Rise OBC Needs
        </h2>

        {/* QUOTE */}
        <p className="text-center text-lg md:text-xl text-gray-700 mb-10 italic">
          “Empowering every individual, strengthening every community.”
        </p>

        {/* TABLE */}
        <div className="overflow-x-auto rounded-xl border shadow-lg bg-white">
          <table className="w-full border-collapse">
            
            {/* HEADER */}
            <thead className="bg-green-100">
              <tr className="text-left text-green-900 font-semibold">
                <th className="py-3 px-4 border">Category</th>
                <th className="py-3 px-4 border">Count</th>
                <th className="py-3 px-4 border">Enroll</th>
                <th className="py-3 px-4 border">Reached</th>
                <th className="py-3 px-4 border">Balance</th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className={`text-gray-800 transition-all ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-green-50`}
                >
                  <td className="py-3 px-4 flex items-center gap-2 border font-medium">
                    <Users className="w-5 h-5 text-green-600" />
                    {item.label}
                  </td>
                  <td className="py-3 px-4 border">{item.count}</td>
                  <td className="py-3 px-4 border">{item.enroll}</td>
                  <td className="py-3 px-4 border">{item.reached}</td>
                  <td className="py-3 px-4 border">{item.balance}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* DESCRIPTION BELOW */}
        <div className="mt-10 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-green-800 mb-3">
            Why This Data Matters
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Rise OBC is committed to building a strong foundation for social, educational, 
            and economic upliftment. These numbers reflect our reach, our growth, and the 
            incredible potential of our community. Every volunteer, every village, and every 
            member contributes to a larger movement dedicated to equality, justice, and 
            empowerment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VolunteerTable;
