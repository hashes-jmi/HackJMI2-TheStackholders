import { Link } from "react-router-dom"; //eslint-disable-line import/named, import/namespace
const Pet = ({
  name = "null",
  breed = "null",
  animal = "null",
  location = "null",
  images,
  description = "null",
  id = "null",
}) => {
  let hero;
  console.log(animal.toLowerCase());
  if (animal.toLowerCase() == "dog") {
    hero =
      "https://media.istockphoto.com/vectors/dog-logo-vector-id1153925640?k=20&m=1153925640&s=612x612&w=0&h=aFTvmLGa45YNCBkVAJ7RMNnoJZCLEVFCzzhGCBnMwNk=";
  } else if (animal.toLowerCase() == "cat") {
    hero =
      "https://cdn1.vectorstock.com/i/1000x1000/92/00/cute-cat-face-icon-cartoon-cat-vector-32259200.jpg";
  } else if (animal.toLowerCase() == "bird") {
    hero =
      "https://cdn.dribbble.com/users/1189944/screenshots/11037333/untitled-1_4x.png";
  } else if (animal.toLowerCase() == "rabbit") {
    hero =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxm5zGBdxT4OKlasryBfyLk1flG9AVK8engINXR5-HFWCtvR_YzRC1V69IfWYBLMUqxZ8&usqp=CAU";
  } else if (animal.toLowerCase() == "barnyard") {
    hero =
      "https://previews.123rf.com/images/dollygrey/dollygrey1811/dollygrey181100150/115411800-cute-pig-illustration.jpg";
  } else if (animal.toLowerCase() == "horse") {
    hero =
      "https://image.shutterstock.com/z/stock-vector-head-horse-illustration-vector-art-for-t-shirt-design-sticker-etc-1601803435.jpg";
  }

  if (images.length) {
    hero = images[0].small;
  }
  return (
    <div>
      <Link to={`/details/${id}`} className="pet">
        <article className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200 h-full">
          <div className="relative w-full h-80 md:h-64 lg:h-44">
            <img
              src={hero}
              alt={name}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="px-3 py-4">
            <h3 className="text-sm text-gray-500 pb-2">
              <button
                className="bg-indigo-600 py-1 px-2 text-white rounded-lg"
                href="#"
              >
                <span className="absolute inset-0"></span>
                {animal}
              </button>
            </h3>
            <h2>Name - {name}</h2>
            <h2>Breed- {breed.primary}</h2>
            <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
              {description}
            </p>
            <h1>{name}</h1>
            <h2>Location- {location}</h2>
          </div>
        </article>
      </Link>
    </div>
  );
};

export default Pet;
