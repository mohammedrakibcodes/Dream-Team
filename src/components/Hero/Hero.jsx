import bg from "../../assets/bg-main1.jpg";
import bannerMain from "../../assets/banner-main.png";

const Hero = () => {
  return (
    <section className="container mx-auto px-2 sm:px-4 mt-4 mb-8">
      {/* =========================
          HERO CONTAINER
          Change height here
      ========================== */}
      <div
        className="
          relative
          overflow-hidden
          rounded-3xl

          min-h-[500px]
          sm:min-h-[600px]
          md:min-h-[700px]
          lg:min-h-[800px]
          xl:min-h-[900px]
        "
      >
        {/* =========================
            BACKGROUND IMAGE
            Change position here:
            object-center
            object-top
            object-bottom
            object-left
            object-right
        ========================== */}
        <img
          src={bg}
          alt="Background"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            object-center
          "
        />

        {/* =========================
            CONTENT WRAPPER
        ========================== */}
        <div
          className="
            relative
            z-10
            flex
            flex-col
            items-center
            justify-center
            text-center
            h-full
            px-4
            py-10
          "
        >
          {/* =========================
              MAIN IMAGE
              Change image size here
          ========================== */}
          <img
            src={bannerMain}
            alt="Banner"
            className="
              h-auto
              object-contain

              w-32
              sm:w-40
              md:w-56
              lg:w-300
              xl:w-80
              2xl:w-96

              mb-4
              sm:mb-6
              md:mb-8
            "
          />

          {/* =========================
              HEADING
              Change text size here
          ========================== */}
          <h2
            className="
              max-w-5xl
              font-bold
              text-black
              leading-tight

              text-2xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              xl:text-7xl
            "
          >
            Assemble Your Ultimate Dream 11 Cricket Team
          </h2>

          {/* =========================
              SUBTITLE
              Change text size here
          ========================== */}
          <p
            className="
              mt-4
              max-w-2xl
              text-black

              text-sm
              sm:text-base
              md:text-lg
              lg:text-xl
            "
          >
            Beyond Boundaries Beyond Limits
          </p>

          {/* =========================
              BUTTON
              Change margin here
          ========================== */}
          <button
            className="
              btn
              btn-warning

              mt-6
              md:mt-8
              lg:mt-10
            "
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
