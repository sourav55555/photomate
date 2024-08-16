
import { IoMdStar } from 'react-icons/io';

const trendingData = [
    {
        name: "John Jacobs",
        experience: "10 years experience",
        clients: "2k+ Clients",
        rating: "4.8 | 780",
        image: "/public/images/trending/trend1.jpeg"
    },
    {
        name: "Raila Dsouza",
        experience: "7 years experience",
        clients: "1k+ Clients",
        rating: "4.5 | 390",
        image: "/public/images/trending/trend2.jpeg"
    },
    {
        name: "Sam Clark",
        experience: "7 years experience",
        clients: "1k+ Clients",
        rating: "4.4 | 480",
        image: "/public/images/trending/trend3.jpeg"
    }
]

const Trending = () => {
    return (
        <div className='px-20 mt-32'>
            <h3 className='text-4xl font-semibold mb-12'>
                Trending Photographers
            </h3>

            <div className='flex items-center justify-center gap-8 '>
                {
                    trendingData.map((data, index) =>
                        <div key={index} className='p-5 rounded-[50px] bg-white text-black group'>
                            <div className='w-full overflow-hidden rounded-[35px]'>
                                <img src={data.image} className='h-[25rem] w-[25rem] object-cover object-center rounded-[35px] group-hover:scale-110 transition-all ease-out duration-500 ' alt={data.name} />
                            </div>

                            <div className='w-fit ms-auto me-5 -mt-6 relative z-10'>
                                <button className='ms-auto py-2 px-4 rounded-2xl font-[500] bg-black text-white'>View Profile</button>
                            </div>
                            <p className='font-bold text-xl mt-2'>{data.name}</p>
                            <div className='flex items-center justify-between'>
                                <p className='font-[500] text-lg'>{data.experience}</p>
                                <p className='font-semibold text-lg flex items-center'>
                                    <IoMdStar className='text-[#FF0000]' />
                                    {data.rating}
                                </p>
                            </div>
                            <p className='font-[500] text-lg mb-2'>{data.clients}</p>
                        </div>)
                }
            </div>

        </div>
    );
};

export default Trending;