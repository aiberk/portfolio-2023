import Button from "../ui-components/Button";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="mt-16">
      <h1 className="text-7xl font-bold">Hi I'm Aby</h1>
      <h3 className="text-4xl my-3">I am a web developer</h3>
      <p className="text-gray-700 mb-8 dark:text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquid
        rerum quos animi reprehenderit perferendis repellendus quis porro eum
        saepe. Eius odio, blanditiis quo dicta exercitationem ad ipsum
        reprehenderit voluptates.
      </p>
      <Button className="bg-purple-600 text-white px-6">Hire Me!</Button>
    </section>
  );
};

export default Hero;
