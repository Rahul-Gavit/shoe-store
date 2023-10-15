import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className=" flex justify-wrap items-center gap-10 max-container max-xl:flex-col-reverse">
      <div className="flex-1 ">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full "
        />
      </div>
      <div className=" flex flex-1 flex-col  ">
        <h2 className=" font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          <br />
          <span className="text-coral-red">Special</span> offer
        </h2>
        <p className=" mt-4 lg:max-w-lg info-text ">
          Embarking on a shopping journey that redefines your experience with
          unbeatables deals. From premier selection to incredible savings. We
          offer unparreled values that sets us apart.
        </p>
        <p className="mt-5 lg:max-w-lg info-text">
          Navigate a realm of possiblities designed to fulfill your unique
          desires, surpassing the loftiest expectations. your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4 ">
          <Button label="Show Now" iconURL={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
