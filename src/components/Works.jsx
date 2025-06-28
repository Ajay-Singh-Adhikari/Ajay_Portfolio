import { useSelector } from "react-redux";

export default function Works() {
  const works = useSelector((state) => state.works.data);

  return (
    <section className="w-full pt-16 pb-10 px-4 text-center">
      <h2 className="text-4xl font-bold text-pink-600 mb-8 mt-8">My Works</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {works.map((item) => (
          <div
            key={item.id}
            className="bg-[#131313] rounded-xl shadow-md p-4 w-80 hover:scale-105 transition duration-300"
          >
            <video
              src={item.video}
              controls
              loop
              className="rounded mb-4"
            ></video>
            <h3 className="text-xl font-semibold">{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
