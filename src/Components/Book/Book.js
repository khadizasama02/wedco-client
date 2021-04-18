import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import BookingList from '../BoookingList/BookingList';

const Book = () => {
    const {_id} = useParams();
    const [service,,,]= useContext(UserContext);
    const bookingList = service.find(service=>service._id === _id);
    // console.log(bookingList);
   
  
    return (
       

        <div>
        <h1>this is booking</h1> 
        <BookingList bookingList={bookingList}></BookingList>           
        </div>
    );
};

export default Book;