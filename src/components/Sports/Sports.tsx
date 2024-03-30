import rivercat from "../../../public/river-cat.jpg"
import lasvegas from "../../../public/las-vegas.jpg"
import newjersey from "../../../public/new-jersey.jpg"
import ad from "../../../public/ad.jpg"
import Image from "next/image";
const Sports = () => {

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
            <h3 className="font-bold text-2xl py-5">Sports</h3>
            <div className="flex justify-center gap-3">
                {sportsData.map((data, index) => (
                    <div className="bg-white p-3" key={index}>
                        <Image src={data.image} alt={data.title} width={218} height={385} />
                        <h5 className="my-4 font-medium text-sm">{data.title}</h5>
                        <div style={{ backgroundColor: '#F7F7F8' }} className="p-3 gap-2 text-xs flex justify-between">
                            <div className="w-1/2">
                                <p>Total Event</p>
                                <p className="font-medium mt-1">{data.totalEvents} Events</p>
                            </div>
                            <div className="w-1/2">
                                <p>Sport</p>
                                <p className="font-medium mt-1">{data.sport}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="bg-white p-4">
                    <Image src={adData.image} alt={adData.title} width={218} height={385} />
                    <h5 className="my-4 font-medium text-sm">{adData.title}</h5>
                    <div style={{ width: '218px' }}>
                        <p className="text-xs">{adData.content}</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-6">
                <button style={{ backgroundColor: '#2C9CF0' }} className="text-white text-xs px-5 py-2 rounded" >See More</button>
            </div>
        </div>
    );
};

export default Sports;