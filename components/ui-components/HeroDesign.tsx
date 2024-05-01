import Button from "../ui-components/Button";
const Hero = () => {
  return (
    <section className="mt-2 md:mt-12">
      <h1 className=" text-3xl md:text-6xl font-semibold tracking-tight">
        Hello I am Aby
        <br />I am an{" "}
        <span className="bg-clip-text light:text-black dark:text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          end-to-end
        </span>
        {/* <span> </span> */}
        <br />
        <span className="bg-clip-text light:text-black dark:text-transparent bg-gradient-to-r from-green-500 to-lime-500">
          Design Engineer
        </span>
        .
        <br />I code, design, research, plan,
        <br /> model, test, &amp; connect the dots.
      </h1>
      <h2 className="text-md md:text-2xl mt-4">
        {/* <span>
          {" "}
          I am a CS graduate student with a background in UX/UI design
        </span>
        <br /> */}
        <span className="bg-clip-text light: text-red-500 dark:text-transparent bg-gradient-to-r from-yellow-500 to-orange-500 font-[50px]">
          CS graduate student with a background in UX/UI design looking for
          internships starting spring 2024
        </span>
      </h2>
      {/* <Button className="bg-purple-600 text-white px-6">Hire Me!</Button> */}
    </section>
  );
};

export default Hero;
