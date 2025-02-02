const HeroSection = () => {
  return (
    <section className="flex px-48 py-16">
      <div className="flex-1 gap-5 flex flex-col px-14">
        <h2 className="text-4xl poppins-medium text-theme">
          Hi i'm Gilberto Leandro
        </h2>
        <h3 className="text-lg poppins-semibold text-secondary">
          Fullstack Developer
        </h3>
        <h4 className="text-sm poppins-light text-secondary">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h4>
        <a
          href="#contact"
          className="btn-primary w-40 py-4 poppins-light text-center"
        >
          Contact me
        </a>
      </div>
      <div className="flex-1">2</div>
    </section>
  );
};

export default HeroSection;
