import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MenuButton = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
  padding: 10px;
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const MenuIcon = styled.div`
  width: 20px;
  height: 3px;
  background-color: gray;
  margin: 3px 0;
  transition: transform 0.3s ease;

  &.open:first-child {
    transform: rotate(45deg) translateY(9px);
  }

  &.open:last-child {
    transform: rotate(-45deg) translateY(-9px);
  }

  &.open:nth-child(2) {
    display: none;
  }
`;

interface MenuItemsProps {
  open: boolean;
}

const MenuItems = styled.div<MenuItemsProps>`
  position: absolute;
  top: 50px;
  right: 0;
  background-color: black;
  width: 200px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 10px;
  transition: transform 0.3s ease;
  transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(100%)')};

  @media only screen and (min-width: 768px) {
    position: relative;
    top: auto;
    right: auto;
    transform: none;
    width: auto;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const MenuItem = styled(Link)`
  display: flex;
  color: #ffff;
  text-decoration: none;
  padding: 10px 15px;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  text-align: center;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    padding: 10px 20px;
  }
`;

const Menu: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleItemClick = () => {
    setOpen(false); // Cierra el menú después de hacer clic en un ítem
  };

  return (
    <MenuWrapper>
      <Link to="/"><img src="./img/ms.jpg" height={60} alt="Logo" /></Link>
      <MenuButton onClick={toggleMenu}>
        <MenuIcon className={open ? 'open' : ''}></MenuIcon>
        <MenuIcon className={open ? 'open' : ''}></MenuIcon>
        <MenuIcon className={open ? 'open' : ''}></MenuIcon>
      </MenuButton>
      <MenuItems open={open}>
        <MenuItem to="/Nosotros" onClick={handleItemClick}>Taller Mecanico Integral</MenuItem>
        <MenuItem to="/Trabajos" onClick={handleItemClick}>Servicios</MenuItem>
        <MenuItem to="/Promo" onClick={handleItemClick}>Descuentos Especiales</MenuItem>
        <MenuItem to="/ontacto" onClick={handleItemClick}>Contacto</MenuItem>
        <MenuItem to="/Redes" onClick={handleItemClick}>Redes sociales</MenuItem>
      </MenuItems>
    </MenuWrapper>
  );
};

export default Menu;
