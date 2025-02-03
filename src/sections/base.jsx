const SectionBase = (props) => {
  return (
    <section className={`flex px-48 py-16 flex-col`}>
      {!props.title ? null : (
        <h4 className="section-title poppins-semibold text-theme text-4xl text-center">
          {props.title}
        </h4>
      )}
      {props.children}
    </section>
  );
};

export default SectionBase;
