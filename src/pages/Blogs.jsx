import BlogCards from "../components/BlogCards";

const Blogs = () => {
  const blogs = [
    {
      title: "The Impact of Social Media on Mental Health: Navigating the Digital Landscape",
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCL5wUt2zucqZFjkmSYuh2NAFopxyJK4W0h8J-Zs2Qgw0_FqxpvPMDqAHxVj0QmwWbZ-uPl-nWfAg589c_MgONTGWRxTXa5732MoUC-oIYxSUjCqGv68mLfcGZqK_1nvTwH_RIFj6EX5ipVesGV2pvO2o2rw0MXVTkUYpROWjxYHbnlLG3qqYAEBLCCUNA/w400-h318-rw/pexels-magnus-mueller-1398178-2818118.jpg",
      alt: "Mental Health & Social Media",
      excerpt: "Hello, digital explorers! Today, we dive into the intriguing topic of social media...",
      link: "https://amanmaikhuri.blogspot.com/2024/08/the-impact-of-social-media-on-mental.html",
      featured: true,
    },
    {
      title: "Balancing Productivity & Mindfulness in the Digital Age",
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-jVrJ1g-kX5qEU7AmROkARJF_sLmvnabFlua6pE39P0hRsE1p8IlMo8r2z7WaMUXhFgRxFgj-j78KP3vUSBns_hIW1LDqq71ooAYWRfOejvOvk5LNTpOu99lH6BHYhIf4h8vZtYCGYvvd4tyGVq9ywgcWTQyoInb9HjNE67-L2o4qf_DEhyTGzwdTCgFQ/w945-h600-p-k-no-nu/pexels-kseverin-1542252.jpg",
      alt: "Productivity & Mindfulness",
      excerpt: "We often find ourselves chasing productivity while ignoring well-being. Let’s explore balance...",
      link: "https://amanmaikhuri.blogspot.com/2024/08/the-impact-of-social-media-on-mental.html",
      featured: false,
    },
    {
      title: "Why Journaling Can Boost Your Mental Clarity",
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-jVrJ1g-kX5qEU7AmROkARJF_sLmvnabFlua6pE39P0hRsE1p8IlMo8r2z7WaMUXhFgRxFgj-j78KP3vUSBns_hIW1LDqq71ooAYWRfOejvOvk5LNTpOu99lH6BHYhIf4h8vZtYCGYvvd4tyGVq9ywgcWTQyoInb9HjNE67-L2o4qf_DEhyTGzwdTCgFQ/w945-h600-p-k-no-nu/pexels-kseverin-1542252.jpg",
      alt: "Journaling for Clarity",
      excerpt: "Journaling is more than writing—it's a tool for reflection, clarity, and growth...",
      link: "https://amanmaikhuri.blogspot.com/2024/08/the-impact-of-social-media-on-mental.html",
      featured: false,
    },
  ];

  return (
    <section className="w-full px-4 pt-4">
      <h2 className="max-w-[1200px] mx-auto font-extrabold text-3xl px-8 mb-8">
        Blogs
      </h2>

      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-6">
        {/* Left column (featured blogs) */}
        <div className="lg:w-[50%] flex flex-col gap-4">
          {blogs.filter((blog) => blog.featured).map((blog, idx) => (
            <BlogCards key={idx} {...blog} />
          ))}
        </div>

        {/* Right column (smaller blogs) */}
        <div className="lg:w-[50%] flex flex-col gap-4">
          {blogs.filter((blog) => !blog.featured).map((blog, idx) => (
            <BlogCards key={idx} {...blog} />
          ))}

          <button
            type="button"
            className="mx-6 mt-4 px-4 py-2 border rounded-md text-white 
            bg-blue-950 hover:bg-blue-800 font-semibold transition w-fit self-center"
          >
            Read more Blogs →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
