import Button from "../ui-components/Button";
const Hero = () => {
  return (
    <section className="mt-16">
      <h2 className="text-7xl font-bold">Hi I&lsquo;m Aby</h2>
      <h3 className="text-4xl my-3">
        I am a <span className="text-blue-400">Software</span>{" "}
        <span className="text-green-400">Engineer</span>
        <br />I Design, Code, Research,
        <br /> Model, and Connect the dots.
      </h3>
      <h4 className="text-red-500 mb-8 dark:text-white">
        Currently looking for internships opportunities starting Summer of 2023
        onward.
      </h4>
      <Button className="bg-purple-600 text-white px-6">Hire Me!</Button>
    </section>
  );
};

export default Hero;
