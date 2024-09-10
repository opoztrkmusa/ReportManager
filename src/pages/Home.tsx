import React from 'react';
import { Container, Title, Text, Button, Paper } from '@mantine/core';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <Container>
                <Paper className='p-12' shadow="md" style={{ borderRadius: '8px', maxWidth: '800px' }}>
                    <div className="text-center">
                        <Title order={1} className="mb-4 font-bold text-2xl capitalize">
                            laboratuvar raporlama uygulaması
                        </Title>
                        <Text className="mb-6 text-sm text-gray-800">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate aut, qui quas obcaecati mollitia omnis minus distinctio non. Deleniti, officiis.
                        </Text>
                        <div className="flex justify-center gap-4">
                            <Link to="/add-report">
                                <Button variant="filled" className='text-blue-100 hover:bg-blue-700 transition-all duration-300 bg-blue-500 px-5 py-2 text-sn rounded-full'>
                                    Rapor Ekle
                                </Button>
                            </Link>
                            <Link to="/reports">
                                <Button variant="filled" className='text-blue-100 hover:bg-red-700 transition-all duration-300 bg-red-500 px-5 py-2 text-sn rounded-full'>
                                    Tüm Raporlar
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Paper>
            </Container>
        </div>
    );
};

export default Home;
