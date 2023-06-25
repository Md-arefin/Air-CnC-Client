import React, { useContext, useState } from 'react';
import { dates } from 'react-date-range'
import { imageUpload } from '../../components/api/utils';
import AddRoomForm from '../../components/Form/AddRoomForm';
import { AuthContext } from '../../providers/AuthProvider';

const AddRoom = () => {
    
    const {user } = useContext(AuthContext);
    const [loading, setLoading ] = useState(false);
    const [uploadButtonText, setUploadButtonText] = useState('Upload Image');
    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    })

    // handle form submit :
    const handleSubmit = event =>{

        event.preventDefault();

        setLoading(true)

        const form = event.target;
        const location = form.location.value;
        const title = form.title.value;
        const from = dates.startDate;
        const to = dates.endDate;
        const price = form.price.value;
        const total_guest = form.total_guest.value;
        const bedrooms = form.bedrooms.value;
        const bathrooms = form.bathrooms.value;
        const description = form.description.value;
        const category = form.category.value;

        const image = form.image.files[0]
        // upload image
        imageUpload(image)
        .then(data =>{

           const roomData = {
            image: data.data.display_url,
            location,
            title,
            from,
            to,
            price: parseFloat(price),
            total_guest,
            bedrooms,
            bathrooms,
            description,
            category,
            host: {
                name : user?.displayName,
                image: user?.photoURL,
                email: user?.email
            },
           }
           console.log(roomData)

            setLoading(false)
        })
        .catch(err =>{
            console.log(err.message)
            setLoading(false)
        })
    }
    
    const handleImageChange = image =>{
        setUploadButtonText(image.name)
    }

    const handleDates = ranges =>{
        setDates(ranges.selection)
    }

    return (
       <AddRoomForm
        handleSubmit={handleSubmit}
        loading={loading}
        handleImageChange={handleImageChange}
        setUploadButtonText={setUploadButtonText}
        uploadButtonText={uploadButtonText}
        dates={dates}
        handleDates={handleDates}
        ></AddRoomForm>
    );
};

export default AddRoom;