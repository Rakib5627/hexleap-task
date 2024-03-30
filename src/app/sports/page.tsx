import rivercat from "../../../public/river-cat.jpg"
import lasvegas from "../../../public/las-vegas.jpg"
import newjersey from "../../../public/new-jersey.jpg"
import ad from "../../../public/ad.jpg"
import Image from "next/image";
const Sports = () => {
    return (
        <div>
            <h3 className="font-bold text-2xl py-5">Sports</h3>
            <div className="flex justify-center gap-3">
                <div className=" bg-white p-4">
                    <Image src={rivercat} alt="Example Image" width={218} height={385}/>
                    <h5 className="my-4 font-medium text-sm">Sacramento River Cats</h5>
                    <div style={{ backgroundColor: '#F7F7F8' }} className=" p-3 gap-2 text-xs flex justify-between">
                        <div className=" w-1/2" >
                            <p>Total Event</p>
                            <p className=" font-medium mt-1">48 Events</p>
                        </div>
                        <div className="w-1/2">
                            <p>Sport</p>
                            <p className=" font-medium mt-1">Baseball</p>
                        </div>
                    </div>
                </div>
                <div className=" bg-white p-4">
                    <Image
                        src={lasvegas}
                        alt="Example Image"
                        width={218}
                        height={385}
                    />
                    <h5 className="my-4 font-medium text-sm">Las Vegas Aviators</h5>
                    <div style={{ backgroundColor: '#F7F7F8' }} className=" p-3 gap-2 text-xs flex justify-between">
                        <div className=" w-1/2" >
                            <p>Total Event</p>
                            <p className=" font-medium mt-1">48 Events</p>
                        </div>
                        <div className="w-1/2">
                            <p>Sport</p>
                            <p className=" font-medium mt-1">Baseball</p>
                        </div>
                    </div>
                </div>
                <div className=" bg-white p-4">
                    <Image
                        src={newjersey}
                        alt="Example Image"
                        width={218}
                        height={385}
                    />
                    <h5 className="my-4 font-medium text-sm">New Jersey Devils</h5>
                    <div style={{ backgroundColor: '#F7F7F8' }} className=" p-3 gap-2 text-xs flex justify-between">
                        <div className=" w-1/2" >
                            <p>Total Event</p>
                            <p className=" font-medium mt-1">48 Events</p>
                        </div>
                        <div className="w-1/2">
                            <p>Sport</p>
                            <p className=" font-medium mt-1">Baseball</p>
                        </div>
                    </div>
                </div>
                <div className=" bg-white p-4">
                    <Image
                        src={lasvegas}
                        alt="Example Image"
                        width={218}
                        height={385}
                    />
                    <h5 className="my-4 font-medium text-sm">Las Vegas Aviators</h5>
                    <div style={{ backgroundColor: '#F7F7F8' }} className=" p-3 gap-2 text-xs flex justify-between">
                        <div className=" w-1/2" >
                            <p>Total Event</p>
                            <p className=" font-medium mt-1">48 Events</p>
                        </div>
                        <div className="w-1/2">
                            <p>Sport</p>
                            <p className=" font-medium mt-1">Baseball</p>
                        </div>
                    </div>
                </div>
                <div className=" bg-white p-4">
                    <Image
                        src={ad}
                        alt="Example Image"
                        width={218}
                        height={385}
                    />
                    <h5 className="my-4 font-medium text-sm">Advertisement Title</h5>
                    <div style={{ width: '218px' }}>
                      <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sports;