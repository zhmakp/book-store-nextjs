import Nav from "../../components/nav";
import Book from "../../components/book";

import provider from "../../data/provider";


const navItems = [
  {
    link: "",
    text: "all",
  },
  {
    link: "?type=archive",
    text: "archive sale",
  },
  {
    link: "?type=book",
    text: "books",
  },
  {
    link: "?type=preorder",
    text: "preorder",
  },
  {
    link: "?type=special",
    text: "special edition",
  },
];

export default function Home({ books }) {
  return (
    <div>
      <Nav items={navItems}></Nav>
      <div className="flex flex-wrap justify-center">
        {books.map((x) => (
          <Book {...x}></Book>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const books = provider.filterBooks(context.query.type);
  return { props: { books } };
}
