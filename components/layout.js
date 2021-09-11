import Nav from "./nav";

const navItems = (itemsInCart) => ([
  {
    link: "/books",
    text: "store",
  },
  {
    link: "",
    text: "about us",
  },
  {
    link: "/cart",
    text: `cart(${itemsInCart})`,
  },
]);

export default function Layout({ itemsInCart, children }) {
  return (
    <div className="m-4">
      <div className="flex justify-between">
        <img className="pt-4 pb-4 w-36" src="logo.jpg"></img>
        <div className="flex justify-end  items-center">
          <Nav items={navItems(itemsInCart)} uppercase={true}></Nav>
        </div>
      </div>
      {children}
    </div>
  );
}
