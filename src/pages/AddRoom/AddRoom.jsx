import React, { useState } from 'react';
import { dates } from 'react-date-range'
import AddRoomForm from '../../components/Form/AddRoomForm';

const AddRoom = () => {

    const [loading, setLoading ] = useState(false);

    // handle form submit :
    const handleSubmit = event =>{
        event.preventDefault();

        setLoading(true)

        const form = event.target;
        const location = form.location.value;
        const title = form.title.value;
        const from = dates.startDate;
        const to = dates.ensDate;
        const price = form.price.value;
        const total_guest = form.total_guest.value;
        const bedrooms = form.bedrooms.value;
        const bathrooms = form.bathrooms.value;
        const description = form.description.value;
        const category = form.category.value;

        const image = form.files[0]
        console.log(location)
    }

    return (
       <AddRoomForm
        handleSubmit={handleSubmit}
        loading={loading}
        ></AddRoomForm>
    );
};

export default AddRoom;