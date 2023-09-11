import React from "react";

function ShoeCard({ imgUrl, changeBigShoeImage, bigShoeImage }) {
  const handleShoeClick = () => {
    if (bigShoeImage !== imgUrl.bigShoe) {
      changeBigShoeImage(imgUrl.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImage === imgUrl.bigShoe ? "border-coral-red" : "border-none "
      }  cursor-pointer max-xl:flex-1`}
      onClick={handleShoeClick}
    >
      <div className="flex justify-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4 items-center bg-card bg-center bg-cover">
        <img src={imgUrl.thumbnail} alt="" width={125} height={105} />
      </div>
    </div>
  );
}

export default ShoeCard;
