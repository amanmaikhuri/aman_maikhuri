const BlogCards = ({ img, alt, title, excerpt, link, featured }) => (
  <div
    className={`${
      featured
        ? "h-full w-[90%] md:w-[95%] lg:w-full"
        : "h-full w-[90%]  md:w-[95%] lg:w-full"
    } w-[95%] md:w-[90%] lg:w-full mx-4 my-2 px-4 py-4 border rounded-lg 
    text-white relative flex flex-col md:flex-row lg:flex-col gap-3 
    hover:shadow-lg hover:scale-[1.02] transition duration-300 bg-black/20`}
  >
    {/* Image */}
    <img
      src={img}
      alt={alt}
      loading="lazy"
      className={`rounded-lg object-cover ${
        featured ? "h-[250px] w-full md:h-[300px]" : "h-[200px] w-full md:h-[300px]"
      }`}
    />

    {/* Content */}
    <div className="flex flex-col gap-2 justify-center px-2 md:px-4">
      <h3 className="font-bold text-lg hover:text-yellow-300 transition">
        {title}
      </h3>
      <p className="text-sm line-clamp-3">{excerpt}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-blue-500 to-green-500 text-white 
        w-fit px-5 py-1 rounded-md text-center font-semibold text-sm hover:opacity-90"
      >
        Read more →
      </a>
    </div>
  </div>
);

export default BlogCards;
