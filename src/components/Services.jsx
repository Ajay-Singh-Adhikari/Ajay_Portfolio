import { useSelector } from "react-redux";

export default function Services() {
  const services = useSelector((state) => state.services.data);

  return (
    <section className="w-full pt-28 pb-10 px-4 text-center">
      <h2 className="text-4xl font-bold text-pink-600 mb-10 mt-2">
        My Services
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((item) => (
          <div
            key={item.id}
            className="bg-[#131313] rounded-xl p-6 w-72 hover:bg-black hover:shadow-[0_0_23px_10px_black] hover:scale-105 transition duration-300 shadow-md"
          >
            <div className="w-20 h-20 mx-auto mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-300 text-sm">{item.para}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
