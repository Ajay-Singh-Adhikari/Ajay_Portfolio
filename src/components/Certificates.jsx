import { useSelector } from "react-redux";

export default function Certificates() {
  const certificates = useSelector((state) => state.certificates.data);

  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-pink-600 mt-4 mb-8 text-center">
          My Certificates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certificates.map((img, index) => (
            <div
              key={index}
              className="rounded overflow-hidden shadow hover:scale-105 hover:shadow-[0_0_10px_6px_black] transition-transform aspect-[4/3] bg-white"
            >
              <img
                src={`/certificate/${img}`}
                alt={`Certificate ${index + 1}`}
                className="w-full h-full object-contain p-2"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
