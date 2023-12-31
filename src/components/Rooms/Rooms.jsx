import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Card from '../Card/Card';
import Heading from '../Heading/Heading';
import Loader from '../Loader/Loader';
import Container from '../Shared/Container/Container';

const Rooms = () => {

    const [params, setParams] = useSearchParams();
    const category = params.get('category');
    console.log(category)
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        fetch('/rooms.json')
            .then(res => res.json())
            .then(data => {
                if (category) {
                    const filtered = data.filter(room => room.category === category)
                    setRooms(filtered)
                }
                else {
                    setRooms(data)
                }
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [category])

    if (loading) {
        return <Loader></Loader>
    }

    return (
        <Container>
            {
                rooms && rooms.length > 0 ? (
                    <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
                        {
                            rooms.map((room, i) => <Card key={i} room={room}>
                            </Card>)
                        }
                    </div>
                ) :
                    (<div className=' pt-12'>
                        <Heading
                            title='No Rooms Available In This Category!'
                            subtitle='Please Select Other Categories'
                            center = {true}
                        ></Heading>
                    </div>)
            }
        </Container>
    );
};

export default Rooms;