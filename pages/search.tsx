import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useRouter } from 'next/router';
import { FC } from 'react'
import { format } from 'date-fns';
import { GetServerSideProps } from 'next';
import InfoCard from '@/components/InfoCard';

interface searchProps {
    searchResults: {
        img: string;
        location: string;
        title: string;
        description: string;
        star: number;
        price: string;
        total: string;
        long: number;
        lat: number;
    }[];
}

const Search: FC<searchProps> = ({ searchResults }) => {
    const router = useRouter();

    const { location, startDate, endDate, noOfGuests } = router.query;

    const formattedStartDate = (startDate ? format(new Date(startDate as string), 'dd MMMM yy') : "");
    const formattedEndDate = (endDate ? format(new Date(endDate as string), 'dd MMMM yy') : "");
    const range = `${formattedStartDate} - ${formattedEndDate}`

    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

            <main className='flex'>
                <section className='flex-grow pt-14 px-6'>
                    <p className='text-xs'>300+ Stays - {range} - for {noOfGuests} guests.</p>

                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>

                    <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                        <p className='button'>Cancellation Flexibility</p>
                        <p className='button'>Type of Place</p>
                        <p className='button'>Price</p>
                        <p className='button'>Rooms and Beds</p>
                        <p className='button'>More Filters</p>
                    </div>

                    <div className='flex flex-col'>
                        {searchResults.map((item, index) => (
                            <InfoCard
                                key={index}
                                img={item.img}
                                location={item.location}
                                title={item.title}
                                description={item.description}
                                star={item.star}
                                price={item.price}
                                total={item.total}
                            />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Search

export const getServerSideProps: GetServerSideProps = async (context) => {
    const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(res => res.json())

    return {
        props: {
            searchResults
        }
    }
}