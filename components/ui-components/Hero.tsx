import Button from "../ui-components/Button";
const Hero = () => {
  return (
    <section className="mt-12">
      <h1 className="text-6xl font-medium my-3">
        Hello I am Aby
        <br />I am an{" "}
        <span className="bg-clip-text light:text-black dark:text-transparent bg-gradient-to-r from-pink-500 to-violet-500   mb-8 ">
          end-to-end <br />
        </span>
        <span className="bg-clip-text light:text-black dark:text-transparent bg-gradient-to-r from-green-500 to-lime-500  mb-8 ">
          software developer
        </span>
        .
        <br />I code, design, research, plan,
        <br /> model, test, &amp; connect the dots.
      </h1>
      <h2 className="text-2xl">
        I am a graduate student at Brandeis University pursuing a MS in Computer
        Science.
        <br />
        <span className="bg-clip-text light: text-red-500 dark:text-transparent bg-gradient-to-r from-yellow-500 to-orange-500 font-[100px]">
          Currently looking for internship opportunities starting Summer of 2023
          onward.
        </span>
      </h2>
      {/* <Button className="bg-purple-600 text-white px-6">Hire Me!</Button> */}
    </section>
  );
};

export default Hero;
