import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { RocketIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import tree from "../assets/hero image.png";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-10 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
          Revolutionize Education with {" "}
            <span className="inline bg-gradient-to-r from-[#3dcc7a]  to-[#23b060] text-transparent bg-clip-text">
              ARBOR
            </span>{" "}
          </h1>{" "}
          {/*for{" "}
           <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              React
            </span>{" "}
            developers
          </h2> */}
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        Ignite interactive learning and Streamline school management all in one unified platform.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">
          Get Started
          <RocketIcon className="ml-2 w-5 h-5" />
          </Button>

          <a
            rel="noreferrer noopener"
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Read More
          <ArrowRightIcon className="ml-2 w-5 h-5" />
            
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        {/* <HeroCards /> */}
        <img src={tree} alt="" />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
