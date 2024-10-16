import { CiSearch } from "react-icons/ci";

const HomeSearch = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center gap-10 py-12">
      <h1 className="font-bold text-4xl"><span className="text-[#1DB2FF]">Find Your</span> <br />Home Here</h1>

      <div className="rounded-lg p-4 space-y-2 border border-black/20">
        {/* title search */}
        <div className="flex justify-between items-center gap-5">
          <div className="flex gap-2 items-center flex-1">
            <CiSearch className="text-black/60" size={28}/>
            <input
              className="p-1 outline-none border-b-[1px] border-[#1DB2FF] text-black w-full"
              type="search"
              name="search"
              id="search"
              placeholder="Search"
            />
          </div>

          <div className="h-[28px] w-[2px] bg-white/70"></div>

          <div className="">
            <button className="bg-[#1DB2FF] py-2 px-5 rounded-[40px] text-base mr-2 text-white font-semibold">
              All
            </button>
            <button className="bg-[#1DB2FF] py-2 px-5 rounded-[40px] text-base mr-2 text-white font-semibold">
              Rent
            </button>
            <button className="bg-[#1DB2FF] py-2 px-5 rounded-[40px] text-base text-white font-semibold">
              Buy
            </button>
          </div>
        </div>

        {/* search by others */}
        <div className="flex md:flex-row flex-col items-center gap-3">
          {/* location */}
          <div>
            <select className="outline-none border-o p-2 w-[240px] bg-transparent" name="location" id="location">
                <option value="all-location">All Location</option>
                <option value="Poland">Poland</option>
                <option value="New Work">New Work</option>
                <option value="Mumbai">Mumbai</option>
            </select>
          </div>
          
          <div className="h-[24px] w-[2px] bg-white/80"></div>

          {/* all types like apartment or other */}
          <div>
            <select className="outline-none border-o p-2 w-[240px] bg-transparent" name="location" id="location">
                <option value="All House">All House</option>
                <option value="Apartment">Apartment</option>
                <option value="Building">Building</option>
                <option value="Other">Other</option>
            </select>
          </div>

          <div className="h-[24px] w-[2px] bg-white/80"></div>

          {/* beds */}
          <div>
            <select className="outline-none border-o p-2 w-[240px] bg-transparent" name="location" id="location">
                <option value="All Beds">All Beds</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
          </div>
          
        </div>

        <div className="flex justify-end">
          <button
            className="text-xl px-4 py-1 bg-[#1DB2FF] rounded-[40px] text-white/95"
            type="submit"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSearch;
