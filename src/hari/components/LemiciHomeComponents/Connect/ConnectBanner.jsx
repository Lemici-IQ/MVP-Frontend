const ConnectBanner = () => {
  return (
    <section className="w-full px-4 lg:px-10 py-10">
      <div
        className="rounded-2xl bg-cover bg-center bg-no-repeat w-full min-h-[400px] flex flex-col items-center justify-center text-center px-4"
        style={{
          backgroundImage: `url('/hari/LemiciHomeImages/connectBanner.jpg')`,
        }}
      >
        <h2 className="text-white text-3xl md:text-4xl font-bold drop-shadow">
          Connect With US
        </h2>

        <p className="text-white text-sm md:text-base mt-3 max-w-xl drop-shadow">
          Learn more about our company, explore career opportunities, and get in touch with us
        </p>
      </div>
    </section>
  );
};

export default ConnectBanner;
