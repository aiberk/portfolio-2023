import Button from "../ui-components/Button";
const Hero = () => {
  return (
    <section className="mt-12">
      <h1 className="text-6xl font-medium my-3">
        Hello I am Aby
        <br />I am a{" "}
        <span className=" dark:text-green-400 text-gray-700 mb-8 ">
          software engineer
        </span>
        .
        <br />I code, design, research, plan,
        <br /> model, test, &amp; connect the dots.
      </h1>
      <h2 className="text-2xl">
        I am a graduate student at Brandeis University pursuing a MS in Computer
        Science.
        <br />
        <span className="text-red-500 mb-8  font-[100px]">
          Curently looking for internship opportunities starting Summer of 2023
          onward.
        </span>
      </h2>
      {/* <Button className="bg-purple-600 text-white px-6">Hire Me!</Button> */}
    </section>
  );
};

export default Hero;
