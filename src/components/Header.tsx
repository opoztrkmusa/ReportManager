import React from 'react';
import { Button, Container, Paper } from '@mantine/core';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Paper className='px-6 text-white' shadow="xs" style={{ borderBottom: '1px solid #ddd' }}>
            <Container>
                <div className="flex justify-between items-center py-4">
                    {/* LOGO */}
                    <div className="text-xl font-bold">
                        LOGO
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex space-x-8">
                        <Link to="/">
                            <Button variant="outline">Anasayfa</Button>
                        </Link>
                        <Link to="/add-report">
                            <Button variant="outline">Rapor Ekle</Button>
                        </Link>
                        <Link to="/reports">
                            <Button variant="outline">Tüm Raporlar</Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </Paper>
    );
};

export default Header;
