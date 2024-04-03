import React from "react";

export default function About() {
  return (
    <>
      <section
        id="about"
        className='min-h-screen bg-no-repeat  bg-center bg-cover bg-fixed  bg-[url("/bg1.png")]'
      >
        <div className="w-full min-h-screen  flex items-center py-5 lg:py-10   px-5 md:px-10 lg:px-20">
          <div className="  p-5 lg:p-10 rounded-lg flex flex-col items-center gap-4 backdrop-blur-lg">
            <p className="text-white lg:text-[60px] md:text-4xl text-3xl font-bold font-legion">
              Cats Universe
            </p>
            <p className=" text-white lg:text-4xl md:text-3xl text-2xl mt-6 lg:mt-10">
              In a hidden corner of the universe lies the Cathole, where cats
              from across galaxies gather under moonlit skies. Here, tales of
              cosmic adventures are shared, and friendships are forged. One day,
              inspired by a story, a group of brave cats embarks on a quest to
              find a lost artifact rumored to unite felinekind. Through
              challenges and triumphs, they succeed, bringing harmony to their
              community. From then on, the cats of the Cathole live united,
              bound by their shared dreams and the magic of their
              secret sanctuary.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
