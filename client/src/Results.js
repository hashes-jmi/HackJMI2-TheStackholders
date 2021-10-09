import Pet from "./Pet";

export default function Results({ pets }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12">
      <article>
        <h2 className="text-5xl text-center font-extrabold text-gray-900">
          Results
        </h2>
        <section className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
          {!pets.length ? (
            <h2>no pets found</h2>
          ) : (
            pets.map((pet) => {
              return (
                <Pet
                  name={pet.name}
                  animal={pet.type}
                  breed={pet.breeds}
                  key={pet.id}
                  id={pet.id}
                  description={pet.description}
                  location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
                  images={pet.photos}
                />
              );
            })
          )}
        </section>
      </article>
    </section>
  );
}
