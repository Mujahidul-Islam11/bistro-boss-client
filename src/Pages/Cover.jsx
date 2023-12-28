/* eslint-disable react/prop-types */
const Cover = ({ img,title, desc }) => {
  return (
    <div
      className="hero min-h-screen "
      style={{
        backgroundImage:
          `url(${img})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content bg-black bg-opacity-40 px-80 py-24 text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
          <p className="mb-5 text-2xl uppercase">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
