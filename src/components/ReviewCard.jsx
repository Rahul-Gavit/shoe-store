import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className=" flex justify-center items-center flex-col ">
      <img
        src={imgURL}
        alt={customerName}
        className="rounded-full object-contain w-[120px] h-[120px]"
      />
      <p className="max-w-sm mt-6 mb-3 info-text text-center ">{feedback}</p>
      <div className="flex justify-center items-center gap-2.5">
        <img
          src={star}
          alt="star"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className=" mt-5 text-3xl font-bold font-monsterrat">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
