const SectionBase = ({ title, children, id, className = "", ...rest }) => {
  return (
    <section
      id={id}
      className={`flex px-48 py-16 flex-col ${className}`.trim()}
      {...rest}
    >
      {!title ? null : (
        <h4 className="section-title poppins-semibold text-theme text-4xl text-center">
          {title}
        </h4>
      )}
      {children}
    </section>
  );
};

export default SectionBase;
