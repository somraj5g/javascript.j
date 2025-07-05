import React, { useState } from 'react'; 
import SearchForm from ('./components/SearchForm'); 
import RoomCard from ('./components/RoomCard'); 
import BookingSummary from ('./components/BookingSummary'); 
const sampleRooms = [ 
{ id: 1, name: 'Deluxe Room', description: 'King bed, Wi-Fi, AC', price: 
3500, image: 'https://via.placeholder.com/150' }, 
{ id: 2, name: 'Suite', description: '2 rooms, luxury bed, balcony', price: 
5500, image: 'https://via.placeholder.com/150' } 
]; 
export default function App() { 
const [rooms] = useState(sampleRooms); 
const [selectedRoom, setSelectedRoom] = useState(null); 
const handleSearch = () => { 
console.log('Search clicked'); 
}; 
const handleBook = (room) => { 
setSelectedRoom(room); 
}; 
return ( 
<div className="p-6 bg-gray-100 min-h-screen"> 
<SearchForm onSearch={handleSearch} /> 
<div className="flex flex-wrap justify-start mt-6"> 
{rooms.map(room => ( 
<RoomCard key={room.id} room={room} onBook={handleBook} /> 
))} 
</div> 
<BookingSummary selectedRoom={selectedRoom} /> 
</div> 
); 
}