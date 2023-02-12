import Layout from "@/layouts/layout";
import { Footer } from "flowbite-react";

export default function MyFooter() {
  return (
    <div className="fixed bottom-0 left-0 w-full px-5 pb-8">
      <Footer container={true}>
        <Footer.Copyright href="#" by=" Ingelosi™" year={2023} />
        <Footer.LinkGroup className="justify-between">
          <Footer.Link href="/about">About</Footer.Link>
          <Footer.Link href="#">Privacy Policy</Footer.Link>
          <Footer.Link href="#">Licensing</Footer.Link>
          <Footer.Link href="/contact">Contact</Footer.Link>
        </Footer.LinkGroup>
      </Footer>
    </div>
  );
}
