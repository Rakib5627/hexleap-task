import rivercat from "../../../public/river-cat.jpg"
import lasvegas from "../../../public/las-vegas.jpg"
import newjersey from "../../../public/new-jersey.jpg"
import ad from "../../../public/ad.jpg"
import Image from "next/image";

interface SportsProps {
    isDarkMode: boolean;
}

const Sports: React.FC<SportsProps> = ({ isDarkMode }) => {
    const cardBackgroundColor = isDarkMode ? '#3B3E47' : '#FFFFFF';
    const textColor = isDarkMode ? '#FFFFFF' : '#000000';

    // sports data collection 
    const sportsData = [
        { image: rivercat, title: "Sacramento River Cats", totalEvents: 48, sport: "Baseball" },
        { image: lasvegas, title: "Las Vegas Aviators", totalEvents: 28, sport: "Baseball" },
        { image: newjersey, title: "New Jersey Devils", totalEvents: 15, sport: "Baseball" },
        { image: lasvegas, title: "Las Vegas Aviators", totalEvents: 28, sport: "Baseball" }
    ];

    const adData = {
        image: ad,
        title: "Advertisement Title",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    };


    return (
        <div>
            <div className="py-5">
                <h3 className="font-bold text-2xl">Sports</h3>
                <div className="w-20 border-2 border-[#738FFF]"></div>
            </div>


            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {sportsData.map((data, index) => (
                    <div style={{ backgroundColor: cardBackgroundColor }} className="p-3" key={index}>
                        <Image src={data.image} alt={data.title} width={218} height={385} />
                        <h5 className="my-4 font-medium text-sm">{data.title}</h5>
                        <div style={{ backgroundColor: isDarkMode ? '#292B32' : '#F7F7F8' }} className="p-3 gap-2 text-[12px] sm:text-xs flex justify-between">
                            <div className="w-1/2">
                                <p className="">Total Event</p>
                                <p className="font-medium mt-1">{data.totalEvents} Events</p>
                            </div>
                            <div className="w-1/2">
                                <p>Sport</p>
                                <p className="font-medium mt-1">{data.sport}</p>
                            </div>
                        </div>
                    </div>
                ))}

                {/* advertisement card  */}

                <div style={{ backgroundColor: cardBackgroundColor }} className="p-3 relative">
                    <div className="relative">
                        <Image src={adData.image} alt={adData.title} width={218} height={385} />
                        <div className="absolute top-0 right-0 bg-black text-white w-12 h-6 flex justify-center items-center">
                            <span className="font-bold text-sm">Ad</span>
                        </div>
                    </div>
                    <h5 className="my-4 font-medium text-sm">{adData.title}</h5>
                    <div className="" style={{ width: '218px' }}>
                        <p className=" text-[12px] sm:text-xs mr-20 sm:mr-0">{adData.content}</p>
                    </div>
                </div>

            </div>
            <div className="flex justify-center mt-6">
                <button style={{ backgroundColor: '#2C9CF0' }} className="text-white text-xs px-5 py-2 rounded" >See More</button>
            </div>
        </div >
    );
};

export default Sports;