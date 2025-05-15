export const Welcome = () => {
  return (
    <article className="relative min-h-screen flex items-center justify-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/img/WinRateLogo.jpg)", // Replace with your image path
        }}
      >
        {/* Tint overlay */}
        <div className="absolute inset-0 bg-gray-800 opacity-40"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 text-white text-center">
        <h1>
          <span>WINRATE!</span>
          <section>Share - Track - Succeed</section>
        </h1>
      </div>
    </article>
  );
};
