
const HomeSearch = () => {
    return (
        <div className="flex md:flex-row flex-col gap-10">
            <h1>Find Your Home Here</h1>            

            <div className="bg-gray-400 rounded-md p-4"> 
                <div className="p-1 bg-green-950/40">
                    <div>
                        <input className="p-2" type="search" name="search" id="search" placeholder="Search"/>
                    </div>
                    {/* search by others */}
                    <div className="flex md:flex-row flex-col gap-3">
                        {/* location */}
                        <div>
                            <label htmlFor="location">Location</label>
                            <input type="search" name="locationSearch" id="locationSearch" placeholder="locationSearch" />
                        </div>
                        {/* types */}
                        <div>
                            <label htmlFor="types">Location</label>
                            <input type="search" name="types" id="types" placeholder="types" />
                        </div>
                        {/* beds */}
                        <div>
                            <label htmlFor="beds">Location</label>
                            <input type="search" name="beds" id="beds" placeholder="beds" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSearch;