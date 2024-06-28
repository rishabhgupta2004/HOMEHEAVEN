
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../Components/ListingItem';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    <div>
      {/* top */}
      <div
  className='flex flex-col items-center justify-center gap-6 py-24 px-6 lg:px-0'
  style={{
    backgroundImage: `url('https://png.pngtree.com/background/20231024/original/pngtree-contemporary-green-home-decor-featuring-plants-and-furniture-3d-render-picture-image_5701338.jpg')`,
    backgroundSize: ' 100 % 100 %',
    backgroundPosition: 'center',
    
    color: '#ffffff', 
    textAlign: 'center', 
    padding: '5rem',
    
  }}
>
  <div className='max-w-6xl mx-auto'>
    <h1 className='text-3xl lg:text-6xl font-bold'>
      Find Your  <span className='text-blue-500'>Heaven</span>
      <br />
      Discover Your Home
    </h1>
    <div className='text-lg font-semibold text-slate-200 mt-2'>
      HomeHeaven is the best place to find your heaven to discover your home.
      <br />
      We have a wide range of properties for you to choose from.
    </div>
    <Link
      to={'/search'}
      className='text-lg text-pink-500 font-bold hover:underline mt-4'
    >
      Let's get started...
    </Link>
  </div>
</div>;

      {/* swiper */}
      <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide>
              <div
    style={{
      backgroundImage: `url(${listing.imageUrls[0]})`,
      backgroundSize: '100% 100%',
      backgroundPosition: 'center',
      borderRadius: '10px', // Adds border radius
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Adds shadow
      height: '400px',
    }}
    className='h-[500px]'
  >
    {/* Overlay with details */}
    <div className='absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white'>
      <h3 className='text-xl font-bold'>{listing.title}</h3>
      <p className='text-sm'>{listing.description}</p>
      <Link
        to={`/listing/${listing._id}`}
        className='text-blue-500 font-semibold hover:underline mt-2 inline-block'
      >
        View Details
      </Link>
    </div>
  </div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* listing results for offer, sale and rent */}

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {offerListings && offerListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent offers</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for rent</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for sale</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>Show more places for sale</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
