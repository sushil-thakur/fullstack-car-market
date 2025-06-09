import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { db } from '../../../configs'
import { CarImages, CarListing } from '../.././../configs/schema'
import { desc, eq } from 'drizzle-orm'
import { useUser } from '@clerk/clerk-react'
import Service from '@/Shared/Service'

function MyListing() {
  const { user } = useUser();
  const [listings, setListings] = useState([]);
const GetUserCarListing = async () => {
  if (!user) return;
  try {
    const result = await db.select().from(CarListing)
      .leftJoin(CarImages, eq(CarListing.id, CarImages.CarListingId))
      .where(eq(CarListing.CreatedBy, user.id))
      .orderBy(desc(CarListing.id));

    const resp = Service.FormatResult(result);
    setListings(resp);
    console.log(resp);
  } catch (error) {
    console.error("Error fetching listings:", error);
  }
};

  useEffect(() => {
    if (user) GetUserCarListing();
  }, [user]);

  return (
    <div className='mt-6'>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-4xl'>My Listing</h2>
        <Link to={'/add-listing'}>
          <Button>+ Add new Listing</Button>
        </Link>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.length === 0 && (
          <div className="col-span-full text-center text-gray-500">No listings found.</div>
        )}
        {listings.map(listing => (
          <div key={listing.id} className="border rounded-lg p-4">
            <h3 className="font-bold text-xl mb-2">{listing.listingTitle}</h3>
            {listing.images && listing.images.length > 0 && (
              <img
                src={listing.images[0].imageUrl}
                alt="Car"
                className="w-full h-40 object-cover rounded mb-2"
              />
            )}
            <p>{listing.tagline}</p>
            {/* Add more fields as needed */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyListing