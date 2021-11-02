interface IMenu {
  isMenuOpen: boolean;
}

const Menu = ({ isMenuOpen }: IMenu) => {
  return (
    <div className={isMenuOpen ? "Menu active" : "Menu"}>
      Menu
    </div>
  );
};

export default Menu;